import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product} from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product= '';

  addToCart(product:Product){
    this.cartService.addToCart(product);
    window.alert('Votre bougie a été ajouté à votre panier!');
  }
  
  collectionData= this.cartService.getCollectionData();

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('productsID'));
    this.product = productIdFromRoute
    //this.product = products.find(product=>product.id ===productIdFromRoute );
    //this.product = collectionData.find(product=>collectionDate.name === productIdFromRoute)
  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) { }

}
