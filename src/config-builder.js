/**
* Plugin configuration builder
*/
export class ConfigBuilder {

  useGlobalResources: boolean = true;
  globalResources = [];

  /**
  * Use my control
  */
  useClickCounter(): ConfigBuilder {
    this.globalResources.push('./click-counter');
    return this;
  }

  useTabs(): ConfigBuilder {
    this.globalResources.push('./tabs/tab');
    this.globalResources.push('./tabs/tabs');
    return this;
  }

  /**
   * Use ripple/waves effect
   */
  useWaves(): ConfigBuilder {
    this.globalResources.push('./waves/waves');
    return this;
  }

  /**
  * Don't globalize any resources
  * Allows you to import yourself via <require></require>
  */
  withoutGlobalResources(): ConfigBuilder {
    this.useGlobalResources = false;
    return this;
  }
}
