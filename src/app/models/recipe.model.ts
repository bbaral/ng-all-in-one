import {IngredientModel} from './ingredient.model';

export class RecipeModel {
 public name: string;
 public description: string;
 public imagePath: any;
 public ingModel: IngredientModel[];

 constructor(name: string, desc: string, imagePath: any, ingreds: IngredientModel[]) {
   this.name = name;
   this.description = desc;
   this.imagePath = imagePath;
   this.ingModel = ingreds;
 }
}
