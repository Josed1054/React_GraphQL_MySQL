export interface DATOSPERSONA {
  ID?: number;
  nombre: string;
  segundo_nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  fecha_de_nacimiento: string | number | readonly string[] | undefined;
  email: string;
  telefono: number | string;
}

export interface DATOSPERSONA_RES {
  addPersona: {
    ID: number;
    nombre: string;
    segundo_nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    fecha_de_nacimiento: string | number | readonly string[] | undefined;
    email: string;
    telefono: number | string;
  };
}
