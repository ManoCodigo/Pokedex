import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon'
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species'

  public pokemon: any

  constructor(
    private routerActive: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.getPokemon
  }

  get getPokemon() {
    const id = this.routerActive.snapshot.params['id']
    const pokemon = this.pokeApiService.apiGetPokemosStatus(`${this.urlPokemon}/${id}`)
    const name = this.pokeApiService.apiGetPokemosStatus(`${this.urlName}/${id}`)

    return forkJoin([pokemon, name]).subscribe(
      res => this.pokemon = res
    )
  }

}
