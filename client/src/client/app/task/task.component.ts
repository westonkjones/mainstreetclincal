import { Component, OnInit } from '@angular/core';

import { Task } from './task';
import { Clinic, ClinicService } from '../clinic/index';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
    moduleId: module.id,
    templateUrl: 'task.component.html',
    styleUrls: ['task.component.css']
})
export class TaskComponent implements OnInit {
    clinic: Clinic;
    private clinics: Clinic[] = [];
    private users: User[] = [];
    private staff: User[] = [];
    constructor(private clinicService: ClinicService, private userService: UserService) {
        this.clinic = null;
    }
    ngOnInit(): void {
        this.getClinics();
        this.getUsers();
    }
    getClinics(): void {
        this.clinicService.getClinics().then(clinics => this.clinics = clinics);
    }
    getUsers(): void {
        this.userService.getUsers().then(users => this.users = users);
    }
    getClinic(): Clinic {
        return this.clinic;
    }
    addToStaff(user: User): void {
        this.users.splice(this.users.indexOf(user), 1);
        this.staff.push(user);
    }
    removeFromStaff(user: User): void {
        this.staff.splice(this.staff.indexOf(user), 1);
        this.users.push(user);
    }
 }
