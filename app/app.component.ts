import { Component } from '@angular/core';

import { DogHeaderService } from './dog-header.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css', './dog-header.component.css']
})

export class AppComponent {
    private title = 'Tour of Heroes';
    private navList: object;
    private navShow: string;
    private navIndex: string;

    constructor(private dogHeaderService: DogHeaderService) { }
    
    ngOnInit(): void {
        this.dogHeaderService.getDogHeader()
            .then(header => {
                this.navList = header.navList;
            });
        
    }

    // 鼠标移入显示
    mouseoverNavShow(nav) {
        this.navShow = nav.nav;
    };
    // 鼠标移出隐藏
    mouseoutNavHid(nav) {
        this.navShow = '';
    }

    isIndex(nav) {
        this.navIndex = nav.navShow;
    }

}
