import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Route } from "@angular/router";

import { AppComponent } from "./app.component";
import { TodoComponent } from "./pages/todo.component";
import { CompletatiComponent } from "./pages/completati.component";
import { NavbarComponent } from "./components/navbar.component";

const routes: Route[] = [
  {
    path: "",
    component: TodoComponent,
  },
  {
    path: "completed",
    component: CompletatiComponent,
  },
];

@NgModule({
  declarations: [AppComponent, TodoComponent, CompletatiComponent, NavbarComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
