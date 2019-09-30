import { Component } from "@angular/core";
import * as allTracks from "./data.json";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "legit-mk-randomizer";
  private readonly data = allTracks.tournaments;
  private filteredData;
  ngOnInit() {
    console.log("starting");
    this.filteredData = this.data;
  }
}
