export interface ConsultaAviso {
  nombre:         Apellido;
  apellido:       Apellido;
  email:          Apellido;
  aviso:          Aviso;
  mensaje:        Apellido;
  estadoContacto: Aviso;
}

export interface Apellido {
  value: string;
}

export interface Aviso {
  value: Value;
}

export interface Value {
  rel:    string;
  href:   string;
  method: string;
  type:   string;
  title:  string;
}

