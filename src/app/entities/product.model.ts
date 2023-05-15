import { CategoryModel} from "./category.model";

export interface ProductModel{
    id:number;
    title:string;
    price:number;
    description:string;
    images:string[];
    category:CategoryModel;
}

export interface CreateProductModel extends Omit<ProductModel, 'id'| 'category'>{
    categoryId:number;
}

export interface UpdateProductModel extends Partial<ProductModel>{
    categoryId?:number;
}