/**
* Plugin configuration builder
*/
export class ConfigBuilder {

  useGlobalResources: boolean = true;
  globalResources = [];

  useAll(): ConfigBuilder {
    return this
      .useButton()
      .useCard()
      .useCheckbox()
      .useCollapsible()
      .useColors()
      .useNavbar()
      .useSelect()
      .useSidenav()
      .useTabs()
      .useTooltip()
      .useWaves()
      .useWell();
  }

  useButton(): ConfigBuilder {
    this.globalResources.push('./button/button');
    return this;
  }

  useCard(): ConfigBuilder {
    this.globalResources.push('./card/card');
    return this;
  }

  useCheckbox(): ConfigBuilder {
    this.globalResources.push('./checkbox/checkbox');
    return this;
  }

  /**
  * Use my control
  */
  useClickCounter(): ConfigBuilder {
    this.globalResources.push('./click-counter');
    return this;
  }

  useCollapsible(): ConfigBuilder {
    this.globalResources.push('./collapsible/collapsible');
    return this;
  }

  useColors() : ConfigBuilder {
    this.globalResources.push('./colors/md-colors.html');
    return this;
  }

  useNavbar(): ConfigBuilder {
    this.globalResources.push('./navbar/navbar');
    return this;
  }

  useSelect(): ConfigBuilder {
    this.globalResources.push('./select/select');
    return this;
  }

  useSidenav(): ConfigBuilder {
    this.globalResources.push('./sidenav/sidenav');
    this.globalResources.push('./sidenav/sidenav-collapse');
    return this;
  }

  /**
   * Use materialized tabs
   */
  useTabs(): ConfigBuilder {
    this.globalResources.push('./tabs/tabs');
    return this;
  }

  useTooltip(): ConfigBuilder {
    this.globalResources.push('./tooltip/tooltip');
    return this;
  }

  /**
   * Use ripple/waves effect
   */
  useWaves(): ConfigBuilder {
    this.globalResources.push('./waves/waves');
    return this;
  }

  useWell(): ConfigBuilder {
    this.globalResources.push('./well/md-well.html');
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
