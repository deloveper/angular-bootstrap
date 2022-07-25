import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/assets/data/products';

import { Prodcut } from '../models/prodcut.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products=PRODUCTS;

  

  constructor() { }

  ngOnInit(): void {
    console.log("inside init");
    
  }

}
