function accessOwnerAccount (request, response, next) { /* puede recibir n cantidad de parametros */
  try {
    const { userCurrent } = request

    const idUser = request.params.id

    if (userCurrent !== idUser) throw new Error('You can only edit your own Account')

    next()
  } catch (error) {
    response.status(403)
    response.json({
      success: false,
      message: error.message
    })
  }
}

export {
  accessOwnerAccount
}
