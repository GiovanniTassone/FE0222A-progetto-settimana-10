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
        <li
          *ngIf="item.completed === true && item.modificated === false"
          class="text-capitalize align-self-center fs-5 ps-3 py-1 align-items-center mt-3 text-center w-25 mx-auto rounded-pill complPers border border-dark d-flex justify-content-between"
        >
          {{ item.title }}
          <div>
            <button class="btn btn-danger rounded-pill me-1" (click)="cancella(item.id)">Elimina</button>
          </div>
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
      .complPers {
        background: linear-gradient(90deg, rgba(13, 110, 0, 1) 0%, rgba(26, 167, 0, 1) 100%);
        color: white;
        box-shadow: 5px 10px 10px #888888;
      }
      ul {
        padding-left: unset;
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

  cancella(id: number) {
    this.arTodo[id - 1].modificated = true;
  }
}
