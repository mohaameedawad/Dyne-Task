import { Component } from '@angular/core';
import { SharedService } from '../shared/services/sharedservice';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  
  constructor( private sharedservice: SharedService) {

  }



}
