(this["webpackJsonp15-covid19"]=this["webpackJsonp15-covid19"]||[]).push([[0],{13:function(e,t,a){e.exports={containerTop:"style_containerTop__oU21S",footer:"style_footer__2rRfa",mt30:"style_mt30__1PSso"}},224:function(e,t,a){},225:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(34),l=a.n(c),o=a(2),s=a(78),i=a(81),m=function(e){return n.a.createElement(s.a,null,n.a.createElement("meta",{charSet:"utf-8"}),n.a.createElement("title",null,e.title),n.a.createElement("meta",{name:"description",content:e.description}),n.a.createElement("meta",{name:"keywords",content:e.keywords}),n.a.createElement("meta",{name:"author",content:e.author}),n.a.createElement("meta",{property:"og:type",content:"website"}),n.a.createElement("meta",{property:"og:title",content:e.title}),n.a.createElement("meta",{property:"og:description",content:e.description}),n.a.createElement("meta",{property:"og:image",content:e.image}),n.a.createElement("meta",{property:"og:url",content:e.url}),n.a.createElement("script",{src:"//code.jquery.com/jquery.min.js"}),n.a.createElement("script",{src:"//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"}))};m.defaultProps={title:"\ub9ac\uc561\ud2b8 \ucf54\ub85c\ub09819 \uc0c1\ud669\ud310",description:"React.js\ub85c \uad6c\ud604\ud55c \ucf54\ub85c\ub09819 \uc0c1\ud669\ud310",keywords:"React,\ucf54\ub85c\ub09819,Covid19",author:"\ud638\uc324",image:a.n(i).a,url:window.location.href};var d=m,u=a(25),p=function(e){var t=e.location.pathname===e.to,a=!0===e.exact,r=e.className;return t&&(r+=" "+e.activeClassName),n.a.createElement("li",{className:r},n.a.createElement(u.b,{to:e.to,exact:a},e.children))};p.defaultProps={className:"",exact:!1,to:"#",children:""};var E,v=Object(o.f)(p),b=function(){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-inverse navbar-fixed-top"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"navbar-header"},n.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar-collapse"},n.a.createElement("span",{className:"sr-only"},"Toggle navigation"),n.a.createElement("span",{className:"icon-bar"}),n.a.createElement("span",{className:"icon-bar"}),n.a.createElement("span",{className:"icon-bar"})),n.a.createElement("a",{className:"navbar-brand",href:"/"},"React \ucf54\ub85c\ub09819 \uc0c1\ud669\ud310")),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbar-collapse"},n.a.createElement("ul",{className:"nav navbar-nav"},n.a.createElement(v,{to:"/korea_state",exact:!0,activeClassName:"active"},"\uad6d\ub0b4 \ubc1c\uc0dd \ud604\ud669"),n.a.createElement(v,{to:"/sido_state",activeClassName:"active"},"\uc2dc\ub3c4\ubcc4 \ubc1c\uc0dd \ub3d9\ud5a5"))))))},h=a(5),g=a(11),f=a(17),y=a.n(f),x=a(36),N=a(7),S=a(227),C=a(226),j=a(37),w=a.n(j),A=a(24),O=a.n(A),_={loading:!1,result:null,error:!1},R=Object(S.a)("covidAll/SEARCH_START"),F=Object(S.a)("covidAll/SEARCH_SUCCESS"),k=Object(S.a)("covidAll/SEARCH_FAILURE"),L=Object(C.a)((E={},Object(N.a)(E,"covidAll/SEARCH_START",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_;arguments.length>1&&arguments[1];return Object(h.a)({},e,{loading:!0,error:!1})})),Object(N.a)(E,"covidAll/SEARCH_SUCCESS",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;return Object(h.a)({},e,{loading:!1,result:t.payload.result,error:!1})})),Object(N.a)(E,"covidAll/SEARCH_FAILURE",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_;arguments.length>1&&arguments[1];return Object(h.a)({},e,{loading:!1,error:!0})})),E),_),I=a(13),T=a.n(I),B=function(e){var t=e.accState;return n.a.createElement("div",null,n.a.createElement("h3",null,"\ub204\uc801 \ud655\uc9c4\uc790 \ud604\ud669 ",n.a.createElement("small",null,"(",O()(t.\uae30\uc900\uc2dc\uac01).format("M/D h"),"\uc2dc \uae30\uc900)")),n.a.createElement("div",{className:"table-responsive"},n.a.createElement("table",{className:"table table-bordered"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{className:"text-center success"},"\ud655\uc9c4\ud658\uc790"),n.a.createElement("th",{className:"text-center success"},"\uaca9\ub9ac\ud574\uc81c"),n.a.createElement("th",{className:"text-center success"},"\uaca9\ub9ac\uc911"),n.a.createElement("th",{className:"text-center success"},"\uc0ac\ub9dd"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{className:"text-center"},Number(t.\ud655\uc9c4\ud658\uc790).toLocaleString()),n.a.createElement("td",{className:"text-center"},Number(t.\uaca9\ub9ac\ud574\uc81c).toLocaleString()),n.a.createElement("td",{className:"text-center"},Number(t.\uaca9\ub9ac\uc911).toLocaleString()),n.a.createElement("td",{className:"text-center"},Number(t.\uc0ac\ub9dd).toLocaleString()))))))};B.defaultProps={accState:{"\uae30\uc900\uc2dc\uac01":null,"\ud655\uc9c4\ud658\uc790":0,"\uaca9\ub9ac\ud574\uc81c":0,"\uaca9\ub9ac\uc911":0,"\uc0ac\ub9dd":0}};var D=B,H=a(16),M=function(e){var t=e.confirmState,a=t.\ub0a0\uc9dc,r=t.\uc77c\uc77c\ud655\uc9c4,c=t.\ub204\uc801\ud655\uc9c4,l={datasets:[{label:"\uc77c \ud655\uc9c4\ud658\uc790",type:"line",data:r,borderColor:"#FF8400",borderWidth:2.5,pointBorderColor:"#FFFFFF",pointBackgroundColor:"#FF8400",pointRadius:6,yAxisID:"y-axis-2"},{type:"bar",label:"\ub204\uc801\ud655\uc9c4\ud658\uc790",data:c,backgroundColor:"#3571CC",yAxisID:"y-axis-1"}]},o={responsive:!0,elements:{line:{fill:!1}},legend:{position:"bottom"},scales:{xAxes:[{display:!0,gridLines:{display:!1},labels:a}],yAxes:[{id:"y-axis-1",type:"linear",display:!0,position:"left",gridLines:{display:!0},labels:{show:!0},ticks:{fontColor:"#666",fontSize:10,fontFamily:"Lato",min:0,max:function(){var e=Math.max.apply(null,c),t=parseInt(1.2*e);return 1e3*Math.floor(t/1e3)}(),stepSize:2e3}},{id:"y-axis-2",type:"linear",display:!0,position:"right",gridLines:{display:!1},labels:{show:!0},ticks:{fontColor:"#666",fontSize:10,fontFamily:"Lato",min:0,max:function(){var e=Math.max.apply(null,r),t=parseInt(1.5*e);return parseInt(10*Math.floor(t/10))}(),stepSize:10}}]}};return n.a.createElement("div",null,n.a.createElement("h3",null,"\uc77c\uc77c \ubc0f \ub204\uc801 \ud655\uc9c4\ud658\uc790 \ucd94\uc138"),n.a.createElement(H.a,{data:l,options:o}))};M.defaultProps={confirmState:{"\ub0a0\uc9dc":null,"\ub204\uc801\ud655\uc9c4":0,"\uc77c\uc77c\ud655\uc9c4":0}};var P=M,U=function(e){var t=e.releaseState,a=t.\ub0a0\uc9dc,r=t.\ub204\uc801\uaca9\ub9ac\ud574\uc81c,c=t.\uc77c\uc77c\uaca9\ub9ac\ud574\uc81c,l={datasets:[{label:"\uc77c \uaca9\ub9ac\ud574\uc81c",type:"line",data:c,borderColor:"#1F7CCB",borderWidth:2.5,pointBorderColor:"#FFFFFF",pointBackgroundColor:"#1F7CCB",pointRadius:6,yAxisID:"y-axis-2"},{type:"bar",label:"\ub204\uc801\uaca9\ub9ac\ud574\uc81c",data:r,backgroundColor:"#E0217B",yAxisID:"y-axis-1"}]},o={responsive:!0,elements:{line:{fill:!1}},legend:{position:"bottom"},scales:{xAxes:[{display:!0,gridLines:{display:!1},labels:a}],yAxes:[{id:"y-axis-1",type:"linear",display:!0,position:"left",gridLines:{display:!0},labels:{show:!0},ticks:{fontColor:"#666",fontSize:10,fontFamily:"Lato",min:0,max:function(){var e=Math.max.apply(null,r),t=parseInt(1.2*e);return 1e3*Math.floor(t/1e3)}(),stepSize:2e3}},{id:"y-axis-2",type:"linear",display:!0,position:"right",gridLines:{display:!1},labels:{show:!0},ticks:{fontColor:"#666",fontSize:10,fontFamily:"Lato",min:0,max:function(){var e=Math.max.apply(null,c),t=parseInt(1.5*e);return parseInt(10*Math.floor(t/10))}(),stepSize:10}}]}};return n.a.createElement("div",null,n.a.createElement("h3",null,"\ud655\uc9c4\ud658\uc790 \ub0b4 \uc77c\uc77c \ubc0f \ub204\uc801 \uaca9\ub9ac\ud574\uc81c \ucd94\uc138"),n.a.createElement(H.a,{data:l,options:o}))};U.defaultProps={releaseState:{"\ub0a0\uc9dc":null,"\ub204\uc801\uaca9\ub9ac\ud574\uc81c":0,"\uc77c\uc77c\uaca9\ub9ac\ud574\uc81c":0}};var z,W=U,q=(a(77),a(38)),J=a.n(q),$=n.a.memo((function(){var e=Object(g.c)((function(e){return Object(h.a)({},e.allReducer)})),t=e.result,a=e.loading,r=(e.error,Object(g.b)());return n.a.useEffect((function(){r(function(){var e=Object(x.a)(y.a.mark((function e(t){var a,r,n,c,l,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(R()),e.prev=1,e.next=5,w.a.get("http://itpaper.co.kr/demo/covid19/all.php");case 5:a=e.sent,r={"\uae30\uc900\uc2dc\uac01":a.data.collection_datetime,"\ud655\uc9c4\ud658\uc790":0,"\uaca9\ub9ac\ud574\uc81c":0,"\uaca9\ub9ac\uc911":0,"\uc0ac\ub9dd":0},n={"\ub0a0\uc9dc":[],"\ub204\uc801\ud655\uc9c4":[],"\uc77c\uc77c\ud655\uc9c4":[]},c={"\ub0a0\uc9dc":[],"\ub204\uc801\uaca9\ub9ac\ud574\uc81c":[],"\uc77c\uc77c\uaca9\ub9ac\ud574\uc81c":[]},l=a.data.data,o=Object.getOwnPropertyNames(l),console.debug(o),o.forEach((function(e,t){var a=l[e];console.group(e),console.debug(a),console.groupEnd();var o=a.confirmed_acc.length-1;r.\ud655\uc9c4\ud658\uc790+=a.confirmed_acc[o],r.\uaca9\ub9ac\ud574\uc81c+=a.released_acc[o],r.\uaca9\ub9ac\uc911+=a.active[o],r.\uc0ac\ub9dd+=a.death_acc[o];for(var s=a.confirmed_acc.length-8,i=0;s<a.confirmed_acc.length;s++,i++)-1===n.\ub0a0\uc9dc.indexOf(a.date[s])?(n.\ub0a0\uc9dc.push(a.date[s]),n.\ub204\uc801\ud655\uc9c4.push(parseInt(a.confirmed_acc[s])),n.\uc77c\uc77c\ud655\uc9c4.push(parseInt(a.confirmed[s])),c.\ub0a0\uc9dc.push(a.date[s]),c.\ub204\uc801\uaca9\ub9ac\ud574\uc81c.push(parseInt(a.released_acc[s])),c.\uc77c\uc77c\uaca9\ub9ac\ud574\uc81c.push(parseInt(a.released[s]))):(n.\ub204\uc801\ud655\uc9c4[i]+=parseInt(a.confirmed_acc[s]),n.\uc77c\uc77c\ud655\uc9c4[i]+=parseInt(a.confirmed[s]),c.\ub204\uc801\uaca9\ub9ac\ud574\uc81c[i]+=parseInt(a.released_acc[s]),c.\uc77c\uc77c\uaca9\ub9ac\ud574\uc81c[i]+=parseInt(a.released[s]))})),a.data.accState=r,a.data.confirmState=n,a.data.releaseState=c,console.group("\ub204\uc801 \ud655\uc9c4\uc790 \ud604\ud669"),console.debug(r),console.groupEnd(),console.group("\uc77c\uc8fc\uc77c\uac04\uc758 \ud655\uc9c4\uc790 \ud604\ud669"),console.debug(n),console.groupEnd(),console.group("\uc77c\uc8fc\uc77c\uac04\uc758 \uaca9\ub9ac\ud574\uc81c \ud604\ud669"),console.debug(c),console.groupEnd(),console.group("\ud1b5\uc2e0\uacb0\uacfc"),console.debug(a),console.groupEnd(),t(F({result:a.data})),e.next=35;break;case 31:e.prev=31,e.t0=e.catch(1),console.error(e.t0),t(k());case 35:case"end":return e.stop()}}),e,null,[[1,31]])})));return function(t){return e.apply(this,arguments)}}())}),[]),n.a.createElement("div",{className:"container containerTop"},n.a.createElement(d,{title:"\uad6d\ub0b4 \ubc1c\uc0dd \ud604\ud669 ::: \ub9ac\uc561\ud2b8 \ucf54\ub85c\ub09819 \uc0c1\ud669\ud310",description:"React.js\ub85c \uad6c\ud604\ud55c \ucf54\ub85c\ub098 19\uc758 \uad6d\ub0b4 \ubc1c\uc0dd \ud604\ud669 \uc0c1\ud669\ud310 \uc785\ub2c8\ub2e4.",keywords:"React,\ucf54\ub85c\ub09819,Covid19,\uad6d\ub0b4\ubc1c\uc0dd\ud604\ud669"}),n.a.createElement("div",{className:"page-header"},n.a.createElement("h2",null,"\ucf54\ub85c\ub09819 \uad6d\ub0b4 \ubc1c\uc0dd \ud604\ud669")),a?n.a.createElement(J.a,{type:"Bars",color:"#00BFFF",height:100,width:100,style:{position:"absolute",left:"50%",top:"50%",marginLeft:"-50px",marginTop:"-50px"}}):t&&n.a.createElement("div",null,n.a.createElement(D,{accState:t.accState}),n.a.createElement(P,{confirmState:t.confirmState}),n.a.createElement(W,{releaseState:t.releaseState})))})),G={loading:!1,result:null,error:!1},K=Object(S.a)("coivdNow/SEARCH_START"),Q=Object(S.a)("coivdNow/SEARCH_SUCCESS"),V=Object(S.a)("coivdNow/SEARCH_FAILURE"),X=Object(C.a)((z={},Object(N.a)(z,"coivdNow/SEARCH_START",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G;arguments.length>1&&arguments[1];return Object(h.a)({},e,{loading:!0,error:!1})})),Object(N.a)(z,"coivdNow/SEARCH_SUCCESS",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;return Object(h.a)({},e,{loading:!1,result:t.payload.result,error:!1})})),Object(N.a)(z,"coivdNow/SEARCH_FAILURE",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G;arguments.length>1&&arguments[1];return Object(h.a)({},e,{loading:!1,error:!0})})),z),G),Y=function(e){var t=e.chartData,a={labels:t.\uc9c0\uc5ed\uba85,datasets:[{label:"\uc2dc,\ub3c4\ubcc4 \ub204\uc801 \ud655\uc9c4\uc790 \ud604\ud669",backgroundColor:"#15A8DE",borderColor:"#15A8DE",borderWidth:0,hoverBackgroundColor:"#15A8DE",hoverBorderColor:"#15A8DE",data:t.\ub204\uc801\ud655\uc9c4\uc790}]};return n.a.createElement(H.b,{data:a,height:130,options:{legend:{position:"bottom"},scales:{xAxes:[{gridLines:{display:!0}}],yAxes:[{gridLines:{display:!1}}]}}})};Y.defaultProps={chartData:{"\uc9c0\uc5ed\uba85":[],"\ub204\uc801\ud655\uc9c4\uc790":[]}};var Z=Y,ee=function(e){var t=e.state;return n.a.createElement("div",{className:"table-responsive "+T.a.mt30},n.a.createElement("table",{className:"table table-hover table-bordered"},n.a.createElement("thead",null,n.a.createElement("tr",{className:"success"},n.a.createElement("th",{className:"text-center",rowspan:"2"},"\uc2dc\ub3c4\uba85"),n.a.createElement("th",{className:"text-center",rowspan:"2"},"\uc804\uc77c\ub300\ube44",n.a.createElement("br",null),"\ud655\uc9c4\ud658\uc790 \uc99d\uac10"),n.a.createElement("th",{className:"text-center",colspan:"4"},"\ud655\uc9c4\ud658\uc790 (\uba85)")),n.a.createElement("tr",{className:"success"},n.a.createElement("th",{className:"text-center"},"\ud655\uc9c4\ud658\uc790"),n.a.createElement("th",{className:"text-center"},"\uaca9\ub9ac\uc911"),n.a.createElement("th",{className:"text-center"},"\uaca9\ub9ac\ud574\uc81c"),n.a.createElement("th",{className:"text-center"},"\uc0ac\ub9dd\uc790"))),n.a.createElement("tbody",null,t&&t.map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("th",{className:"text-center"},e.region),n.a.createElement("td",{className:"text-center"},Number(e.confirmed-e.confirmed_prev).toLocaleString(),"\uba85"),n.a.createElement("td",{className:"text-center"},Number(e.confirmed).toLocaleString(),"\uba85"),n.a.createElement("td",{className:"text-center"},Number(e.active).toLocaleString(),"\uba85"),n.a.createElement("td",{className:"text-center"},Number(e.released).toLocaleString(),"\uba85"),n.a.createElement("td",{className:"text-center"},Number(e.death).toLocaleString(),"\uba85"))})))))};ee.defaultProps={state:[]};var te=ee,ae=n.a.memo((function(){var e=Object(g.c)((function(e){return Object(h.a)({},e.nowReducer)})),t=e.result,a=e.loading,r=(e.error,Object(g.b)());return n.a.useEffect((function(){r(function(){var e=Object(x.a)(y.a.mark((function e(t){var a,r,n,c,l,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(K()),e.prev=1,e.next=5,w.a.get("http://itpaper.co.kr/demo/covid19/now.php");case 5:for(a=e.sent,r={"\uc9c0\uc5ed\uba85":[],"\ub204\uc801\ud655\uc9c4\uc790":[]},a.data.state.forEach((function(e,t){r.\uc9c0\uc5ed\uba85[t]=e.region,r.\ub204\uc801\ud655\uc9c4\uc790[t]=e.confirmed})),n=0;n<r.\ub204\uc801\ud655\uc9c4\uc790.length-1;n++)for(c=n+1;c<r.\ub204\uc801\ud655\uc9c4\uc790.length;c++)r.\ub204\uc801\ud655\uc9c4\uc790[n]<r.\ub204\uc801\ud655\uc9c4\uc790[c]&&(l=r.\ub204\uc801\ud655\uc9c4\uc790[n],r.\ub204\uc801\ud655\uc9c4\uc790[n]=r.\ub204\uc801\ud655\uc9c4\uc790[c],r.\ub204\uc801\ud655\uc9c4\uc790[c]=l,o=r.\uc9c0\uc5ed\uba85[n],r.\uc9c0\uc5ed\uba85[n]=r.\uc9c0\uc5ed\uba85[c],r.\uc9c0\uc5ed\uba85[c]=o);a.data.chartData=r,console.group("\ud1b5\uc2e0\uacb0\uacfc"),console.debug(a),console.groupEnd(),t(Q({result:a.data})),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(1),console.error(e.t0),t(V());case 20:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}())}),[]),n.a.createElement("div",{className:"container containerTop"},n.a.createElement(d,{title:"\uc2dc\ub3c4\ubcc4 \ubc1c\uc0dd \ub3d9\ud5a5 ::: \ub9ac\uc561\ud2b8 \ucf54\ub85c\ub09819 \uc0c1\ud669\ud310",description:"React.js\ub85c \uad6c\ud604\ud55c \ucf54\ub85c\ub098 19\uc758 \uc2dc\ub3c4\ubcc4 \ubc1c\uc0dd \ub3d9\ud5a5 \uc0c1\ud669\ud310 \uc785\ub2c8\ub2e4.",keywords:"React,\ucf54\ub85c\ub09819,Covid19,\uc2dc\ub3c4\ubcc4\ubc1c\uc0dd\ub3d9\ud5a5"}),n.a.createElement("div",{className:"page-header"},n.a.createElement("h2",null,"\uc2dc\ub3c4\ubcc4 \ubc1c\uc0dd \ub3d9\ud5a5")),a?n.a.createElement(J.a,{type:"Bars",color:"#00BFFF",height:100,width:100,style:{position:"absolute",left:"50%",top:"50%",marginLeft:"-50px",marginTop:"-50px"}}):t&&n.a.createElement("div",null,n.a.createElement(Z,{chartData:t.chartData}),n.a.createElement(te,{state:t.state})))})),re=function(){return n.a.createElement("div",{className:T.a.containerTop},n.a.createElement(d,null),n.a.createElement(b,null),n.a.createElement(o.c,null,n.a.createElement(o.a,{path:["/","/korea_state"],component:$,exact:!0}),n.a.createElement(o.a,{path:"/sido_state",component:ae})),n.a.createElement("div",{className:T.a.footer},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("p",null,"copyright\xa9itpaper.co.kr"),n.a.createElement("p",null,"\uc774\uc820\uc544\uce74\ub370\ubbf8\ucef4\ud4e8\ud130\ud559\uc6d0")),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"text-right"},n.a.createElement("p",null,"\uc774 \uc6f9 \uc0ac\uc774\ud2b8\ub294 \uc774\uc820\ucef4\ud4e8\ud130\uc544\uce74\ub370\ubbf8 \uc218\uc5c5 \uc608\uc81c\ub85c \ud65c\uc6a9\ub418\uace0\uc790 \uad6c\ucd95\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(224);var ne=a(10),ce=a(84),le=a(85),oe=a(86),se=Object(ne.combineReducers)({allReducer:L,nowReducer:X}),ie=Object(le.createLogger)(),me=Object(ne.createStore)(se,Object(ce.composeWithDevTools)(Object(ne.applyMiddleware)(ie,oe.a)));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g.a,{store:me},n.a.createElement(u.a,null,n.a.createElement(re,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,t,a){e.exports=a.p+"static/media/covid19.5306e75c.jpg"},88:function(e,t,a){e.exports=a(225)}},[[88,1,2]]]);
//# sourceMappingURL=main.bd1819c0.chunk.js.map