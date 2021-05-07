function respErrorHandler(inform, error) {
  const errorObj = {};
  if ("response" in error) {
    const data = error.response.data;
    const status = error.response.status;
    Object.assign(errorObj, { ...data, status });
  } else if ("request" in error) {
    Object.assign(errorObj, { message: "Server not found" });
  } else {
    Object.assign(errorObj, { error: error.message });
  }
  inform(errorObj);
  return Object.freeze({ errors: errorObj });
}

export default respErrorHandler;
