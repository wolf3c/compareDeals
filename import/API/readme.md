# 表分类
## 1. 左侧列字段
功能：
1. 可以排序
2. 根据所需字段显示内容
3. 需要有与内容去展示对应的字段，也需要自己的展示内容（名称、说明）
4. 内容 i18n


实现：
```json
{
    "name": "smartPhone",
    "Column": [
        {
            "name": "startTime",
            "cn": "发布时间", // 其实 name 和 title 有点重复，尤其是在 i18n 时，可能反倒是累赘；
            // 或者，直接使用 cn、en 等，在数据库中国际化

        },{
            "name": "madeIn",
            "cn": "产地",
        },
        {
            "name": "CPU",
            "Column": [
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
```

## 2. 内容表
功能：
1. 根据左侧列标题展示
2. 如果为空，展示「空」
3. 一个格子中可能出现多条信息，eg：来源、多条数据、引用、图
4. 可能直接使用第三方的图表

实现：
```json
{
    "startTime": "2020-01-02",
    "madeIn": {
        "cn": "中国",
        "en": "China"
    },
    "CPU": {
        "mainHz": "1.4GHz",
        "AnTuTuscot": 1234
    }
}
```