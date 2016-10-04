export class BasicUse {
  food = [
    { id: 0, name: 'Pizza' },
    { id: 1, name: 'Cake' },
    { id: 2, name: 'Steak' },
    { id: 3, name: 'Pasta' },
    { id: 4, name: 'Fries' }
  ];
  selectedMeal = this.food[1];

  setSelectedMeal() {
    this.selectedMeal = this.food[2];
  }
}
