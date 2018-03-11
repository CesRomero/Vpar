import { FmService } from './../fm-service.service';
import { Component, OnInit, Pipe } from '@angular/core';

@Pipe({name: "sortBy"})
@Component({
  selector: 'app-fm-list',  
  template:` 
  
  <ul *ngFor="let person of jsonResultant">
            
      <h3><u>{{person.S}}</u> </h3>
      
      <li>{{person.P}}</li>
      <li>{{person.N}}</li>
      <li>{{person.V}}</li>
      <li>{{person.Thumbnail["#text"]}}</li>
         
  </ul>

<!-- HERE: added this error message -->
<section *ngIf="errorMessage">
  {{errorMessage}}
</section>`,
  styleUrls: ['./fm-list.component.scss']
})

/*
* Loading the json
*/
export class FmListComponent implements OnInit {
  
  jsonResultant = [];
  errorMessage: string = '';
  isLoading: boolean = true;
  
  constructor(private peopleService: FmService) { }

  ngOnInit(){
    
    this.peopleService.getJsonData().subscribe(data=>{
      this.jsonResultant = data; 
    });
  }
}

/*
* Ordenation algorithm
*/
export class SortPipe {
  transform(jsonResultant: Array<string>, args: string): Array<string> {
    jsonResultant.sort((a: any, b: any) => {
      if ( a[args] < b[args] ){
        return -1;
      }else if( a[args] > b[args] ){
          return 1;
      }else{
        return 0;	
      }
    });
    return jsonResultant;
  }
}