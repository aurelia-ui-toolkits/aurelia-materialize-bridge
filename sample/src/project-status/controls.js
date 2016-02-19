import { inject } from 'aurelia-dependency-injection';
import { ComponentService } from '../shared/component-service';

@inject(ComponentService)
export class Controls {
  constructor(componentService) {
    this.categories = componentService.getIterableComponents();
  }

  // original for reference
  //
  // categories = [
  //   {
  //     title: 'Css',
  //     controls: [
  //       { title: 'Color', status: 'wip' },
  //       { title: 'Grid' },
  //       { title: 'Helpers' },
  //       { title: 'Media' },
  //       { title: 'Sass' },
  //       { title: 'Shadow' },
  //       { title: 'Table' },
  //       { title: 'Typography' }
  //     ]
  //   }, {
  //     title: 'Components',
  //     controls: [
  //       { title: 'Badges' },
  //       { title: 'Button', link: '#/samples/button', status: 'wip' },
  //       { title: 'Breadcrumbs' },
  //       { title: 'Cards', link: '#/samples/card', status: 'wip' },
  //       { title: 'Chips' },
  //       { title: 'Collections' },
  //       { title: 'Footer' },
  //       { title: 'Forms (see on the right)' },
  //       { title: 'Icons' },
  //       { title: 'Navbar', link: '#/samples/navbar', status: 'wip' },
  //       { title: 'Pagination' },
  //       { title: 'Preloader' }
  //     ]
  //   }, {
  //     title: 'Javascript',
  //     controls: [
  //       { title: 'Collapsible', link: '#/samples/collapsible', status: 'wip' },
  //       { title: 'Dialogs (toast/tooltip)', link: '#/samples/dialogs', status: 'done' },
  //       { title: 'Dropdown', link: '#/samples/dropdown', status: 'wip' },
  //       { title: 'Media (Box/Slider/Carousel)', link: '#/samples/media', status: 'wip' },
  //       { title: 'Modals', status: 'wip' },
  //       { title: 'Parallax' },
  //       { title: 'Pushpin' },
  //       { title: 'Scrollfire' },
  //       { title: 'Scrollspy' },
  //       { title: 'SideNav', link: '#/samples/sidenav', status: 'wip' },
  //       { title: 'Tabs', link: '#/samples/tabs', status: 'wip' },
  //       { title: 'Transitions', link: '#/samples/transitions', status: 'done' },
  //       { title: 'Waves', link: '#/samples/waves', status: 'done' }
  //     ]
  //   }, {
  //     title: 'Forms',
  //     controls: [
  //       { title: 'Input fields' },
  //       { title: 'Select', link: '#/samples/select', status: 'wip' },
  //       { title: 'Radio buttons' },
  //       { title: 'Checkboxes', link: '#/samples/checkbox', status: 'wip' },
  //       { title: 'Switches', status: 'wip' },
  //       { title: 'File input button' },
  //       { title: 'Range' },
  //       { title: 'Datepicker' },
  //       { title: 'Character counter' }
  //     ]
  //   }, {
  //     title: 'Internal',
  //     controls: [
  //       { title: 'Click counter', link: '#/samples/click-counter', status: 'done' },
  //       { title: 'Well', status: 'wip' },
  //       { title: 'PanelBar' }
  //     ]
  //   }
  // ]
}
