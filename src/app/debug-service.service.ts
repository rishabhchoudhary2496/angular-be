import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DebugServiceService {
  constructor() {}
  info(message: String): void {
    console.log(message);
  }
}
