import { autoinject } from "aurelia-framework";
import { Router } from "aurelia-router";

@autoinject
export class MdWell {
	constructor(private router: Router) { }
}
