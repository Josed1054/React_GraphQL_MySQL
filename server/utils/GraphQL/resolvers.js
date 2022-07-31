import { UserInputError } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import mySql from "mysql";
import { dateScalar } from "./types.js";

const { persona } = new PrismaClient();

const connection = mySql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

const resolvers = {
  Date: dateScalar,
  Query: {
    personaCount: async () => {
      const users = await persona.findMany({
        select: {
          ID: true,
        },
      });
      return users.length;
    },
    personas: async (root, args) => await persona.findMany({}),
    findPersona: async (root, args) =>
      await persona.findUnique({
        where: { ID: args.ID },
      }),
  },
  Mutation: {
    addPersona: async (root, args) => {
      let data = {
        nombre: args.nuevaPersona.nombre,
        segundo_nombre: args.nuevaPersona.segundo_nombre,
        apellido_paterno: args.nuevaPersona.apellido_paterno,
        apellido_materno: args.nuevaPersona.apellido_materno,
        fecha_de_nacimiento: args.nuevaPersona.fecha_de_nacimiento,
        email: args.nuevaPersona.email,
        telefono: args.nuevaPersona.telefono,
      };
      const sql = "INSERT INTO users_test_jose_luis_ariza SET?";

      function setData() {
        return new Promise(function (resolve, reject) {
          connection.query(sql, data, (error, results) => {
            if (error) reject(error);
            data = {
              ...data,
              ID: results.insertId,
            };
            resolve(data);
          });
        });
      }

      return await setData();
    },
    addPersonaPrisma: async (root, args) => {
      const personaCreada = await persona.create({
        data: {
          nombre: args.nuevaPersona.nombre,
          segundo_nombre: args.nuevaPersona.segundo_nombre,
          apellido_paterno: args.nuevaPersona.apellido_paterno,
          apellido_materno: args.nuevaPersona.apellido_materno,
          fecha_de_nacimiento: args.nuevaPersona.fecha_de_nacimiento,
          email: args.nuevaPersona.email,
          telefono: args.nuevaPersona.telefono,
        },
      });

      return await personaCreada;
    },
  },
};

export { resolvers };
