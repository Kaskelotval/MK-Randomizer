import { Component } from "@angular/core";
import * as allTracks from "./data.json";
import * as goodTracks from "./dataRemoved.json";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "legit-mk-randomizer";
  private readonly data = allTracks.tracks;
  private readonly goodData = goodTracks.tracks;
  public filteredData;
  public banList = [];

  ngOnInit() {
    console.log("starting");
    console.log("Data: ", this.data);
    this.filteredData = this.data;
  }

  public updateBanList($event) {
    this.banList = $event;
  }
}
