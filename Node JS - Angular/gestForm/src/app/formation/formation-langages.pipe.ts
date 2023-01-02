import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formationLangages'
})
export class FormationLangagesPipe implements PipeTransform {

  transform(langage:string) {
    let color:string ='';
    switch (langage) {
      case 'TypeScript':
        color = 'red';
        break;
      case 'Html':
        color = 'green';
        break;
      case 'Css':
        color = 'blue';
        break;
      case 'JavaScript':
        color = 'red';
        break;
      case 'Php':
        color = 'grey';
        break;
      case 'JavaEE':
        color = 'red';
        break;
    }

    return 'chip '+color;
  }

}
