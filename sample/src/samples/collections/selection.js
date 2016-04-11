export class Selection {
  actors = [
    {
      'name': 'Bryan Cranston',
      'episodes': 62,
      'description': 'Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.'
    }, {
      'name': 'Aaron Paul',
      'episodes': 62,
      'description': 'Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the "Need For Speed" Movie.'
    }, {
      'name': 'Bob Odenkirk',
      'episodes': 62,
      'description': 'Bob Odenkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called "Better Call Saul".'
    }
  ];

  onSelectionChanged(e) {
    let selected = this.list.getSelected();
    let names = selected.map(i => i.name);
    this.logger.log('selection changed: ' + names.join(', '));
    // this.logger.log(`selection changed ${e.detail.item.name}`);
  }
}
