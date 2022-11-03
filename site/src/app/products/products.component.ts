import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;

  lista: Products[] = [];
  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.service.list().subscribe(data=>{
      this.products=data;

    },
    
      err => console.log(err)
          );
  }

}
