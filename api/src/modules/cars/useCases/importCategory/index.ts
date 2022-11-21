import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

export default(): ImportCategoryController => {
    const categoruesRepository = new CategoriesRepository();
    const importCategoryUseCase = new ImportCategoryUseCase(categoruesRepository);
    const importCategoryController = new ImportCategoryController(importCategoryUseCase);
    
    return importCategoryController;
}

