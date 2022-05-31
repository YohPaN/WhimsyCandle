import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../cart.service';
import { ManagingDataService } from '../managing-data.service';
import { Candle } from '../candle';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  candleCollection = '';
  candleCollections: string[] = [];
  private CollectionSub: Subscription = new Subscription;

  newCandle= '';
  /*ancienUrl= '';
  items: string[] = [];

  //A refaire
  imageSrc(item: string){
    return "./assets/Image/" + item + ".jpg"
  }*/

  addToCart(candle:string){
    this.cartService.addToCart(candle);
    window.alert('Votre bougie a été ajouté à votre panier!');
  }


  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('collectionID'));
    this.candleCollection = productIdFromRoute;

    this.managingData.getCandlesData();
    this.CollectionSub = this.managingData.getCandleUpdateListener()
    .subscribe((candles: Candle[]) => {
      candles.forEach(candleElement => {
        if(this.candleCollections.indexOf(candleElement.itemName) === -1 && candleElement.collectionName === this.candleCollection){
          this.candleCollections.push(candleElement.itemName)
        }
      })
    })


    /*this.managingData.getCollectionData().subscribe(
      myObservable => {
        myObservable.forEach(observableElement => {
          if(observableElement.collectionName === this.product){
            this.items.push(observableElement.itemName)
          }
        })
      }
    )*/
  }

  ngDoCheck(){
    const NewrouteParams = this.route.snapshot.paramMap;
    const NewproductIdFromRoute = String(NewrouteParams.get('collectionID'));
    this.newCandle = NewproductIdFromRoute
    if (this.newCandle != this.candleCollection){
      window.location.reload()
    }
  }

  ngOnDestroy(){
    this.CollectionSub.unsubscribe();
  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private managingData: ManagingDataService
  ){ };

}
