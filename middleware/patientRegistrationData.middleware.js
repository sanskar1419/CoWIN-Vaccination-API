import { body, validationResult } from "express-validator";

const patientRegistrationDataMiddleware = async (req, res, next) => {
  // Define Rules for validation
  const rules = [
    body("name").notEmpty().withMessage("Name is Required"),
    body("name")
      .isLength({ min: 3, max: 25 })
      .withMessage("Name must have character between 3 to 25"),
    body("userName", "Invalid mobile number.")
      .escape()
      .exists({ checkFalsy: true })
      .isLength({ min: 10, max: 12 })
      .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/),
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

export default patientRegistrationDataMiddleware;
