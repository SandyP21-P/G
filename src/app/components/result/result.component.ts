import { SearchService } from './../../search.service';
import { GoogleResponse } from './../../GoogleResponse.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy {
  results?: GoogleResponse;
  subs: Subscription[] = [];
  term: any;
  
  constructor(private searchService:SearchService) { }
 

  ngOnInit(): void {

    const {term} = history.state;
    this.term = term;
    if(term){
      this.subs.push(
        this.searchService.getSearchData(term).subscribe({next:(data:GoogleResponse): void =>{
          this.results=data;
        }}

      ));
    }
  }

  ngOnDestroy(): void {
    this.subs.map(subscription => subscription.unsubscribe());
  }

}



