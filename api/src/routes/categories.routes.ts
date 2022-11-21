import { Router } from "express";
import multer from "multer";

import createCategoriesController from "../modules/cars/useCases/createCategory";
import importCategoryController from "../modules/cars/useCases/importCategory";
import listCategoryController from "../modules/cars/useCases/listCategory";

const categoriesRoutes = Router();

// Informando ao multer onde ele deverá salvar o arquivo temporariamente
const upload = multer({
    dest: "./temp",
});

// Rota de criação de categorias
categoriesRoutes.post("/", (request, response) => {
    return createCategoriesController().handle(request, response);
});

// Rota de listagem de categorias
categoriesRoutes.get("/", (request, response) => {
    return listCategoryController().handle(request, response);
});

// Rota de upload de arquivo utilizando o multer
categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController().handle(request, response);
});

export { categoriesRoutes };