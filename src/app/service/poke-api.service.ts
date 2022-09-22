import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private urlList = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'

  constructor(
    private http: HttpClient
  ) { }

  get apiListPokemon(): Observable<any> {
    return this.http.get<any>(this.urlList).pipe(
      tap(res => res),

      tap(res => {
         res.results.map((resPokemon: any) => {
          this.apiGetPokemosStatus(resPokemon.url).subscribe(
            res => resPokemon.status = res
          )
         })
      })
    )
  }

  public apiGetPokemosStatus(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map(res => res));
  }
}
