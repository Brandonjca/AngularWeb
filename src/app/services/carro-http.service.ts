import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CarModule, CreateCarModule, UpdateCarModule } from '../entities/car/car.module';

@Injectable({
  providedIn: 'root'
})
export class CarroHttpService {
  readonly API_URL = "https://api.escuelajs.co/api/v1/categories";

  constructor(private httpClient: HttpClient) {}

  getAllCars():Observable<CarModule>{
    const url = `${this.API_URL}`;
    return this.httpClient.get<CarModule>(url);
  }

  getOneCar(id:CarModule['id']):Observable<CarModule>{
    const url = `${this.API_URL}`;
    return this.httpClient.get<CarModule>(url)
  }

  storeCar(car:CreateCarModule):Observable<CarModule>{
    const url = `${this.API_URL}`;
    return this.httpClient.post<CarModule>(url, car)
  }

  updateCar(id:CarModule['id'], car:UpdateCarModule):Observable<CarModule>{
    const url = `${this.API_URL}`;
    return this.httpClient.put<CarModule>(url, car)
  }


  destroyCar(id:CarModule['id']):Observable<any>{
    const url = `${this.API_URL}`;
    return this.httpClient.delete<any>(url).pipe(map((response: {rta:boolean}) =>{
      return response.rta
    })
    );
  }
}
