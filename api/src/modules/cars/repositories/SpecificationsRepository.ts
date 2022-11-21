import { Specification } from "../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "./ISpecificationRepository";

class SpecificationsRepository implements ISpecificationRepository {

    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }
    
    create({ name, description }: ICreateSpecificationDTO) {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date()
        });

        this.specifications.push(specification);
    }

}

export { SpecificationsRepository };