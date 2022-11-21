import { Category } from "../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";
import { getRepository, Repository } from "typeorm";

class CategoriesRepository implements ICategoriesRepository {

    private repository: Repository<Category>;

    // SINGLETON
    //private static INSTANCE: CategoriesRepository;

    constructor() {
        this.repository = getRepository(Category);
    }

    /*public static getInstance(): CategoriesRepository {
        if(!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }
        return CategoriesRepository.INSTANCE;
    }*/

    // Método de criação de nova categoria
    async create( { name, description }: ICreateCategoryDTO ): Promise<void> {
        const category = this.repository.create({
            name,
            description
        });

        // Salvando os dados na tabela de categories
        await this.repository.save(category);
    }

    // Método de listagem de categorias
    async list(): Promise<Category[]> {

        // Pegando todos os dados da tabela categories
        const categories = await this.repository.find();

        return categories;
    }

    //Método que encontra uma categoria por name
    async findByName(name: string): Promise<Category> {
        const category = await this.repository.findOne({ 
            where: {
                name
            }
         });
        return category;
    }
}

export { CategoriesRepository };