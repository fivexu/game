(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23b32812"],{"6cf2":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sokoban"},[i("div",{staticClass:"game"},[i("h2",[t._v(t._s(t.step?"第"+t.currentGame+"关-已走"+t.step+"步":"推箱子-第"+t.currentGame+"关"))]),i("p",[t._v("小键盘 上下左右 操作")]),i("div",{ref:"boxDom",staticClass:"box"},t._l(t.map,(function(e,n){return i("ul",{key:n},t._l(e,(function(e,n){return i("li",{key:n,ref:"gameDom",refInFor:!0,class:t.classSelect(e)},[4===e||6===e?i("i",{class:{ac:6===e}}):t._e(),3===e||5===e&&(3===t.nextWay||6===t.nextWay)?i("em"):t._e(),5===e?i("b"):t._e()])})),0)})),0),i("div",{staticClass:"btn"},[i("fx-button",{attrs:{type:"default"},on:{clickEvt:t.reset}},[t._v("重置")]),t.Utils.isPC()?t._e():i("div",{staticClass:"op"},[i("em",{on:{click:function(e){return e.stopPropagation(),t.operating(37)}}},[t._v("左")]),i("span",[i("em",{on:{click:function(e){return e.stopPropagation(),t.operating(38)}}},[t._v("上")]),i("em",{on:{click:function(e){return e.stopPropagation(),t.operating(40)}}},[t._v("下")])]),i("em",{on:{click:function(e){return e.stopPropagation(),t.operating(39)}}},[t._v("右")])])],1)]),t.modal?i("fx-modal",{attrs:{title:"恭喜过关"},on:{cancel:function(e){t.modal=!1},define:function(e){return t.nextGame(t.currentGame+1)}}},[i("p",[t._v("恭喜过关,点击下一关")])]):t._e()],1)},s=[],o=(i("a623"),i("4160"),i("caad"),i("d81d"),i("a9e3"),i("159b"),[]);o[0]={win:3,game:[[2,2,2,2,2,2,2,2,2,2],[2,2,2,0,0,0,0,2,2,2],[2,2,2,0,1,1,0,0,0,2],[2,0,0,0,1,1,1,1,0,2],[2,0,1,1,6,3,0,1,0,2],[2,0,1,1,4,6,1,1,0,2],[2,0,0,0,1,5,0,0,0,2],[2,2,2,0,1,1,0,2,2,2],[2,2,2,0,0,0,0,2,2,2],[2,2,2,2,2,2,2,2,2,2]]},o[1]={win:3,game:[[2,2,2,0,0,0,0,2,2,2],[2,2,0,0,1,1,0,2,2,2],[2,2,0,1,5,1,0,2,2,2],[2,2,0,1,4,1,0,2,2,2],[2,2,0,1,6,1,0,2,2,2],[2,2,0,1,6,1,0,0,2,2],[2,2,0,0,3,1,1,0,2,2],[2,2,2,0,1,0,1,0,2,2],[2,2,2,0,1,1,1,0,2,2],[2,2,2,0,0,0,0,0,2,2]]},o[2]={win:3,game:[[2,2,2,2,2,2,2,2,2,2],[2,0,0,0,0,0,0,0,0,2],[2,0,1,1,1,0,1,1,0,2],[2,0,1,0,1,0,4,3,0,2],[2,0,1,1,1,1,4,3,0,2],[2,0,1,0,1,0,4,3,0,2],[2,0,1,1,1,0,1,1,0,2],[2,0,0,0,0,0,5,1,0,2],[2,2,2,2,2,0,0,0,0,2],[2,2,2,2,2,2,2,2,2,2]]},o[3]={win:9,game:[[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2],[0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],[0,1,0,1,1,1,0,0,0,1,4,1,1,0,0,0,0,0],[0,1,1,1,1,0,0,3,0,0,1,4,1,1,0,0,0,0],[0,1,0,4,0,0,3,3,1,0,0,1,4,1,1,0,0,0],[0,1,1,1,0,3,3,3,1,1,0,0,1,4,1,1,0,0],[0,1,0,4,0,0,0,1,1,1,1,0,0,1,4,1,1,0],[0,1,0,1,4,1,0,0,1,1,1,1,0,0,1,1,0,0],[0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,5,0],[0,0,0,0,1,1,1,4,1,1,0,0,1,1,0,0,0,0],[2,2,2,0,0,0,0,0,1,1,1,1,1,1,3,3,3,0],[2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]]};var a=o,r={name:"sokoban",data:function(){return{historyList:[],currentGame:1,gameList:a,winGame:0,map:[],nextWay:1,theWayMe:1,modal:!1,step:0}},methods:{isSuccess:function(){var t=0;return this.map.forEach((function(e){e.forEach((function(e){6===e&&t++}))})),t===this.winGame},classSelect:function(t){switch(Number(t)){case 0:return"ac";case 2:return"no";default:return""}},operating:function(t){var e=this.findWay(this.findMe()),i=this.findWay(this.findSide(t));switch(t){case 37:1!==e.left&&3!==e.left||this.go(t),6!==e.left&&4!==e.left||1!==i.left&&3!==i.left||this.goBox(t,e.left);break;case 38:1!==e.top&&3!==e.top||this.go(t),6!==e.top&&4!==e.top||1!==i.top&&3!==i.top||this.goBox(t,e.top);break;case 39:1!==e.right&&3!==e.right||this.go(t),6!==e.right&&4!==e.right||1!==i.right&&3!==i.right||this.goBox(t,e.right);break;case 40:1!==e.bottom&&3!==e.bottom||this.go(t),6!==e.bottom&&4!==e.bottom||1!==i.bottom&&3!==i.bottom||this.goBox(t,e.bottom);break;case 32:this.reset();break;case 90:this.goBack();break;default:break}this.isSuccess()&&(this.modal=!0)},keyDown:function(t){this.operating(Number(t.keyCode))},findWay:function(t){if(t&&t.length){var e=[t[0],t[1]-1<0?0:t[1]-1],i=[t[0],t[1]+1>this.map[t[0]].length?this.map[t[0]].length:t[1]+1],n=[t[0]-1<0?0:t[0]-1,t[1]],s=[t[0]+1>this.map.length?this.map.length:t[0]+1,t[1]],o={};return this.map.forEach((function(t,a){t.forEach((function(t,r){e[0]===a&&e[1]===r&&(o.left=t),i[0]===a&&i[1]===r&&(o.right=t),n[0]===a&&n[1]===r&&(o.top=t),s[0]===a&&s[1]===r&&(o.bottom=t)}))})),o}},findMe:function(){var t=[];return this.map.forEach((function(e,i){e.forEach((function(e,n){5===e&&(t=[i,n])}))})),t},findSide:function(t){var e=[37,38,39,40];if(e.includes(t)){var i=this.findMe();switch(t){case 37:return[i[0],i[1]-1];case 38:return[i[0]-1,i[1]];case 39:return[i[0],i[1]+1];case 40:return[i[0]+1,i[1]];default:break}}},go:function(t){var e={};this.map.forEach((function(i,n){i.forEach((function(i,s){5===i&&37===t&&(e.next=[n,s-1]),5===i&&38===t&&(e.next=[n-1,s]),5===i&&39===t&&(e.next=[n,s+1]),5===i&&40===t&&(e.next=[n+1,s]),5===i&&(e.me=[n,s])}))}));var i=JSON.parse(JSON.stringify(this.map[e.next[0]][e.next[1]]));this.nextWay=this.map[e.next[0]][e.next[1]],this.map[e.next[0]][e.next[1]]=5,this.map[e.me[0]][e.me[1]]=this.theWayMe,this.theWayMe=6===i||3===i?3:1,this.map=JSON.parse(JSON.stringify(this.map)),this.step++,this.historyList.push(this.map)},goBox:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=this.findSide(t),n=this.findWay(this.findSide(t)),s=4,o={};this.map.forEach((function(e,n){e.forEach((function(e,s){i[0]===n&&i[1]===s&&37===t&&(o.next=[n,s-1]),i[0]===n&&i[1]===s&&38===t&&(o.next=[n-1,s]),i[0]===n&&i[1]===s&&39===t&&(o.next=[n,s+1]),i[0]===n&&i[1]===s&&40===t&&(o.next=[n+1,s]),i[0]===n&&i[1]===s&&(o.me=[n,s])}))})),37===t&&3===n.left&&(s=6),38===t&&3===n.top&&(s=6),39===t&&3===n.right&&(s=6),40===t&&3===n.bottom&&(s=6),this.map[o.next[0]][o.next[1]]=s,this.map[o.me[0]][o.me[1]]=e,this.go(t)},initMap:function(){var t=this.map[0].length,e=this.map.length,i=this.$refs.boxDom.offsetWidth/t,n=this.$refs.boxDom.offsetHeight/e;if(!this.Utils.isPC()){var s=document.documentElement.clientWidth,o=document.documentElement.clientHeight,a=s>=o?o:s;this.$refs.boxDom.style.width="".concat(a,"px"),this.$refs.boxDom.style.height="".concat(a,"px"),i=a/t,n=a/e}var r=i>=n?n:i;this.$refs.gameDom.forEach((function(t){t.style.width="".concat(r,"px"),t.style.height="".concat(r,"px")}))},nextGame:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentGame;if(this.historyList=[],e-1>=this.gameList.length)return this.$success("恭喜通过全部关卡!"),void(this.modal=!1);var i=JSON.parse(JSON.stringify(this.gameList[e-1].game)),n=JSON.parse(JSON.stringify(this.gameList[e-1].win));this.map=i,this.winGame=n,this.step=0,setTimeout((function(){t.initMap(),t.modal=!1,t.currentGame=e}),30)},reset:function(){this.nextGame()},goBack:function(){if(!this.historyList.length)return this.$warning("已经无法再退了!"),void this.reset();this.isCurrent(this.historyList[this.historyList.length-1]),this.map=JSON.parse(JSON.stringify(this.historyList.pop()))},isCurrent:function(t){var e=this,i=t.every((function(t,i){return t.every((function(t,n){return e.map[i][n]===t}))}));i&&this.historyList.pop()}},mounted:function(){var t=this;this.$nextTick((function(){t.nextGame(),window.addEventListener("keydown",t.keyDown,!0)}))},destroyed:function(){window.removeEventListener("keydown",this.keyDown,!0)}},c=r,h=(i("fa99"),i("2877")),f=Object(h["a"])(c,n,s,!1,null,"6cec1a7f",null);e["default"]=f.exports},a623:function(t,e,i){"use strict";var n=i("23e7"),s=i("b727").every,o=i("b301");n({target:"Array",proto:!0,forced:o("every")},{every:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},bc6f:function(t,e,i){},caad:function(t,e,i){"use strict";var n=i("23e7"),s=i("4d64").includes,o=i("44d2");n({target:"Array",proto:!0},{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},d81d:function(t,e,i){"use strict";var n=i("23e7"),s=i("b727").map,o=i("1dde");n({target:"Array",proto:!0,forced:!o("map")},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},fa99:function(t,e,i){"use strict";var n=i("bc6f"),s=i.n(n);s.a}}]);
//# sourceMappingURL=chunk-23b32812.0c0a3656.js.map