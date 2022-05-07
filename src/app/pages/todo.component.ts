import { Component, OnInit } from "@angular/core";
import { aggTask, riceviTask, arrayToDo, ricerca1, addiz, sottr } from "../service/todos.service";

@Component({
  template: `
    <div class="container text-center">
      <div class="">
        <h1>ToDo List</h1>
      </div>
      <div>
        <input class="text-capitalize form-control w-25 mx-auto" type="text" placeholder="Aggiungi un evento" [(ngModel)]="nomeTask" />
        <button class="btn btn-info mt-2 border border-primary border-2 fw-bold" (click)="add(nomeTask)">Aggiungi</button>
      </div>
      <div>
        <ul *ngFor="let item of expArrToDo">
          <li *ngIf="item.completed === false" class="py-1 fs-5 mt-3 d-flex justify-content-between w-50 mx-auto bg-light rounded-pill border border-dark">
            <span *ngIf="item.modificated === false" class="text-capitalize align-self-center ps-4 fw-bold">{{ item.title }}</span>
            <input type="text" *ngIf="item.modificated === true" [(ngModel)]="item.title" class="text-capitalize rounded-pill ps-3 ms-1" />
            <div class="me-2">
              <button class="btn btn-md btn-warning rounded-pill w-50 fw-bold pe-5 border" (click)="item.modificated = true" *ngIf="item.modificated === false">
                Modifica
              </button>
              <button class="btn btn-md btn-info rounded-pill w-100 fw-bold pe-6 border" (click)="item.modificated = false" *ngIf="item.modificated === true">
                Applica Modifiche
              </button>
              <button class="btn btn-md btn-success rounded-pill w-50 fw-bold" (click)="taskFatto(item.id)" *ngIf="item.modificated === false">Fatto</button>
            </div>
          </li>
        </ul>
        <p *ngIf="cerca === 0" class="text-capitalize fs-3 mt-3">{{ ricerca }}</p>
      </div>
    </div>
  `,
  styles: [
    `
      ul {
        list-style-type: none;
      }
      li {
        box-shadow: 5px 10px 10px #888888;
      }
    `,
  ],
})
export class TodoComponent implements OnInit {
  ricerca = "Ricerca di Tasks...";
  nomeTask = "";
  expArrToDo = arrayToDo;
  cerca = ricerca1;

  constructor() {
    riceviTask().then((resp) => {
      this.expArrToDo = resp;
    });
  }

  ngOnInit(): void {
    this.aggiorna();
  }

  aggiorna() {
    setTimeout(() => {
      if (this.cerca === 0) {
        this.ricerca = "Nessuna task";
      } else {
        this.ricerca = "";
      }
    }, 2000);
  }

  add(todo: string) {
    addiz();
    aggTask(todo);
    setTimeout(() => {
      this.cerca = ricerca1;
      this.nomeTask = "";
    }, 2000);
  }

  taskFatto(num: number) {
    this.expArrToDo[num - 1].completed = true;
    sottr();
    this.cerca = ricerca1;

    if (this.cerca === 0) {
      this.aggiorna();
    }
  }
}
