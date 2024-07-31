const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const status = 408;
    const message = "Fill Input Properly...";
    const ExtraDetails = err.issues[0].message;

    const errorObject = {
      status,
      message,
      ExtraDetails,
    };

    next(errorObject);
  }
};

module.exports = validate;
