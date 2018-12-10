
export class RecipeModel {
 public name: string;
 public description: string;
 public imagePath: any;

 constructor(name: string, desc: string, imagePath: any) {
   this.name = name;
   this.description = desc;
   this.imagePath = imagePath;
 }
}
