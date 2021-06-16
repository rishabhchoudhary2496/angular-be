import { Component, OnInit } from "@angular/core";
import { ExpenseEntry } from "../expense-entry";

@Component({
  selector: "app-expense-entry",
  templateUrl: "./expense-entry.component.html",
  styles: ["p {color:red}"],
  styleUrls: ["./expense-entry.component.css"],
})
export class ExpenseEntryComponent implements OnInit {
  title: string;
  fruits: string[];
  isLogIn: boolean = false;
  isLogOut: boolean = true;
  expenseEntry: ExpenseEntry;
  studentArr: any[] = [
    {
      id: 1,
      name: "student1",
    },
    {
      id: 2,
      name: "student2",
    },
    {
      id: 3,
      name: "student3",
    },
    {
      id: 4,
      name: "student4",
    },
  ];
  trackByData(index: number, studentArr: any): number {
    return studentArr.id;
  }
  constructor() {}

  ngOnInit(): void {
    this.title = "expense-entry";
    this.expenseEntry = {
      id: 1,
      amount: 100,
      item: "Pizza",
      category: "Food",
      createdOn: new Date(2020, 6, 1, 10, 10, 10),
      location: "Sector 15 Chandigarh",
      spendOn: new Date(2020, 6, 1, 10, 10, 10),
    };
    this.fruits = ["orange", "mango", "apple"];
  }
}
