import { Component, OnInit, Input } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "youtube",
  templateUrl: "./youtube.component.html",
  styleUrls: ["./youtube.component.scss"]
})
export class YoutubeComponent implements OnInit {
  public safeUrl: SafeResourceUrl;

  @Input() set url(value) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}
}
