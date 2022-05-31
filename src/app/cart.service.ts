import { Injectable } from '@angular/core';
import { Candle } from './candle';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  candles: string[]=[];

  addToCart(candleName:string){
    this.candles.push(candleName);
  }

  getItems(){
    return this.candles;
  }

  clearCart(){
    this.candles = [];
    return this.candles;
  }

  constructor(private http: HttpClient) { }
}
