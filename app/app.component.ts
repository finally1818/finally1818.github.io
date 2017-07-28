import { Component } from '@angular/core';

import { DogHeaderService } from './header/dog-header.service';
import { DogFooterService } from './footer/dog-footer.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.css',
        './header/dog-header.component.css',
        './footer/dog-footer.component.css'
    ]
})
export class AppComponent {
    private navList: object;
    private footer: object;
    private navShow: number;
    private navIndex: number = 0;

    constructor(
        private dogHeaderService: DogHeaderService,
        private dogFooterService: DogFooterService
    ) {}

    ngOnInit(): void {
        this.getDogData()
    }

    getDogData() {
        this.dogHeaderService.getDogHeader().then(header => {
            this.navList = header.navList;
        });
        this.dogFooterService.getDogFooter().then(footer => {
            this.footer = footer;
        });
    }
    // 鼠标移入
    onNavShow(index: number) {
        this.navShow = index;
    }
    // 鼠标移出
    onNavHid() {
        this.navShow = 999;
    }
    // 导航切换
    onIndex(index: number) {
        this.navIndex = index;
    }
}
