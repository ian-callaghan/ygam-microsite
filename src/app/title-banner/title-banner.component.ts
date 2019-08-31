import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "title-banner",
  templateUrl: "./title-banner.component.html",
  styleUrls: ["./title-banner.component.scss"]
})
export class TitleBannerComponent implements OnInit {
  @Input() imgUrl: string;

  constructor() {}

  ngOnInit() {}
}
