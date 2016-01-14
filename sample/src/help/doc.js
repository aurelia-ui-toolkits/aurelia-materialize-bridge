import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {EventAggregator} from 'aurelia-event-aggregator';
import registry from './registry.json!';
import jQuery from 'jquery';
import 'kendo-ui/js/kendo.panelbar.min';

@inject(Router, EventAggregator)
export class Doc {

  subscriptions = [];

  constructor(router, ea) {
    this.registry = registry;
    this.router = router;
    this.subscriptions.push(ea.subscribe('router:navigation:complete', e => this.routeChanged(e)));

    // go through all the categories in the json
    // and convert it into an array that allows for easier looping
    this.categories = [];
    for (let categoryKey of Object.keys(this.registry)) {
      let category = {
        name: categoryKey,
        files: this.registry[categoryKey]
      };

      if (category.name.includes('_') || category.files.some(i => i.name.includes('_'))) {
        throw new Error('Documentation categories or file names can\t contain underscore (_)');
      }

      this.categories.push(category);
    }
  }

  attached() {
    this.panelBar = $(this.panelBarDiv).kendoPanelBar().data('kendoPanelBar');
  }

  // - adds the page to route params
  // - sets the file path as activeDoc
  // - selects the item in panelbar
  switchPage(fileName, categoryName) {
    let file = this.getFileByName(fileName, categoryName);

    if (file) {
      this.activeDoc = file.path;

      this.selectInPanelBar(fileName, categoryName);
    }
  }

  routeChanged(e) {
    this.params = Object.assign({}, e.instruction.params, e.instruction.queryParams);

    // retrieve categoryname and filename from route params
    let file = this.params.file;
    let cat = this.params.category;

    // if a file and category name is in the route, switch to that page
    if (file && cat) {
      this.switchPage(file, cat);
    }
  }

  routeToPage(fileName, categoryName) {
    this.router.navigateToRoute('docs', {
      category: this.encode(categoryName),
      file: this.encode(fileName)
    });
  }

  getFileByName(fileName, categoryName) {
    let cat = this.categories.find(i => this.encode(i.name) === categoryName.toLowerCase());
    if (cat) {
      let file = cat.files.find(i => this.encode(i.name) === fileName.toLowerCase());
      if (file) {
        return file;
      }
    }
  }

  // loop through all category items in the panelbar
  // and their file items
  // and expand the category by name and select the file by name
  selectInPanelBar(fileName, categoryName) {
    let categoryLis = $(this.panelBarDiv).children('li');

    $(categoryLis).each((index, element) => {
      let categoryText = $(element).children('span').text().trim().toLowerCase();
      if (this.encode(categoryText) === categoryName) {
        this.panelBar.expand($(element));

        let fileLis = $(element).find('ul').children('li');
        $(fileLis).each((i, elem) => {
          let fileText = $(elem).children('span').text().trim().toLowerCase();
          if (this.encode(fileText) === fileName) {
            this.panelBar.select($(elem));
          }
        });
      }
    });
  }

  // scroll to top after a doc has been loaded
  // if a anchor is in the route params, scroll to that instead
  scrollToTarget() {
    if (this.params.anchor) {
      setTimeout(() => {
        let container = jQuery(this.markdownCol);
        let scrollTo = jQuery(`#${this.params.anchor}`, this.markdownCol);
        container.animate({
          scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
        });
      }, 200);
    } else {
      jQuery(this.markdownCol).animate({ scrollTop: 0 });
    }
  }

  encode(string) {
    return string.replace(/'|!|@|#|$|%|\^|&|\*|\(|\)|\+|:|"|\?|>|</g, '').replace(/\s/g, '_').toLowerCase();
  }

  detached() {
    this.subscriptions.forEach(i => i.dispose());
  }
}
