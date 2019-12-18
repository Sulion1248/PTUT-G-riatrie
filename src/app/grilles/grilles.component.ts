import { Requete } from './../requete/requete';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grilles',
  templateUrl: './grilles.component.html',
  styleUrls: ['./grilles.component.css']
})
export class GrillesComponent implements OnInit {
  loading: boolean;
  grilles: any;
  vide = false;

  constructor(
    private route: ActivatedRoute,
    private reqsl: Requete
    ) {
   }

  ngOnInit() {
    this.loading = true;
    // tslint:disable-next-line: no-string-literal
    const Idsejour = (this.route.snapshot['_routerState'].url.split('/')[2]);
    this.reqsl.getgrilles(Idsejour).then(
      (rep) => {
        this.loading = false;
        if (rep === 'vide') {
          this.vide = true;
      } else {
        this.grilles = rep;
        console.log(this.grilles);

      }
  });
}
plus1(numero, num) {
  if (this.grilles[numero][num] < 1) {
    this.grilles[numero][num] = this.grilles[numero][num] + 0.5;
  }
}

moins1(numero, num) {
  if (this.grilles[numero][num] > 0) {
    this.grilles[numero][num] = this.grilles[numero][num] - 0.5;
  }
}



}
