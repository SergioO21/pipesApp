import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
	selector: "shared-menu",
	templateUrl: "./menu.component.html",
	styles: ``,
})
export class MenuComponent implements OnInit {
	public menuItems: MenuItem[] = [];

	ngOnInit(): void {
		this.menuItems = [
			{
				label: "Angular Pipes",
				icon: "pi pi-desktop",
				items: [
					{
						label: "Texts and cards",
						icon: "pi pi-align-left",
						routerLink: [""],
					},
					{
						label: "Numbers",
						icon: "pi pi-dollar",
						routerLink: ["/numbers"],
					},
					{
						label: "Uncommon",
						icon: "pi pi-globe",
						routerLink: ["/uncommon"],
					},
				],
			},
			{
				label: "Personalized Pipes",
				icon: "pi pi-cog",
				items: [
					{
						label: "Custom Pipes",
						icon: "pi pi-cog",
						routerLink: ["/custom"],
					},
				],
			},
		];
	}
}
