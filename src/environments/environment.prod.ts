export const environment = {
  production: true,
  apiHost: "http://webinmobiliaria.us-east-1.elasticbeanstalk.com/restful",
  //apiHost: "http://localhost:8080",
  //apiHost: "/restful",
  apiAccept: "application/json;profile=urn:org.apache.isis/v2;suppress=all",
  apiAuth: "c3ZlbjpwYXNz", //"YXBpX3NlcnZpY2U6MTExMTE=", //"c3ZlbjpwYXNz",
  apiUserValidation: "/services/simple.UsuarioRepositorio/actions/userValidation/invoke",
  apiAvisos: "/services/simple.AvisoRepositorio/actions/listarAvisos/invoke",
  apiAvisosById: "/objects/simple.aviso/",
  apiAvisoContacto: "/services/simple.AvisoContactoAdd/actions/AddAvisoContacto/invoke",
  urlAvisos: "../assets/responses/avisos.json",
  urlUsuarios: "../assets/responses/usuarios.json"
};
