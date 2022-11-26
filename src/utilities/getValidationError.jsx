export const getValidationError = (errorCode) => {
  const codeMatcher = {
    ERR_NETWORK: "Se rompió la red",
    ERR_TIMEOUT: "Se acabó el tiempo",
    ERR_CANCEL: "Se canceló la petición",
    ERR_UNKNOW: "Error desconocido",
    ERR_400: "Error 400",
    ERR_401: "Error 401",
    ERR_403: "Error 403"
  }
  return codeMatcher[errorCode];
}
