import { gql } from "@apollo/client";

export const UPLOAD_PERSONA = gql`
  mutation AddPersona($nuevaPersona: PersonaInput!) {
    addPersona(nuevaPersona: $nuevaPersona) {
      ID
    }
  }
`;
