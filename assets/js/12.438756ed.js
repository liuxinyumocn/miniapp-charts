(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{212:function(t,v,_){"use strict";_.r(v);var r=_(0),a=Object(r.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),_("h2",{attrs:{id:"图例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#图例"}},[t._v("#")]),t._v(" 图例")]),t._v(" "),_("p",[t._v("由于配置过多，文字表达可能带来歧义，这里附上图例以供参考")]),t._v(" "),_("img",{attrs:{src:t.$withBase("/imgs/radartooltip.jpg"),width:"600"}}),t._v(" "),_("h2",{attrs:{id:"radarchart构造函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#radarchart构造函数"}},[t._v("#")]),t._v(" RadarChart构造函数")]),t._v(" "),_("h3",{attrs:{id:"radarchart-context-cfg"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#radarchart-context-cfg"}},[t._v("#")]),t._v(" RadarChart(context, [cfg])")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("keyName")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Content")]),t._v(" "),_("td",[t._v("Object")]),t._v(" "),_("td",[t._v("小程序canvas的Context")])]),t._v(" "),_("tr",[_("td",[t._v("cfg")]),t._v(" "),_("td",[t._v("Object")]),t._v(" "),_("td",[t._v("组件配置对象，cfg的属性值会替换默认配置对应属性的值")])])])]),t._v(" "),_("h2",{attrs:{id:"radarchart默认配置详情"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#radarchart默认配置详情"}},[t._v("#")]),t._v(" RadarChart默认配置详情")]),t._v(" "),_("p",[t._v("组件完整配置见"),_("a",{attrs:{href:"https://github.com/yuanzm/miniapp-charts/blob/master/src/config/radar.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("config/radar.js"),_("OutboundLink")],1),t._v("，下面是详细配置介绍。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("keyName")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("debug")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("是否开启调试模式，调试模式下面会打出一些调试信息，默认为false")])]),t._v(" "),_("tr",[_("td",[t._v("width")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("canvas的宽度，因为小程序没有DOM，不能获取canvas的样式信息，需要手动传入, 默认为250")])]),t._v(" "),_("tr",[_("td",[t._v("height")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("同width，需要手动传入，默认为250")])]),t._v(" "),_("tr",[_("td",[t._v("padding")]),t._v(" "),_("td",[t._v("Object")]),t._v(" "),_("td",[t._v("canvas的绘图区域的padding，与canvas本身样式的padding无关")])]),t._v(" "),_("tr",[_("td",[t._v("grid")]),t._v(" "),_("td",[t._v("Object")]),t._v(" "),_("td",[t._v("雷达图网状图和边界值等配置")])]),t._v(" "),_("tr",[_("td",[t._v("radiationLineStyle")]),t._v(" "),_("td",[t._v("Object")]),t._v(" "),_("td",[t._v("从中心点往外辐射的线条配置")])]),t._v(" "),_("tr",[_("td",[t._v("label")]),t._v(" "),_("td",[t._v("Object")]),t._v(" "),_("td",[t._v("雷达标签文案配置")])]),t._v(" "),_("tr",[_("td",[t._v("datasetStyle")]),t._v(" "),_("td",[t._v("Object")]),t._v(" "),_("td",[t._v("单个雷达区域配置")])]),t._v(" "),_("tr",[_("td",[t._v("startAngle")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("雷达图的旋转角度，默认是0")])]),t._v(" "),_("tr",[_("td",[t._v("animation")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("是否开启动画，默认为true")])]),t._v(" "),_("tr",[_("td",[t._v("animationStep")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("动画执行的步骤, 默认为50")])]),t._v(" "),_("tr",[_("td",[t._v("animationEasing")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("动画的缓动函数, 所有配置见"),_("a",{attrs:{href:"https://github.com/yuanzm/miniapp-charts/blob/master/src/base/easing.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("easing.js"),_("OutboundLink")],1)])])])]),t._v(" "),_("h3",{attrs:{id:"padding配置详情"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#padding配置详情"}},[t._v("#")]),t._v(" padding配置详情")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("keyName")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("left")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("左边距，默认为5")])]),t._v(" "),_("tr",[_("td",[t._v("right")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("右边距，默认为5")])]),t._v(" "),_("tr",[_("td",[t._v("top")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("上边距，默认为5")])]),t._v(" "),_("tr",[_("td",[t._v("bottom")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("下边距，默认为5")])])])]),t._v(" "),_("h3",{attrs:{id:"grid配置详情"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#grid配置详情"}},[t._v("#")]),t._v(" grid配置详情")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("keyName")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("display")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("是否展示网状底线，默认为true")])]),t._v(" "),_("tr",[_("td",[t._v("min")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("雷达图数据的最小值，默认是0")])]),t._v(" "),_("tr",[_("td",[t._v("max")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("雷达图数据的最大是，默认是100")])]),t._v(" "),_("tr",[_("td",[t._v("stepSize")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("每一格的数据间距，默认是20")])]),t._v(" "),_("tr",[_("td",[t._v("width")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("线条宽度，默认是1")])]),t._v(" "),_("tr",[_("td",[t._v("color")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("线条的颜色，默认是#e3e3e3")])]),t._v(" "),_("tr",[_("td",[t._v("style")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("线条的样式，暂时只支持line和dash，默认为line")])]),t._v(" "),_("tr",[_("td",[t._v("dashPattern")]),t._v(" "),_("td",[t._v("Array")]),t._v(" "),_("td",[t._v("线条为虚线的配置，详情可看"),_("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/set-line-dash.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序文档"),_("OutboundLink")],1)])]),t._v(" "),_("tr",[_("td",[t._v("dashOffset")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("线条为虚线的配置，详情可看"),_("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/set-line-dash.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序文档"),_("OutboundLink")],1)])])])]),t._v(" "),_("h3",{attrs:{id:"radiationlinestyle配置详情"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#radiationlinestyle配置详情"}},[t._v("#")]),t._v(" radiationLineStyle配置详情")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("keyName")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("display")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("是否展示从中心点往顶点辐射的线，默认为true")])]),t._v(" "),_("tr",[_("td",[t._v("width")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("线条宽度，默认是1")])]),t._v(" "),_("tr",[_("td",[t._v("color")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("线条的颜色，默认是#e3e3e3")])]),t._v(" "),_("tr",[_("td",[t._v("style")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("线条的样式，暂时只支持line和dash，默认为line")])]),t._v(" "),_("tr",[_("td",[t._v("dashPattern")]),t._v(" "),_("td",[t._v("Array")]),t._v(" "),_("td",[t._v("线条为虚线的配置，详情可看"),_("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/set-line-dash.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序文档"),_("OutboundLink")],1)])]),t._v(" "),_("tr",[_("td",[t._v("dashOffset")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("线条为虚线的配置，详情可看"),_("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/set-line-dash.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序文档"),_("OutboundLink")],1)])])])]),t._v(" "),_("h3",{attrs:{id:"label配置详情"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#label配置详情"}},[t._v("#")]),t._v(" label配置详情")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("keyName")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("display")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("是否展示label，默认为true")])]),t._v(" "),_("tr",[_("td",[t._v("color")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("文案的颜色，默认是#888888")])]),t._v(" "),_("tr",[_("td",[t._v("fontSize")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("文案的字体大小，默认是12")])]),t._v(" "),_("tr",[_("td",[t._v("margin")]),t._v(" "),_("td",[t._v("Object")]),t._v(" "),_("td",[t._v("文案的间距配置，默认margin.left,margin.right,margin.top,margin.bottom = 3")])])])]),t._v(" "),_("h3",{attrs:{id:"datasetstyle配置详情"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#datasetstyle配置详情"}},[t._v("#")]),t._v(" datasetStyle配置详情")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("keyName")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("backgroundColor")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("区域背景颜色，默认为rgba(232, 245, 223, 0.7)")])]),t._v(" "),_("tr",[_("td",[t._v("borderColor")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("区域边界颜色，默认为#99d774")])]),t._v(" "),_("tr",[_("td",[t._v("borderWidth")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("区域边界线条宽度，默认是2")])]),t._v(" "),_("tr",[_("td",[t._v("pointShow")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("每个雷达数据点是否需要圆圈展示，默认为true")])]),t._v(" "),_("tr",[_("td",[t._v("pointBackgroundColor")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("数据点上圆圈的背景颜色，默认为#8dd364")])]),t._v(" "),_("tr",[_("td",[t._v("pointBorderColor")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("数据点上圆圈圆周线条颜色，默认为#8dd364")])]),t._v(" "),_("tr",[_("td",[t._v("pointBorderWidth")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("数据点上圆圈圆周线条的宽度，默认为1")])]),t._v(" "),_("tr",[_("td",[t._v("pointRadius")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("数据点上圆圈的半径，默认为2")])])])]),t._v(" "),_("h2",{attrs:{id:"radarchart-api"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#radarchart-api"}},[t._v("#")]),t._v(" RadarChart API")]),t._v(" "),_("h3",{attrs:{id:"draw-data-cfg"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#draw-data-cfg"}},[t._v("#")]),t._v(" draw(data, [cfg])")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("keyName")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("data")]),t._v(" "),_("td",[t._v("Object")]),t._v(" "),_("td",[t._v("渲染雷达图需要的数据")])]),t._v(" "),_("tr",[_("td",[t._v("cfg")]),t._v(" "),_("td",[t._v("Object")]),t._v(" "),_("td",[t._v("组件配置，cfg每一项属性值会替换组件已有属性值")])])])]),t._v(" "),_("h4",{attrs:{id:"data配置详情"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#data配置详情"}},[t._v("#")]),t._v(" data配置详情")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("keyName")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("labels")]),t._v(" "),_("td",[t._v("Array")]),t._v(" "),_("td",[t._v("雷达图顶点的标签数据，Array的每一项可以是String、Array和Object类型，具体配置下面会介绍")])]),t._v(" "),_("tr",[_("td",[t._v("datasets")]),t._v(" "),_("td",[t._v("Array")]),t._v(" "),_("td",[t._v("Array的每一项为一个Object，这个Object本身是配置datasetStyle的结构，增加了一个Array类型的data属性，用于表示雷达图每个顶点的数据")])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);