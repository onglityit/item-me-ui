import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LandlordSubscriptions } from '../models/response/landlord-subscriptions.model';
import { HttpClient } from '@angular/common/http';
import { EnvConfig } from '../models/config/env-config';
import { environment } from 'src/environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LandlordService {
  constructor(private http: HttpClient,) { }
  getAllLandlordSubscriptionsByLandlordId(strLandlordId:string): Observable<LandlordSubscriptions>{
    return this.http.get<LandlordSubscriptions>(`${environment.endpoints.strPathGetAllLandlordSubscriptionsByLandlordId}`
    + '/' + strLandlordId);
  }

  // getAllLandlordSubscriptionsByLandlordId(strLandlordId:string): Observable<LandlordSubscriptions[]>{
  //   let abc: LandlordSubscriptions[] = [];
  //   let config = {
  //     method: 'get',
  //     maxBodyLength: Infinity,
  //     url: 'http://localhost:8088/api/getAllLandlordSubscriptionsByLandlordId/bdaf67ee-805a-472f-9464-11d4d6094f3e',
  //     headers: { 
  //       'accept': '*/*'
  //     }
  //   };
    
  //   axios.request(config)
  //   .then((response) => {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  //   return of(abc);
  // }

  getRandomJoke() {
    return axios.get('https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes', {
      headers: {
        'x-rapidapi-host': 'jokes-by-api-ninjas.p.rapidapi.com',
        'x-rapidapi-key': 'your-rapid-api-key'
      }
    });
  }
}
