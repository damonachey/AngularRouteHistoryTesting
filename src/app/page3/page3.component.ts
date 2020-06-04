import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "page3",
  templateUrl: "./page3.component.html"
})
export class Page3Component {
  public constructor(private titleService: Title) {
    this.titleService.setTitle("page3");
  }
}
