import { UserRepository } from "../repositories/UserRepository";
import { CreateUserController } from "./createUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";



export default(): CreateUserController => {

    const userRepostory = new UserRepository();
    const createUserUseCase = new CreateUserUseCase(userRepostory);
    const createUserController = new CreateUserController(createUserUseCase);

    return createUserController;

};