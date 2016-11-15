import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

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
  clinicSubscription: Subscription;
  private dailyTasks: DailyTasks = null;
  constructor(private clinicService: ClinicService, private dailyTasksService: DailyTasksService, private router: Router) {}
  ngOnInit(): void {
    this.clinicSubscription = this.clinicService.clinicObservable.subscribe(clinic => this.clinic = clinic);
    if(this.clinic === null) {
      this.router.navigate(['/clinic/create']);
    } else {
      this.dailyTasks = this.dailyTasksService.getTodaysDailyTasks(this.clinic);
    } 
  }
  ngOnDestroy() {
    this.clinicSubscription.unsubscribe();
  }
  startDay(): void {
    this.dailyTasks.started = true;
  }
}
