import { usersRoutes } from "../services/users";
import { termsOfUseRoutes } from '../services/terms_of_use';

const initialize = (app) => {
  app.use("/api/users", usersRoutes);
  app.use("/api/terms", termsOfUseRoutes);

  app.use("/authError", (req, res, next) => next(new Error("DEFAULT_AUTH")));

  app.get("/ping", (req, res) => {
    res.status(200).send({
      success: true,
      statusCode: 200,
    });
  });
};

export { initialize };
