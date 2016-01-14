import {inject} from 'aurelia-framework';
import {ThemeManager} from 'shared/theme-manager';
import {Settings} from 'settings';

@inject(ThemeManager, Settings)
export class ThemeSelector {

  themes = [
     // { value: 'black', name: 'Black', colors: [ '#0167cc', '#4698e9', '#272727' ]  },
     // { value: 'blueopal', name: 'Blue Opal', colors: [ '#076186', '#7ed3f6', '#94c0d2' ]  },
     // { value: 'bootstrap', name: 'Bootstrap', colors: [ '#3276b1', '#67afe9', '#fff' ]  },
     // { value: 'default', name: 'Default', colors: [ '#ef6f1c', '#e24b17', '#5a4b43' ]  },
     // { value: 'fiori', name: 'Fiori', colors: ['#007cc0', '#e6f2f9', '#f0f0f0'] },
     // { value: 'flat', name: 'Flat', colors: [ '#363940', '#2eb3a6', '#fff' ]  },
     // { value: 'highcontrast', name: 'High Contrast', colors: [ '#b11e9c', '#880275', '#1b141a' ]  },
     { value: 'material', name: 'Material', colors: [ '#3f51b5', '#283593', '#fff' ]  }
     // { value: 'materialblack', name: 'Material Black', colors: ['#3f51b5', '#1c1c1c', '#4d4d4d'] },
     // { value: 'metro', name: 'Metro', colors: [ '#8ebc00', '#787878', '#fff' ]  },
     // { value: 'metroblack', name: 'Metro Black', colors: [ '#00aba9', '#0e0e0e', '#565656' ]  },
     // { value: 'moonlight', name: 'Moonlight', colors: [ '#ee9f05', '#40444f', '#212a33' ]  },
     // { value: 'nova', name: 'Nova', colors: ['#ff4350', '#00acc1', '#303553'] },
     // { value: 'office365', name: 'Office 365', colors: ['#0072c6', '#cde6f7', '#fff'] },
     // { value: 'silver', name: 'Silver', colors: [ '#298bc8', '#515967', '#eaeaec' ]  },
     // { value: 'uniform', name: 'Uniform', colors: [ '#666', '#ccc', '#fff' ]  }
  ];

  constructor(themeManager, settings) {
    this.themeManager = themeManager;
    this.settings = settings;
  }

  selectTheme(theme) {
    jQuery('body').fadeOut(400, () => {
      this.settings.activeTheme = theme.value;
      this.themeManager.loadTheme(theme.value)
      .then(() => jQuery('body').fadeIn());
    });
  }
}
