export interface Avisos {
  id:            number;
  descripcion:   string;
  inmueble:      Inmueble;
  valor:         string;
  tipoOperacion: TipoOperacion;
  fechaInicio:   string;
  fechaFin:      Date;
  estadoAviso:   EstadoAviso;
}

export interface EstadoAviso {
  id:          number;
  descripcion: string;
}

export interface TipoOperacion {
  id:          number;
  descripcion: string;
}

export interface Inmueble {
  id:                         number;
  cliente:                    Cliente;
  descripcion:                string;
  fechaExclusividad:          Date;
  tipoUnidad:                 string;
  localidad:                  Localidad;
  calle:                      string;
  numero:                     string;
  edificacion:                string;
  piso:                       string;
  departamento:               string;
  latitud:                    string;
  longitud:                   string;
  imagen:                     Imagen[];
  inmuebleTipoCaracteristica: InmuebleTipoCaracteristica[];
}

export interface Cliente {
  id:           number;
  localidad:    Localidad;
  numero:       string;
  edificacion:  string;
  piso:         string;
  departamento: string;
  latitud:      string;
  longitud:     string;
  nombre:       string;
  apellido:     string;
  email:        string;
  telefono:     string;
}

export interface Localidad {
  id:           number;
  provincia:    Provincia;
  descripcion:  string;
  codigoPostal: string;
}

export interface Provincia {
  id: number;
  descripcion: string;
}

export interface Imagen {
  id:          number;
  src:         string;
  descripcion: string;
  inmuebleId:  string;
  name:        string;
  mimetype:    string;
  bytes:       string;
}

export interface InmuebleTipoCaracteristica {
  id:                 number;
  tipoCaracteristica: TipoCaracteristica;
  cantidad:           number;
}

export interface TipoCaracteristica {
  id:          number;
  descripcion: string;
  icono:       string;
}

