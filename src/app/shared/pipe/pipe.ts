import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "demo" })
export class DemoPipe implements PipeTransform {
  transform(value: any): any {
    return value + " hello";
  }
}
