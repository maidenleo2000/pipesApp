import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
    transform(value: string, enMayusculas:boolean = true):string {
        console.log(value);
        console.log(enMayusculas);

        // if (enMayusculas === true) {

        //     return value.toUpperCase();
        // } else{
        //     return value.toLowerCase();
        // }

        //return (enMayusculas) ? value.toUpperCase() : value.toLowerCase();

        return (enMayusculas) 
        ? value.toUpperCase() 
        : value.toLowerCase();
        
    }
}