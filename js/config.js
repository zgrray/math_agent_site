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
        link: "点名小助手终稿2.0（手机可用）.html"
    },
    {
        title: "骰子试验模拟",
        icon: "bi-dice-6",
        description: "抛掷骰子试验模拟及样本均值统计图，直观展示概率与统计",
        link: "选修三7.3.1观察：抛掷骰子试验模拟及样本均值统计图.html"
    },
    {
        title: "正态分布参数探究",
        icon: "bi-graph-up",
        description: "交互式正态分布参数探究工具，帮助理解μ和σ参数对分布的影响",
        link: "选修三7.5 正态分布参数探究.html"
    }
    // 在此处添加新的教学资源
    // {
    //     title: "新资源标题",
    //     icon: "bi-图标名称",
    //     description: "新资源描述",
    //     link: "新资源文件名.html"
    // }
];