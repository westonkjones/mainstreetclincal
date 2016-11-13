import { Component, OnInit } from '@angular/core';

import { Clinic } from '../clinic/clinic';
import { ClinicTaskList } from '../clinic/task/list/clinic.task.list';
import { ClinicService } from '../clinic/clinic.service';

@Component({
  moduleId: module.id,
  selector: 'ms-daily-tasks',
  templateUrl: 'dailyTasks.component.html',
})
export class DailyTasksComponent implements OnInit {
  private clinic: Clinic;
  private taskList: ClinicTaskList;
  private clinics: Clinic[];
  constructor(private clinicService: ClinicService) {
    this.clinic = null;
  }
  ngOnInit(): void {
    this.clinicService.getClinics().then(clinics => this.clinics = clinics);
  }
  getTaskList(): void {
  }
  isStarted(): boolean {
    return this.taskList.started;
  }
}
