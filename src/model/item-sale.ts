import { GenerateUtil } from './../util/generate-util';
export class ItemSale {
    id: string;
    nome: string;
    image: string;
    description: string;
    
    constructor() {
        this.id =  GenerateUtil.getUUID();
    }
}