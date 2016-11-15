import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { DropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { Clinic } from '../../clinic/clinic';
import { ClinicService } from '../../clinic/clinic.service';

@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})

export class NavbarComponent implements OnInit{
  clinic: Clinic;
  clinics: Clinic[];
  clinicSubscription: Subscription;
  constructor(private clinicService: ClinicService) {}
  ngOnInit() {
    this.clinicSubscription = this.clinicService.clinicObservable.subscribe(clinic => this.clinic = clinic);
    this.clinicService.getClinics().then(clinics => this.clinics = clinics);
  }
  setClinic(clinic: Clinic) {
    this.clinic = clinic;
    this.clinicService.setCurrentClinic(clinic);
  }
}
