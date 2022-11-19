export interface Avisos {
  aviso_Id:     number;
  descripcion:   string;
  inmueble:      Inmuebles;
  valor:         number;
  tipoOperacion: TipoOperacion;
  fechaInicio:   Date;
  fechaFin:      Date;
  estadoAviso:   EstadoAviso;
}

export interface EstadoAviso {
  rel:    string;
  href:   string;
  method: string;
  type:   string;
  title:  string;
  id:          number;
  descripcion: string;
}

export interface TipoOperacion {
  rel:    string;
  href:   string;
  method: string;
  type:   string;
  title:  string;
  id:          number;
  descripcion: string;
}

export interface Inmuebles {
  rel:    string;
  href:   string;
  method: string;
  type:   string;
  title:  string;
  logicalTypeName:             string;
  objectIdentifier:            string;
  datanucleusVersionTimestamp: number;
  descripcion:                 string;
  fechaExclusividad:           Date;
  calle:                       string;
  altura:                      string;
  edificacion:                 string;
  piso:                        string;
  departamento:                string;
  latitud:                     number;
  longitud:                    number;
  cli:                         string;
  u:                           string;
  cliente:                     Cliente;
  localidad:                   Localidad;
  prov:                        string;
  tipoUnidad:                  string;
  imagen:                      Imagen[];
  inmueble:                    InmuebleTipoCaracteristica[];
}

export interface Cliente {
  rel:    string;
  href:   string;
  method: string;
  type:   string;
  title:  string;
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
  rel:    string;
  href:   string;
  method: string;
  type:   string;
  title:  string;
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
  descripcion:                 string;
  url:                         string;
  logicalTypeName:             string;
  objectIdentifier:            string;
  datanucleusVersionTimestamp: number;
  imagenDetalle:               ImagenDetalle;
}

export interface ImagenDetalle {
  id:          number;
  descripcion: string;
  inmuebleId:  string;
  name:        string;
  mimeType:    string;
  bytes:       string;
}

export interface InmuebleTipoCaracteristica {
  id:                 number;
  tipoCaracteristica: TipoCaracteristica;
  cant:           number;
}

export interface TipoCaracteristica {
  rel:    string;
  href:   string;
  method: string;
  type:   string;
  title:  string;
  id:          number;
  descripcion: string;
  icono:       string;
}

export interface ApiGet {
  rel:    string;
  href:   string;
  method: string;
  type:   string;
  title:  string;
}
