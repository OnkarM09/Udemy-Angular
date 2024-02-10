import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name : "shorten",
  // pure: false  if we add this then this piple will run whenever there is a data change so we have to be
  // careful before using this coz this might cause performance issues
})
export class ShortenPipe implements PipeTransform{
  transform(value: any,limit : number) {
    if(value.length > limit){
      return value.substr(0, limit) + ' ...';
    }
    return value;
  }

}
