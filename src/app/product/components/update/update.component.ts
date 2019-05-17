import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  title = "Update Product";
  productForm: FormGroup = new FormGroup({});
  id: number;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    // this.snackBar.open('Loading...');
    this.formInit();
    this.getProduct();
    // setTimeout(() => this.snackBar.dismiss());
  }

  getProduct(): void {
    setTimeout(() => this.snackBar.open('Loading...', null));
    this.productService.read(this.id).subscribe(product => {
      this.productForm.setValue(product);
      this.snackBar.dismiss();
    });
  }

  formInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(45)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
    });
  }

  save(): void {
    setTimeout(() => this.snackBar.open('Saving...', null));
    this.productService.update(this.productForm.value)
      .subscribe(() => {
        this.snackBar.open('Product updated successfully!', null, {})
      }, () => {
        this.snackBar.open('Sorry there is an error. Please try again.')
      });
  }

}
