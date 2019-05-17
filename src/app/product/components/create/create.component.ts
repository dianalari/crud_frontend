import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title: string = "Create new product";
  productForm: FormGroup = new FormGroup({});
  constructor(
    private productService: ProductService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.formInit();
  }

  formInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(45)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
    })
  }

  save(): void {
    this.productService.create(this.productForm.value)
      .subscribe(() => {
        this.snackBar.open('Product saved successfully!', null, { duration: 3000 });
        this.productForm.reset();
      }, () => {
        this.snackBar.open('Sorry there is an error. Please try again.')
      })
  }

}
