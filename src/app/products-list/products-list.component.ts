import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ManagingDataService } from '../managing-data.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  product= '';
  NewProduct= '';
  ancienUrl= '';
  items: string[] = [];

  
  imageSrc(item: string){
    return "./assets/Image/" + item + ".jpg"
  }

  addToCart(item:string){
    this.cartService.addToCart(item);
    window.alert('Votre bougie a été ajouté à votre panier!');
  }
 

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('collectionID'));
    this.product = productIdFromRoute;

    this.managingData.getCollectionData().subscribe(
      myObservable => {
        myObservable.forEach(observableElement => {
          if(observableElement.collectionName === this.product){
            this.items.push(observableElement.itemName) 
          }
        })
      }
    )
  }
  
  ngDoCheck(){
    const NewrouteParams = this.route.snapshot.paramMap;
    const NewproductIdFromRoute = String(NewrouteParams.get('collectionID'));
    this.NewProduct = NewproductIdFromRoute
    if (this.NewProduct != this.product){
      window.location.reload()
    }
  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private managingData: ManagingDataService
  ){ };

}
