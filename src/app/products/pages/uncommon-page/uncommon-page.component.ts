import { Component } from "@angular/core";
import { interval, tap } from "rxjs";

@Component({
	selector: "app-uncommon-page",
	templateUrl: "./uncommon-page.component.html",
	styleUrl: "./uncommon-page.component.css",
})
export class UncommonPageComponent {
	// 1. - i18nSelect Pipe
	public name: string = "Sergio";
	public gender: "male" | "female" | undefined = "male";
	public invitationMap = {
		male: "Mr.",
		female: "Ms.",
	};

	// 2. - i18nPlural Pipe
	public clients: string[] = [
		"Maria",
		"Eduardo",
		"Roberto",
		"Daniela",
		"Francisco",
		"Patricia",
	];

	public clientsMap = {
		"=0": "don't have clients waiting",
		"=1": "have 1 client waiting",
		other: "have # clients waiting",
	};

	// 3. - Slice Pipe
	public clients2: string[] = [...this.clients];

	// 4. - JSON Pipe
	// 5. - KeyValue Pipe
	public person = {
		name: "Sergio",
		age: "20",
		address: "Colombia",
	};

	// 6. - Async Pipe
	public myObservableTimer = interval(1000).pipe(
		tap((value) => console.log("tap:", value))
	);
	public promiseValue: Promise<string> = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("We have the Promise Data");
			console.log("Promise Data");
		}, 3500);
	});

	// ---------------------------------------
	// METHODS.

	// 1. - i18nSelect Pipe
	changeClient(): void {
		switch (this.gender) {
			case "male":
				this.name = "Andrea";
				this.gender = "female";
				break;
			case "female":
				this.name = "Anonymous";
				this.gender = undefined;
				break;
			default:
				this.name = "Sergio";
				this.gender = "male";
				break;
		}
	}

	// 2. - i18nPlural Pipe
	attendClient(): void {
		this.clients.shift();
	}
}
