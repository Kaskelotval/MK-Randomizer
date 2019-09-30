import { Component, OnInit, Input } from "@angular/core";
import { MatListOption } from "@angular/material";

@Component({
  selector: "app-randomizer",
  templateUrl: "./randomizer.component.html",
  styleUrls: ["./randomizer.component.css"]
})
export class RandomizerComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  private readonly tracksToPlay = 4;

  private tournamentAmount = 0;
  private tracksTotal = 0;
  private chosenTracks = [];

  public mobile = false;

  ngOnInit() {
    console.log(this.data);
    this.tournamentAmount = this.data.length;
    this.tracksTotal = this.data
      .map(tournament => {
        return tournament.tracks.length;
      })
      .reduce((x, y) => {
        return x + y;
      });

    if (window.screen.width <= 700) {
      this.mobile = true;
    }
  }

  onResize(event) {
    if (event.target.innerWidth <= 700) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }

  public getListOfTracks() {
    return this.chosenTracks;
  }

  public getTournament(tournamentIdx) {
    return this.data[tournamentIdx];
  }

  public getTrack(tournamentIdx, trackIdx) {
    return this.data[tournamentIdx].tracks[trackIdx];
  }

  public getImageByName(name: string) {
    return "../../assets/images/" + name.replace(/ /g, "_") + ".png";
  }
  private getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  public getRandomTracks() {
    console.log("randomizing tracks");
    this.chosenTracks = [];
    let tournamentNumber;
    let trackNumber;
    let trackObject;

    do {
      tournamentNumber = this.getRandomInt(this.tournamentAmount);
      trackNumber = this.getRandomInt(this.getRandomInt(4));
      trackObject = {
        tournamentNumber: tournamentNumber,
        trackNumber: trackNumber
      };
      if (
        this.chosenTracks.find(
          obj =>
            obj.tournamentNumber == trackObject.tournamentNumber &&
            obj.trackNumber == trackObject.trackNumber
        )
      ) {
      } else {
        this.chosenTracks.push(trackObject);
      }
    } while (this.chosenTracks.length < this.tracksToPlay);
  }
}
