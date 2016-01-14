declare module 'plugin-builder' {
  import { Aurelia }  from 'aurelia-framework';
  export class ClickCounter {
    count: any;
    increment(): any;
  }
  
  /**
  * Plugin configuration builder
  */
  export class ConfigBuilder {
    useGlobalResources: boolean;
    globalResources: any;
    
    /**
      * Use my control
      */
    useClickCounter(): ConfigBuilder;
    
    /**
      * Don't globalize any resources
      * Allows you to import yourself via <require></require>
      */
    withoutGlobalResources(): ConfigBuilder;
  }
  export function configure(aurelia: Aurelia, configCallback?: ((builder: ConfigBuilder) => void)): any;
}