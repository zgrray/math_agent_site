/**
 * 教学资源配置文件
 *
 * 要添加新的教学工具或资源，只需在下面的数组中添加一个新对象
 * 格式如下：
 * {
 *   title: "资源标题",
 *   icon: "图标类名", // 使用Bootstrap Icons，参考：https://icons.getbootstrap.com/
 *   description: "资源描述",
 *   link: "文件路径.html"
 * }
 */

const TEACHING_RESOURCES = [
    {
        title: "课堂点名小助手",
        icon: "bi-person-check",
        description: "随机点名工具，帮助课堂互动更加公平有效",
        link: "class_roll_call.html",
    },
    {
        title: "骰子试验模拟",
        icon: "bi-dice-6",
        description: "抛掷骰子试验模拟及样本均值统计图，直观展示概率与统计",
        link: "roll_dice.html",
    },
    {
        title: "正态分布参数探究",
        icon: "bi-graph-up",
        description: "交互式正态分布参数探究工具，帮助理解μ和σ参数对分布的影响",
        link: "study_normal_distribution.html",
    },
    {
        title: "公式记忆检测",
        icon: "bi-braces-asterisk",
        description: "考考你对公式的记忆和理解",
        link: "formula_mem.html",
    },
    {
        title: "摩天大楼数独",
        icon: "bi-building-gear",
        description: "培养推理和空间几何能力的数独游戏",
        link: "skyscraper_sudoku.html",
    },
    // 在此处添加新的教学资源
    // {
    //     title: "新资源标题",
    //     icon: "bi-图标名称",
    //     description: "新资源描述",
    //     link: "新资源文件名.html"
    // }
];
