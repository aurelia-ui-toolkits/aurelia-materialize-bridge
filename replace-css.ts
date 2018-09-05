// this script replaces placeholders with binding expressions in resulting CSS file

// tslint:disable-next-line:no-namespace
namespace css {
	// tslint:disable-next-line:no-var-requires
	let replace = require("replace-in-file");
	let fs = require("fs");

	let optionsCss = {
		files: "sass-copy/materialize.css",
		from: [
			/p-primary-color-light/g,
			/p-primary-color-dark/g,
			/p-primary-color/g,
			/p-secondary-color/g,
			/p-success-color/g,
			/p-error-color/g,
			/p-link-color/g,
			/md-primary-color-light/g,
			/md-primary-color-dark/g,
			/md-primary-color/g,
			/md-secondary-color/g,
			/md-success-color/g,
			/md-error-color/g,
			/md-link-color/g,

			// these are only 2 occurrences, do them explicitly
			/desaturate_lighten_([a-zA-Z]*)_([0-9]+)_([0-9]+)/g,
			/transparentize_desaturate_([a-zA-Z]*)_([0-9]+)_dot([0-9]*)/g,

			/rgba_([a-zA-Z]*)_dot([0-9]*)/g,
			/transparentize_([a-zA-Z]*)_dot([0-9]*)/g,
			/desaturate_([a-zA-Z]*)_([0-9]*)/g,
			/lighten_([a-zA-Z]*)_([0-9]*)/g,
			/darken_([a-zA-Z]*)_([0-9]*)/g,
		],
		to: [
			"primaryColorLight",
			"primaryColorDark",
			"primaryColor",
			"secondaryColor",
			"successColor",
			"errorColor",
			"linkColor",
			"${primaryColorLight}",
			"${primaryColorDark}",
			"${primaryColor}",
			"${secondaryColor}",
			"${successColor}",
			"${errorColor}",
			"${linkColor}",

			"${cs.desaturate(cs.lighten($1, $2), $3)}",
			"${cs.transparentize(cs.desaturate($1, $2), 0.$3)}",

			"${cs.rgba($1, 0.$2)}",
			"${cs.transparentize($1, 0.$2)}",
			"${cs.desaturate($1, $2)}",
			"${cs.lighten($1, $2)}",
			"${cs.darken($1, $2)}",
		]
	};

	replace.sync(optionsCss);

	let styles = fs.readFileSync("./" + optionsCss.files);
	let optionsHtml = {
		files: "src/colors/md-colors.html",
		from: /(\/\* style-replace-start \*\/)[\s\S]*(\/\* style-replace-end \*\/)/,
		to: "$1" + styles + "$2"
	};
	replace.sync(optionsHtml);
}
