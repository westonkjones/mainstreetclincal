import { Injectable } from '@angular/core';

import { DailyTasks } from './dailyTasks';
import { Clinic } from '../clinic/index';
import { ClinicService } from '../clinic/clinic.service';

@Injectable()
export class DailyTasksService {
    public dailyTasks: DailyTasks[] = [];
    constructor(private clinicService: ClinicService) {}
    getTodaysDailyTasks(clinic: Clinic): DailyTasks {
        if(clinic !== null) {
            let dailyTasks = new DailyTasks();
            dailyTasks.clinic = clinic;
            dailyTasks.date = new Date();
            return dailyTasks;
        }

        return null;
    }
}