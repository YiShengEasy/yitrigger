（React16以前）使用了antd的弹出层类控件，效果很好，准备学习制作一个类似效果的组件，并学习其源码设计思路和抽象方法
最终效果
鼠标能够触发弹出框效果，弹出层位置可控
能够根据 内嵌的组件  触发 已经弹出层位置
触发条件  hover，click，focus可控
出现、消失带简单动画
实现效果一
弹出在body下
是否弹出
原点位置
多层弹出框 dom 插入，原组件使用了ReactDOM.unstable_renderSubtreeIntoContainer
