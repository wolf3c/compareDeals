export let FirstColumn, ColumnContent
FirstColumn = {
    "name": {
        "en": "smartPhone",
        "cn": "手机比较"
    },
    "column": [
        {
            "name": "startTime",
            "cn": "发布时间",
        },{
            "name": "madeIn",
            "cn": "产地",
        },
        {
            "name": "CPU",
            "column": [
                {
                    "name": "mainHz",
                    "cn": "主频"
                }, {
                    "name": "AnTuTuscot",
                    "cn": "安兔兔跑分",
                }
            ]
        }
    ]
}

ColumnContent = {
    "name": "XianMi",
    "startTime": "2020-01-02",
    "madeIn": {
        "en": "China",
        "cn": "中国",
    },
    "CPU": {
        "mainHz": "1.4GHz",
        "AnTuTuscot": 1234
    }
}
