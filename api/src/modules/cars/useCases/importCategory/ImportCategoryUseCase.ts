import fs from "fs";
import { parse as csvParse } from "csv-parse";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {

    constructor(private categoriesRepository: ICategoriesRepository) {}

    // Como a aoperação de leitura de arquivo é assincrona, devemos utilizar promises
    // O retorno do método será uma promise, no qual se sucesso retornará um array de IImportCategory
    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const categories: IImportCategory[] = [];

            // A função a seguir permite que façamos a leitura do arquivo em partes
            const stream = fs.createReadStream(file.path);

            const parseFile = csvParse();

            // O comando pipe joga o conteúdo do arquivo lido para onde desejarmos
            stream.pipe(parseFile);

            parseFile.on("data", async (line) => {
                const [ name, description ] = line;
                categories.push({
                    name,
                    description
                });
            }).on("end", () => {
                fs.promises.unlink(file.path); // removendo o arquivo da aplicação após a finalização
                resolve(categories);
            }).on("error", (error) => {
                reject(error);
            });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);
        
        // Após carregarmos o conteúdo do arquivo, vamos adicionar no repositório de categorias
         categories.map(async (category) => {
            const { name, description } = category;

            const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

            if(!categoryAlreadyExists) {
                await this.categoriesRepository.create({
                    name,
                    description
                });
            }
         });      
    }
}

export { ImportCategoryUseCase };