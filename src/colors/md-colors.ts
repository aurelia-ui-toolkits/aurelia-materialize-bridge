import * as au from "../aurelia";

@au.customElement("md-colors")
export class MdColors {
	constructor(private cs: au.MdColorsService, private bindingEngine: au.BindingEngine) { }

	@au.bindable
	primaryColor: string = this.cs.primaryColor;
	primaryColorChanged() {
		this.cs.primaryColor = this.primaryColor;
		this.cs.updatePrimaryShades();
	}

	primaryColorLight: string = this.cs.primaryColorLight;
	primaryColorDark: string = this.cs.primaryColorDark;

	@au.bindable
	secondaryColor: string = this.cs.secondaryColor;
	secondaryColorChanged() {
		this.cs.secondaryColor = this.secondaryColor;
	}

	@au.bindable
	errorColor: string = this.cs.errorColor;
	errorColorChanged() {
		this.cs.errorColor = this.errorColor;
	}

	@au.bindable
	successColor: string = this.cs.successColor;
	successColorChanged() {
		this.cs.successColor = this.successColor;
	}

	@au.bindable
	linkColor: string = this.cs.linkColor;
	linkColorChanged() {
		this.cs.linkColor = this.linkColor;
	}

	subscriptions: au.Disposable[] = [];

	attached() {
		this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "primaryColor").subscribe(() => this.primaryColor = this.cs.primaryColor));
		this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "primaryColorLight").subscribe(() => this.primaryColorLight = this.cs.primaryColorLight));
		this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "primaryColorDark").subscribe(() => this.primaryColorDark = this.cs.primaryColorDark));
		this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "secondaryColor").subscribe(() => this.secondaryColor = this.cs.secondaryColor));
		this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "errorColor").subscribe(() => this.errorColor = this.cs.errorColor));
		this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "successColor").subscribe(() => this.successColor = this.cs.successColor));
		this.subscriptions.push(this.bindingEngine.propertyObserver(this.cs, "linkColor").subscribe(() => this.linkColor = this.cs.linkColor));
		this.primaryColorLight = this.cs.primaryColorLight;
		this.primaryColorDark = this.cs.primaryColorDark;
	}

	detached() {
		this.subscriptions.forEach(x => x.dispose());
	}
}
