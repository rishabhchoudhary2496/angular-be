import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { ExpenseEntryComponent } from "./expense-entry/expense-entry.component";
import { TestComponent } from "./test/test.component";
import { ExpenseEntryListComponentComponent } from "./expense-entry-list-component/expense-entry-list-component.component";
import { FormsModule } from "@angular/forms";
import { SampleFormComponent } from "./sample-form/sample-form.component";

const routes: Routes = [
  { path: "list", component: ExpenseEntryListComponentComponent },
  { path: "form1", component: SampleFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    TestComponent,
    ExpenseEntryListComponentComponent,
    SampleFormComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
