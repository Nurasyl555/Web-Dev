import { Component, inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HousingLocation } from './housingLocation';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
    url = 'http://localhost:3000/locations';

    async getAllHousingLocations(): Promise<HousingLocation[]> {
      const data = await fetch(this.url);
      return (await data.json()) ?? [];
    }

    async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
      const data = await fetch(`${this.url}/${id}`);
      return (await data.json()) ?? {};
    }

    submitApplication(firstName: string, lastName: string, email: string){
      console.log(
        `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
      );
    }
}
