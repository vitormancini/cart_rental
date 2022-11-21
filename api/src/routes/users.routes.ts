import { Router } from "express";
import createUserController from "../modules/users/useCases";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
    createUserController().handle(request, response);
});

export { usersRoutes };