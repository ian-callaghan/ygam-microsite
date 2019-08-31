import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
    @Input() imageUrl: string;
    @Input() title: string;
    @Input() url: string;
    @Input() button: string;

    constructor() {}

    ngOnInit() {}

    onClick() {
        window.open(this.url);
    }
}
