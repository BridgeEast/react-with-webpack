let baseUri;

if(process.env.NODE_ENV == "development"){
  baseUri = "http://localhost:3000/api/v1/";
}else{
  baseUri = location.origin + "/";
}

export const API_CONFIG = {
  base_uri: baseUri
};
