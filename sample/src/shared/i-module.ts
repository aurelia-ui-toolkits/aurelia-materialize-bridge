import { ISample } from "./i-sample";

export interface IModule {
	moduleId?: string;
	status: string;
	nav?: boolean;
	samples: {
		[index: string]: string | ISample;
	};
}
