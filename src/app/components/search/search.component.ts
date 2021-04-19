import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer, useExisting: NgForm
    }
  ]
})
export class SearchComponent implements OnInit {
  @Input()currentTermValue:any
  @Input() rightIcon;

  constructor(private router: Router) {
    this.rightIcon = 'true' ;
   }

  ngOnInit(): void {
  }

  btnClick= () => {
    this.router.navigateByUrl('/results');
  }
}
