const moment = require('moment');
moment.locale("zh-cn");

module.exports = {
    title: '个人笔记',
    description: '个人笔记',
    head: [
        ['link', {rel: 'icon', href: 'favicon.ico'}],
        ['meta', {name: 'author', content: 'zhanghua'}],
        ['meta', {name: 'keywords', content: '个人笔记，程序员，manjaro'}],
    ],
    themeConfig: {
        logo: '/assets/img/logo/logo.png',
        lastUpdated: '更新时间', // string | boolean
        nav: [
            {text: 'Home', link: '/'},
            {text: 'System', link: '/system/'},
            {text: 'External', link: 'https://google.com'},
        ]
    },
    plugins: {
        "vuepress-plugin-auto-sidebar": {},
        '@vuepress/last-updated': {
            transformer: (timestamp) => {
                // 不要忘了安装 moment
                return moment(timestamp).format("LLLL")
            }
        }
    }
}