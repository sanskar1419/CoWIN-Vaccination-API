import { body, validationResult } from "express-validator";

const doctorRegistrationDataMiddleware = async (req, res, next) => {
  // Define Rules for validation
  const rules = [
    body("name").notEmpty().withMessage("Name is Required"),
    body("name")
      .isLength({ min: 3, max: 25 })
      .withMessage("Name must have character between 3 to 25"),
    body("userName").notEmpty().withMessage("User Name is Required"),
    body("userName")
      .isLength({ min: 3, max: 15 })
      .withMessage("User Name must have character between 3 to 15"),
    body("password")
      .isStrongPassword({
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
      .withMessage(
        "Password should be of minimum length should be 6 character and must contain a number, symbol, lowercase character and uppercase character"
      ),
    body("confirmPassword")
      .custom((value, { req }) => {
        return value === req.body.password;
      })
      .withMessage("Password and Confirm password should be same"),
  ];

  // Run the Rules
  await Promise.all(rules.map((rule) => rule.run(req)));
  let validationErrors = validationResult(req);
  console.log(validationErrors);
  // Check weather there are validation error or not
  if (!validationErrors.isEmpty()) {
    return res.status(404).send(validationErrors.array()[0].msg);
  } else {
    next();
  }
};

export default doctorRegistrationDataMiddleware;
