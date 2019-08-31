import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { TitleBannerComponent } from './title-banner/title-banner.component';
import { DateBarComponent } from './date-bar/date-bar.component';
import { IntroBlockComponent } from './intro-block/intro-block.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ContentBlockComponent } from './content-block/content-block.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { QuoteComponent } from './quote/quote.component';
import { MailChimpComponent } from './mail-chimp/mail-chimp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SitemapComponent } from './sitemap/sitemap.component';
import { SitemapBlockComponent } from './sitemap-block/sitemap-block.component';
import { TilesComponent } from './tiles/tiles.component';
import { TileComponent } from './tile/tile.component';

@NgModule({
    declarations: [
        HeaderComponent,
        TitleBannerComponent,
        DateBarComponent,
        IntroBlockComponent,
        ContentBlockComponent,
        YoutubeComponent,
        QuoteComponent,
        MailChimpComponent,
        SitemapComponent,
        SitemapBlockComponent,
        TilesComponent,
        TileComponent
    ],
    imports: [BrowserModule, HttpClientModule, HttpClientJsonpModule, ReactiveFormsModule],
    providers: [],
    exports: [
        HeaderComponent,
        TitleBannerComponent,
        DateBarComponent,
        IntroBlockComponent,
        ContentBlockComponent,
        YoutubeComponent,
        QuoteComponent,
        MailChimpComponent,
        SitemapComponent,
        SitemapBlockComponent,
        TilesComponent,
        TileComponent
    ]
})
export class ComponentsModule {}
