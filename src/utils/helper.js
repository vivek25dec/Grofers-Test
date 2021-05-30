const success = (res, response = {}, status = 200) => {
  const result = {
    success: true,
    response,
  }
  return res.status(status).json(result)
}

const error = (res, e = {}, status = 500) => {
  const result = {
    success: false,
    e,
  }
  return res.status(status).json(result)
}

export {
  success,
  error,
}
