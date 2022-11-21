import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

export default(): ListCategoryController => {
    const categoryRepository = new CategoriesRepository();
    const listCategoryUseCase = new ListCategoryUseCase(categoryRepository);
    const listCategoryController = new ListCategoryController(listCategoryUseCase);
    
    return listCategoryController;
};

