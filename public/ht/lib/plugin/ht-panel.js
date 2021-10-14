!function(J,C,$){"use strict";var d="ht",r=J[d],O=r.Default,U=O.isTouchable,g=O.isTouchEvent,o=r.Color,u="px",L="0",D="innerHTML",R="className",I="position",V="absolute",l="width",b="height",q="left",p="top",B="right",z="bottom",W="max-width",w="max-height",N=null,s="none",Y="",t=J.parseInt,Q=J.setTimeout,v=O.getInternal(),K=O.animate,Z=o.titleIconBackground,f=function(){return document},m=function(n){return f().createElement(n)},i=function(){return m("div")},T=function(){return m("canvas")},H=function(i,n,b){i.style.setProperty(n,b,N)},x=function(y,M){return y.style.getPropertyValue(M)},c=function(W,F){W.appendChild(F)},M=function(Y,e){Y.removeChild(e)},h=v.addEventListener,G=(v.removeEventListener,function(b){var l=b.scrollWidth,S=b.scrollHeight;return b===f().body&&(l=Math.max(l,f().documentElement.scrollWidth),S=Math.max(S,f().documentElement.scrollHeight)),{width:l,height:S}}),a=function(l){var q=l.touches[0];return q?q:l.changedTouches[0]};v.addMethod(O,{panelExpandIcon:{width:16,height:16,comps:[{type:"triangle",rect:[4,4,10,8],background:Z,rotation:3.14}]},panelCollapseIcon:{width:16,height:16,comps:[{type:"triangle",rect:[4,4,10,8],background:Z}]},panelLockIcon:{width:100,height:100,comps:[{type:"roundRect",rect:[10,50,80,40],borderWidth:10,borderColor:Z},{type:"shape",points:[37,45,37,20,37,13,43,13,63,13,69,13,70,19,70,44],segments:[1,2,3,2,3,2],borderWidth:10,borderColor:Z}]},panelUnLockIcon:{width:100,height:100,comps:[{type:"roundRect",rect:[10,50,80,40],borderWidth:10,borderColor:Z},{type:"shape",points:[37,45,37,20,37,13,43,13,63,13,69,13,70,19,70,26],segments:[1,2,3,2,3,2],borderWidth:10,borderColor:Z}]},panelMinimizeIcon:{width:100,height:100,comps:[{type:"shape",points:[10,35,35,35,35,10],segments:[1,2,2],borderWidth:8,borderColor:Z},{type:"shape",points:[90,35,65,35,65,10],segments:[1,2,2],borderWidth:8,borderColor:Z},{type:"shape",points:[10,65,35,65,35,90],segments:[1,2,2],borderWidth:8,borderColor:Z},{type:"shape",points:[65,90,65,65,90,65],segments:[1,2,2],borderWidth:8,borderColor:Z}]},panelRestoreIcon:{width:300,height:300,comps:[{type:"rect",rect:[10,24,268,56],background:Z},{type:"rect",rect:[10,118,268,56],background:Z},{type:"rect",rect:[10,213,268,56],background:Z}]},panelTitleLabelColor:O.labelSelectColor,panelTitleLabelFont:O.labelFont,panelContentLabelFont:O.labelFont,panelTitleBackground:o.titleBackground,panelSeparatorWidth:1,panelSeparatorColor:$},!0);var A=r.widget.Panel=function(P){var l=this,Q=l._view=v.createView(null,l);l.$1i=0,l.$18i=new r.Notifier,l.$2i="leftTop",H(Q,p,L),H(Q,q,L),H(Q,I,V),H(Q,"overflow","hidden"),l._interactor=new S(l),l.setConfig(P),l.addEventListener(function(G){var S=l.getPanelConfig(G.id),e=S.content;("beginRestore"===G.kind||"betweenResize"===G.kind||"endToggle"===G.kind)&&(e&&e.invalidate&&e.invalidate(),S.items&&S.items.forEach(function(J){J&&J.content&&J.content.invalidate&&J.content.invalidate()}))})};O.def(A,C,{ms_v:1,_dragContainment:"parent",setConfig:function(d){function g(u){u.expanded=!u.expanded,e.togglePanel(u.id,!0,!0)}if(d){for(var e=this,t=e._view.parentNode;this._view.children.length;)this._view.removeChild(this._view.children[0]);e._config=d,e.$35i=[],d.expanded==N&&(d.expanded=d.expand!=N?d.expand:!0);var S=e._view,J=e.$24i(d,S,!0),v=J[2],Z=d.width;e.$35i.push(J[1]),d.items&&d.items.forEach(function(G){G.expanded==N&&(G.expanded=G.expand!=N?G.expand:!0);var M=e.$24i(G,v.children[0]);e.$35i.push(M[1])});var P=i();H(P,l,10+u),H(P,b,10+u),H(P,I,V),H(P,z,L),H(P,B,L),P[R]="resize-area",c(S,P),e.$10i(),d.flowLayout&&H(S,I,"relative"),H(S,"opacity",L),c(f().body,S),Z==N&&(Z=S.offsetWidth),H(S,l,Z+u),H(S,W,Z+u);var y=d.content;y&&y.isSelfViewEvent&&(y.setX(0),y.setY(0),y.setWidth(Z-2*(d.borderWidth||0)),y.setHeight(d.contentHeight)),d.items&&d.items.forEach(function(j){g(j)}),d.buttons&&d.buttons.indexOf("toggle")<0||g(d),d.minimized==N&&d.minimize!=N&&(d.minimized=d.minimize),d.minimized&&d.minimizable!==!1&&e.minimize(!0),M(f().body,S),H(S,"opacity",Y),t&&c(t,S),e.iv()}},getPanelConfig:function(_){var Z=this,G=Z._config,q=G.items;if(G.id===_)return G;if(q)for(var P=0;P<q.length;P++){var W=q[P];if(W.id===_)return W}},getPanelView:function(I){for(var x=this,G=x.$35i,j=0;j<G.length;j++){var p=G[j],$=p.parentNode;if($.$15i===I)return $}},setDragContainment:function(_){this._dragContainment=_},getDragContainment:function(){return this._dragContainment},$20i:function(){var i=this._config,b=i.restoreIconSize||24;return b},$5i:function(J){var t=J.titleIconSize||16;return U&&(t*=1.2),t},$4i:function(t){var n=t.titleHeight||O.widgetTitleHeight;return n},setTitle:function(C,D){if(D==N&&(D=this._config.id),D!=N){var z=this.getPanelConfig(D),k=this.getPanelView(D);z.title=C,k.querySelector(".panel-title span").innerHTML=C}},setInnerPanel:function(K){var u,t,w=this,J=K.id,h=w.$35i,I=!1;if(K.expanded==N&&(K.expanded=!0),J!=N){var _=w.getPanelConfig(J);if(_){I=!0;var m,V=w.getPanelView(J),k=V.parentNode,b=V.children[0];if(V!==w._view){w.$11i();for(m in _)delete _.key;for(m in K)_[m]=K[m];u=w.$24i(K,k,!1,V),t=u[1],k.removeChild(V);for(var G=0;G<h.length;G++)if(h[G]===b){h.splice(G,1,t);break}w.$12i(),_.expanded=!_.expanded,w.togglePanel(_.id,!0,!0),w.iv()}}}if(!I){w.$11i(),u=w.$24i(K,w._view.children[1]),t=u[1],h.push(t),w._config.items||(w._config.items=[]);var A=w._config.items;if(A.push(K),w.$12i(),A.length>1){var r=A[A.length-2],B=w.getPanelView(r.id).children[0];H(B,"border-bottom",w.$55i(r))}K.expanded=!K.expanded,w.togglePanel(K.id,!0,!0),w.iv()}},removeInnerPanel:function(c){var A,t=this,b=-1,Z=t._config.items;if(Z)for(A=0;A<Z.length;A++){var s=Z[A];if(s.id===c){b=A;break}}if(t.$11i(),b>=0){var P=t.$35i,I=t.getPanelView(c),j=I.children[0];for(A=0;A<P.length;A++)if(P[A]===j){P.splice(A,1);break}Z.splice(b,1),I.parentNode.removeChild(I)}if(t.$12i(),Z.length>0){var y=Z[Z.length-1],W=t.getPanelView(y.id).children[0];H(W,"border-bottom",t.$55i(y))}},$6i:function(b){H(b,"cursor","pointer"),H(b,"display","inline-block"),H(b,"margin-right",(U?8:4)+u),H(b,"vertical-align",p)},$24i:function(G,P,t,B){var K=this,j=K._config.flowLayout,g=t?P:i(),o=K.$50i(G),E=K.$3i(G,t);g[R]="ht-widget-panel"+(t?" outer-panel":" inner-panel"),G.borderWidth==N&&(G.borderWidth=t?2:0);var L=G.borderWidth;if(L="0 "+L+u+" "+L+u+" "+L+u+" ",H(g,"border-width",L),H(g,"border-color",G.titleBackground||O.panelTitleBackground),H(g,"border-style","solid"),c(g,E),c(g,o),t||(B?P.insertBefore(g,B):c(P,g)),!j&&t&&G.minimizable!==!1){var Y=T(),w=K.$20i(),e=G.restoreToolTip;v.setCanvas(Y,w,w),Y[R]="control-button button-minimize button-minimize-restore",K.$6i(Y),H(Y,"display","none"),c(P,Y),Y.title=e||""}var r=G.panelBackground||G.titleBackground||O.panelTitleBackground;if(H(g,"background-color",r),G.id==N){for(var J=K.$1i++;K.getPanelConfig(J);)J=K.$1i++;G.id=J}return g.$15i=G.id,G.width&&(g.style.width=G.width+u),[g,E,o]},$9i:function(B){var a=T();a[R]="control-button button-toggle button-toggle-expand",a.title=B.toggleToolTip||"";var H=this.$4i(B),W=this.$5i(B);return this.$6i(a),v.setCanvas(a,W,H),a},$8i:function(f){var P=T(),e="control-button button-independent-switch";P[R]=f.independent===!0?e+" button-independent-switch-on":e+" button-independent-switch-off",P.title=f.independentSwitchToolTip||"";var b=this.$4i(f),N=this.$5i(f);return this.$6i(P),v.setCanvas(P,N,b),P},$7i:function(r){var j=T();j[R]="control-button button-minimize button-minimize-minimize",j.title=r.minimizeToolTip||"";var t=this.$4i(r),h=this.$5i(r);return this.$6i(j),v.setCanvas(j,h,t),j},$55i:function($){var s=this._config,x=s.items,y=$.separatorWidth||O.panelSeparatorWidth,Y=$.titleBackground||O.panelTitleBackground,p=$.expanded!==!1?Y:$.separatorColor||O.panelSeparatorColor||O.brighter(Y);return(s===$||x&&x.indexOf($)===x.length-1)&&(y=0),y+u+" solid "+p},$3i:function(M,Y){var a=this,w=a._config.flowLayout,G=i(),o=i(),S=a.$4i(M),U=M.titleBackground,e=M.titleColor,C=M.titleIcon,N=M.buttons;if(G[R]="panel-title",H(G,I,"relative"),H(G,"background",U||O.panelTitleBackground),H(G,"color",e||O.panelTitleLabelColor),H(G,p,L),H(G,"box-sizing","border-box"),H(G,"-moz-box-sizing","border-box"),H(G,"padding","0 5px 0 0"),H(G,l,"100%"),H(G,"cursor","default"),H(G,"white-space","nowrap"),H(G,"font",O.panelTitleLabelFont),C){var y=T();y[R]="control-button panel-title-icon";var f=a.$4i(M),F=a.$5i(M);a.$6i(y),v.setCanvas(y,F,f),c(G,y)}var h=m("span");H(h,"display","inline-block"),H(h,"margin-left","5px"),h[D]="<span>"+M.title+"</span>",c(G,h),H(G,"line-height",S+u),o[R]="panel-title-controls",H(o,I,V),H(o,q,L),H(o,B,5+u),H(o,p,L),H(o,z,L),H(o,"text-align",B);var g=function(){var y=a.$9i(M);c(o,y)},E=function(){if(!w&&Y&&M.minimizable!==!1){var p=a.$7i(M);c(o,p)}},s=function(){if(!Y){var w=a.$8i(M);c(o,w)}},d=function(N){var S=T();S[R]="control-button custombutton-"+N.name,S.title=N.toolTip||"",S._action=N.action;var u=a.$4i(M),C=a.$5i(M);a.$6i(S),v.setCanvas(S,C,u),c(o,S)};if(N)for(var r=0;r<N.length;r++){var X=N[r];"string"==typeof X?"minimize"===X?E():"independentSwitch"===X?s():"toggle"===X&&g():"object"==typeof X&&d(X)}else E(),g();return c(G,o),G},$50i:function(o){var y=i(),C=o.contentHeight,q=i();H(q,I,"relative"),y[R]="panel-body",H(y,"overflow","hidden");var F=o.contentBackground;if(F===$&&(F="white"),H(y,"background",F),H(y,"font",O.panelContentLabelFont),c(y,q),o.content){var U,m=o.content;m.getView?(c(q,m.getView()),U=q.children[0]):m instanceof Element?(c(q,m),U=q.children[0]):q[D]=m,m.isSelfViewEvent||U&&(H(U,l,"100%"),H(U,b,"100%")),C&&H(q,b,C+u)}return y},$10i:function(){var W=this,Z=W._config,x=W._view,y=x.querySelector(".resize-area").style;y.display=Z.flowLayout||Z.minimized===!0||Z.expanded===!1?s:"block"},$11i:function(){var s=this._view,S=s.children[1];this.$13i>=0?this.$13i++:this.$13i=1,H(S,w,Y),H(s,W,Y)},$12i:function(){var O=--this.$13i;if(0===O){var L=this._view,p=L.children[1];H(p,w,p.scrollHeight+u),H(L,W,L.offsetWidth+u)}},$14i:function(){var s=this._view,A=s.children[0],S=A.children[1].children,U=this._config,G=0;s.$26i=s.offsetWidth,G+=A.children[0].offsetWidth,U.titleIcon&&(G+=A.children[1].offsetWidth,S=A.children[2].children);for(var V=0;V<S.length;V++){var M=S[V];G+=M.offsetWidth+5}s.$51i=G+15},togglePanel:function(B,k,j){function t(M){var c=M.target,Y=c.parentNode,E=v.getPanelConfig(Y.$15i);delete Y.$19i,c!==_&&v.$12i(),v.$18i.fire({kind:"endToggle",target:v,id:E.id})}for(var v=this,M=v._view,_=M.children[1],Z=N,V=v.$35i,a=V.length,p=v._config.exclusive,E=v.$2i,T=[],x=v._config.narrowWhenCollapse,C=0;a>C;C++){var m=V[C],e=m.parentNode,g=e.$15i,S=v.getPanelConfig(g);g===B&&(Z=e),!k&&p&&S.expanded&&e!==M&&g!==B&&S.independent!==!0&&T.push(e)}if(Z&&!Z.$19i){Z.$19i=!0;var o=Z.children[1],G=Z.querySelector(".button-toggle"),f=v.getPanelConfig(Z.$15i);if(!G)return;Z===M||f.expanded||f.independent===!0||T.forEach(function(G){v.togglePanel(G.$15i,!0)}),Z!==M&&v.$11i();var X=200;if(j&&(X=0),v.$18i.fire({kind:"beginToggle",target:v,id:Z.$15i}),f.expanded){var h=function(){G[R]="control-button button-toggle",G[R]+=E.indexOf("Bottom")>=0?" button-toggle-expand":" button-toggle-collapse",H(o,l,o.clientWidth+u),f.expanded=!1,H(Z.children[0],"border-bottom",v.$55i(f)),K(o).duration(X).set("opacity",L).set(w,L).end(t),x&&Z===M&&K(Z).duration(X).set(W,Z.$51i+u).end(),Z[R]+=" panel-collapse",K(Z).duration(X).set("padding-bottom",L).end(),v.$28i(f,!0),v.$10i()};x&&Z===M&&v.$14i(),h()}else G[R]="control-button button-toggle",G[R]+=E.indexOf("Bottom")>=0?" button-toggle-collapse":" button-toggle-expand",H(o,l,Y),f.expanded=!0,H(Z.children[0],"border-bottom",v.$55i(f)),K(o).duration(X).set("opacity","1").set(w,o.scrollHeight+u).end(t),x&&Z===M&&K(Z).duration(X).set(W,(Z.$26i||Z.offsetWidth)+u).end(),Z[R]=Z[R].replace(" panel-collapse",Y),K(Z).duration(X).end(),v.$28i(f,!0),v.$10i()}},$16i:function(){var C=this._view,t=C.$22i,A=C.$23i,J=this.$2i;return t==N&&(J.indexOf(q)>=0?t=C.$22i=0:J.indexOf(B)>=0&&(t=C.$22i=100)),A==N&&(J.indexOf("Top")>=0?A=C.$23i=0:J.indexOf("Bottom")>=0&&(A=C.$23i=100)),[t,A]},$25i:function(){var l=this,Z=l._view,f=Z.$21i,v=l.$20i(),r=l.$16i(),N=r[0],J=r[1],F=l.$2i;Z.children[0].style.display=s,Z.children[1].style.display=s,Z.children[2].style.display=Y,H(Z,"padding",L),H(Z,W,v+u),"leftTop"===F?(H(Z,q,t(x(Z,q))+(f.width-v)*N/100+u),H(Z,p,t(x(Z,p))+(f.height-v)*J/100+u)):"leftBottom"===F?(H(Z,q,t(x(Z,q))+(f.width-v)*N/100+u),H(Z,z,t(x(Z,z))+(f.height-v)*(1-J/100)+u)):"rightTop"===F?(H(Z,B,t(x(Z,B))+(f.width-v)*(1-N/100)+u),H(Z,p,t(x(Z,p))+(f.height-v)*J/100+u)):"rightBottom"===F&&(H(Z,B,t(x(Z,B))+(f.width-v)*(1-N/100)+u),H(Z,z,t(x(Z,z))+(f.height-v)*(1-J/100)+u)),Z[R]+=" panel-minimized",l.$18i.fire({kind:"endMinimize",target:l,id:Z.$15i})},$17i:function(){var G=this,O=G._config,p=G._view;H(p,"-webkit-transform",Y),H(p,"-ms-transform",Y),H(p,"transform",Y),O.minimized?G.$25i():(G.$18i.fire({kind:"endRestore",target:G,id:O.id}),p[R]=p[R].replace(" panel-minimized",Y)),delete p.$19i},minimize:function(G){var u=this,U=u._view;if(!U.$19i&&U.children[0].style.display!==s){var C=u._config,T=U.getBoundingClientRect(),m=u.$20i(),g=T.width,N=T.height,b=m/g,i=m/N,l=u.$16i(),F=l[0],P=l[1];U.$52i=b,U.$53i=i,U.$21i=T,u.$18i.fire({kind:"beginMinimize",target:u,id:U.$15i});var J=200;G&&(J=0),C.minimized=!0,U.$19i=!0,C.expanded&&(U.$26i=U.offsetWidth);var R=F+"% "+P+"%";H(U,"-webkit-transform-origin",R),H(U,"-ms-transform-origin",R),H(U,"transform-origin",R),K(U).duration(J).scale(b,i).end(function(){u.$17i()}),u.$10i()}},restore:function(){var $,b,S,I,J,L,g,E,P,M,v,o,V=this,h=V._view,l=h.parentNode,f=V._config;if(!h.$19i&&f.minimized){var r=h.$21i,d=h.$52i,A=h.$53i,k=(f.borderWidth+u,V.$20i()),U=G(l),i=V.$2i;"leftTop"===i?($=t(x(h,q)),S=t(x(h,p)),J=$,g=S,P=$+r.width-U.width,M=S+r.height-U.height,P>0&&(P>=$?$=0:$-=P),M>0&&(M>=S?S=0:S-=M),v=100*((J-$)/(r.width-k)),o=100*((g-S)/(r.height-k)),H(h,q,$+u),H(h,p,S+u)):"leftBottom"===i?($=t(x(h,q)),I=t(x(h,z)),J=$,E=I,P=$+r.width-U.width,M=I+r.height-U.height,P>0&&(P>=$?$=0:$-=P),M>0&&(M>=I?I=0:I-=M),v=100*((J-$)/(r.width-k)),o=100*(1-(E-I)/(r.height-k)),H(h,q,$+u),H(h,z,I+u)):"rightTop"===i?(b=t(x(h,B)),S=t(x(h,p)),L=b,g=S,P=b+r.width-U.width,M=S+r.height-U.height,P>0&&(P>=b?b=0:b-=P),M>0&&(M>=S?S=0:S-=M),v=100*(1-(L-b)/(r.width-k)),o=100*((g-S)/(r.height-k)),H(h,B,b+u),H(h,p,S+u)):"rightBottom"===i&&(b=t(x(h,B)),I=t(x(h,z)),L=b,E=I,P=b+r.width-U.width,M=I+r.height-U.height,P>0&&(P>=b?b=0:b-=P),M>0&&(M>=I?I=0:I-=M),v=100*(1-(L-b)/(r.width-k)),o=100*(1-(E-I)/(r.height-k)),H(h,B,b+u),H(h,z,I+u)),h.children[0].style.display="block",h.children[1].style.display="block",h.children[2].style.display=s,H(h,"-webkit-transform","scale("+d+", "+A+")"),H(h,"-ms-transform","scale("+d+", "+A+")"),H(h,"transform","scale("+d+", "+A+")"),h.$22i=v,h.$23i=o,H(h,"-webkit-transform-origin",v+"% "+o+"%"),H(h,"-ms-transform-origin",v+"% "+o+"%"),H(h,"transform-origin",v+"% "+o+"%"),f.narrowWhenCollapse&&!f.expanded?H(h,W,h.$51i+u):H(h,W,h.$26i+u),V.$18i.fire({kind:"beginRestore",target:V,id:h.$15i}),h.$19i=!0,f.minimized=!1,Q(function(){K(h).scale(1,1).end(function(){V.$17i()})},30),V.$10i()}},addEventListener:function(W,d,C){this.$18i.add(W,d,C)},removeEventListener:function(F,h){this.$18i.remove(F,h)},setPosition:function(S,Q){var h=this._view,i=this.$2i;"leftTop"===i?(H(h,q,S+u),H(h,p,Q+u),H(h,B,Y),H(h,z,Y)):"leftBottom"===i?(H(h,q,S+u),H(h,z,Q+u),H(h,B,Y),H(h,p,Y)):"rightTop"===i?(H(h,B,S+u),H(h,p,Q+u),H(h,q,Y),H(h,z,Y)):"rightBottom"===i&&(H(h,B,S+u),H(h,z,Q+u),H(h,q,Y),H(h,p,Y)),delete h.$22i,delete h.$23i},getPosition:function(){var O=this._view,G=this.$2i;return"leftTop"===G?{x:t(x(O,q)),y:t(x(O,p))}:"leftBottom"===G?{x:t(x(O,q)),y:t(x(O,z))}:"rightTop"===G?{x:t(x(O,B)),y:t(x(O,p))}:"rightBottom"===G?{x:t(x(O,B)),y:t(x(O,z))}:void 0},setPositionRelativeTo:function(_){var i=this,U=i._view.querySelectorAll(".button-toggle"),C="control-button button-toggle",I=i.getPosition();i.$2i=_,i.setPosition(I.x,I.y);for(var $=0;$<U.length;$++){var X=U[$],S=i.getPanelConfig(X.parentNode.parentNode.parentNode.$15i);X[R]=S.expanded?_.indexOf("Bottom")>=0?C+" button-toggle-collapse":C+" button-toggle-expand":_.indexOf("Bottom")>=0?C+" button-toggle-expand":C+" button-toggle-collapse"}i.iv()},getPositionRelativeTo:function(){return this.$2i},invalidate:function(T){var D=this;D._68I||(D._68I=1,O.callLater(D.validate,D,N,T),D.onInvalidated&&D.onInvalidated(),D.fireViewEvent("invalidate"));var X=this._config,c=X.content;c&&c.invalidate&&c.invalidate(),X.items&&X.items.forEach(function(n){n&&n.content&&n.content.invalidate&&n.content.invalidate()})},getIconStretch:function(){var Q=this._config.iconStretch||"fill";return Q},$27i:function(R,Y,w,q,z){var c=v.initContext(R);v.translateAndScale(c,0,0,1),c.clearRect(0,0,w,w);var r=(w-q)/2;O.drawStretchImage(c,O.getImage(Y),this.getIconStretch(z),0,r,q,q),c.restore()},$28i:function(Y){var x,K,v,J=this,T=Y.id,E=J.getPanelView(T),d=E.querySelector(".button-toggle"),y=J.$2i.indexOf("Bottom")>=0;if(K=y?O.panelCollapseIcon:O.panelExpandIcon,v=y?O.panelExpandIcon:O.panelCollapseIcon,d){x=Y.expanded?O.getImage(v):O.getImage(K);var l=J.$4i(Y),U=J.$5i(Y);J.$27i(d,x,l,U,"toggle")}},$29i:function(I){var a,s=this,V=I.id,n=s.getPanelView(V),L=n.querySelector(".button-independent-switch"),z=O.panelUnLockIcon,t=O.panelLockIcon;if(L){a=I.independent!==!0?O.getImage(t):O.getImage(z);var r=s.$4i(I),B=s.$5i(I);s.$27i(L,a,r,B,"switch")}},$30i:function(L){var C=this,Q=L.id,M=C.getPanelView(Q),Y=M.querySelector(".button-minimize-minimize"),r=O.panelMinimizeIcon;if(Y){var D=C.$4i(L),e=C.$5i(L);C.$27i(Y,O.getImage(r),D,e,"miminize")}},$31i:function(N){var e=this,S=N.id,q=e.getPanelView(S),d=q.querySelector(".button-minimize-restore"),g=N.titleIcon||O.panelRestoreIcon;if(d){var j=e.$20i();e.$27i(d,O.getImage(g),j,j,"restore")}},$32i:function(D){var E=this,i=D.id,g=E.getPanelView(i);if(D.buttons){var $=D.buttons;$.forEach(function(V){var R=V.name,p=V.icon;if(R&&p){var T=g.querySelector(".custombutton-"+R);if(T){var m=E.$4i(D),t=E.$5i(D)-1;E.$27i(T,O.getImage(p),m,t,"custom")}}})}},$33i:function(F){var Y=this,V=F.id,n=Y.getPanelView(V),C=n.querySelector(".panel-title-icon"),o=F.titleIcon;if(C&&o){var j=Y.$4i(F),x=Y.$5i(F);Y.$27i(C,O.getImage(o),j,x,"title")}},validateImpl:function(){var F=this,h=F._config;F.$28i(h),F.$30i(h),F.$31i(h),F.$32i(h),F.$33i(h),h.items&&h.items.forEach(function(t){F.$28i(t),F.$29i(t),F.$32i(t)})}});var S=function(s){var U=this,P=s.getView();U.$34i=s,U.addListeners(),h(P,"dblclick",U.$42i.bind(U))};O.def(S,C,{ms_listener:1,getView:function(){return this.$34i.getView()},clear:function(){delete this.$37i,delete this.$38i,delete this.$36i,delete this.$39i},$42i:function(y){for(var c=this.$34i,r=y.target,T=c.$35i,h=T.length,Q=0;h>Q;Q++){var p=T[Q];p.contains(r)&&(y.preventDefault(),c.togglePanel(p.parentNode.$15i))}},handle_touchstart:function(T){var U=this,c=U.$34i,x=c._config,s=x.flowLayout,L=T;if(O.isLeftButton(T)){var h=T.target,o=c.getView().children[0],l=c.getView().querySelector(".button-minimize-restore");g(T)&&(L=a(T));var r=U.$40i={x:L.pageX,y:L.pageY};U.$41i={x:r.x,y:r.y},(!s&&o.contains(h)||l&&l.contains(h))&&(U.$38i=!0,O.startDragging(U,T)),!s&&U.handle_mousemove(T)&&(U.$37i=!0,O.startDragging(U,T),c.$11i())}},handle_mousedown:function(h){this.handle_touchstart(h)},handle_touchend:function(B){var M=this,L=M.$34i,s=B.target,c=L.$35i,Q=c.length,D=0,m=L.getView(),p=m.querySelector(".button-minimize"),O=m.querySelector(".button-minimize-restore");if(!M.$39i&&!M.$36i){if(p&&p.contains(s)||O&&O.contains(s))B.preventDefault(),L._config.minimized?L.restore():L.minimize();else for(;Q>D;D++){var n=c[D],W=n.parentNode,T=W.$15i,$=L.getPanelConfig(T),Z=n.querySelector(".button-toggle"),x=n.querySelector(".button-independent-switch");if(Z===s)B.preventDefault(),L.togglePanel(T);else if(x===s){B.preventDefault();var o="button-independent-switch-off",A="button-independent-switch-on";$.independent=$.independent==N?!0:!$.independent,x[R]=$.independent?x[R].replace(o,A):x[R].replace(A,o),L.$29i($)}else s[R]&&s[R].indexOf("control-button custombutton-")>=0&&n.contains(s)&&s._action.call(L,$,L.getPanelView(T),B)}delete M.$40i,delete M.$41i}},handle_mouseup:function(u){this.handle_touchend(u)},handleWindowTouchEnd:function(){var c=this,b=c.$34i;c.$37i&&c.$36i?(b.$18i.fire({kind:"endResize",target:b,id:b.getView().$15i}),b.$12i()):c.$38i&&c.$39i&&b.$18i.fire({kind:"endMove",target:b,id:b.getView().$15i}),this.clear()},handleWindowMouseUp:function(v){this.handleWindowTouchEnd(v)},handle_mousemove:function(i){var z=this,N=z.getView(),e=N.querySelector(".resize-area"),H=e.getBoundingClientRect(),y={x:H.left,y:H.top,width:H.width,height:H.height};i=g(i)?a(i):i;var M=i.clientX,x=i.clientY,I=z.$34i._config;return I.expanded&&I.minimized!==!0&&O.containsPoint(y,{x:M,y:x})?(N.style.cursor="nwse-resize",!0):(N.style.cursor=Y,void 0)},handleWindowTouchMove:function(r){r.preventDefault();var D=r;g(r)&&(D=a(r));var K=this,W=K.$40i,k=K.$41i;if(!(k.x==W.x&&k.y==W.y&&O.getDistance(k,{x:D.pageX,y:D.pageY})<=1)){var C=K.$34i,V=K.getView(),w=V.parentNode,Q=C._config,e=Q.resizeMode||"wh",M=D.pageX-W.x,F=D.pageY-W.y,Y=C.$2i;if(K.$37i){var i=V.children[1].children[0],U=V.offsetWidth,o=i.offsetHeight,$=U+M,I=o+F;$=Math.max($,100),I=Math.max(I,100),"w"===e?(H(V,l,$+u),Q.width=$):"h"===e?(H(i,b,I+u),Q.contentHeight=I):"wh"===e&&(H(V,l,$+u),H(i,b,I+u),Q.width=$,Q.contentHeight=I),Y.indexOf("right")>=0&&H(V,B,t(x(V,B))-($-U)+u),Y.indexOf("Bottom")>=0&&H(V,z,t(x(V,z))-(I-o)+u),W.x=D.pageX,W.y=D.pageY;var N=Q.content;N&&N.isSelfViewEvent&&(N.setX(0),N.setY(0),N.setWidth(Q.width-2*(Q.borderWidth||0)),N.setHeight(Q.contentHeight)),K.$36i?C.$18i.fire({kind:"betweenResize",target:C,id:C.getView().$15i}):(K.$36i=!0,C.$18i.fire({kind:"beginResize",target:C,id:C.getView().$15i}))}else if(K.$38i){var c,T,j,J,s,S,h,X,m,P,Z=V.getBoundingClientRect(),f=Z.width,A=Z.height,E=G(w),R=E.width,v=E.height,L=C._dragContainment;"leftTop"===Y?(c=t(x(V,q))||0,j=t(x(V,p))||0,s=c+M,h=j+F,"parent"===L&&(s+f>R&&(s=R-f),h+A>v&&(h=v-A),0>s&&(s=0),0>h&&(h=0)),m=s-c,P=h-j,C.setPosition(s,h),W.x+=m,W.y+=P):"rightBottom"===Y?(T=t(x(V,B))||0,J=t(x(V,z))||0,S=T-M,X=J-F,"parent"===L&&(0>S&&(S=0),0>X&&(X=0),S+f>R&&(S=R-f),X+A>v&&(X=v-A)),m=S-T,P=X-J,C.setPosition(S,X),W.x-=m,W.y-=P):"rightTop"===Y?(T=t(x(V,B))||0,j=t(x(V,p))||0,S=T-M,h=j+F,"parent"===L&&(0>S&&(S=0),0>h&&(h=0),S+f>R&&(S=R-f),h+A>v&&(h=v-A)),m=S-T,P=h-j,C.setPosition(S,h),W.x-=m,W.y+=P):"leftBottom"===Y&&(c=t(x(V,q))||0,J=t(x(V,z))||0,s=c+M,X=J-F,"parent"===L&&(0>s&&(s=0),0>X&&(X=0),s+f>R&&(s=R-f),X+A>v&&(X=v-A)),m=s-c,P=X-J,C.setPosition(s,X),W.x+=m,W.y-=P),K.$39i?C.$18i.fire({kind:"betweenMove",target:C,id:C.getView().$15i}):(K.$39i=!0,C.$18i.fire({kind:"beginMove",target:C,id:C.getView().$15i}))}}},handleWindowMouseMove:function(J){this.handleWindowTouchMove(J)}});var y=r.widget.PanelGroup=function(x){var O=this,i=O._view=v.createView(null,O);i.style.border="1px dashed black",i.style.position="absolute",i.style.background="rgba(120, 120, 120, 0.4)",O.$48i=new r.List,O._tolerance=100,O._config=x||{hGap:0,vGap:0},O.bindHandlePanelMove=O.handlePanelMove.bind(O),O.bindHandlePanelEvent=O.handlePanelEvent.bind(O),O.invalidate()};O.def(y,C,{invalidate:function(){var B=this;B._68I||(B._68I=1,Q(function(){B.validate()},50))},validate:function(){if(this._68I){delete this._68I;var I=this.$48i.get(0);if(I){var n=I.getView().parentNode;n&&(this.layoutPanels(n,"leftTop"),this.layoutPanels(n,"rightTop"),this.layoutPanels(n,"leftBottom"),this.layoutPanels(n,"rightBottom"))}}},setLeftTopPanels:function(){var M=this,R=M.$43i,h=M.$48i;R==N&&(R=M.$43i=new r.List);for(var i=0;i<arguments.length;i++){var $=arguments[i];if("string"==typeof $)R.$49i=$;else{if($._config.flowLayout)continue;$.setPositionRelativeTo("leftTop"),R.contains($)||R.add($),h.contains($)||M.add($)}}},setRightTopPanels:function(){var A=this,i=A.$44i,K=A.$48i;i==N&&(i=A.$44i=new r.List);for(var v=0;v<arguments.length;v++){var C=arguments[v];if("string"==typeof C)i.$49i=C;else{if(C._config.flowLayout)continue;C.setPositionRelativeTo("rightTop"),i.contains(C)||i.add(C),K.contains(C)||A.add(C)}}},setLeftBottomPanels:function(){var F=this,e=F.$45i,K=F.$48i;e==N&&(e=F.$45i=new r.List);for(var g=0;g<arguments.length;g++){var Z=arguments[g];if("string"==typeof Z)e.$49i=Z;else{if(Z._config.flowLayout)continue;Z.setPositionRelativeTo("leftBottom"),e.contains(Z)||e.add(Z),K.contains(Z)||F.add(Z)}}},setRightBottomPanels:function(){var h=this,x=h.$46i,L=h.$48i;x==N&&(x=h.$46i=new r.List);for(var k=0;k<arguments.length;k++){var Y=arguments[k];if("string"==typeof Y)x.$49i=Y;else{if(Y._config.flowLayout)continue;Y.setPositionRelativeTo("rightBottom"),x.contains(Y)||x.add(Y),L.contains(Y)||h.add(Y)}}},add:function(r){if(!r._config.flowLayout){var P=this,g=P.$48i;g.contains(r)||(r.addEventListener(P.bindHandlePanelMove),r.addEventListener(P.bindHandlePanelEvent),g.add(r))}},remove:function(p){var A=this,G=A.$48i;G.contains(p)&&(p.removeEventListener(A.bindHandlePanelMove),p.removeEventListener(A.bindHandlePanelEvent),G.remove(p),A.$43i.contains(p)&&A.$43i.remove(p),A.$44i.contains(p)&&A.$44i.remove(p),A.$45i.contains(p)&&A.$45i.remove(p),A.$46i.contains(p)&&A.$46i.remove(p))},layoutPanels:function(E,W,b){var x=this,Q=x._config,X=Q.hGap||0,L=Q.vGap||0;if(E){var S=x.$43i;if("leftBottom"===W?S=x.$45i:"rightTop"===W?S=x.$44i:"rightBottom"===W&&(S=x.$46i),!S)return;var l=S.$49i,I=X,A=L;if(E.contains(x._view)&&E.removeChild(x._view),S&&S.size()>0)for(var k=0;k<S.size();k++){var v=S.get(k),o=v.getView();E=E||o.parentNode,b!==k?v.setPosition(I,A):("leftTop"===W?(x._view.style.right="",x._view.style.bottom="",x._view.style.left=I+u,x._view.style.top=A+u):"leftBottom"===W?(x._view.style.right="",x._view.style.top="",x._view.style.left=I+u,x._view.style.bottom=A+u):"rightTop"===W?(x._view.style.left="",x._view.style.bottom="",x._view.style.right=I+u,x._view.style.top=A+u):"rightBottom"===W&&(x._view.style.left="",x._view.style.top="",x._view.style.right=I+u,x._view.style.bottom=A+u),x._view.style.width=o.offsetWidth+u,x._view.style.height=o.offsetHeight+u,E.insertBefore(x._view,o)),"h"===l?I+=o.offsetWidth+X:"v"===l&&(A+=o.offsetHeight+L)}}},handlePanelEvent:function(h){if("beginToggle"===h.kind||"endToggle"===h.kind||"beginRestore"===h.kind||"endMinimize"===h.kind||"endResize"===h.kind){var r=this,S=h.target,G=S.getView(),$=G.parentNode,n=r.$43i,D=r.$44i,F=r.$45i,j=r.$46i,R=r._config,l=N,I=N,k=S.$47i;if(k==N&&(k=S.$47i=0),"beginToggle"===h.kind?k=S.$47i=k+1:"endToggle"===h.kind&&(k=S.$47i=k-1),n&&n.contains(S)?(l="leftTop",I=n):F&&F.contains(S)?(l="leftBottom",I=F):D&&D.contains(S)?(l="rightTop",I=D):j&&j.contains(S)&&(l="rightBottom",I=j),"beginToggle"===h.kind&&l&&1===k){var p=i(),E=p.style,J=I.$49i,L="each";E.fontSize="0",E.position="absolute",E.width="100%","leftTop"===l?(E.left=0,E.top=0):"leftBottom"===l?(E.left=0,E.bottom=0,"v"===J&&(L="reverseEach")):"rightTop"===l?(E.right=0,E.top=0,E.textAlign="right","h"===J&&(L="reverseEach")):"rightBottom"===l&&(E.right=0,E.bottom=0,E.textAlign="right",L="reverseEach"),I[L](function(v){var b=v.getView(),q=b.style,j=i();q.position="static",j.style.textAlign="left",j.style.position="relative",j.style.display="inline-block","leftTop"===l?(j.style.marginLeft=R.hGap+u,j.style.marginTop=R.vGap+u):"leftBottom"===l?(j.style.marginLeft=R.hGap+u,j.style.marginBottom=R.vGap+u):"rightTop"===l?(j.style.marginRight=R.hGap+u,j.style.marginTop=R.vGap+u):"rightBottom"===l&&(j.style.marginRight=R.hGap+u,j.style.marginBottom=R.vGap+u),j.appendChild(b),p.appendChild(j),"h"===J?j.style.verticalAlign="leftTop"===l||"rightTop"===l?"top":"bottom":p.appendChild(m("br"))}),r.$54i=p,$.appendChild(p)}else"endToggle"===h.kind&&l&&0===k?Q(function(){$=$.parentNode.parentNode,$.removeChild(r.$54i),delete r.$54i,I.each(function(v){var i=v.getView(),g=i.style;g.position="absolute",$.appendChild(i)}),r.layoutPanels($,l)},30):("beginRestore"===h.kind||"endMinimize"===h.kind||"endResize"===h.kind)&&l&&r.layoutPanels($,l)}},handlePanelMove:function(w){if(!(w.kind.indexOf("Move")<0)){var q=this,y=q._config,o=y.hGap||0,Q=y.vGap||0,R=w.target,a=R._view,k=a.getBoundingClientRect(),g=k.width,c=k.height,C=g/2,O=c/2,G=a.parentNode,f=q.$43i,m=q.$44i,V=q.$45i,D=q.$46i,U=G.getBoundingClientRect(),i=q._tolerance;if("endMove"===w.kind){var _=q._corner;_&&(R.setPositionRelativeTo(_),q.layoutPanels(G,_)),delete q._corner}if("betweenMove"===w.kind){var p=U.left,d=U.top,h=U.width,H=U.height,E=k.left+g/2,l=k.top+c/2;f==N&&(f=q.$43i=new r.List),V==N&&(V=q.$45i=new r.List),m==N&&(m=q.$44i=new r.List),D==N&&(D=q.$46i=new r.List),delete q._corner,f.contains(R)?(f.remove(R),q.layoutPanels(G,"leftTop")):V.contains(R)?(V.remove(R),q.layoutPanels(G,"leftBottom")):m.contains(R)?(m.remove(R),q.layoutPanels(G,"rightTop")):D.contains(R)&&(D.remove(R),q.layoutPanels(G,"rightBottom"));var I=function(u,n){var P=p+o,T=d+Q;if(0===n.size()){var v=P+C,J=T+O;"leftBottom"===u?J=d+H-Q-O:"rightTop"===u?v=p+h-o-C:"rightBottom"===u&&(v=p+h-o-C,J=d+H-Q-O);var y=E-v,B=l-J,e=Math.sqrt(y*y+B*B);if(i>e)return q._corner=u,n.add(R),q.layoutPanels(G,u,0),!0}else if(1===n.size()){var _=n.get(0),M=_.getView().getBoundingClientRect(),k=M.left+C,X=M.top+O,b=M.left+M.width+o+C,$=T+O,w=P+C,K=M.top+M.height+Q+O;"leftBottom"===u?(X=M.top+M.height-O,$=d+H-Q-O,K=M.top-Q-O):"rightTop"===u?(k=M.left+M.width-C,b=M.left-o-C,w=p+h-o-C):"rightBottom"===u&&(k=M.left+M.width-C,X=M.top+M.height-O,b=M.left-o-C,$=d+H-Q-O,w=p+h-o-C,K=M.top-Q-O);var L=E-k,A=l-X,D=E-b,a=l-$,m=E-w,F=l-K,f=t(Math.sqrt(L*L+A*A)),Y=t(Math.sqrt(D*D+a*a)),V=t(Math.sqrt(m*m+F*F)),W=[f,Y,V];W.sort(function(l,d){return l-d});var z=W[0];if(i>z){if(q._corner=u,z===f)return n.add(R,0),q.layoutPanels(G,u,0),!0;if(z===Y)return n.add(R),n.$49i="h",q.layoutPanels(G,u,1),!0;if(z===V)return n.add(R),n.$49i="v",q.layoutPanels(G,u,1),!0}}else if(n.size()>1){for(var j=N,s={},U=[],r=n.$49i,Z=0;Z<n.size();Z++){var g=n.get(Z),x=g.getView(),S=x.getBoundingClientRect(),c=S.left+C,I=S.top+O;"leftBottom"===u?I=S.top+S.height-O:"rightTop"===u?c=S.left+S.width-C:"rightBottom"===u&&(c=S.left+S.width-C,I=S.top+S.height-O),Z===n.size()-1&&(j=S);var y=E-c,B=l-I,e=t(Math.sqrt(y*y+B*B));s[e]=Z,U.push(e)}"leftTop"===u&&"h"===r?(v=j.left+j.width+o+C,J=T+O):"leftTop"===u&&"v"===r?(v=P+C,J=j.top+j.height+Q+O):"leftBottom"===u&&"h"===r?(v=j.left+j.width+o+C,J=d+H-Q-O):"leftBottom"===u&&"v"===r?(v=P+C,J=j.top-Q-O):"rightTop"===u&&"h"===r?(v=j.left-o-C,J=T+O):"rightTop"===u&&"v"===r?(v=p+h-o-C,J=j.top+j.height+Q+O):"rightBottom"===u&&"h"===r?(v=j.left-o-C,J=d+H-Q-O):"rightBottom"===u&&"v"===r&&(v=p+h-o-C,J=j.top-Q-O),y=E-v,B=l-J,e=t(Math.sqrt(y*y+B*B)),s[e]=Z,U.push(e),U.sort(function(d,t){return d-t});var z=U[0];if(i>z)return q._corner=u,n.add(R,s[z]),q.layoutPanels(G,u,s[z]),!0}};I("leftTop",f)||I("leftBottom",V)||I("rightTop",m)||I("rightBottom",D)}}}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);