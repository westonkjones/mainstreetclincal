import { Injectable } from '@angular/core';

import { Clinic } from './clinic';

@Injectable()
export class ClinicService {
    public clinic: Clinic = null;
    public clinics: Clinic[] = [];
    constructor() {
        var c1 = new Clinic();
        c1.name = 'Clinic 1';
        var c2 = new Clinic();
        c2.name = 'Clinic 2';
        var c3 = new Clinic();
        c3.name = 'Clinic 3';

        this.clinics.push(c1);
        this.clinics.push(c2);
        this.clinics.push(c3);
    }
    getClinic(name: string): Promise<Clinic> {
        // Temporary implementation
        for(let clinic of this.clinics) {
            if(clinic.name === name)
                return Promise.resolve(clinic);
        }

        // This is a hack and should be fixed
        return Promise.resolve(null);
    }
    getClinics(): Promise<Clinic[]> {
        return Promise.resolve(this.clinics);
    }
    addClinic(clinic: Clinic) {
        if(this.clinics.indexOf(clinic) === -1)
            this.clinics.push(clinic);
    }
    removeClinic(clinic: Clinic) {
        this.clinics.splice(this.clinics.indexOf(clinic), 1);
    }
}
