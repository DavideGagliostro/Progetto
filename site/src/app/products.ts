export class Products {
    id?: number;
    name?: string;
    barcode?: string;

    constructor(id?: number, name?: string,barcode?:string){
        this.id = id;
        this.name = name;
        this.barcode = barcode;
    }
}
