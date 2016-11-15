import { Component, OnInit } from '@angular/core';

import { Clinic } from '../clinic/clinic';
import { ClinicService } from '../clinic/clinic.service';
import { DailyTasks } from './dailyTasks';
import { DailyTasksService } from './dailyTasks.service';

@Component({
  moduleId: module.id,
  selector: 'ms-daily-tasks',
  templateUrl: 'dailyTasks.component.html',
  styleUrls: ['dailyTasks.component.css']
})
export class DailyTasksComponent implements OnInit {
  private clinic: Clinic = null;
  private clinics: Clinic[] = [];
  private dailyTasks: DailyTasks = null;
  constructor(private clinicService: ClinicService, private dailyTasksService: DailyTasksService) {}
  ngOnInit(): void {
    this.clinic = this.clinicService.getClinic();
    if(this.clinic === null) {
      this.clinicService.getClinics().then(clinics => this.clinics = clinics);
    } else {
      this.clinicSelected(this.clinic);
    }
  }
  clinicSelected(clinic: Clinic): void {
    this.clinic = clinic;
    this.clinicService.clinic = clinic;
    this.dailyTasks = this.dailyTasksService.getTodaysDailyTasks(clinic);
  }
  startDay(): void {
    this.dailyTasks.started = true;
  }
}
