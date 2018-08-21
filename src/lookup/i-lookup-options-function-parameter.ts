/**
 * Type of a parameter passed to the options function
 * @argument T The type of bound value
 */
export interface ILookupOptionsFunctionParameter<T> {
	filter?: string;
	value?: T;
}
