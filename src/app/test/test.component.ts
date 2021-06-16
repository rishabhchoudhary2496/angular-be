import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"],
})
export class TestComponent implements OnInit {
  favouriteNumber: number;
  userName: string;
  presentDate: Date;

  constructor() {}

  ngOnInit(): void {
    this.favouriteNumber = 10;
    this.presentDate = new Date();
  }

  showData($event: any) {
    console.log("button is clicked!");
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}
