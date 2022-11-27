export const getValidationError = (errorCode) => {
  const codeMatcher = {
    ERR_NETWORK: "Se rompió la red",
    "401": "Codigo de conexión o Apellido paterno Incorrectos",
    "400": "Algo anda mal"
  }
  return codeMatcher[errorCode];
}
