import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable()
export class CountryService {
    private http = inject(HttpClient);
    //private countries: string[] = [];

    getCountries() {
        return this.http.get<any>('http://localhost:4200/assets/demo/data/countries.json')
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);
    }
}
