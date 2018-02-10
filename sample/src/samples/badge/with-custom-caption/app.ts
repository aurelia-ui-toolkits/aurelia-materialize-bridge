import { bindable, computedFrom } from "aurelia-framework";

export class App {
	@bindable
	spamCount: number = 131;

	addSomeSpam() {
		this.spamCount += this.getRandomSpamAmount();
	}

	cleanSomeSpam() {
		this.spamCount -= this.getRandomSpamAmount();

		if (this.spamCount < 0) {
			this.spamCount = 0;
		}
	}

	@computedFrom("spamCount")
	get spamCaption() {
		let caption = null;

		if (this.spamCount > 100) {
			caption = "Spam overload!!!";
		} else if (this.spamCount > 80) {
			caption = "Spam level: critical.";
		} else if (this.spamCount > 30) {
			caption = "Spam level: concerning";
		}

		return caption;
	}

	getRandomSpamAmount(): number {
		return Math.floor(Math.random() * 25) + 1;
	}
}
