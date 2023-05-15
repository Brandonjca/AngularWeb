import { Component, OnInit } from '@angular/core';
import { CarroHttpService } from 'src/app/services/carro-http.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  httpClient: any;
  constructor(private carroHttpService: CarroHttpService) {

  }

  ngOnInit(): void {
    //this.getProducts();
    //this.getProduct();
    this.createCar();
    //this.updateCar();
    //this.deleteProduct();
  }

  getCars(): void{
    const url = 'http://api.escuelajs.co/api/v1/categories';
    this.carroHttpService.getAllCars().subscribe
    (response => {
      console.log(response)
    });
  }

  getCar() {
    const url = 'http://api.escuelajs.co/api/v1/categories/20';
    this.carroHttpService.getOneCar(2).subscribe
    (responde => {
      console.log(responde)
    });
  }

  createCar() {
    const data = {
      name: "Mercedes Benz",
      image: 'https://img.remediosdigitales.com/0b7d3d/mercedes-amg-gt-2020-002/840_560.jpg',
      categoryId:1
    }
    const url = 'http://api.escuelajs.co/api/v1/categories';
    this.carroHttpService.storeCar(data).subscribe
    (response => {
      console.log(response)
    });
  }

  updateCar(){
    const data = {
      name: "Mercedes Benz | dos",
      image: 'https://gatopardo.com/wp-content/uploads/2017/10/mercedes-benz-clase-c-int2.jpg',
      categoryId:1
    }
    const url = 'http://api.escuelajs.co/api/v1/categories';
    this.carroHttpService.updateCar(651, data).subscribe
    (response => {
      console.log(response)
  });

  }

  deleteCar(){
    const url = "http://api.escuelajs.co/api/v1/categories/128";
    this.carroHttpService.destroyCar(61).subscribe(
      response => {
        console.log(response)
      }
    );
  }
}
