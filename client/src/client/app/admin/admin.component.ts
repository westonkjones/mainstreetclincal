import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ms-admin',
    templateUrl: 'admin.component.html',
    styleUrls: ['admin.component.css']
})
export class AdminComponent {
    activeTab: string = 'clinic';
    setActiveTab(tab: string): void {
        this.activeTab = tab;
    }
}