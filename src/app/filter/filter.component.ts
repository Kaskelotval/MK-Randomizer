import { Component, OnInit, Output, Input } from "@angular/core";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent implements OnInit {
  @Input() data: any;
  @Output() bannedTracks: any;

  private originalData = this.data;
  private trackList = [];
  private banList = [];
  constructor() {}

  ngOnInit() {
    // console.log("Setting original Data to", this.data);
    this.originalData = this.data;
    // console.log("Initializing tracklist as empty");
    this.trackList = [];
    // console.log("Building original tracklist");
    this.createTracklist(this.originalData);
    // console.log("original tracklist:");
    // console.log(this.trackList);
  }
  private createTracklist(tournaments) {
    tournaments.map(tournament => {
      tournament.tracks.map(track => {
        this.trackList.push(track.name);
      });
    });
  }
  public addToBanList(trackName) {
    console.log("pushing " + trackName);
    this.banList.push(trackName);
  }

  public trackIsIncluded(trackName) {
    return this.banList.find(name => {
      return name == trackName;
    })
      ? false
      : true;
  }
}
