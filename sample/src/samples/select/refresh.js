export class BasicUse {
  food = [
    { id: 0, name: 'Pizza' },
    { id: 1, name: 'Cake' },
    { id: 2, name: 'Steak' },
    { id: 3, name: 'Pasta' },
    { id: 4, name: 'Fries' }
  ];
  selectedMeal = null;

  addFood() {
    ['Water', 'Apples', 'Oranges', 'Fish'].forEach(f => {
      this.food.push({ id: this.food.length, name: f });
    });
    this.select.refresh();
  }
}
