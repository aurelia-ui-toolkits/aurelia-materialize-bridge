import { IModule } from "./i-module";

export interface ICategory {
	[index: string]: IModule;
}
