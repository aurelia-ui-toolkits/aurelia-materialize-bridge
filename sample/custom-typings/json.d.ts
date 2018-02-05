declare module "*.json" {
	const value: any;
	export default value;
}

declare module "raw-loader!*.html" {
	const value: any;
	export default value;
}

declare module "raw-loader!*" {
	const value: any;
	export default value;
}
