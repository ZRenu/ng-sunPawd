import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from "@angular/core";
import { Picker } from "./picker.interface";
import { getTime } from "./picker.config";
@Component({
  selector: "picker",
  templateUrl: "./picker.component.html",
  styleUrls: ["./picker.style.less"]
})
export class PickerComponent implements OnInit, OnChanges {
  @Input() picker: Picker;
  @Output() pickerEmit = new EventEmitter<any>();
  date = null;
  dateRange = [];
  constructor() {}

  ngOnInit() {}
  ngOnChanges() {}
  onChange(result: any): void {
    if (this.picker.type === "range") {
      const date = {
        startTime: getTime(result[0]),
        endTime: getTime(result[1])
      };
      this.pickerEmit.emit(date);
    } else {
      this.pickerEmit.emit(getTime(result));
    }
  }
}
