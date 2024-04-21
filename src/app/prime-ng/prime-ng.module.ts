import { NgModule } from "@angular/core";

import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { FieldsetModule } from "primeng/fieldset";
import { InputTextModule } from "primeng/inputtext";
import { MenubarModule } from "primeng/menubar";
import { PanelModule } from "primeng/panel";
import { StyleClassModule } from "primeng/styleclass";
import { TableModule } from "primeng/table";
import { ToolbarModule } from "primeng/toolbar";

@NgModule({
	declarations: [],
	exports: [
		ButtonModule,
		CardModule,
		FieldsetModule,
		InputTextModule,
		MenubarModule,
		PanelModule,
		StyleClassModule,
		TableModule,
		ToolbarModule,
	],
})
export class PrimeNgModule {}
