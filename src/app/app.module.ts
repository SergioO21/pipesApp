import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { SharedModule } from "./shared/shared.module";

// Locale Config
import localeEs from "@angular/common/locales/es";
import localeFr from "@angular/common/locales/fr";
import localePt from "@angular/common/locales/pt";
import localeKo from "@angular/common/locales/ko";
import localeZh from "@angular/common/locales/zh";

import { registerLocaleData } from "@angular/common";

registerLocaleData(localeEs);
registerLocaleData(localeFr);
registerLocaleData(localePt);
registerLocaleData(localeKo);
registerLocaleData(localeZh);

@NgModule({
	declarations: [AppComponent],
	imports: [
		AppRoutingModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		SharedModule,
	],
	providers: [
		{
			provide: LOCALE_ID,
			useValue: "en-US",
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
