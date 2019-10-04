import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent implements OnInit {
  @Input() data: any;
  @Output() filterData = new EventEmitter<any[]>();

  private originalData;
  private banList = [];
  public showFilter: boolean;
  private goodTracksFilter = [
    { name: "Baby Park", tournament: "Crossing Cup" },
    { name: "Toad's Turnpike", tournament: "Shell Cup" }
  ];
  public quickFilterIsUsed: boolean;
  constructor() {}

  ngOnInit() {
    this.originalData = this.data;
    this.showFilter = false;
    this.quickFilterIsUsed = false;
  }
  public getImageByName(name: string) {
    return (
      "../../assets/images/" + name.replace(/ /g, "_").replace("'", "") + ".png"
    );
  }
  public addToBanList(trackName) {
    console.log("pushing " + trackName);
    this.banList.push(trackName);
  }
  public getTrackList() {
    return this.originalData;
  }
  public trackIsBanned(trackName) {
    return this.banList.find(track => {
      return track.name == trackName;
    })
      ? false
      : true;
  }

  public setFilter() {
    this.banList = this.goodTracksFilter;
    this.filterData.emit(this.banList);
    this.quickFilterIsUsed = true;
  }

  public toggleFilter() {
    this.showFilter = !this.showFilter;
  }
  public onTrackListControlChanged(list) {
    this.quickFilterIsUsed = false;
    this.banList = list.selectedOptions.selected.map(item => item.value);
    console.log("banned tracks: ", this.banList);
    this.filterData.emit(this.banList);
  }
}
