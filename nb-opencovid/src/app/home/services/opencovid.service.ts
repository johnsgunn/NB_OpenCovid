import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpencovidService {
  public caseHistory_NB = "https://api.opencovid.ca/timeseries?loc=NB";

  constructor(private httpClient: HttpClient) { }

  public getCaseHistory_NB(): Observable<any> {
    return this.httpClient.get(this.caseHistory_NB);
  }
}
