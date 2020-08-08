hexo.extend.helper.register('to_chinese_date', (date) => {
    const table1_list = [
        ['0', '〇'],
        ['1', '一'],
        ['2', '二'],
        ['3', '三'],
        ['4', '四'],
        ['5', '五'],
        ['6', '六'],
        ['7', '七'],
        ['8', '八'],
        ['9', '九']
    ];

    const table2_list = [
        ['01','一'],
        ['02','二'],
        ['03','三'],
        ['04','四'],
        ['05','五'],
        ['06','六'],
        ['07','七'],
        ['08','八'],
        ['09','九'],
        ['10','十'],
        ['11','十一'],
        ['12','十二'],
        ['13','十三'],
        ['14','十四'],
        ['15','十五'],
        ['16','十六'],
        ['17','十七'],
        ['18','十八'],
        ['19','十九'],
        ['20','二十'],
        ['21','廿一'],
        ['22','廿二'],
        ['23','廿三'],
        ['24','廿四'],
        ['25','廿五'],
        ['26','廿六'],
        ['27','廿七'],
        ['28','廿八'],
        ['29','廿九'],
        ['30','三十'],
        ['31','三十一']
    ];

    const table1 = new Map(table1_list);
    const table2 = new Map(table2_list);

    const year = date.split('/')[0];
    const month = date.split('/')[1];
    const day = date.split('/')[2];

    let result = '';

    for (let i of year) {
        result += table1.get(i);
    }

    result += '年'
    result += table2.get(month) + '月';
    result += table2.get(day) + '日';

    return result;
});
