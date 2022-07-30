import { UserInputError } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import { dateScalar } from "./types.js";

const { persona } = new PrismaClient();

const resolvers = {
  Date: dateScalar,
  Query: {
    personCount: async () => {
      const users = await persona.findMany({
        select: {
          ID: true,
        },
      });
      return users.length;
    },
    persons: async (root, args) => await persona.findMany({}),
    findPerson: async (root, args) =>
      await persona.findUnique({
        where: { ID: args.ID },
      }),
  },
  Mutation: {
    addPerson: async (root, args) => {
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
