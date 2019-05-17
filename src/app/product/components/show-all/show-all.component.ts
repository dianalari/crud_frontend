import { Component, OnInit } from '@angular/core';
import { Product } from '../../models';
import { ProductService } from '../../services/product.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {

  title = "All Products"
  products: Product[];
  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'actions'];

  constructor(
    private productService: ProductService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    setTimeout(() => this.snackBar.open('Loading...'));
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getAll()
      .subscribe(products => {
        this.products = products;
        this.snackBar.dismiss();
      });
  }

  delete(id: number): void {
    this.productService.delete(id)
      .subscribe(() => {
        this.snackBar.open('Deleted successfully', null, { duration: 3000 });
        this.getProducts();
      })
  }

}