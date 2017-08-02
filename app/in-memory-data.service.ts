import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let data = {
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
            "default": {
                "quote": "生活是一种绵延不绝的渴望，渴望不断上升，变得更伟大而高贵。",
                "desList": [
                    "我叫林晨",
                    "一名前端开发工程师",
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
                    "近两年的前端开发经验",
                    "熟悉MV*开发，熟悉组件化、模块化开发",
                    "高效的自学能力，具备分析解决问题的能力",
                    "强烈的自我驱动力，代码强迫症患者"
                ]
            },
            "skill": {
                "title": "技能栈",
                "outCircleList": [
                    {
                        "color": "rgba(121,100,102,0.8)",
                        "name": "Gulp"
                    },
                    {
                        "color": "rgba(49,65,82,0.8)",
                        "name": "Angular"
                    },
                    {
                        "color": "rgba(76,157,160,0.8)",
                        "name": "Webpack"
                    },
                    {
                        "color": "rgba(66,66,66,0.8)",
                        "name": "Less"
                    },
                    {
                        "color": "rgba(193,131,106,0.8)",
                        "name": "Angular2"
                    },
                    {
                        "color": "rgba(117,148,179,0.8)",
                        "name": "Nodejs"
                    },
                    {
                        "color": "rgba(71,83,94,0.8)",
                        "name": "JQuery"
                    },
                    {
                        "color": "rgba(147,147,189,0.8)",
                        "name": "Python"
                    }
                ],
                "innerCircleList": [
                    {
                        "color": "rgba(179,164,140,0.8)",
                        "name": "HTML"
                    },
                    {
                        "color": "rgba(171,209,220,0.8)",
                        "name": "CSS"
                    },
                    {
                        "color": "rgba(238,215,163,0.8)",
                        "name": "Git"
                    },
                    {
                        "color": "rgba(207,184,178,0.8)",
                        "name": "JS"
                    }
                ],
                "desList": [
                    "熟练使用Angular2和JQuery",
                    "常驻PC平台前端开发",
                    "擅长组件/插件开发，能脱离库编写JS代码",
                    "健壮性，扩展性，维护性"
                ]
            },
            "works": {
                "title": "作品集",
                "worksList": [
                    {
                        "title": "学校官网",
                        "des": "基于HTML5使用bootstrap进行网页开发，实现页面间的跳转和页面内的锚点跳转，采用响应式布局实现多分辨率支持，添加轮播图、导航组件等，制作CSS Sprite并使用。",
                        "url": "http://119.10.57.69:880/jnshu039/demo/bootstrap/home.html"
                    },
                    {
                        "title": "杀人游戏(js) & 杀人游戏(Angularjs1.3)",
                        "des": "JS版：源生JS进行DOM操作，使用localStorage进行本地数据保存，使用JSON进行存储数据转化。angular版本：使用Angularjs进行重构，实现双向数据绑定，通过路由进行单页面切换内容。",
                        "url": "http://119.10.57.69:880/jnshu039/js/js-task02-04/js-task02-1.html"
                    }
                ],
                "viewMore": "查看更多",
                "viewMoreUrl": "http://119.10.57.69:880/jnshu039/Htask/task.html"
            },
            "experience": {
                "title": "经历",
                "expList": [
                    {
                        "title": "杭州逸曜信息技术有限公司",
                        "time": "2017年1月~至今",
                        "post": "前端开发工程师兼网络管理员",
                        "imgUrl": "app/img/e_js.svg",
                        "tech": "html5、css3、javascript、angular2、jquery、dwz、webpack及若干类库",
                        "contentList": [
                            "负责快速构建高质量PC端页面",
                            "根据业务需求设计合适的工程项目",
                            "组件化、模块化思维，拥有各平台调试能力",
                            "负责软硬件设备的采购、安装、调试及企业OA系统的维护",
                            "同期学习Python"
                        ]
                    },
                    {
                        "title": "金华旗达网络咨询服务",
                        "time": "2016年1月~2016年12月",
                        "post": "前端开发工程师兼网络管理员",
                        "imgUrl": "app/img/e_html.svg",
                        "tech": "html、css、javascript、jquery、bootstrap等",
                        "contentList": [
                            "负责企业网站开发",
                            "负责网站后期维护",
                            "兼职公司网络管理工作",
                            "同期工作之余提升原生JS的编码能力"
                        ]
                    },
                    {
                        "title": "杭州宁大卫生检测技术有限公司",
                        "time": "2012年2月~2014年12月",
                        "post": "评价师兼网络管理员",
                        "imgUrl": "app/img/e_html.svg",
                        "tech": "非前端相关行业",
                        "contentList": [
                            "负责企业预评、控评、现状评价报告书的编写",
                            "负责带队现场调查、检测",
                            "完成项目51家，全公司项目量第一",
                            "兼职公司网络管理工作"
                        ]
                    },
                    {
                        "title": "浙江中一检测研究院股份有限公司",
                        "time": "2009年6月~2011年12月",
                        "post": "检测队长",
                        "imgUrl": "app/img/e_html.svg",
                        "tech": "非前端相关行业",
                        "contentList": [
                            "负责企业检测报告书的编写",
                            "负责带队现场调查、检测"
                        ]
                    }
                ],
                "des": "2015年，放弃原有行业，开始前端自学生涯。"
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
                        "url": ""
                    },
                    {
                        "icon": "app/img/s_sf.svg",
                        "url": ""
                    },
                    {
                        "icon": "app/img/s_blog.svg",
                        "url": ""
                    },
                    {
                        "icon": "app/img/s_zh.svg",
                        "url": ""
                    },
                    {
                        "icon": "app/img/s_wb.svg",
                        "url": ""
                    }
                ]
            },
            "footer": "© 2017 林晨 | 生活不止眼前的苟且，还有诗和远方的田野"
        }
        return { data };
    }
}
