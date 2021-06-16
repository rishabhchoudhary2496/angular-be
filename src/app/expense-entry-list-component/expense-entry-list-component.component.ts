import { DebugServiceService } from "./../debug-service.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-expense-entry-list-component",
  templateUrl: "./expense-entry-list-component.component.html",
  styleUrls: ["./expense-entry-list-component.component.css"],
  providers: [DebugServiceService],
})
export class ExpenseEntryListComponentComponent implements OnInit {
  constructor(private debugSerivce: DebugServiceService) {}

  ngOnInit(): void {
    this.debugSerivce.info("using debug service");
  }
}
