import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {

    constructor(private specificationRepostory: ISpecificationRepository) {}

    execute( { name, description }: IRequest ): void {
        this.specificationRepostory.create({
            name,
            description
        });
    }
}

export { CreateSpecificationUseCase };