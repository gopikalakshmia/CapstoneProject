import { GroceryCard } from 'src/app/grocery/models/grocerdcardmodel';
export class cartmodel{
    _id?:number;
    userid:string;
    groid:string;
    grocery:GroceryCard;
    quantity:number;
    constructor(){}
}