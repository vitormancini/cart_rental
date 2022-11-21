import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepostory = new SpecificationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepostory);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpecificationController };