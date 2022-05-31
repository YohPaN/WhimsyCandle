import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Subject } from 'rxjs';
import { Candle } from './candle';

@Injectable({
  providedIn: 'root'
})
export class ManagingDataService {

  private candles: Candle[] = [];
  private updateCandles = new Subject<Candle[]>();
  constructor(private http: HttpClient) { }

  getCandlesData(){
    this.http.get<{message: string, CandleCollection: Candle[]}> ("http://localhost:3000/api/CandleCollection")
    .pipe(map((candlesData) => {
      return candlesData.CandleCollection.map((candleCollection: {id: number, collectionName: string, itemName: string, price: number, photo: string}) => {
        return {
          id: candleCollection.id,
          collectionName: candleCollection.collectionName,
          itemName: candleCollection.itemName,
          price: candleCollection.price,
          photo: candleCollection.photo
        }
      });
    }))
    .subscribe((transformedCandlesData) => {
      this.candles = transformedCandlesData;
      this.updateCandles.next([...this.candles]);
    })
  }

  getCandleUpdateListener(){
    return this.updateCandles.asObservable();
  }

 /* getItemData( product: string){
    return this.http.get<{collectionName: string, itemName: string, price: number}[]>('/assets/collection.json').pipe(
      map(collection => {
        let myItem = collection.find(x => product === x.itemName);
        return myItem;
      }),
    )
  }*/
}
