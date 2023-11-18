import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-time-options-form',
  templateUrl: './time-options-form.component.html',
  styleUrls: ['./time-options-form.component.css']
})
export class TimeOptionsFormComponent implements OnInit {
  timeOptionsForm: FormGroup;
  timeOptions: FormGroup[] = [];
  showTimeOptions: boolean = false;

  constructor(private fb: FormBuilder) {
    // Initialize the form group for the initial time option
    this.timeOptionsForm = this.createTimeOptionFormGroup();
  }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  createTimeOptionFormGroup(): FormGroup {
    return this.fb.group({
      time: ['', [Validators.required, this.isValidTime]],
      state: ['off'],
    });
  }

  isValidTime(control: import('@angular/forms').AbstractControl): import('@angular/forms').ValidationErrors | null {
    let time = control.value;
  
    // If the time does not have leading zeros for the hour part, add them
    const timeParts = time.split(':');
    if (timeParts[0].length === 1) {
      time = '0' + time;
    }
  
    const isValid = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(time);
    return isValid ? null : { invalidTime: true };
  }
  

  onAdd(): void {
    // Create a new form group for each "Add" click
    const newTimeOptionForm = this.createTimeOptionFormGroup();
    this.timeOptions.push(newTimeOptionForm);
  }

  onSave(): void {
    this.timeOptions.forEach((timeOptionForm) => {
      if (timeOptionForm.valid) {
        console.log('Save button clicked', timeOptionForm.value);
        // Add your logic to save each time option
      }
    });
  }

  onCancel(): void {
    // Clear the time options array
    this.timeOptions = [];
  }

  onDelete(index: number): void {
    // Remove the selected time option
    this.timeOptions.splice(index, 1);
  }
}