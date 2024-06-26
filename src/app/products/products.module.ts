import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsRoutingModule } from "./products-routing.module";
import { PrimeNgModule } from "../prime-ng/prime-ng.module";

import { ProductsComponent } from "./products.component";
import {
	BasicsPageComponent,
	NumbersPageComponent,
	OrderComponent,
	UncommonPageComponent,
} from "./pages";
import { CanFlyPipe, ColorPipe, SortByPipe, ToggleCasePipe } from "./pipes";

@NgModule({
	declarations: [
		ProductsComponent,
		BasicsPageComponent,
		NumbersPageComponent,
		UncommonPageComponent,
		OrderComponent,

		// Pipes
		CanFlyPipe,
		ColorPipe,
		SortByPipe,
		ToggleCasePipe,
	],
	imports: [CommonModule, ProductsRoutingModule, PrimeNgModule],
})
export class ProductsModule {}
