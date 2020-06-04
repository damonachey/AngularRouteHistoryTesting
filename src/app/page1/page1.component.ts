import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "page1",
  templateUrl: "./page1.component.html"
})
export class Page1Component {
  public constructor(private titleService: Title) {
    this.titleService.setTitle("page1");
  }
}
