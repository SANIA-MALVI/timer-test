import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-time-options-form',
  templateUrl: './time-options-form.component.html',
  styleUrls: ['./time-options-form.component.css']
})
export class TimeOptionsFormComponent implements OnInit {
  timeOptionsForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.timeOptionsForm = this.createTimeOptionsForm();
  }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  createTimeOptionsForm(): FormGroup {
    return this.fb.group({
      set1: this.fb.group({
        isChecked: [false],
        time: ['', [Validators.required, Validators.pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)]],
        state: ['off'],
      }),

      set2: this.fb.group({
        isChecked: [false],
        time: ['', [Validators.required, Validators.pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)]],
        state: ['off'],
      }),

      set3: this.fb.group({
        isChecked: [false],
        time: ['', [Validators.required, Validators.pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)]],
        state: ['off'],
      }),

      set4: this.fb.group({
        isChecked: [false],
        time: ['', [Validators.required, Validators.pattern(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)]],
        state: ['off'],
      }),
    });
  }
}
