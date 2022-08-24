const API_URL =
  process.env.REACT_APP_ENVIRONMENT === "local"
    ? process.env.REACT_APP_API_LOCAL
    : process.env.REACT_APP_API;
export const API = API_URL + "api/";
export const PATH = API_URL;
export const GoogleMapReact_KEY = process.env.REACT_APP_GoogleMapReact_KEY;
