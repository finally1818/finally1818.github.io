import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let data = {
            "header": {
                "titleList": [
                    {
                        "svg": "app/img/d_home.svg",
                        "title": "首页"
                    },
                    {
                        "svg": "app/img/d_info.svg",
                        "title": "关于我"
                    },
                    {
                        "svg": "app/img/d_skills.svg",
                        "title": "技能栈"
                    },
                    {
                        "svg": "app/img/d_exp.svg",
                        "title": "经历"
                    },
                    {
                        "svg": "app/img/d_works.svg",
                        "title": "作品集"
                    },
                    {
                        "svg": "app/img/d_contact.svg",
                        "title": "联系我"
                    }
                ]
            },
            "footer": {},
            "default": {
                "quote": "生活是一种绵延不绝的渴望，渴望不断上升，变得更伟大而高贵。",
                "desList": [
                    "我叫林晨",
                    "一名前端研发工程师",
                    "finally174483345@vip.qq.com"
                ]
            },
            "info": {
                "title": "关于我",
                "infoList": [
                    {
                        "icon": "app/img/i_age.svg",
                        "key": "年龄",
                        "value": "29岁"
                    },
                    {
                        "icon": "app/img/i_edu.svg",
                        "key": "学历",
                        "value": "专科"
                    },
                    {
                        "icon": "app/img/i_site.svg",
                        "key": "坐标",
                        "value": "杭州"
                    },
                    {
                        "icon": "app/img/i_status.svg",
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
                        "title": "web前端工程师简历（2015年版）",
                        "des": "本简历初版，上线一个月后，百度关键词“web前端工程师简历”排名前三，点击量数百万，深受广大前端初学者的好评及模仿，至今搜该关键词百度前10页都处处能见该简历的仿版。",
                        "url": "http://www.flqin.com/2015/"
                    },
                    {
                        "title": "移动校园APP",
                        "des": "一站式、全生命周期的校园官方移动服务平台，涵盖PC、安卓、IOS、微信平台，上线学校包括中央财经大学，北京交通大学，中国戏曲学院，辽宁大学，西南财经大学等等，下载量数十万，深受学生老师喜爱。",
                        "url": "http://app.cufe.edu.cn/"
                    },
                    {
                        "title": "移动校园管理系统",
                        "des": "针对校园APP的后台管理系统，包括人员架构，信息统计，权限设置，H5生产机，数据交换平台，各个模块的数据管理，反馈设置等等，为高校提供基于互联网运营的移动校园整体解决方案。",
                        "url": "http://www.app8848.com/cloud_mgr/#/user/login"
                    },
                    {
                        "title": "企业官网",
                        "des": "普通性的各类企业网站开发，兼容IE8+,适配全移动机型，具有良好的兼容性，扩展性。根据客户群体的习性进行详细分析策划，制定出一套适合企业自身的网站建设的设计风格方案。",
                        "url": "http://www.lantunet.com"
                    }
                ],
                "viewMore": "github上面查看更多"
            },
            "experience": {
                "title": "经历",
                "expList": [
                    {
                        "title": "兰途网络科技有限公司",
                        "time": "2015年6月~至今",
                        "post": "web前端研发工程师",
                        "imgUrl": "app/img/e_js.svg",
                        "tech": "less gulp angular1.x cordova 原生js及若干类库",
                        "contentList": [
                            "负责快速构建高质量移动APP/PC/微信页面",
                            "根据业务需求设计合适的工程项目",
                            "高度组件化、模块化思维，拥有各平台调试能力",
                            "同期学习ES6及vue,react,ng2,体会函数式编程思想"
                        ]
                    },
                    {
                        "title": "卓煌企业管理有限公司",
                        "time": "2014年8月~2015年6月",
                        "post": "网页开发兼SEO优化",
                        "imgUrl": "app/img/e_html.svg",
                        "tech": "html5,css3,javascript,jquery,bootstrap等",
                        "contentList": [
                            "负责企业站静态页开发",
                            "负责网站后台维护",
                            "负责百度竞价操作及seo优化",
                            "同期工作之余提升自己原生JS的编码能力"
                        ]
                    },
                    {
                        "title": "壹零陆文化传播有限责任公司",
                        "time": "2014年3月~2014年8月",
                        "post": "SEO",
                        "imgUrl": "app/img/e_seo.svg",
                        "tech": "SEO,SEM,百度（360，搜狗）竞价、推广等",
                        "contentList": [
                            "负责网站后台维护，微博、微信等新媒体营销和推广",
                            "负责百度PPC后台调整",
                            "获得最佳新人奖",
                            "同期工作之余开始系统性的自学web前端各项技术"
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
                        "url": "https://github.com/zhaoky"
                    },
                    {
                        "icon": "app/img/s_sf.svg",
                        "url": "https://segmentfault.com/u/keyu2016"
                    },
                    {
                        "icon": "app/img/s_blog.svg",
                        "url": ""
                    },
                    {
                        "icon": "app/img/s_zh.svg",
                        "url": "https://www.zhihu.com/people/fezky"
                    },
                    {
                        "icon": "app/img/s_wb.svg",
                        "url": "http://weibo.com/zky2013"
                    }
                ]
            }
        }
        return { data };
    }
}
