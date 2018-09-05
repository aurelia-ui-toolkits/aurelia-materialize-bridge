// this script replaces colors with placeholders in SASS files

// tslint:disable-next-line:no-namespace
namespace sass {
	// tslint:disable-next-line:no-var-requires
	let replace = require("replace-in-file");

	const options = {
		files: "sass-copy/**/*.scss",
		from: [
			/\$primary-color: .* !default;/g,
			/\$primary-color-light: .* !default;/g,
			/\$primary-color-dark: .* !default;/g,
			/\$secondary-color: .* !default;/g,
			/\$success-color: .* !default;/g,
			/\$error-color: .* !default;/g,
			/\$link-color: .* !default;/g,

			// replace alternative names with originals
			/\$(tabs-text-color|footer-bg-color)([;,])/g,
			/\$(tabs-underline-color)([;,])/g,
			/\$(badge-bg-color|button-raised-background|button-floating-background|datepicker-date-bg|datepicker-selected|dropdown-color|input-focus-color|radio-fill-color|switch-bg-color|spinner-default-color|collection-active-bg-color|collection-link-color|progress-bar-color)([;,])/g,

			/lighten\(\$(primary-color|secondary-color), ([0-9]{1,2})%\)/g,
			/darken\(\$(primary-color|secondary-color), ([0-9]{1,2})%\)/g,
			/desaturate\(\$(primary-color|secondary-color), ([0-9]{1,2})%\)/g,
			/desaturate\(([a-z]*_p-secondary-color_[0-9]*), ([0-9]{1,2})%\)/g,
			/transparentize\(([a-z]*_p-secondary-color_[0-9]*), \.([0-9]{1,3})\)/g,
			/transparentize\(\$(secondary-color|primary-color-light), \.([0-9]{1,3})\)/g,
			/rgba\(\$(primary-color|secondary-color), \.([0-9]+)\)/g,
		],
		to: [
			"$primary-color: md-primary-color !default;",
			"$primary-color-light: md-primary-color-light !default;",
			"$primary-color-dark: md-primary-color-dark !default;",
			"$secondary-color: md-secondary-color !default;",
			"$success-color: md-success-color !default;",
			"$error-color: md-error-color !default;",
			"$link-color: md-link-color !default;",

			"$primary-color$2",
			"$primary-color-light$2",
			"$secondary-color$2",

			"lighten_p-$1_$2",
			"darken_p-$1_$2",
			"desaturate_p-$1_$2",
			"desaturate_$1_$2",
			"transparentize_$1_dot$2",
			"transparentize_p-$1_dot$2",
			"rgba_p-$1_dot$2",
		]
	};

	replace.sync(options);
}
