import { gql } from "apollo-server";
import { GraphQLScalarType, Kind } from "graphql";

export const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  serialize(value) {
    return value.getTime();
  },
  parseValue(value) {
    return new Date(value);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10));
    }
    return null;
  },
});

const typeDefs = gql`
  scalar Date

  type Persona {
    ID: Int!
    nombre: String!
    segundo_nombre: String
    apellido_paterno: String!
    apellido_materno: String
    fecha_de_nacimiento: Date!
    email: String!
    telefono: Int
  }

  input PersonaInput {
    nombre: String!
    segundo_nombre: String
    apellido_paterno: String!
    apellido_materno: String
    fecha_de_nacimiento: Date!
    email: String!
    telefono: Int
  }

  type Query {
    personCount: Int!
    persons: [Persona!]!
    findPerson(ID: Int!): Persona
  }

  type Mutation {
    addPerson(nuevaPersona: PersonaInput!): Persona
  }
`;

export { typeDefs };
