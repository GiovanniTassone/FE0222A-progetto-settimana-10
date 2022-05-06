import { Component, OnInit } from "@angular/core";
import { aggTask, riceviTask, arrayToDo } from "../service/todos.service";

@Component({
  template: `
    <div class="container text-center">
      <div class="">
        <h1>ToDo List</h1>
      </div>
      <div>
        <input class="form-control w-25 mx-auto" type="text" placeholder="Aggiungi un evento" [(ngModel)]="nomeTask" />
        <button class="btn btn-info mt-2 border border-primary border-2 fw-bold" (click)="add(nomeTask)">Aggiungi</button>
      </div>
      <div>
        <ul *ngFor="let item of expArrToDo">
          <li *ngIf="item.completed === false" class="ps-3 fs-5 mt-3 d-flex justify-content-between w-50 mx-auto bg-light rounded-pill border border-dark">
            {{ item.title }}<button class="btn btn-md btn-success rounded-pill w-25 fw-bold" (click)="taskFatto(item.id)">Fatto</button>
          </li>
        </ul>
        <p *ngIf="expArrToDo.length === 0" class="fs-3">{{ ricerca }}</p>
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

  constructor() {
    riceviTask().then((resp) => {
      this.expArrToDo = resp;
    });
    console.log(this.expArrToDo);
  }

  ngOnInit(): void {
    this.aggiorna();
  }

  aggiorna() {
    setTimeout(() => {
      if (this.expArrToDo.length === 0) {
        this.ricerca = "Nessuna task";
      } else {
        this.ricerca = "";
      }
    }, 2000);
  }

  add(todo: string) {
    aggTask(todo);
    setTimeout(() => {
      this.nomeTask = "";
    }, 2000);
  }

  taskFatto(num: number) {
    this.expArrToDo[num - 1].completed = true;
    console.log(this.expArrToDo);
  }
}
