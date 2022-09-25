import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private setAllPokemon: any = []
  public listAllPokemon: any = []

  public loading: boolean = false
  public error: boolean = false

  constructor(
    private pokeApiService: PokeApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListPokemon.subscribe({
      next: (res) => {
        this.setAllPokemon = res.results
        this.listAllPokemon = this.setAllPokemon

        this.loading = !this.loading
      },
      error: (err) => {
        this.error = !this.error
      }
    })
  }

  public navDetails(id: number) {
    this.router.navigate(['details', id])
  }

  //ATC! Duvida no entendimento do filtro voltar ao valor antes da pesquisa. Hands On 12
  public getSearch(value: any) {
    const filter = this.setAllPokemon.filter( (res: any) => {
      return !res.name.indexOf(value.toLowerCase())
    })
    this.listAllPokemon = filter
  }

}
