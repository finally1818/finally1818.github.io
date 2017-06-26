"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var data = {
            "header": {
                "navList": [
                    {
                        "svg": "app/img/d_home.svg",
                        "nav": "首页"
                    },
                    {
                        "svg": "app/img/d_info.svg",
                        "nav": "关于我"
                    },
                    {
                        "svg": "app/img/d_skills.svg",
                        "nav": "技能栈"
                    },
                    {
                        "svg": "app/img/d_exp.svg",
                        "nav": "经历"
                    },
                    {
                        "svg": "app/img/d_works.svg",
                        "nav": "作品集"
                    },
                    {
                        "svg": "app/img/d_contact.svg",
                        "nav": "联系我"
                    }
                ]
            },
            "footer": {},
            "default": {
                "quote": "生活是一种绵延不绝的渴望，渴望不断上升，变得更伟大而高贵。",
                "desList": [
                    "我叫**",
                    "一名前端开发工程师",
                    "finally174483345@vip.qq.com"
                ]
            },
            "info": {
                "title": "关于我",
                "infoList": [
                    {
                        "icon": "./app/img/i_age.svg",
                        "key": "年龄",
                        "value": "29岁"
                    },
                    {
                        "icon": "./app/img/i_edu.svg",
                        "key": "学历",
                        "value": "专科"
                    },
                    {
                        "icon": "./app/img/i_site.svg",
                        "key": "坐标",
                        "value": "杭州"
                    },
                    {
                        "icon": "./app/img/i_status.svg",
                        "key": "状态",
                        "value": "在职"
                    }
                ],
                "desList": [
                    "一年的前端开发经验",
                    "熟悉MV*开发,深谙自动化,模块化开发之道",
                    "高效的自学能力,具备独立分析解决问题能力",
                    "强烈的自我驱动力,代码强迫症患者"
                ]
            },
            "skill": {
                "title": "技能栈",
                "outCircleList": [
                    {
                        "color": "rgba(121,100,102,0.8)",
                        "name": "gulp"
                    },
                    {
                        "color": "rgba(49,65,82,0.8)",
                        "name": "angular"
                    },
                    {
                        "color": "rgba(76,157,160,0.8)",
                        "name": "webpack"
                    },
                    {
                        "color": "rgba(66,66,66,0.8)",
                        "name": "less"
                    },
                    {
                        "color": "rgba(193,131,106,0.8)",
                        "name": "git"
                    },
                    {
                        "color": "rgba(117,148,179,0.8)",
                        "name": "nodejs"
                    },
                    {
                        "color": "rgba(71,83,94,0.8)",
                        "name": "cordova"
                    },
                    {
                        "color": "rgba(147,147,189,0.8)",
                        "name": "react"
                    }
                ],
                "innerCircleList": [
                    {
                        "color": "rgba(179,164,140,0.8)",
                        "name": "es6"
                    },
                    {
                        "color": "rgba(171,209,220,0.8)",
                        "name": "vue"
                    },
                    {
                        "color": "rgba(238,215,163,0.8)",
                        "name": "ng2"
                    },
                    {
                        "color": "rgba(207,184,178,0.8)",
                        "name": "fp"
                    }
                ],
                "desList": [
                    "熟练使用angular2",
                    "常驻PC平台前端研发",
                    "擅长组件/插件开发，能脱离库书写JS代码",
                    "编码常思其健壮性，扩展性，维护性"
                ]
            },
            "works": {
                "title": "作品集",
                "worksList": [
                    {
                        "title": "企业官网",
                        "des": "普通性的各类企业网站开发，兼容IE8+,适配全移动机型，具有良好的兼容性，扩展性。根据客户群体的习性进行详细分析策划，制定出一套适合企业自身的网站建设的设计风格方案。",
                        "url": "/"
                    },
                    {
                        "title": "企业官网",
                        "des": "普通性的各类企业网站开发，兼容IE8+,适配全移动机型，具有良好的兼容性，扩展性。根据客户群体的习性进行详细分析策划，制定出一套适合企业自身的网站建设的设计风格方案。",
                        "url": "/"
                    },
                    {
                        "title": "企业官网",
                        "des": "普通性的各类企业网站开发，兼容IE8+,适配全移动机型，具有良好的兼容性，扩展性。根据客户群体的习性进行详细分析策划，制定出一套适合企业自身的网站建设的设计风格方案。",
                        "url": "/"
                    },
                    {
                        "title": "企业官网",
                        "des": "普通性的各类企业网站开发，兼容IE8+,适配全移动机型，具有良好的兼容性，扩展性。根据客户群体的习性进行详细分析策划，制定出一套适合企业自身的网站建设的设计风格方案。",
                        "url": "/"
                    }
                ],
                "viewMore": "github上面查看更多"
            },
            "experience": {
                "title": "经历",
                "expList": [
                    {
                        "title": "杭州**信息技术有限公司",
                        "time": "2017年1月~至今",
                        "post": "前端开发工程师兼职网络管理员",
                        "imgUrl": "app/img/e_js.svg",
                        "tech": "less、webpack、angular2、jquery、dwz和原生js及若干类库",
                        "contentList": [
                            "负责快速构建高质量PC端页面",
                            "根据业务需求设计合适的工程项目",
                            "高度组件化、模块化思维，拥有各平台调试能力",
                            "同期学习ES6及angular2，体会函数式编程思想"
                        ]
                    },
                    {
                        "title": "金华**科技有限公司",
                        "time": "2015年1月~2016年12月",
                        "post": "网络管理员兼前端开发工程师",
                        "imgUrl": "app/img/e_html.svg",
                        "tech": "html5、css3、javascript、jquery、bootstrap等",
                        "contentList": [
                            "负责企业站静态页开发",
                            "负责网站后台维护",
                            "同期工作之余提升自己原生JS的编码能力"
                        ]
                    }
                ],
                "des": "2016年初，放弃网络管理员职位，开始前端自学生涯。"
            },
            "contact": {
                "title": "联系我",
                "desList1": [
                    "灵感",
                    "代码",
                    "梦想",
                    "未来"
                ],
                "desList2": [
                    "注重效率，偏爱敏捷开发",
                    "喜欢尝试，期待新鲜事物",
                    "前端即兴趣，兴趣即未来",
                    "行路有良友，便是捷径",
                    "带上我吧，一起看到更大的世界"
                ],
                "download": "下载简历",
                "fileList": [
                    {
                        "title": "HTML版",
                        "url": "www.baidu.com"
                    },
                    {
                        "title": "PDF版",
                        "url": "www.baidu.com"
                    }
                ],
                "typeList": [
                    {
                        "icon": "app/img/s_github.svg",
                        "url": "/"
                    },
                    {
                        "icon": "app/img/s_sf.svg",
                        "url": "/"
                    },
                    {
                        "icon": "app/img/s_blog.svg",
                        "url": "/"
                    },
                    {
                        "icon": "app/img/s_zh.svg",
                        "url": "/"
                    },
                    {
                        "icon": "app/img/s_wb.svg",
                        "url": "/"
                    }
                ]
            }
        };
        return { data: data };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map