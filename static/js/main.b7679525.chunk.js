(this.webpackJsonpReduceReuseRecycle=this.webpackJsonpReduceReuseRecycle||[]).push([[0],{161:function(e,t,a){},171:function(e,t,a){"use strict";a.r(t);var n=a(26),r=a(30),i=a.n(r),c=a(150),o=a.n(c),s=(a(161),a(107)),l=a(95),d=a(42),u=a(148),p=a.n(u),h=a(65),b=a.n(h),g=a(27),f=a(144),j=a(152),m=a(143),v=a.n(m),O=function(e,t,a){return function(e,t,a,n,r){return(e-t)*(r-n)/(a-t)+n}(e,t,a,50,200)},x=function(e,t){return{min:e,max:t}},y={GNI:x(99,190017),total_msw_total_msw_generated_tons_year:x(0,258e6),waste_treatment_recycling_percent:x(0,100),population:x(11097,137122e4),msw_per_capita_in_kg:x(0,1587)},w={GNI:"GNI per capita ($)",waste_treatment_recycling_percent:"Recycling rate (%)",population:"Population",msw_per_capita_in_kg:"Waste per capita (kg)",total_msw_total_msw_generated_tons_year:"Total waste generated (t)",composition_food_organic_waste_percent:"Fraction food (%)",composition_glass_percent:"Fraction glass (%)",composition_metal_percent:"Fraction metal (%)",composition_other_percent:"Fraction other (%)",composition_paper_cardboard_percent:"Fraction paper & cardboard (%)",composition_plastic_percent:"Fraction plastic (%)",composition_rubber_leather_percent:"Fraction rubber & leather (%)",composition_wood_percent:"Fraction wood (%)",composition_yard_garden_green_waste_percent:"Fraction organic (%)"},k=function(e,t,a,n){return isNaN(e)||isNaN(t)||0===e||0===t?v.a.rgb(222,222,222).hex():v.a.rgb(O(e,a.min,a.max),O(t,n.min,n.max),100).hex()};var N=function(e){var t=e.data,a=Object(r.useState)(),i=Object(d.a)(a,2),c=i[0],o=i[1],u=Object(r.useState)(),p=Object(d.a)(u,2),h=p[0],m=p[1],_=Object(r.useState)("GNI"),O=Object(d.a)(_,2),x=O[0],N=O[1],C=Object(r.useState)("msw_per_capita_in_kg"),S=Object(d.a)(C,2),F=S[0],I=S[1],A=Object(r.useState)(),W=Object(d.a)(A,2),R=W[0],G=W[1],E=Object(r.useState)(),z=Object(d.a)(E,2),T=z[0],X=z[1],B=Object(r.useState)(!1),D=Object(d.a)(B,2),M=D[0],J=D[1];return Object(r.useEffect)((function(){var e=g.f("mapdiv",f.a);e.geodata=j.a,e.projection=new f.c.Miller,e.homeZoomLevel=3,e.homeGeoPoint={longitude:12,latitude:54},o(e);var t=e.series.push(new f.b);t.useGeodata=!0,t.exclude=["AQ"],m(t);var a=e.chartContainer.createChild(g.a);a.x=g.h(0),a.y=g.h(100),a.dx=25,a.dy=-275,a.width=250,a.height=250,a.background.fill=g.e("#000"),a.background.fillOpacity=.3,a.background.stroke=g.e("#000"),a.background.strokeOpacity=.4,a.background.strokeWidth=2;var n=a.createChild(g.a);n.width=200,n.height=200,n.align="center",n.dy=25,n.layout="grid",n.background.stroke=g.e("#000"),n.background.strokeOpacity=.8,n.background.strokeWidth=3;for(var r=0;r<5;r++)for(var i=0;i<5;i++){var c=v.a.rgb(40*i,40*r,100),s=n.createChild(g.d);s.width=40,s.height=40,s.fill=c.hex()}var l=a.createChild(g.b);l.x=g.h(10),l.y=g.h(.5),l.text="GNI per capita ($) ---\x3e",l.fontWeight="bold",G(l);var d=a.createChild(g.b);d.x=g.h(.5),d.y=g.h(90),d.rotation=-90,d.text="<--- Waste per capita (kg)",d.fontWeight="bold",X(d),J(!0)}),[]),Object(r.useEffect)((function(){if(t&&M){var e=b.a.map(t,(function(e){var t=Math.round(e[x]),a=Math.round(e[F]),n=b.a.get(y,x),r=b.a.get(y,F);R.text="".concat(w[x]," ---\x3e"),T.text="<--- ".concat(w[F]);var i=b.a.reduce(w,(function(t,a,n){var r=Math.round(b.a.get(e,n));return Object(l.a)(Object(l.a)({},t),{},Object(s.a)({},n,isNaN(r)||0===r?"no data":r))}),{});return Object(l.a)({id:e.ID,xAxis:t,yAxis:a,fill:g.e(k(t,a,n,r))},i)}));h.data=e;var a=h.mapPolygons.template,n="[bold]{name}[/]";b.a.forEach(w,(function(e,t){n=t===x||t===F?n.concat("\n[bold]".concat(e,": {").concat(t,"}[/]")):n.concat("\n".concat(e,": {").concat(t,"}"))})),a.tooltipText=n,a.propertyFields.fill="fill"}}),[t,c,h,x,F]),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"",style:{width:"100%",height:"100%"},children:[Object(n.jsxs)("form",{className:"d-flex justify-content-center p-2",children:[Object(n.jsxs)("select",{className:"mr-2",value:x,onChange:function(e){return N(e.target.value)},children:[Object(n.jsx)("option",{value:"GNI (income in $)",children:"GNI per capita ($)"}),Object(n.jsx)("option",{value:"population",children:"Population"}),Object(n.jsx)("option",{value:"total_msw_total_msw_generated_tons_year",children:"Total waste generated (t)"}),Object(n.jsx)("option",{value:"msw_per_capita_in_kg",children:"Waste per capita (kg)"})]}),Object(n.jsxs)("select",{value:F,onChange:function(e){return I(e.target.value)},children:[Object(n.jsx)("option",{value:"total_msw_total_msw_generated_tons_year",children:"Total waste generated (t)"}),Object(n.jsx)("option",{value:"msw_per_capita_in_kg",children:"Waste per capita (kg)"}),Object(n.jsx)("option",{value:"waste_treatment_recycling_percent",children:"Recycling rate (%)"})]})]}),Object(n.jsx)("div",{className:"border rounded",id:"mapdiv",style:{width:"100%",height:"100%"}})]})})},C=a.p+"static/media/data_for_visualisations.f086fa6a.csv",S=a.p+"static/media/data_bar_chart_race.6bb34650.csv",F=a(58),I=a(142);var A=function(e){var t=e.data;return Object(r.useEffect)((function(){if(t){g.i(I.a);var e=g.f("racediv",F.h);e.padding(40,40,40,40);var a=e.plotContainer.createChild(g.b);a.x=g.h(97),a.y=g.h(95),a.horizontalCenter="right",a.verticalCenter="middle",a.dx=-15,a.fontSize=50;var n=e.plotContainer.createChild(g.c);n.x=g.h(97),n.y=g.h(95),n.dy=-2,n.verticalCenter="middle",n.events.on("toggled",(function(e){e.target.isActive?function(){d>=2018&&(d=1999);l=setInterval((function(){u()}),r),u()}():l&&clearInterval(l)}));var r=2e3,i=e.yAxes.push(new F.a);i.renderer.grid.template.location=0,i.dataFields.category="id",i.renderer.minGridDistance=1,i.renderer.inversed=!0,i.renderer.grid.template.disabled=!0;var c=e.xAxes.push(new F.g);c.min=0,c.rangeChangeEasing=g.g.linear,c.rangeChangeDuration=r,c.extraMax=.1;var o=e.series.push(new F.b);o.dataFields.categoryY="id",o.dataFields.valueX="value",o.tooltipText="{valueX.value}",o.columns.template.strokeOpacity=0,o.columns.template.column.cornerRadiusBottomRight=5,o.columns.template.column.cornerRadiusTopRight=5,o.interpolationDuration=r,o.interpolationEasing=g.g.linear;var s=o.bullets.push(new F.d);s.label.horizontalCenter="right",s.label.text="{values.valueX.workingValue.formatNumber('#.as')}",s.label.textAlign="end",s.label.dx=-10,e.zoomOutButton.disabled=!0,o.columns.template.adapter.add("fill",(function(t,a){return e.colors.getIndex(a.dataItem.index)}));var l,d=2e3;a.text=d.toString(),i.sortBySeries=o,e.data=JSON.parse(JSON.stringify(t[d])),o.events.on("inited",(function(){i.zoom({start:0,end:20/i.dataItems.length}),setTimeout((function(){n.isActive=!0}),2e3)}))}function u(){++d>2018&&(d=2018,n.isActive=!1);for(var i=t[d],s=0;s<e.data.length;s++)e.data[s].value=i[s].value;o.interpolationDuration=r,c.rangeChangeDuration=r,e.invalidateRawData(),a.text=d.toString()}}),[t]),Object(n.jsx)("div",{id:"racediv",style:{width:"100%",height:"100%"}})},W=Array.from({length:19},(function(e,t){return t+2e3}));var R=function(e){var t=e.data,a=Object(r.useState)("Germany"),i=Object(d.a)(a,2),c=i[0],o=i[1],s=Object(r.useState)("Finland"),l=Object(d.a)(s,2),u=l[0],p=l[1],h=Object(r.useState)(),b=Object(d.a)(h,2),f=b[0],j=b[1],m=Object(r.useState)(),v=Object(d.a)(m,2),O=v[0],x=v[1],y=Object(r.useState)(),w=Object(d.a)(y,2),k=w[0],N=w[1];Object(r.useEffect)((function(){g.i(I.a);var e=g.f("linediv",F.h),t=e.xAxes.push(new F.c),a=e.yAxes.push(new F.g);a.title.text="Waste per capita (kg)",a.title.fontWeight="bold";var n=e.series.push(new F.f);n.dataFields.valueY="countryA",n.dataFields.dateX="date",n.tooltipText="{countryA}",n.tooltip.pointerOrientation="vertical",n.strokeWidth=4,n.stroke=g.e("#4ea7ff"),j(n);var r=e.series.push(new F.f);r.dataFields.valueY="countryB",r.dataFields.dateX="date",r.tooltipText="{countryB}",r.tooltip.pointerOrientation="vertical",r.strokeWidth=4,r.stroke=g.e("#ff6720"),x(r),e.cursor=new F.i,e.cursor.fullWidthLineX=!0,e.cursor.xAxis=t,e.cursor.lineX.strokeWidth=0,e.cursor.lineY.strokeWidth=0,e.cursor.lineX.fill=g.e("#000"),e.cursor.lineX.fillOpacity=.1,e.legend=new F.e,N(e)}),[]),Object(r.useEffect)((function(){if(t&&k){var e=_.map(W,(function(e){var a=parseInt(_.get(t,c)[0][e]),n=parseInt(_.get(t,u)[0][e]);if(!isNaN(a)&&!isNaN(n))return{date:new Date(e,1,1),countryA:a,countryB:n}}));f.name=c,O.name=u,k.data=e}}),[t,k,c,u]);var C=_.map(t,(function(e,t){return t}));return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{style:{width:"100%",height:"100%"},children:[Object(n.jsxs)("form",{className:"d-flex justify-content-center p-2",children:[Object(n.jsx)("select",{value:c,onChange:function(e){return o(e.target.value)},className:"mr-2",children:_.map(C,(function(e){return Object(n.jsx)("option",{value:e,children:e},e)}))}),Object(n.jsx)("select",{value:u,onChange:function(e){return p(e.target.value)},children:_.map(C,(function(e){return Object(n.jsx)("option",{value:e,children:e},e)}))})]}),Object(n.jsx)("div",{id:"linediv",style:{width:"100%",height:"100%"},className:"border rounded"})]})})};var G=function(){var e=Object(r.useState)(),t=Object(d.a)(e,2),a=t[0],i=t[1],c=Object(r.useState)(),o=Object(d.a)(c,2),u=o[0],h=o[1],g=Object(r.useState)(),f=Object(d.a)(g,2),j=f[0],m=f[1],v=Object(r.useState)(2),_=Object(d.a)(v,2),O=_[0],x=_[1];Object(r.useEffect)((function(){fetch(C).then((function(e){return e.text()})).then((function(e){var t=p.a.parse(e,{delimiter:";",header:!0});i(t.data)})),fetch(S).then((function(e){return e.text()})).then((function(e){var t=p.a.parse(e,{delimiter:";",header:!0}),a=Array.from({length:19},(function(e,t){return t+2e3}));h(b.a.reduce(a,(function(e,a){return Object(l.a)(Object(l.a)({},e),{},Object(s.a)({},a,b.a.map(t.data,(function(e){var t=b.a.get(e,a);return{id:e.Country,value:isNaN(t)?"0":t}}))))}),{})),m(b.a.groupBy(t.data,(function(e){return e.Country})))}))}),[]);var y=[Object(n.jsx)(N,{data:a},0),Object(n.jsx)(A,{data:u},1),Object(n.jsx)(R,{data:j},2)];return Object(n.jsxs)("div",{className:"App",style:{width:"100vw",height:"90vh"},children:[Object(n.jsx)("button",{onClick:function(){x(0===O?y.length-1:O-1)},style:{position:"absolute",width:50,top:0,left:0,right:0,bottom:0,justifyContent:"center",alignItems:"center",zIndex:99,border:0,background:"transparent",outline:"none"},children:Object(n.jsx)("i",{className:"fa fa-angle-double-left",style:{fontSize:"3em",opacity:"30%"}})}),Object(n.jsx)("button",{onClick:function(){x(O===y.length-1?0:O+1)},style:{position:"absolute",width:50,top:0,left:"calc(100% - 50px)",right:0,bottom:0,justifyContent:"center",alignItems:"center",zIndex:99,border:0,background:"transparent",outline:"none"},children:Object(n.jsx)("i",{className:"fa fa-angle-double-right",style:{fontSize:"3em",opacity:"30%"}})}),y[O]]})};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(G,{})}),document.getElementById("root"))}},[[171,1,4]]]);
//# sourceMappingURL=main.b7679525.chunk.js.map