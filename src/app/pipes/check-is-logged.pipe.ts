import {Pipe, PipeTransform} from '@angular/core';
import {Observable} from 'rxjs/index';
import {map} from 'rxjs/internal/operators';

@Pipe({
  name: 'checkIsLogged'
})
export class CheckIsLoggedPipe implements PipeTransform {

  transform(owner: Observable<any>): any {
    return owner.pipe(map(user => {
      return Boolean(user);
    }));
  }

}
