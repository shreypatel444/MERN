const { z } = require("zod");

const signupSchemaValidate = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name should be more than 3 character" })
    .max(254, { message: "Name should not be more than 254 character" }),

  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "Invalid E-Mail" })
    .min(3, { message: "E-Mail should be more than 3 character" })
    .max(254, { message: "E-Mail should not be more than 254 character" }),

  password: z
    .string({ required_error: "password is required." })
    .trim()
    .min(3, { message: "password should be more than 6 characters." })
    .max(254, { message: "password should be less than 18 characters." }),

  contact: z
    .string({ required_error: "contact is required." })
    .trim()
    .min(3, { message: "contact should be more than 10 characters." })
    .max(254, { message: "contact should be less than 20 characters." }),
});

const loginSchemaValidate = z.object({
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "Invalid E-Mail" })
    .min(3, { message: "E-Mail should be more than 3 character" })
    .max(254, { message: "E-Mail should not be more than 254 character" }),

  password: z
    .string({ required_error: "password is required." })
    .trim()
    .min(3, { message: "password should be more than 6 characters." })
    .max(254, { message: "password should be less than 18 characters." }),
});


module.exports = {signupSchemaValidate,loginSchemaValidate};