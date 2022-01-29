import { Component, OnInit } from '@angular/core';
import { ManagingDataService } from '../managing-data.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  collectionNames: string[]=[];

  constructor(
    private managingData: ManagingDataService
    ) {}

  ngOnInit() {
    this.managingData.getCollectionData().subscribe(
      myObservable => {
        myObservable.forEach(observableElement => {
          if( this.collectionNames.indexOf(observableElement.collectionName) === -1){
            this.collectionNames.push(observableElement.collectionName) 
          }
        }
        )
      }
    )
    }
  

}
