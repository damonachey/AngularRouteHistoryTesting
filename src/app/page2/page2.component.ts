import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "page2",
  templateUrl: "./page2.component.html"
})
export class Page2Component {
  public constructor(private titleService: Title) {
    this.titleService.setTitle("page2");
  }

  public canDeactivate() {
    return false;
  }
}
