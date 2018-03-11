import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class FmService {

  private baseUrl: string = 'http://uk.vpar.com/services/request.aspx?action=getRoundLeaderboard&RoundID=536014&RoundLeaderboardID=18837&PageSize=1000&ThumbnailHeight=60&return=3&CallerID=1';
  constructor(private http : Http){
  }

  getJsonData(): Observable<String[]>{
    return this.http.get(this.baseUrl).map(this.getData).catch(this.error);
  }

  private error(error:any){
    let msg = (error.message) ? error.message : 'Unknown Error';
    console.log(msg);
    return Observable.throw(msg);
  }

  private getData(data: Response){
    let datos = data.json();
    return datos.Response.L.FM || [];
  }

}