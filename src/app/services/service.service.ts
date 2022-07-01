import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { }
  // subscribe
  apiUrl = 'http://localhost:3000/phones';
  getPhones() {
    return this.http.get(`${this.apiUrl}`);
  }
  getPhone(id: number){
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getPhoneCart(id: number){
    return this.http.get(`${this.apiUrl}?${id}`);
  }
  createPhone(data: any){
    return this.http.post(this.apiUrl, data);
  }

  updatePhone(id: number, data: any){
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deletePhone(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  apiUrl2 = 'http://localhost:3000/sectors';
  getSectors() {
    return this.http.get(`${this.apiUrl2}`);
  }
  getSector(id: number){
    return this.http.get(`${this.apiUrl2}/${id}`);
  }

  createSector(data: any){
    return this.http.post(this.apiUrl2, data);
  }

  updateSector(id: number, data: any){
    return this.http.put(`${this.apiUrl2}/${id}`, data);
  }

  deleteSector(id: number) {
    return this.http.delete(`${this.apiUrl2}/${id}`);
  }
  apiUrl3 = 'http://localhost:3000/users?email';
  getUser(email: string){
    return this.http.get(`${this.apiUrl3}=${email}`);
  }
  createUser(data: any){
    return this.http.post(this.apiUrl3, data);
  }
}
