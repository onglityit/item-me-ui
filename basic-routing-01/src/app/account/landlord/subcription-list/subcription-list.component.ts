import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LandlordSubscriptions } from 'src/app/models/response/landlord-subscriptions.model';
import { LandlordService } from 'src/app/services/landlord.service';
import { environment } from 'src/environments/environment';

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
  subscriptions?:LandlordSubscriptions[];
  testLandlordId = 'bdaf67ee-805a-472f-9464-11d4d6094f3e';
  sampleText = '';

  constructor(private landlordService:LandlordService, private http: HttpClient){
  }

  ngOnInit(){

    // this.landlordService.getAllLandlordSubscriptionsByLandlordId(
    //   this.testLandlordId ).subscribe(e => {
    //     console.log('aa', e);
    //   });
  }

  clickedTest(){

    // const headers = { 'accept':'*/*' };
    // this.http.get<any>(
    //   `${environment.serverUrl}${environment.endpoints.strPathGetAllLandlordSubscriptionsByLandlordId}`
    // + '/' + this.testLandlordId , {headers}
    // ).subscribe(data => {
    //     console.log('abc123', data);
    // });

    

    // this.landlordService.getRandomJoke()
    // .then(response => {
    //   this.sampleText = response.data.joke;
    // })
    // .catch(error => {
    //   console.log(error);
    // });

    this.landlordService.getAllLandlordSubscriptionsByLandlordId(this.testLandlordId).subscribe(
      a => console.log('abc1234', a)
    );
  }
}
