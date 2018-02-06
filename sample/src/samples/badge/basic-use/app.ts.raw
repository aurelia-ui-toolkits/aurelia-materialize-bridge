import { Router } from "aurelia-router";
import { autoinject } from "aurelia-framework";
import * as html from "raw-loader!./app.html";
// import ts from "raw-loader!./app";

@autoinject
export class App {
	constructor(private router: Router) {
		this.html = html.default;
	}

	html: any;

	activate() {
		//const demoCode = require('!!raw-loader!./app');
		console.log(html);
	}
}
