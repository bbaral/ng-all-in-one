
export class IngredientModel {
  public name: string;
  public amount: number;
  public time: string;

  constructor(name: string, amt: number, time?: any) {
    this.name = name;
    this.amount = amt;
    this.time = time;
  }
}
