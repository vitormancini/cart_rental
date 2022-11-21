import { ICreateUserDTO, IUsersRepostory } from "../repositories/IUsersRepository";

class CreateUserUseCase {
    constructor(private userRepository: IUsersRepostory) {

    }

    async execute({ name, username, password, email, driver_license }: ICreateUserDTO): Promise<void> {
        await this.userRepository.create({
            name,
            username,
            password,
            email,
            driver_license
        });
    }
}

export { CreateUserUseCase };