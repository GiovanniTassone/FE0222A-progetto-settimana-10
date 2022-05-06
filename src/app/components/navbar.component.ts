import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  template: `
    <nav class="navbarPers navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="container d-flex justify-content-center">
          <div class="navbar-collapse collapse" id="navbarToggler">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="new-item fs-5">
                <a class="nav-link" aria-current="page" [routerLink]="['/']" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">ToDo</a>
              </li>
              <li class="new-item fs-5">
                <a class="nav-link" aria-current="page" [routerLink]="['/completed']" routerLinkActive="active">Completati</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      .active {
        color: #bf40bf !important;
        font-weight: bold;
      }
      .navbarPers {
        border-bottom: 5px solid #bf40bf;
        margin-bottom: 10px;
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
