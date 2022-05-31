import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagingDataService } from '../managing-data.service';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';
import { Candle } from '../candle';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  candleName: string = '';
  collectionName: string = '';
  price: number = 0;
  //ItemInformation: string[]=[];
  //candleCollections: string[] = [];
  private CollectionSub: Subscription = new Subscription;

  /*imageSrc(item: string){
    return "./assets/Image/" + item + ".jpg"
  }

  addToCart(item:string){
    this.cartService.addToCart(item);
    window.alert('Votre bougie a été ajouté à votre panier!');
  }*/

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('productID'));
    this.candleName = productIdFromRoute;

    this.managingData.getCandlesData();
    this.CollectionSub = this.managingData.getCandleUpdateListener()
    .subscribe((candles: Candle[]) => {
      candles.forEach(candleElement => {
        if(candleElement.itemName === this.candleName){
          this.collectionName = candleElement.collectionName;
          this.price = candleElement.price;
        }
      })
    })

    /*this.managingData.getItemData(this.product).subscribe(
      //x => console.log(x?.price)
    )
    this.managingData.getCollectionData().subscribe(
      x => x.forEach( y => {
        if(this.product === y.itemName){
          this.IName = y.itemName
          this.ICollection = y.collectionName
          this.IPrice = y.price
        }
      }
    )
    )*/

  }

  ngOnDestroy(){
    this.CollectionSub.unsubscribe();
  }

  constructor(
    private route: ActivatedRoute,
    private managingData: ManagingDataService,
    private cartService: CartService
  ) { }

}
