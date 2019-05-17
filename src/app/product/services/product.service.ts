import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ProductService {

    constructor(
        private httpClient: HttpClient,
    ) { }

    getAll(): Observable<Product[]> {
        return this.httpClient.get<Product[]>('/api/product/all');
    }

    read(id: number): Observable<Product> {
        return this.httpClient.get<Product>(`/api/product/${id}`);
    }

    update(product: Product): Observable<Product> {
        return this.httpClient.put<Product>(`/api/product/${product.id}`, product);
    }

    create(product: Product): Observable<Product> {
        return this.httpClient.post<Product>('/api/product', product);
    }

    delete(id: number): Observable<any> {
        return this.httpClient.delete(`/api/product/${id}`);
    }

}