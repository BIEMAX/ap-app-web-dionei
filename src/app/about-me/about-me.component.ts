import { Component, OnInit } from '@angular/core';
import { AboutModels } from 'app/models/about.models';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  listInfoAbout: Array<AboutModels> = [];

  ngOnInit(): void {
    this.createInfos();
  }

  createInfos() {
    this.listInfoAbout = [
      new AboutModels(
        'Dionei', 
        'This is me:', 
        true, 
        'https://media-exp1.licdn.com/dms/image/C4E03AQHNrvo7buReoQ/profile-displayphoto-shrink_800_800/0/1628681073467?e=1665014400&v=beta&t=enOf2MnXr2wejHDl9UqXM3WY2x3mWqY6lv-uj0tHMHk', 
        `Um cara determinado, que começou muito novo na área de TI 
        e hoje é completamente apaixonado pelo o que faz.
        
        Tenho 27 anos, sou casado com uma linda mulher, 
        atualmente sem filhos e sem animais de estimação.

        Um apaixonado por literatura, Marvel, DC Comics,
        senhor dos anéis, jogos de mais variados tipos.

        Sou um nerd desde sempre, e sou completamente
        fascinado pela física aplicada, quântica, 
        matemática e astronomia (estudo dos astros).
        
        `,
        false, false
      ),
      new AboutModels(
        'Hobies', '', false, '',
        `Dentre alguns dos meus hobies, estão:
          -Academia
          -Jogar futebol
          -Andar de bike (manobras radicais)
          -Jogar no PS4
          -Jogar no PC
          -Ler livros
          -Ser dono de casa
          -Cozinhar
          -Assistir séries
          -Viajar
        `,
        false, false
      ),
      new AboutModels(
        'Sonhos e metas', '', false, '',
        `
        Um dos meus maiores sonhos é poder ir 
        morar fora do país, desde pequeno.
        Sonho em um dia poder dar aulas em 
        faculdades, pois a minha meta é me 
        formar doutor em tecnologia da informação.
        `,
        false, false
      ),
    ]
  }

}