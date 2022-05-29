const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "SequelizeValidationError") {
    return response.status(400).send({ error: "validation error" });
  } else if (error.name === "SequelizeDatabaseError") {
    return response.status(400).send({ error: "validation error" });
  }

  next(error);
};

module.exports = errorHandler;
