import { Component } from '@angular/core';

import { DogHeaderService } from './header/dog-header.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css', './header/dog-header.component.css', './footer/dog-footer.component.css']
})

export class AppComponent {
    private title = 'Tour of Heroes';
    private navList: object;
    private navShow: string;
    private inNavIndex: number = 0;

    constructor(private dogHeaderService: DogHeaderService) { }
    
    ngOnInit(): void {
        this.dogHeaderService.getDogHeader()
            .then(header => {
                this.navList = header.navList;
            });
    }

    // 鼠标移入显示
    mouseoverNavShow(index) {
        this.navShow = index;
    };
    // 鼠标移出隐藏
    mouseoutNavHid() {
        this.navShow = '';
    }

    isIndex(index) {
        this.inNavIndex = index;
    }

    outNavIndex(index) {
        this.inNavIndex = index;
    }


}
