export let FirstColumn, ColumnContent;

FirstColumn = {
    name: 'smartPhone',
    en: "smartphone",
    zh: "手机比较",
    items: [
        {
            name: "startTime",
            en: "release time",
            zh: "发布时间",
        }, {
            name: "madeIn",
            en: "made in",
            zh: "产地",
        }, {
            name: "CPU",
            en: "CPU"
        }, {
            name: "mainHz",
            parent: "CPU",
            zh: "主频"
        }, {
            name: "AnTuTuscot",
            parent: "CPU",
            zh: "安兔兔跑分",
        }
    ]
}

ColumnContent = [
    {
        category: "smartPhone",
        name: "xiaomi",
        en: "XiaoMi",
        zh: "小米",
        startTime: "2020-01-02",
        madeIn: {
            en: "China",
            zh: "中国",
        },
        mainHz: "1.4GHz",
        AnTuTuscot: 1234
    }, {
        category: "smartPhone2",
        name: "vivo",
        en: "vivo3",
        zh: "vivo 三",
        startTime: "2020-01-02",
        madeIn: {
            en: "China",
            zh: "中国",
        },
        mainHz: "1.4GHz",
        AnTuTuscot: 1234
    }
]
