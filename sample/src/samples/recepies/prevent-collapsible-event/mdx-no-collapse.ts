import { customAttribute, autoinject } from "aurelia-framework";

/**
 * This custom attribute can be used on an element inside of a
 * collapsible-header to prevent the element from triggering open/close
 * of the collapsible-body.
 *
 * However, in order for the element to register a click action, you must
 * use `click.trigger` and not `click.delegate`.
 */
@customAttribute("mdx-no-collapse")
@autoinject
export class MdxNoCollapseCustomAttribute {
	constructor(private element: Element) { }

	attached() {
		$(this.element).on("click.collapse", (evt) => {
			evt.stopPropagation();
		});
	}
}
