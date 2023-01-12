import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'vuela'
})
export class VuelaPipe implements PipeTransform{
    transform(value: boolean):string {
        console.log(value);
        

        // if (enMayusculas === true) {

        //     return value.toUpperCase();
        // } else{
        //     return value.toLowerCase();
        // }

        //return (enMayusculas) ? value.toUpperCase() : value.toLowerCase();

        return (value) 
        ? 'vuela' 
        : 'no vuela';
        
    }
}