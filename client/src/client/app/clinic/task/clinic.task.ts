export class ClinicTask {
    category: string = '';
    description: string = '';
    // Temporary solution
    // Defaults to true for repeats every day
    // Each item in array represents day of the week
    repeats: boolean[] = [true, true, true, true, true];
    staff1: boolean[];
    staff2: boolean[];
    staff3: boolean[];
    staff4: boolean[];
    constructor() {
        //0: MA1, 1: MA2, 2: Front Desk, 3: MA3
        this.staff1 = [false];
        this.staff2 = [false, false];
        this.staff3 = [false, false, false];
        this.staff4 = [false, false, false];
    }
}
