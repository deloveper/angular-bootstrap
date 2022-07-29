import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit,OnChanges,DoCheck,OnDestroy {

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    
  }
  ngOnInit(): void {
  }

  ngDoCheck(): void {
    
  }
  ngOnDestroy(): void {
    
  }

}
