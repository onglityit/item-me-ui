import { Component } from '@angular/core';

@Component({
  selector: 'app-subcription-list',
  templateUrl: './subcription-list.component.html',
  styleUrls: ['./subcription-list.component.sass']
})
export class SubcriptionListComponent {

  subList:any = [
    'factory',
    'house',
    'office'
  ];
  
}
