(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f11ba3e6"],{4173:function(t,a,i){},6155:function(t,a,i){"use strict";var n=i("4173"),s=i.n(n);s.a},ce31:function(t,a,i){"use strict";i.r(a);var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"time"},[i("canvas",{ref:"canvasDom"}),i("span",[t._v("当前跳动中小球个数 "+t._s(t.ballSize)+" 个")])])},s=[],e=(i("99af"),i("cb29"),i("4de4"),i("4160"),i("d81d"),i("0d03"),i("a9e3"),i("d3b7"),i("e25e"),i("ac1f"),i("25f0"),i("1276"),i("159b"),1e3/60),h=10,r=30,c=8,o=-10,l=[];l[0]=[[0,0,1,1,1,0,0],[0,1,1,0,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,0,1,1,0],[0,0,1,1,1,0,0]],l[1]=[[0,0,0,1,1,0,0],[0,0,1,1,1,0,0],[0,1,1,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[1,1,1,1,1,1,1]],l[2]=[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1]],l[3]=[[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,1,0,0],[0,0,0,0,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],l[4]=[[0,0,0,0,1,1,0],[0,0,0,1,1,1,0],[0,0,1,1,1,1,0],[0,1,1,0,1,1,0],[1,1,0,0,1,1,0],[1,1,1,1,1,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,1,1]],l[5]=[[1,1,1,1,1,1,1],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],l[6]=[[0,0,0,0,1,1,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],l[7]=[[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0]],l[8]=[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],l[9]=[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,1,1,0,0,0,0]],l[10]=[[0,1,1,0,0,1,1],[1,0,0,1,0,1,1],[1,0,0,1,0,1,1],[0,1,1,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,1,1,0,1,1,0],[1,1,0,1,0,0,1],[1,1,0,1,0,0,1],[1,1,0,0,1,1,0]],l[11]=[[0,0,0,0,0,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,1,1,1,0,0],[0,0,0,0,0,0,0]];var f={name:"times",data:function(){return{numList:[],playList:[],axisList:[],isAuto:!1,ballLength:r,ballRadius:h,ballSize:0}},methods:{initNumberCanvas:function(){var t=this;if(this.$refs.canvasDom){this.clearCanvas(),this.canvas=this.$refs.canvasDom;var a=this.canvas.getContext("2d");this.canvas.width=this.canvas.offsetWidth,this.canvas.height=this.canvas.offsetHeight,clearInterval(this.timer),this.timer=setInterval((function(){var i=(new Date).getSeconds();t.isAuto=0!==i&&30!==i,t.oldTime!==t.$dateFormat("hhmmss")&&i%5===1&&(t.playList=t.playList.concat(t.axisList)),t.ballSize=t.playList.length,t.canvas.width=t.canvas.offsetWidth,t.canvas.height=t.canvas.offsetHeight,a.clearRect(0,0,t.canvas.offsetWidth,t.canvas.offsetHeight),t.createAxis(a),t.play(a)}),e)}},drawCircle:function(t,a,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"#f60",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.ballRadius;i.beginPath(),i.fillStyle=n,i.arc(t,a,s,0,2*Math.PI),i.fill(),i.closePath()},fall:function(t){t.x+=t.vx,t.y+=t.vy,t.vy+=t.g,t.y>=this.canvas.offsetHeight-this.ballRadius&&(t.y=this.canvas.offsetHeight-this.ballRadius,t.vy=-t.vy*Math.max(.9*Math.random(),.7))},createAxis:function(t){var a=this;this.axisList=[];var i=this.center(),n=this.getDate();this.numList=[l[n[0]],l[n[1]],l[11],l[n[2]],l[n[3]],l[11],l[n[4]],l[n[5]]];var s=8*r*this.numList.length;s>this.canvas.width?(this.ballLength=this.canvas.width/this.numList.length/8,this.ballRadius=this.ballLength/3):(this.ballLength=r,this.ballRadius=h),this.numList.forEach((function(t,n){t.forEach((function(t,s){t.forEach((function(e,h){1===e&&a.axisList.push({x:a.ballLength*h+a.ballLength*(t.length+1)*n+i.left,y:s*a.ballLength+i.top,vx:a.randomSpeed().vx,vy:a.randomSpeed().vy,g:2*Math.random()+2,color:a.randomColor()})}))}))})),this.axisList.forEach((function(i){a.drawCircle(i.x,i.y,t)}))},getDate:function(){var t=new Date,a=t.getHours(),i=t.getMinutes(),n=t.getSeconds();a=a<10?"0".concat(a):a.toString(),i=i<10?"0".concat(i):i.toString(),n=n<10?"0".concat(n):n.toString();var s=a.split(""),e=i.split(""),h=n.split("");return this.oldTime="".concat(a).concat(i).concat(n),s.concat(e,h).map((function(t){return Number(t)}))},play:function(t){var a=this;this.playList.forEach((function(i){a.fall(i),a.drawCircle(i.x,i.y,t,i.color)})),this.clearBall()},clearBall:function(){var t=this;this.playList=this.playList.filter((function(a){return a.x<=t.canvas.offsetWidth&&a.x>0}))},randomColor:function(){var t=parseInt(255*Math.random()),a=parseInt(255*Math.random()),i=parseInt(255*Math.random()),n=1;return this.isAuto?"rgba(".concat(t,",").concat(a,",").concat(i,",").concat(n,")"):"#f60"},randomSpeed:function(){var t={},a=c*Math.random()+c/2;return t.vx=Math.random()>.5?a:-a,t.vy=Math.random()*o,this.isAuto||(t.vx=c,t.vy=o),t},center:function(){var t=this.numList.length,a=this.canvas.offsetWidth,i=this.canvas.offsetHeight,n=this.ballLength*l[0][0].length*t+this.ballLength*(t-1),s=10*this.ballLength;return{left:(a-n)/2,top:(i-s)/4}},clearCanvas:function(){this.numList=[],this.playList=[],this.axisList=[],this.isAuto=!1,this.ballLength=r,this.ballRadius=h,this.ballSize=0,clearInterval(this.timer)}},mounted:function(){var t=this;this.initNumberCanvas(),window.addEventListener("reset",this.initNumberCanvas,!0),this.$isBlur((function(a){a?t.initNumberCanvas():t.clearCanvas()}))},destroyed:function(){clearInterval(this.timer),window.removeEventListener("reset",this.initNumberCanvas,!0)}},u=f,v=(i("6155"),i("2877")),d=Object(v["a"])(u,n,s,!1,null,"35e953f3",null);a["default"]=d.exports},d81d:function(t,a,i){"use strict";var n=i("23e7"),s=i("b727").map,e=i("1dde");n({target:"Array",proto:!0,forced:!e("map")},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-f11ba3e6.e0db1fa2.js.map