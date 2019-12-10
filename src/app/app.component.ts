import { Component, OnInit } from "@angular/core";
import { TutorsService } from "./services/tutors/tutors.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

    private ready = false;
    private tutors: any;

    constructor(
        private tutorsService: TutorsService
    ) { }

    async ngOnInit() {
        this.tutors = (await this.tutorsService.get({ limit: 9, start: 0 })).result.data;
        this.ready = true;
    }
}
