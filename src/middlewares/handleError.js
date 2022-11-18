function handleErrors (error, request, response, next) {
  response.status(error.status || 500).json({
    success: false,
    message: error.message
  })
}

export default handleErrors
