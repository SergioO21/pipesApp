import { Component } from "@angular/core";

@Component({
	selector: "app-numbers-page",
	templateUrl: "./numbers-page.component.html",
	styleUrl: "./numbers-page.component.css",
})
export class NumbersPageComponent {
	public totalSells: number = 4576457.3456;
	public percent: number = 0.4562;
}
