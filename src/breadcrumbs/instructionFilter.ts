import { NavigationInstruction } from "aurelia-router";

export class InstructionFilterValueConverter {
	toView(navigationInstructions: NavigationInstruction[]) {
		return navigationInstructions.filter(i => !!i.config.title);
	}
}
