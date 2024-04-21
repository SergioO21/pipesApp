import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
	BasicsPageComponent,
	NumbersPageComponent,
	OrderComponent,
	UncommonPageComponent,
} from "./pages";

const routes: Routes = [
	{
		path: "",
		component: BasicsPageComponent,
	},
	{
		path: "numbers",
		component: NumbersPageComponent,
	},
	{
		path: "uncommon",
		component: UncommonPageComponent,
	},
	{
		path: "custom",
		component: OrderComponent,
	},
	{
		path: "**",
		redirectTo: "",
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductsRoutingModule {}
