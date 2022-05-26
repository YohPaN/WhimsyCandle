import { Component, OnInit } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { Candle } from '../candle';
import { ManagingDataService } from '../managing-data.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent implements OnInit {

  candleCollections: string[] = [];
  private CollectionSub: Subscription = new Subscription;

  constructor(
    private managingData: ManagingDataService
  ) {}

  ngOnInit() {
    this.managingData.getCandlesData();
    this.CollectionSub = this.managingData.getCandleUpdateListener()
    .subscribe((candles: Candle[]) => {
      candles.forEach(candleElement => {
        if(this.candleCollections.indexOf(candleElement.collectionName) === -1){
          this.candleCollections.push(candleElement.collectionName)
        }
      })
    })
  }

  ngOnDestroy(){
    this.CollectionSub.unsubscribe();
  }

}
