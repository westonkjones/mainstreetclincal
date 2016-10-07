import { Injectable } from '@angular/core';

import { Clinic } from './clinic';

@Injectable()
export class ClinicService {
    public clinics: Clinic[] = [];
    constructor() {
        var c1 = new Clinic();
        c1.name = 'Clinic A';

        var c2 = new Clinic();
        c2.name = 'Clinic B';

        var c3 = new Clinic();
        c3.name = 'Clinic C';

        this.clinics.push(c1);
        this.clinics.push(c2);
        this.clinics.push(c3);
    }
    getClinics(): Promise<Clinic[]> {
        return Promise.resolve(this.clinics);
    }
}
