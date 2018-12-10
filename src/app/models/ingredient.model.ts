
export class IngredientModel {
  public name: string;
  public amount: number;

  constructor(name: string, amt: number) {
    this.name = name;
    this.amount = amt;
  }
}
