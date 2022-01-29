import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagingDataService {
  
  constructor(private http: HttpClient) { }
  
  getCollectionData(){
    return this.http.get<{collectionName: string, itemName: string, price: number}[]>('/assets/collection.json').pipe(
      map(collection => {
        return collection;
      }),
    )
  }
}
