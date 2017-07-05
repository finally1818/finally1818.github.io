// import { Component, OnInit } from '@angular/core';



// @Component({
//     moduleId: module.id,
//     selector: 'dog-header',
//     templateUrl: './dog-header.component.html',
//     styleUrls: ['./dog-header.component.css']
// })

// export class DogHeaderComponent implements OnInit {
//     private navList: object;
//     private navShow: string;
//     constructor(private dogHeaderService: DogHeaderService) { }

//     ngOnInit(): void {
//         this.dogHeaderService.getDogHeader()
//             .then(header => {
//                 this.navList = header.navList;
//             });
//     }

//     // 鼠标移入显示
//     mouseoverNavShow(nav) {
//         this.navShow = nav.nav;
//     };
//     // 鼠标移出隐藏
//     mouseoutNavHid(nav) {
//         this.navShow = '';
//     }
// }