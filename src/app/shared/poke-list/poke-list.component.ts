import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit, OnDestroy {

  private setAllPokemon: any = []
  public listAllPokemon: any = []
  public inscricao_PokemonPage!: Subscription

  public loading: boolean = false
  public error: boolean = false

  constructor(
    private pokeApiService: PokeApiService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPokemonPage(0)
  }

  public getPokemon() {
    this.pokeApiService.apiListPokemon.subscribe({
      next: (res) => {
        this.setAllPokemon = res.results
        this.listAllPokemon = this.setAllPokemon
        console.log(this.listAllPokemon);

        this.loading = !this.loading
      },
      error: (err) => {
        this.error = !this.error
      }
    })
  }

  public getPokemonPage(offset: number) {
    this.inscricao_PokemonPage = this.pokeApiService.pokemonPage(offset).subscribe({
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

  public offset = 0
  public direction: any
  public chancePage(event: any) {

    if(event.previousPageIndex < event.pageIndex) {
      this.offset += 20
      this.getPokemonPage(this.offset)
      this.loading = !this.loading
      this.direction = this.directionFade(false)
    } else {
      this.offset -= 20
      this.getPokemonPage(this.offset)
      this.loading = !this.loading
      this.direction = this.directionFade(true)
    }

  }

  directionFade(acao: boolean) {
    return acao ? 'fadeInLeft' : 'fadeInRight'
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

  ngOnDestroy() {
    this.inscricao_PokemonPage.unsubscribe()
  }

}
