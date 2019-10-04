import { Component, OnInit, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-randomizer",
  templateUrl: "./randomizer.component.html",
  styleUrls: ["./randomizer.component.css"]
})
export class RandomizerComponent implements OnInit {
  @Input() data: any;
  @Input() bannedTracks: any[];
  constructor() {}

  private readonly tracksToPlay = 4;

  private tracksTotal = 0;
  private chosenTracks = [];
  private maxLoops = 200;

  public mobile = false;

  ngOnInit() {
    this.tracksTotal = this.data.length;
  }

  public getListOfTracks() {
    return this.chosenTracks;
  }

  public getTournament(tournamentName) {
    return this.data[tournamentName];
  }

  public getTrack(tournamentIdx, trackIdx) {
    return this.data[tournamentIdx].tracks[trackIdx];
  }

  public getImageByName(name: string) {
    return (
      "../../assets/images/" + name.replace(/ /g, "_").replace("'", "") + ".png"
    );
  }
  private getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  public getRandomTracks() {
    console.log("randomizing tracks");
    this.chosenTracks = [];
    let trackNumber;
    let trackObject;
    let loops = 0;
    do {
      trackNumber = this.getRandomInt(this.getRandomInt(this.tracksTotal));
      trackObject = this.data[trackNumber];
      if (this.chosenTracks.find(obj => obj.name == trackObject.name)) {
        console.log("Already in list");
      } else if (this.bannedTracks.find(obj => obj.name == trackObject.name)) {
        console.log(trackObject.name + " is banned");
      } else {
        this.chosenTracks.push(trackObject);
      }
      loops++;
      if (loops > this.maxLoops) break;
    } while (this.chosenTracks.length < this.tracksToPlay);
  }
}
