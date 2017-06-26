import { Component, OnInit } from '@angular/core';

import { DogContactService } from './dog-contact.service';

@Component({
    moduleId: module.id,
    selector: 'dog-contact',
    templateUrl: 'dog-contact.component.html',
    styleUrls: ['dog-contact.component.css']
})

export class DogContactComponent implements OnInit {
    constructor(
        private dogContactService: DogContactService
    ) { }

    private conTitle: string;
    private conDesList1: object;
    private conDesList2: object;
    private conDownLoad: string;
    private conFileList: object;
    private conTypeList: object;

    ngOnInit() {
        this.dogContactService.getDogContact()
            .then(contact => {
                this.conTitle = contact.title;
                this.conDesList1 = contact.desList1;
                this.conDesList2 = contact.desList2;
                this.conDownLoad = contact.download;
                this.conFileList = contact.fileList;
                this.conTypeList = contact.typeList;
            })
    }
}