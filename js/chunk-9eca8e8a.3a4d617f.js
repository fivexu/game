(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9eca8e8a"],{"32c4":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dots"},[i("canvas",{ref:"canvas"})])},s=[],a=(i("99af"),i("cb29"),i("a15b"),i("fb6a"),i("0d03"),i("a9e3"),i("d3b7"),i("e25e"),i("ac1f"),i("25f0"),i("5319"),i("1276"),i("9f12")),o=i("53fe"),c=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(a["a"])(this,t),e&&(clearInterval(this.playingTimer),this.canvas=e.nodeType?e:document.querySelector(e),this.canvas.getContext("2d")&&(this.context=this.canvas.getContext("2d"),this.dotArr=[],this.timer=null,this.disX=-1e4,this.disY=-1e4,"full"===i.canvasWidth&&(i.canvasWidth=document.documentElement.offsetWidth),"full"===i.canvasHeight&&(i.canvasHeight=document.documentElement.offsetHeight),this.canvasSet={isHover:i.isHover||!1,isClick:i.isClick||!1,width:i.canvasWidth||1e3,height:i.canvasHeight||300,dotsNumber:i.dotsNumber||200,dotsRadius:i.dotsRadius||3,isRandomDots:i.isRandomDots||!1,lineLength:i.lineLength||50,speedX:0===i.speedX?0:i.speedX||2,speedY:0===i.speedY?0:i.speedY||1.5,mouseLineLength:i.mouseLineLength||100,mouseColor:i.mouseColor||"#f00",canvasBackColor:i.canvasBackColor||"transparent",ArcColor:i.ArcColor||"#333",lineColor:i.lineColor||"#ccc",rebound:i.rebound||!1,directionX:i.directionX||"right",directionY:i.directionY||"bottom"},this.createDotsArr(),this.initCanvas(),this.canvasSet.isHover&&this.addEvent(),this.canvasSet.isClick&&this.clickMove(),window.addEventListener("resize",this.resize(),!0)))}return Object(o["a"])(t,[{key:"clear",value:function(){clearInterval(this.playingTimer),this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}},{key:"resize",value:function(){clearInterval(this.playingTimer),this.initCanvas(),this.canvasSet.isHover&&this.addEvent()}},{key:"mouseMove",value:function(t){t=t||event,this.disX=(t.clientX-this.canvas.offsetLeft)*(this.canvasSet.width/this.canvas.offsetWidth),this.disY=(t.clientY-this.canvas.offsetTop+this.getScrollTop())*(this.canvasSet.height/this.canvas.offsetHeight)}},{key:"mouseLeave",value:function(){this.disX=this.disY=-1e6}},{key:"addEvent",value:function(){var t=this;this.canvas.addEventListener("mousemove",(function(e){e=e||event,t.disX=(e.clientX-t.canvas.offsetLeft)*(t.canvasSet.width/t.canvas.offsetWidth),t.disY=(e.clientY-t.canvas.offsetTop+t.getScrollTop())*(t.canvasSet.height/t.canvas.offsetHeight)})),this.canvas.addEventListener("mouseleave",(function(e){t.disX=t.disY=-1e6}))}},{key:"colorHex",value:function(t){var e=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;if(/^(rgb|RGB)/.test(t)){for(var i=t.replace(/(?:\(|\)|rgb|RGB)*/g,"").split("",""),n="#",s=0;s<i.length;s++){var a=Number(i[s]).toString(16);"0"===a&&(a+=a),n+=a}return 7!==n.length&&(n=t),n}if(e.test(t)){var o=t.replace(/#/,"").split("");if(6===o.length)return t;if(3===o.length){for(var c="#",r=0;r<o.length;r+=1)c+=o[r]+o[r];return c}}return t}},{key:"colorRgb",value:function(t){t=t.toLowerCase();var e=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;if(t&&e.test(t)){if(4===t.length){for(var i="#",n=1;n<4;n+=1)i+=t.slice(n,n+1).concat(t.slice(n,n+1));t=i}for(var s=[],a=1;a<7;a+=2)s.push(parseInt("0x"+t.slice(a,a+2)));return"RGB("+s.join(",")+")"}return t}},{key:"initCanvas",value:function(){this.canvas.width=this.canvasSet.width,this.canvas.height=this.canvasSet.height,this.canvas.style.backgroundColor=this.canvasSet.canvasBackColor,this.canvas.style.display="inline-block",this.canvas.style.userSelect="none",this.canvas.style.float="left",this.playing()}},{key:"getScrollTop",value:function(){var t=0;return document.documentElement&&document.documentElement.scrollTop?t=document.documentElement.scrollTop:document.body&&(t=document.body.scrollTop),t}},{key:"playing",value:function(){var t=this;this.playingTimer=null,clearInterval(this.playingTimer),this.playingTimer=setInterval((function(){t.context.clearRect(0,0,t.canvas.width,t.canvas.height),t.lineRun(t.dotArr),t.canvasSet.isHover&&t.mouseLine(t.disX,t.disY,t.dotArr,t.context);for(var e=0;e<t.dotArr.length;e++)t.toDirection(t.dotArr[e]),t.running(t.dotArr[e]),t.createArc(t.dotArr[e].x,t.dotArr[e].y,t.dotArr[e].r,t.context)}),24)}},{key:"running",value:function(t){switch(this.canvasSet.rebound&&(t.directionX=this.canvasSet.directionX,t.directionY=this.canvasSet.directionY),t.directionX){case"left":t.x-=t.vx,this.canvasSet.rebound&&t.x<=t.r&&(t.x=this.canvasSet.width);break;case"right":t.x+=t.vx,this.canvasSet.rebound&&t.x>=this.canvasSet.width-t.r&&(t.x=0);break;default:t.x+=t.vx,this.canvasSet.rebound&&t.x>=this.canvasSet.width-t.r&&(t.x=0)}switch(t.directionY){case"top":t.y-=t.vy,this.canvasSet.rebound&&t.y<=t.r&&(t.y=this.canvasSet.height);break;case"bottom":t.y+=t.vy,this.canvasSet.rebound&&t.y>=this.canvasSet.height-t.r&&(t.y=0);break;default:t.y+=t.vy,this.canvasSet.rebound&&t.y>=this.canvasSet.height-t.r&&(t.y=0)}}},{key:"toDirection",value:function(t){t.x>=this.canvasSet.width-t.r?t.directionX="left":t.x<=t.r&&(t.directionX="right"),t.y>=this.canvasSet.height-t.r?t.directionY="top":t.y<=t.r&&(t.directionY="bottom")}},{key:"createDotsArr",value:function(){for(var t=0;t<this.canvasSet.dotsNumber;t++){var e=Math.random()*this.canvasSet.dotsRadius;e=this.canvasSet.isRandomDots?e<1?1:e:this.canvasSet.dotsRadius,this.dotArr.push({x:Math.random()*this.canvasSet.width,y:Math.random()*this.canvasSet.height,r:e,vx:Math.random()*this.canvasSet.speedX,vy:Math.random()*this.canvasSet.speedY,directionX:Math.random()>.5?"left":"right",directionY:Math.random()>.5?"top":"bottom"})}}},{key:"createLine",value:function(t,e,i,n,s){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:this.canvasSet.lineColor;s.beginPath(),s.moveTo(t,e),s.lineTo(i,n),s.lineWidth=0,s.strokeStyle=a,s.stroke(),s.closePath()}},{key:"createArc",value:function(t,e,i,n){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.canvasSet.ArcColor;n.beginPath(),n.arc(t,e,i,0,2*Math.PI),n.fillStyle=s,n.fill(),n.closePath()}},{key:"lineRun",value:function(t){for(var e=0;e<t.length;e++)for(var i=0;i<t.length;i++)if(this.disDots(t[i].x,t[i].y,t[e].x,t[e].y)<1*this.canvasSet.lineLength){var n=1-this.disDots(t[i].x,t[i].y,t[e].x,t[e].y)/this.canvasSet.lineLength;this.createLine(t[i].x,t[i].y,t[e].x,t[e].y,this.context,this.colorRgb(this.canvasSet.lineColor).replace(")",",".concat(n,")")).replace("RGB","RGBA"))}}},{key:"disDots",value:function(t,e,i,n){return Math.sqrt(Math.pow(Math.abs(i-t),2)+Math.pow(Math.abs(n-e),2))}},{key:"mouseLine",value:function(t,e,i,n){for(var s=0;s<i.length;s++)if(this.disDots(t,e,i[s].x,i[s].y)<this.canvasSet.mouseLineLength){var a=1-this.disDots(t,e,i[s].x,i[s].y)/this.canvasSet.mouseLineLength;this.createLine(t,e,i[s].x,i[s].y,n,this.colorRgb(this.canvasSet.mouseColor).replace(")",",".concat(a,")")).replace("RGB","RGBA"))}}},{key:"clickMove",value:function(){var t=this;this.canvas.addEventListener("click",(function(e){var i=Math.random()*t.canvasSet.dotsRadius;i=t.canvasSet.isRandomDots?i<1?1:i:t.canvasSet.dotsRadius,t.addDots(e,i)}))}},{key:"addDots",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;t=t||event,t.stopPropagation(),t.preventDefault();var i=t.clientX-this.canvas.getBoundingClientRect().left,n=t.clientY-this.canvas.getBoundingClientRect().top;this.dotArr.push({x:i,y:n,r:e,vx:Math.random()*this.canvasSet.speedX,vy:Math.random()*this.canvasSet.speedY,directionX:Math.random()>.5?"left":"right",directionY:Math.random()>.5?"top":"bottom"})}},{key:"clear",value:function(){clearInterval(this.playingTimer),this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}}]),t}(),r={name:"dots",methods:{initCanvasDotsRun:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200;this.dots=null,this.dots=new c(this.$refs.canvas,{dotsNumber:t,ArcColor:"#999",canvasWidth:"full",canvasHeight:"full",mouseColor:"#f60",speedX:2,speedY:3,isRandomDots:!0,lineLength:200,mouseLineLength:300,isHover:!0})},click:function(t){this.dots.addDots(t)},mouseMove:function(t){this.dots.mouseMove(t)},mouseLeave:function(){this.dots.mouseLeave()},resize:function(){this.dots.clear(),this.Utils.isPC()?this.initCanvasDotsRun():this.initCanvasDotsRun(30)}},mounted:function(){var t=this;this.$nextTick((function(){t.Utils.isPC()?t.initCanvasDotsRun():t.initCanvasDotsRun(30),window.addEventListener("resize",t.resize,!0),t.$isBlur((function(e){e?t.dots.initCanvas():t.dots.clear()}))}))},destroyed:function(){window.removeEventListener("resize",this.resize,!0)}},h=r,v=(i("77ac"),i("2877")),d=Object(v["a"])(h,n,s,!1,null,"0decc1ea",null);e["default"]=d.exports},6626:function(t,e,i){},"77ac":function(t,e,i){"use strict";var n=i("6626"),s=i.n(n);s.a}}]);
//# sourceMappingURL=chunk-9eca8e8a.3a4d617f.js.map