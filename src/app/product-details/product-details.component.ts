import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product} from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product= '';
  NewProduct= '';
  collectionData= this.cartService.getCollectionData();
  ancienUrl= '';

  imageSrc(itemName: string){
    return "./assets/Image/" + itemName + ".jpg"
  }

  addToCart(itemName:string){
    this.cartService.addToCart(itemName);
    window.alert('Votre bougie a été ajouté à votre panier!');
  }
  
  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('productsID'));
    this.product = productIdFromRoute;
  }

  ngDoCheck(){
    const NewrouteParams = this.route.snapshot.paramMap;
    const NewproductIdFromRoute = String(NewrouteParams.get('productsID'));
    this.NewProduct = NewproductIdFromRoute
    if (this.NewProduct != this.product){
      console.log("changement détecté")
      window.location.reload()
    }
  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private router:Router
  ) { }

}
