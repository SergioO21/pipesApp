import { Component } from "@angular/core";
import { Color, Hero } from "../../interfaces";

@Component({
	selector: "product-order",
	templateUrl: "./order.component.html",
	styles: ``,
})
export class OrderComponent {
	public isUpperCase: boolean = false;
	public heroesFilter: keyof Hero | null = null;
	public heroes: Hero[] = [
		{
			name: "Superman",
			canFly: true,
			color: Color.blue,
		},
		{
			name: "Batman",
			canFly: false,
			color: Color.black,
		},
		{
			name: "Daredevil",
			canFly: false,
			color: Color.red,
		},
		{
			name: "Robin",
			canFly: false,
			color: Color.green,
		},
		{
			name: "Green Lantern",
			canFly: true,
			color: Color.green,
		},
	];

	toggleUppercase(): void {
		this.isUpperCase = !this.isUpperCase;
	}

	changeFilter(filter: keyof Hero): void {
		this.heroesFilter = filter;
	}
}
