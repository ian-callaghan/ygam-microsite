import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { TitleBannerComponent } from "./title-banner/title-banner.component";
import { DateBarComponent } from "./date-bar/date-bar.component";
import { IntroBlockComponent } from "./intro-block/intro-block.component";
import { HttpClientModule } from "@angular/common/http";
import { ComponentsModule } from "./components.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
