// the following two imports are needed for consumer TS projects
// without them types will not be found
import "./augmentation/element";
import "./augmentation/materialize";
import { Dummy } from "./augmentation/aurelia-typed-observable";
import "./polyfills/append";
import "./polyfills/remove";
import "./polyfills/pad-start";
import { ConfigBuilder } from "./config-builder";
export function configure(frameworkConfiguration, configCallback) {
    const builder = frameworkConfiguration.container.get(ConfigBuilder);
    if (configCallback !== undefined && typeof (configCallback) === "function") {
        configCallback(builder);
    }
    if (builder.useGlobalResources) {
        frameworkConfiguration.globalResources(builder.globalResources);
    }
}
// this is needed to enforce loading order for requirejs
// otherwise typescript optimises imports and loads augmentation/aurelia-typed-observable after exports
let d = new Dummy();
// build-index-remove start
export * from "./exports";
// build-index-remove end
//# sourceMappingURL=index.js.map