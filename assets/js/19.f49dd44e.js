(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{387:function(t,s,n){"use strict";n.r(s);var a=n(5),o=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"console"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#console"}},[t._v("#")]),t._v(" console")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/console",target:"_blank",rel:"noopener noreferrer"}},[t._v("console"),s("OutboundLink")],1),t._v(" 对象提供了浏览器控制台调试的接口（如：Firefox 的 Web console）, 是一个用于调试和记录信息的内置对象，提供了多种方法，可以帮助开发者输出各种信息，进行调试和分析。在不同浏览器上它的工作方式可能不一样，但通常都会提供一套共性的功能。")]),t._v(" "),s("p",[t._v("console 对象可以从任何全局对象中访问到，如 浏览器作用域上的 Window，以及通过属性控制台作为 worker 中的特定变体的 WorkerGlobalScope。可以通过 Window.console 引用，也可以简单的通过 console 引用。")]),t._v(" "),s("p",[t._v("console对象提供了很多方法用来输出不同格式的内容，如：")]),t._v(" "),s("ul",[s("li",[t._v("console.assert()如果第一个参数为 false ，则将消息和堆栈跟踪记录到控制台。")]),t._v(" "),s("li",[t._v("console.clear()清空控制台，并输出 Console was cleared。")]),t._v(" "),s("li",[t._v("console.count()以参数为标识记录调用的次数，调用时在控制台打印标识以及调用次数。")]),t._v(" "),s("li",[t._v("console.countReset()重置指定标签的计数器值。")]),t._v(" "),s("li",[t._v('console.debug()在控制台打印一条 "debug" 级别的消息。')]),t._v(" "),s("li",[t._v("console.dir()显示一个由特定的 Javascript 对象列表组成的可交互列表。这个列表可以使用三角形隐藏和显示来审查子对象的内容。")]),t._v(" "),s("li",[t._v("console.dirxml()打印 XML/HTML 元素表示的指定对象，否则显示 JavaScript 对象视图。")]),t._v(" "),s("li",[t._v("console.error()打印一条错误信息，使用方法可以参考使用字符串替换。")]),t._v(" "),s("li",[t._v("console.group()创建一个新的内联分组, 后续所有打印内容将会以子层级的形式展示。调用 groupEnd()来闭合组。")]),t._v(" "),s("li",[t._v("console.groupCollapsed()创建一个新的内联分组。使用方法和 group() 相同，不同的是，groupCollapsed() 方法打印出来的内容默认是折叠的。调用groupEnd()来闭合组。")]),t._v(" "),s("li",[t._v("console.groupEnd()闭合当前内联分组。")]),t._v(" "),s("li",[t._v("console.info()打印资讯类说明信息，使用方法可以参考使用字符串替换。")]),t._v(" "),s("li",[t._v("console.log()打印内容的通用方法，使用方法可以参考使用字符串替换。")]),t._v(" "),s("li",[t._v("console.table()将列表型的数据打印成表格。")]),t._v(" "),s("li",[t._v("console.time()启动一个以入参作为特定名称的定时器，在显示页面中可同时运行的定时器上限为 10,000.")]),t._v(" "),s("li",[t._v("console.timeEnd()结束特定的定时器并以毫秒打印其从开始到结束所用的时间。")]),t._v(" "),s("li",[t._v("console.timeLog()打印特定定时器所运行的时间。")]),t._v(" "),s("li",[t._v("console.trace()输出堆栈跟踪。")]),t._v(" "),s("li",[t._v("console.warn()打印一个警告信息，可以使用字符串替换和额外的参数。")])]),t._v(" "),s("p",[t._v("其中console 对象中较多使用的主要有四个方法 console.log()、console.info()、console.warn() 和console.error()。每一个结果在日志中都有不同的样式，可以使用浏览器控制台的日志筛选功能筛选出感兴趣的日志信息。")]),t._v(" "),s("p",[t._v("有两种途径使用这些方法，可以简单的传入一组对象，其中的字符串对象会被连接到一起，输出到控制台。或者可以传入包含零个或多个的替换的字符串，后面跟着被替换的对象列表。这就允许我们自定义输出内容的格式和样式。下面举例log方法的自定义样式输出。")]),t._v(" "),s("ul",[s("li",[t._v("使用 %c 为打印内容定义样式，指令前的文本不会受到影响，但指令后的文本将会使用参数中声明的 CSS 样式。注意：控制台信息的默认行为与行内元素相似。为了应用 padding、margin 这类效果，你应当这样设置display: inline-block。")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("customLog")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" description"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("%c ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("：%c ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("description"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("background:#909399;border:1px solid #909399; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("border:1px solid #909399; padding: 1px; border-radius: 0 2px 2px 0; color: #909399;display: inline-block; padding: 0 8px;")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("这里可用的css属性是一部分，并不是全部的css都支持，不过background全写版本支持，可以值为一个图片😀，那就可以放很神奇的内容了。")])])}),[],!1,null,null,null);s.default=o.exports}}]);