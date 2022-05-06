import { Component, OnInit } from "@angular/core";
import { aggTask, riceviTask, arrayToDo } from "../service/todos.service";

@Component({
  template: `
    <div class="container">
      <h1 class="text-center">Task completati:</h1>
      <p *ngIf="arTodo.length === 0" class="fs-3 text-center">
        {{ ricerca }}
      </p>
      <div *ngIf="arTodo.length !== 0">
        <p id="stampaRisultato" class="fs-3 text-center" [innerText]="ricercaAgg"></p>
      </div>
      <ul *ngFor="let item of arTodo">
        <li *ngIf="item.completed === true" class="fs-5 mt-3 text-center w-25 mx-auto rounded-pill complPers">
          {{ item.title }}
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
      .complPers {
        background: linear-gradient(90deg, rgba(13, 110, 0, 1) 0%, rgba(26, 167, 0, 1) 100%);
        color: white;
      }
    `,
  ],
})
export class CompletatiComponent implements OnInit {
  arTodo = arrayToDo;
  ricerca = "Ricerca di Tasks...";
  ricercaAgg = "";
  constructor() {}

  ngOnInit(): void {
    this.aggiorna();
  }

  ricercaCompletati(): any {
    let ricercato: boolean = false;
    for (let i = 0; i < this.arTodo.length; i++) {
      if (this.arTodo[i].completed === true) {
        ricercato = true;
      }
    }
    if (ricercato === true) {
      document.querySelector("#stampaRisultato")?.remove();
    } else {
      this.ricercaAgg = "Ricerca di Tasks...";
      setTimeout(() => {
        this.ricercaAgg = "Nessuna task";
      }, 2000);
    }
  }

  aggiorna() {
    if (this.arTodo.length === 0) {
      setTimeout((): any => {
        return (this.ricerca = "Nessuna task");
      }, 2000);
    } else {
      this.ricercaCompletati();
    }
  }
}
