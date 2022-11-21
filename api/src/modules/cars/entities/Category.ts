import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("categories") //Fazendo referência a tabela categories do banco de dados
class Category {

    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidV4()
        }
    }
}

export { Category };