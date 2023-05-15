
import { CategoryCarModel } from "./categoryCar.model";

export interface CarModule{
    id?:number;
    name:string;
    image:string;
    category: CategoryCarModel
}

export interface CreateCarModule extends Omit<CarModule, 'id'| 'category'>{
    categoryId:number;
}

export interface UpdateCarModule extends Partial<CarModule>{
    categoryId:number;
}
