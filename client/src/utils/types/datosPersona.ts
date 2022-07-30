export interface DATOSPERSONA {
  nombre: string;
  segundo_nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  fecha_de_nacimiento: string | number | readonly string[] | undefined;
  email: string;
  telefono: number | string;
}
