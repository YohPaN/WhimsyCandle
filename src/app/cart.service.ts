import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: string[]=[];

  addToCart(itemName:string){
    this.items.push(itemName);
  }

 /* items:Product[]=[];

  addToCart(product:Product){
    this.items.push(product);
  }*/

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  getCollectionData(){
    return this.http.get<{name: string, items:{itemName: string, price: number}[]}[]>('/assets/collection.json')
  }

  constructor(
    private http: HttpClient
  ) { }
}
