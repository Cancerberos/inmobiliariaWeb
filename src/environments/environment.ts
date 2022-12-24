// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiHost: "http://webinmobiliaria.us-east-1.elasticbeanstalk.com/restful",
  //apiHost: "/restful",
  //apiHost: "http://localhost:8080",
  apiAccept: "application/json;profile=urn:org.apache.isis/v2;suppress=all",
  apiAuth: "c3ZlbjpwYXNz", //"YXBpX3NlcnZpY2U6MTExMTE=", //"c3ZlbjpwYXNz",
  apiUserValidation: "/services/simple.UsuarioRepositorio/actions/userValidation/invoke",
  apiAvisos: "/services/simple.AvisoRepositorio/actions/listarAvisos/invoke",
  apiAvisosById: "/objects/simple.aviso/",
  apiAvisoContacto: "/services/simple.AvisoContactoAdd/actions/AddAvisoContacto/invoke",
  urlAvisos: "../assets/responses/avisos.json",
  urlUsuarios: "../assets/responses/usuarios.json"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
