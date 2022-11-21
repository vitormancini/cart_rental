import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default(): CreateCategoryController => {
    
    const categoriesRepository = new CategoriesRepository();
    const createCategoriesRepositoryUseCase = new CreateCategoryUseCase(categoriesRepository);
    const createCategoriesController = new CreateCategoryController(createCategoriesRepositoryUseCase);

    return createCategoriesController;
}

