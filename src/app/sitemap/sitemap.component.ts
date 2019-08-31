import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'sitemap',
    templateUrl: './sitemap.component.html',
    styleUrls: ['./sitemap.component.scss']
})
export class SitemapComponent implements OnInit {
    @Input() logoUrl: string;

    constructor() {}

    ngOnInit() {}
}
