import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { ExpenseEntryComponent } from "./expense-entry/expense-entry.component";
import { TestComponent } from "./test/test.component";
import { ExpenseEntryListComponentComponent } from "./expense-entry-list-component/expense-entry-list-component.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SampleFormComponent } from "./sample-form/sample-form.component";
import { TemplateFormsComponent } from "./template-forms/template-forms.component";
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";

const routes: Routes = [
  { path: "list", component: ExpenseEntryListComponentComponent },
  { path: "form1", component: SampleFormComponent },
  { path: "checkout", component: ReactiveFormsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    TestComponent,
    ExpenseEntryListComponentComponent,
    SampleFormComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
