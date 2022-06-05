import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonNames } from '../static-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  filteredOptions: Observable<string[]>;
  searchText: FormControl = new FormControl();
  constructor(private router: Router) {
    this.filteredOptions = this.searchText.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
   }

  ngOnInit(): void {
    this._filter('');
  }

  private _filter = (value: string): string[] => {
    const filterValue = value.toLowerCase();

    return PokemonNames.filter((option: string) => option.toLowerCase().includes(filterValue));
  }

  search(name: string): void {
    this.router.navigate([`pokemon/${name.toLowerCase()}`]);
  }

  goToList(): void {
    this.router.navigate(['/']);
  }

}
