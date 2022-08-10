import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from 'src/app/shared/interfaces/cocktail.interface';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {
  @Input() public cocktail: Cocktail;

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {}
  
  public addToPanier(): void {
    this.panierService.addToPanier(this.cocktail.ingredients);
  }
}
