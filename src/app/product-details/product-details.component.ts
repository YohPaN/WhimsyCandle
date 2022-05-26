import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagingDataService } from '../managing-data.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product = '';
  IName: string = '';
  ICollection: string = '';
  IPrice: number = 0;
  ItemInformation: string[]=[];

  imageSrc(item: string){
    return "./assets/Image/" + item + ".jpg"
  }

  addToCart(item:string){
    this.cartService.addToCart(item);
    window.alert('Votre bougie a été ajouté à votre panier!');
  }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('productID'));
    this.product = productIdFromRoute;

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

  constructor(
    private route: ActivatedRoute,
    private managingData: ManagingDataService,
    private cartService: CartService
  ) { }

}
