webpackJsonp([4],{133:function(n,e,t){function i(n){t(219)}var a=t(49)(t(189),t(237),i,"data-v-42159136",null);n.exports=a.exports},147:function(n,e,t){function i(n){t(151)}var a=t(49)(t(149),t(152),i,"data-v-4291f7fc",null);n.exports=a.exports},148:function(n,e,t){"use strict";t.d(e,"n",function(){return a}),t.d(e,"a",function(){return A}),t.d(e,"m",function(){return o}),t.d(e,"o",function(){return r}),t.d(e,"l",function(){return d}),t.d(e,"k",function(){return s}),t.d(e,"h",function(){return l}),t.d(e,"b",function(){return c}),t.d(e,"e",function(){return p}),t.d(e,"f",function(){return u}),t.d(e,"g",function(){return C}),t.d(e,"c",function(){return g}),t.d(e,"i",function(){return f}),t.d(e,"d",function(){return B}),t.d(e,"j",function(){return b});var i=t(50),a=function(n){return i.a.fetchGet("/goods/computer",n)},A=function(n){return i.a.fetchPost("/users/cartList",n)},o=function(n){return i.a.fetchPost("/goods/addCart",n)},r=function(n){return i.a.fetchPost("/goods/addCart1",n)},d=function(n){return i.a.fetchPost("/users/cartEdit",n)},s=function(n){return i.a.fetchPost("/users/editCheckAll",n)},l=function(n){return i.a.fetchPost("/users/cartDel",n)},c=function(n){return i.a.fetchPost("/users/addressList",n)},p=function(n){return i.a.fetchPost("/users/addressUpdate",n)},u=function(n){return i.a.fetchPost("/users/addressAdd",n)},C=function(n){return i.a.fetchPost("/users/addressDel",n)},g=function(n){return i.a.fetchPost("/users/payMent",n)},f=function(n){return i.a.fetchPost("/users/orderList",n)},B=function(n){return i.a.fetchGet("/goods/productDet",n)},b=function(n){return i.a.fetchPost("/users/delOrder",n)}},149:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{text:{type:[String,Number],default:"一颗小按钮"},inputType:{type:[String],default:"button"},classStyle:{type:String,default:"default-btn"}},methods:{btnClick:function(n){this.$emit("btnClick",n)}}}},150:function(n,e,t){e=n.exports=t(128)(!0),e.push([n.i,".default-btn[data-v-4291f7fc],.disabled-btn[data-v-4291f7fc],.main-btn[data-v-4291f7fc]{margin:0 5px;width:100px;height:30px;line-height:28px;vertical-align:middle}input[data-v-4291f7fc]{display:inline-block;cursor:pointer;text-align:center}.gray-btn[data-v-4291f7fc]{border:1px solid #d5d5d5;color:#646464}.default-btn[data-v-4291f7fc]{border:1px solid #e1e1e1;border-radius:4px;font-size:12px;color:#646464;background-color:#f9f9f9;background-image:linear-gradient(180deg,#fff,#f9f9f9)}.default-btn[data-v-4291f7fc]:hover{background-color:#eee;background-image:linear-gradient(180deg,#f5f5f5,#eee)}.main-btn[data-v-4291f7fc]{border:1px solid #5c81e3;border-radius:4px;font-size:12px;color:#fff;background-color:#678ee7;background-image:linear-gradient(180deg,#678ee7,#5078df)}.main-btn[data-v-4291f7fc]:hover{background-color:#6c8cd4;background-image:linear-gradient(180deg,#6c8cd4,#4769c2)}.disabled-btn[data-v-4291f7fc]{cursor:not-allowed;border:1px solid #afafaf;border-radius:4px;font-size:12px;color:#fff;background-color:#a9a9a9;background-image:linear-gradient(180deg,#b8b8b8,#a9a9a9)}","",{version:3,sources:["/Users/yucccc/project/vue-node-mall/src/components/YButton.vue"],names:[],mappings:"AAEA,wFACE,aAAc,AACd,YAAa,AACb,YAAa,AACb,iBAAkB,AAClB,qBAAuB,CACxB,AACD,uBACE,qBAAsB,AACtB,eAAgB,AAChB,iBAAmB,CAOpB,AAGD,2BACE,yBAA0B,AAC1B,aAAe,CAChB,AACD,8BACE,yBAA0B,AAC1B,kBAAmB,AACnB,eAAgB,AAChB,cAAe,AACf,yBAA0B,AAC1B,qDAAyD,CAC1D,AACD,oCACI,sBAAuB,AACvB,qDAAyD,CAC5D,AACD,2BACE,yBAA0B,AAC1B,kBAAmB,AACnB,eAAgB,AAChB,WAAY,AACZ,yBAA0B,AAC1B,wDAA4D,CAC7D,AACD,iCACI,yBAA0B,AAC1B,wDAA4D,CAC/D,AACD,+BACE,mBAAoB,AACpB,yBAA0B,AAC1B,kBAAmB,AACnB,eAAgB,AAChB,WAAY,AACZ,yBAA0B,AAC1B,wDAA4D,CAC7D",file:"YButton.vue",sourcesContent:['\n@charset "UTF-8";\n.default-btn[data-v-4291f7fc], .main-btn[data-v-4291f7fc], .disabled-btn[data-v-4291f7fc] {\n  margin: 0 5px;\n  width: 100px;\n  height: 30px;\n  line-height: 28px;\n  vertical-align: middle;\n}\ninput[data-v-4291f7fc] {\n  display: inline-block;\n  cursor: pointer;\n  text-align: center;\n  /*> span {*/\n  /*user-select: none;*/\n  /*display: inline-block;*/\n  /*width: 100%;*/\n  /*height: 100%;*/\n  /*}*/\n}\n\n/*灰色的按钮*/\n.gray-btn[data-v-4291f7fc] {\n  border: 1px solid #d5d5d5;\n  color: #646464;\n}\n.default-btn[data-v-4291f7fc] {\n  border: 1px solid #e1e1e1;\n  border-radius: 4px;\n  font-size: 12px;\n  color: #646464;\n  background-color: #f9f9f9;\n  background-image: linear-gradient(180deg, #fff, #f9f9f9);\n}\n.default-btn[data-v-4291f7fc]:hover {\n    background-color: #eee;\n    background-image: linear-gradient(180deg, #f5f5f5, #eee);\n}\n.main-btn[data-v-4291f7fc] {\n  border: 1px solid #5c81e3;\n  border-radius: 4px;\n  font-size: 12px;\n  color: #fff;\n  background-color: #678ee7;\n  background-image: linear-gradient(180deg, #678ee7, #5078df);\n}\n.main-btn[data-v-4291f7fc]:hover {\n    background-color: #6c8cd4;\n    background-image: linear-gradient(180deg, #6c8cd4, #4769c2);\n}\n.disabled-btn[data-v-4291f7fc] {\n  cursor: not-allowed;\n  border: 1px solid #afafaf;\n  border-radius: 4px;\n  font-size: 12px;\n  color: #fff;\n  background-color: #a9a9a9;\n  background-image: linear-gradient(180deg, #b8b8b8, #a9a9a9);\n}\n'],sourceRoot:""}])},151:function(n,e,t){var i=t(150);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t(129)("e626739a",i,!0)},152:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;return(n._self._c||e)("input",{class:n.classStyle,attrs:{type:n.inputType,readonly:"",disabled:"disabled-btn"===n.classStyle},domProps:{value:n.text},on:{click:function(e){n.btnClick(e)}}})},staticRenderFns:[]}},153:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["title"]}},154:function(n,e,t){e=n.exports=t(128)(!0),e.push([n.i,".gray-box[data-v-98271cfe]{position:relative;margin-bottom:30px;overflow:hidden;background:#fff;border-radius:8px;border:1px solid #dcdcdc;border-color:rgba(0,0,0,.14);box-shadow:0 3px 8px -6px rgba(0,0,0,.1)}.gray-box .title[data-v-98271cfe]{padding-left:30px;position:relative;z-index:10;height:60px;padding:0 10px 0 24px;border-bottom:1px solid #d4d4d4;border-radius:8px 8px 0 0;box-shadow:0 1px 7px rgba(0,0,0,.06);background:#f3f3f3;background:linear-gradient(#fbfbfb,#ececec);line-height:60px;font-size:18px;color:#333}.gray-box .title h2[data-v-98271cfe]{font-size:18px;font-weight:400;color:#626262;display:inline-block}","",{version:3,sources:["/Users/yucccc/project/vue-node-mall/src/components/shelf.vue"],names:[],mappings:"AACA,2BACE,kBAAmB,AACnB,mBAAoB,AACpB,gBAAiB,AACjB,gBAAiB,AACjB,kBAAmB,AACnB,yBAA0B,AAC1B,6BAAkC,AAClC,wCAA8C,CAC/C,AACD,kCACI,kBAAmB,AACnB,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,sBAAuB,AACvB,gCAAiC,AACjC,0BAA2B,AAC3B,qCAA0C,AAC1C,mBAAoB,AACpB,4CAA8C,AAC9C,iBAAkB,AAClB,eAAgB,AAChB,UAAY,CACf,AACD,qCACM,eAAgB,AAChB,gBAAiB,AACjB,cAAe,AACf,oBAAsB,CAC3B",file:"shelf.vue",sourcesContent:["\n.gray-box[data-v-98271cfe] {\n  position: relative;\n  margin-bottom: 30px;\n  overflow: hidden;\n  background: #fff;\n  border-radius: 8px;\n  border: 1px solid #dcdcdc;\n  border-color: rgba(0, 0, 0, 0.14);\n  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);\n}\n.gray-box .title[data-v-98271cfe] {\n    padding-left: 30px;\n    position: relative;\n    z-index: 10;\n    height: 60px;\n    padding: 0 10px 0 24px;\n    border-bottom: 1px solid #d4d4d4;\n    border-radius: 8px 8px 0 0;\n    box-shadow: rgba(0, 0, 0, 0.06) 0 1px 7px;\n    background: #f3f3f3;\n    background: linear-gradient(#fbfbfb, #ececec);\n    line-height: 60px;\n    font-size: 18px;\n    color: #333;\n}\n.gray-box .title h2[data-v-98271cfe] {\n      font-size: 18px;\n      font-weight: 400;\n      color: #626262;\n      display: inline-block;\n}\n"],sourceRoot:""}])},155:function(n,e,t){var i=t(154);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t(129)("cae27236",i,!0)},156:function(n,e,t){function i(n){t(155)}var a=t(49)(t(153),t(157),i,"data-v-98271cfe",null);n.exports=a.exports},157:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"gray-box"},[t("div",{staticClass:"title"},[t("h2",[n._v(n._s(n.title))]),n._v(" "),n._t("right")],2),n._v(" "),t("div",[n._t("content")],2)])},staticRenderFns:[]}},167:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{num:{type:[Number],default:1},id:{type:[Number,String]},checked:{type:[String,Boolean]},limit:{type:Number,default:10}},computed:{},data:function(){return{show:!0,flag:!0,Num:this.num,numList:[]}},methods:{up:function(){return this.flag&&this.Num<this.limit&&this.ani("up"),!1},down:function(){return this.flag&&this.Num>1&&this.ani("down"),!1},blur:function(){this.Num=this.Num>this.limit?Number(this.limit):Number(this.Num),this.$emit("edit-num",this.Num,this.id,this.checked)},ani:function(n){var e=this;this.flag=!1;var t=this.Num;this.numList=[t-1,t,t+1];var i=this.$refs.ul,a=i.style;this.show=!1,a.zIndex="99",a.transition="all .2s ease-out","up"===n?(this.Num++,a.transform="translateY(-54px)"):(this.Num--,a.transform="translateY(-18px)"),i.addEventListener("transitionend",function(){e.show=!0,e.domInt(a),e.flag=!0}),i.addEventListener("webkitAnimationEnd",function(){e.show=!0,e.domInt(a),e.flag=!0}),this.$emit("edit-num",this.Num,this.id,this.checked)},domInt:function(n){n.zIndex="1",n.transition="all 0s",n.transform="translateY(-36px)"}}}},172:function(n,e,t){e=n.exports=t(128)(!0),e.push([n.i,".select input[data-v-86e2c80e]{z-index:10;width:36px;height:18px;background-color:#fff;line-height:18px;font-size:14px;padding:0;color:#666;visibility:hidden;position:relative;border:none}.select input.show[data-v-86e2c80e]{visibility:visible}.select ul[data-v-86e2c80e]{padding:0;line-height:18px;font-size:14px;display:inline-block;position:absolute;left:0;list-style:none;width:36px;font-family:system-ui;z-index:1;-webkit-transform:translateY(-36px);transform:translateY(-36px)}.select .up.up-disabled[data-v-86e2c80e],.select .up.up-disabled[data-v-86e2c80e]:hover{background-position:0 -240px!important;cursor:not-allowed!important}.item-cols-num[data-v-86e2c80e]{display:inline-block}.select[data-v-86e2c80e]{height:40px;padding-top:4px}.select input[data-v-86e2c80e]{width:100%;text-align:center}.select .down.down-disabled[data-v-86e2c80e]:hover{background-position:0 -300px;cursor:not-allowed}.select .down[data-v-86e2c80e],.select .up[data-v-86e2c80e]{background:url("+t(176)+") no-repeat;overflow:hidden;float:left;width:34px;height:37px;background-size:100% auto;line-height:40px;text-indent:-9999em;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.select .num[data-v-86e2c80e]{position:relative;overflow:hidden;float:left;width:36px;height:18px;margin:7px 0 0;border:none;border-radius:3px;line-height:18px;text-align:center;font-size:14px}.select .up[data-v-86e2c80e]{margin:0;background-position:0 0}.select .up[data-v-86e2c80e]:hover{background-position:0 -120px}.select .down[data-v-86e2c80e]{background-position:0 -60px}.select .down[data-v-86e2c80e]:hover{background-position:0 -180px}.down.down-disabled[data-v-86e2c80e]{background-position:0 -300px;cursor:not-allowed}","",{version:3,sources:["/Users/yucccc/project/vue-node-mall/src/components/buynum.vue"],names:[],mappings:"AAEA,+BACE,WAAY,AACZ,WAAY,AACZ,YAAa,AACb,sBAAuB,AAGvB,iBAAkB,AAClB,eAAgB,AAChB,UAAW,AACX,WAAY,AACZ,kBAAmB,AACnB,kBAAmB,AACnB,WAAa,CACd,AACD,oCACI,kBAAoB,CACvB,AACD,4BACE,UAAW,AACX,iBAAkB,AAClB,eAAgB,AAChB,qBAAsB,AACtB,kBAAmB,AACnB,OAAQ,AACR,gBAAiB,AACjB,WAAY,AACZ,sBAAuB,AACvB,UAAW,AACX,oCAAqC,AAC7B,2BAA6B,CACtC,AACD,wFACE,uCAAyC,AACzC,4BAA+B,CAChC,AAGD,gCACE,oBAAsB,CACvB,AACD,yBACE,YAAa,AACb,eAAiB,CAClB,AACD,+BACI,WAAY,AACZ,iBAAmB,CACtB,AAID,mDACI,6BAA8B,AAC9B,kBAAoB,CACvB,AACD,4DACI,mDAA6E,AAC7E,gBAAiB,AACjB,WAAY,AACZ,WAAY,AACZ,YAAa,AACb,0BAA2B,AAC3B,iBAAkB,AAClB,oBAAqB,AACrB,eAAgB,AAChB,yBAA0B,AACvB,sBAAuB,AACtB,qBAAsB,AAClB,gBAAkB,CAC7B,AACD,8BACI,kBAAmB,AACnB,gBAAiB,AAEjB,WAAY,AACZ,WAAY,AACZ,YAAa,AACb,eAAgB,AAChB,YAAa,AACb,kBAAmB,AACnB,iBAAkB,AAClB,kBAAmB,AACnB,cAAgB,CACnB,AACD,6BACI,SAAU,AACV,uBAAyB,CAC5B,AACD,mCACM,4BAA8B,CACnC,AACD,+BACI,2BAA6B,CAChC,AACD,qCACM,4BAA8B,CACnC,AACD,qCACE,6BAA8B,AAC9B,kBAAoB,CACrB",file:"buynum.vue",sourcesContent:['\n@charset "UTF-8";\n.select input[data-v-86e2c80e] {\n  z-index: 10;\n  width: 36px;\n  height: 18px;\n  background-color: #fff;\n  border: none;\n  text-align: center;\n  line-height: 18px;\n  font-size: 14px;\n  padding: 0;\n  color: #666;\n  visibility: hidden;\n  position: relative;\n  border: none;\n}\n.select input.show[data-v-86e2c80e] {\n    visibility: visible;\n}\n.select ul[data-v-86e2c80e] {\n  padding: 0;\n  line-height: 18px;\n  font-size: 14px;\n  display: inline-block;\n  position: absolute;\n  left: 0;\n  list-style: none;\n  width: 36px;\n  font-family: system-ui;\n  z-index: 1;\n  -webkit-transform: translateY(-36px);\n          transform: translateY(-36px);\n}\n.select .up.up-disabled[data-v-86e2c80e], .select .up.up-disabled[data-v-86e2c80e]:hover {\n  background-position: 0 -240px !important;\n  cursor: not-allowed !important;\n}\n\n/*数量*/\n.item-cols-num[data-v-86e2c80e] {\n  display: inline-block;\n}\n.select[data-v-86e2c80e] {\n  height: 40px;\n  padding-top: 4px;\n}\n.select input[data-v-86e2c80e] {\n    width: 100%;\n    text-align: center;\n}\n.select .down[data-v-86e2c80e] {\n    background-position: 0 -60px;\n}\n.select .down.down-disabled[data-v-86e2c80e]:hover {\n    background-position: 0 -300px;\n    cursor: not-allowed;\n}\n.select .down[data-v-86e2c80e], .select .up[data-v-86e2c80e] {\n    background: url(../../static/images/cart-updown_8303731e15@2x.jpg) no-repeat;\n    overflow: hidden;\n    float: left;\n    width: 34px;\n    height: 37px;\n    background-size: 100% auto;\n    line-height: 40px;\n    text-indent: -9999em;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.select .num[data-v-86e2c80e] {\n    position: relative;\n    overflow: hidden;\n    text-align: center;\n    float: left;\n    width: 36px;\n    height: 18px;\n    margin: 7px 0 0;\n    border: none;\n    border-radius: 3px;\n    line-height: 18px;\n    text-align: center;\n    font-size: 14px;\n}\n.select .up[data-v-86e2c80e] {\n    margin: 0;\n    background-position: 0 0;\n}\n.select .up[data-v-86e2c80e]:hover {\n      background-position: 0 -120px;\n}\n.select .down[data-v-86e2c80e] {\n    background-position: 0 -60px;\n}\n.select .down[data-v-86e2c80e]:hover {\n      background-position: 0 -180px;\n}\n.down.down-disabled[data-v-86e2c80e] {\n  background-position: 0 -300px;\n  cursor: not-allowed;\n}\n'],sourceRoot:""}])},175:function(n,e,t){var i=t(172);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t(129)("aba7cb76",i,!0)},176:function(n,e,t){n.exports=t.p+"static/img/cart-updown_8303731e15@2x.7d9dac6.jpg"},177:function(n,e,t){function i(n){t(175)}var a=t(49)(t(167),t(182),i,"data-v-86e2c80e",null);n.exports=a.exports},182:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"item-cols-num clearfix"},[t("div",{staticClass:"select"},[t("span",{staticClass:"down",class:{"down-disabled":n.Num<=1},on:{click:function(e){e.stopPropagation(),e.preventDefault(),n.down()}}},[n._v("-\n    ")]),n._v(" "),t("span",{staticClass:"num"},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.Num>=n.limit?n.limit:n.Num,expression:"Num>=limit?limit:Num"}],class:{show:n.show},attrs:{type:"text",maxlength:"2"},domProps:{value:n.Num>=n.limit?n.limit:n.Num},on:{blur:function(e){n.blur()},input:function(e){e.target.composing||(n.Num>=n.limit?n.limit:n.Num=e.target.value)}}}),n._v(" "),t("ul",{ref:"ul"},n._l(n.numList,function(e){return t("li",[n._v(n._s(e))])}))]),n._v(" "),t("span",{staticClass:"up",class:{"up-disabled":n.Num>=n.limit},on:{click:function(e){e.stopPropagation(),e.preventDefault(),n.up()}}},[n._v("+")])])])},staticRenderFns:[]}},189:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(51),a=t.n(i),A=t(148),o=t(52),r=t(156),d=t.n(r),s=t(177),l=t.n(s),c=t(147),p=t.n(c);e.default={data:function(){return{productMsg:{},small:[],big:"",product:{},productNum:1}},computed:a()({},t.i(o.b)(["login","showMoveImg","showCart"])),methods:a()({},t.i(o.c)(["ADD_CART","ADD_ANIMATION","SHOW_CART"]),{_productDet:function(n){var e=this;t.i(A.d)({params:{productId:n}}).then(function(n){var t=n.result;e.product=t,e.productMsg=t.productMsg||"",e.small=t.productImageSmall,e.big=e.small[0]})},addCart:function(n,e,i,a){var o=this;if(!this.showMoveImg){this.login?t.i(A.m)({productId:n,productNum:this.productNum}).then(function(t){o.ADD_CART({productId:n,productPrice:e,productName:i,productImg:a,productNum:o.productNum})}):this.ADD_CART({productId:n,productPrice:e,productName:i,productImg:a,productNum:this.productNum});var r=event.target,d=r.getBoundingClientRect().left+r.offsetWidth/2,s=r.getBoundingClientRect().top+r.offsetHeight/2;this.ADD_ANIMATION({moveShow:!0,elLeft:d,elTop:s,img:a}),this.showCart||this.SHOW_CART({showCart:!0})}},checkout:function(n){this.$router.push({path:"/checkout",query:{productId:n,num:this.productNum}})},editNum:function(n){this.productNum=n}}),components:{YShelf:d.a,BuyNum:l.a,YButton:p.a},created:function(){var n=this.$route.query.productId;this._productDet(n)}}},205:function(n,e,t){e=n.exports=t(128)(!0),e.push([n.i,".store-content[data-v-42159136]{clear:both;width:1220px;min-height:600px;padding:0 0 25px;margin:0 auto}.gray-box[data-v-42159136]{display:-webkit-box;display:-ms-flexbox;display:flex;padding:60px;margin:20px 0}.gray-box .gallery-wrapper .gallery[data-v-42159136]{display:-webkit-box;display:-ms-flexbox;display:flex;width:540px}.gray-box .gallery-wrapper .gallery .thumbnail li[data-v-42159136]:first-child{margin-top:0}.gray-box .gallery-wrapper .gallery .thumbnail li[data-v-42159136]{width:80px;height:80px;margin-top:10px;padding:12px;border:1px solid #f0f0f0;border:1px solid rgba(0,0,0,.06);border-radius:5px;cursor:pointer}.gray-box .gallery-wrapper .gallery .thumbnail li.on[data-v-42159136]{padding:10px;border:3px solid #ccc;border:3px solid rgba(0,0,0,.2)}.gray-box .gallery-wrapper .gallery .thumbnail li img[data-v-42159136]{display:block;width:100%;height:100%}.gray-box .gallery-wrapper .gallery .thumb .big[data-v-42159136]{margin-left:20px}.gray-box .gallery-wrapper .gallery .thumb img[data-v-42159136]{display:block;width:440px;height:440px}.gray-box .banner[data-v-42159136]{width:450px;margin-left:10px}.gray-box .banner h4[data-v-42159136]{font-size:24px;line-height:1.25;color:#000;margin-bottom:13px}.gray-box .banner h6[data-v-42159136]{font-size:14px;line-height:1.5;color:#bdbdbd;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.gray-box .banner .sku-custom-title[data-v-42159136]{overflow:hidden;padding:8px 8px 18px 10px;position:relative}.gray-box .banner .params-name[data-v-42159136]{padding-right:20px;font-size:14px;color:#8d8d8d;line-height:36px}.gray-box .banner .num[data-v-42159136]{padding:29px 0 8px 10px;border-top:1px solid #ebebeb;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.gray-box .banner .buy[data-v-42159136]{position:relative;border-top:1px solid #ebebeb;padding:30px 0 0 10px}.item-info .gray-box[data-v-42159136]{padding:0;display:block}.item-info .img-item[data-v-42159136]{width:1220px}.item-info .img-item img[data-v-42159136]{width:100%;height:auto;display:block}.no-info[data-v-42159136]{padding:200px 0;text-align:center;font-size:30px}.price[data-v-42159136]{display:block;color:#d44d44;font-weight:700;font-size:16px;line-height:20px;text-align:right}.price i[data-v-42159136]{padding-left:2px;font-size:24px}","",{version:3,sources:["/Users/yucccc/project/vue-node-mall/src/page/Goods/goodsDetails.vue"],names:[],mappings:"AACA,gCACE,WAAY,AACZ,aAAc,AACd,iBAAkB,AAClB,iBAAkB,AAClB,aAAe,CAChB,AACD,2BACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,aAAc,AACd,aAAe,CAChB,AACD,qDACI,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,WAAa,CAChB,AACD,+EACM,YAAgB,CACrB,AACD,mEACM,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,aAAc,AACd,yBAA0B,AAC1B,iCAAsC,AACtC,kBAAmB,AACnB,cAAgB,CACrB,AACD,sEACQ,aAAc,AACd,sBAAuB,AACvB,+BAAqC,CAC5C,AACD,uEACQ,cAAe,AACf,WAAY,AACZ,WAAa,CACpB,AACD,iEACM,gBAAkB,CACvB,AACD,gEACM,cAAe,AACf,YAAa,AACb,YAAc,CACnB,AACD,mCACI,YAAa,AACb,gBAAkB,CACrB,AACD,sCACM,eAAgB,AAChB,iBAAkB,AAClB,WAAY,AACZ,kBAAoB,CACzB,AACD,sCACM,eAAgB,AAChB,gBAAiB,AACjB,cAAe,AACf,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,yBAA0B,AACtB,sBAAuB,AACnB,6BAA+B,CAC5C,AACD,qDACM,gBAAiB,AACjB,0BAA2B,AAC3B,iBAAmB,CACxB,AACD,gDACM,mBAAoB,AACpB,eAAgB,AAChB,cAAe,AACf,gBAAkB,CACvB,AACD,wCACM,wBAAyB,AACzB,6BAA8B,AAC9B,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CACjC,AACD,wCACM,kBAAmB,AACnB,6BAA8B,AAC9B,qBAAuB,CAC5B,AACD,sCACE,UAAW,AACX,aAAe,CAChB,AACD,sCACE,YAAc,CACf,AACD,0CACI,WAAY,AACZ,YAAa,AACb,aAAe,CAClB,AACD,0BACE,gBAAiB,AACjB,kBAAmB,AACnB,cAAgB,CACjB,AACD,wBACE,cAAe,AACf,cAAe,AACf,gBAAiB,AACjB,eAAgB,AAChB,iBAAkB,AAClB,gBAAkB,CACnB,AACD,0BACI,iBAAkB,AAClB,cAAgB,CACnB",file:"goodsDetails.vue",sourcesContent:["\n.store-content[data-v-42159136] {\n  clear: both;\n  width: 1220px;\n  min-height: 600px;\n  padding: 0 0 25px;\n  margin: 0 auto;\n}\n.gray-box[data-v-42159136] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 60px;\n  margin: 20px 0;\n}\n.gray-box .gallery-wrapper .gallery[data-v-42159136] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 540px;\n}\n.gray-box .gallery-wrapper .gallery .thumbnail li[data-v-42159136]:first-child {\n      margin-top: 0px;\n}\n.gray-box .gallery-wrapper .gallery .thumbnail li[data-v-42159136] {\n      width: 80px;\n      height: 80px;\n      margin-top: 10px;\n      padding: 12px;\n      border: 1px solid #f0f0f0;\n      border: 1px solid rgba(0, 0, 0, 0.06);\n      border-radius: 5px;\n      cursor: pointer;\n}\n.gray-box .gallery-wrapper .gallery .thumbnail li.on[data-v-42159136] {\n        padding: 10px;\n        border: 3px solid #ccc;\n        border: 3px solid rgba(0, 0, 0, 0.2);\n}\n.gray-box .gallery-wrapper .gallery .thumbnail li img[data-v-42159136] {\n        display: block;\n        width: 100%;\n        height: 100%;\n}\n.gray-box .gallery-wrapper .gallery .thumb .big[data-v-42159136] {\n      margin-left: 20px;\n}\n.gray-box .gallery-wrapper .gallery .thumb img[data-v-42159136] {\n      display: block;\n      width: 440px;\n      height: 440px;\n}\n.gray-box .banner[data-v-42159136] {\n    width: 450px;\n    margin-left: 10px;\n}\n.gray-box .banner h4[data-v-42159136] {\n      font-size: 24px;\n      line-height: 1.25;\n      color: #000;\n      margin-bottom: 13px;\n}\n.gray-box .banner h6[data-v-42159136] {\n      font-size: 14px;\n      line-height: 1.5;\n      color: #bdbdbd;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n}\n.gray-box .banner .sku-custom-title[data-v-42159136] {\n      overflow: hidden;\n      padding: 8px 8px 18px 10px;\n      position: relative;\n}\n.gray-box .banner .params-name[data-v-42159136] {\n      padding-right: 20px;\n      font-size: 14px;\n      color: #8d8d8d;\n      line-height: 36px;\n}\n.gray-box .banner .num[data-v-42159136] {\n      padding: 29px 0 8px 10px;\n      border-top: 1px solid #ebebeb;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n}\n.gray-box .banner .buy[data-v-42159136] {\n      position: relative;\n      border-top: 1px solid #ebebeb;\n      padding: 30px 0 0 10px;\n}\n.item-info .gray-box[data-v-42159136] {\n  padding: 0;\n  display: block;\n}\n.item-info .img-item[data-v-42159136] {\n  width: 1220px;\n}\n.item-info .img-item img[data-v-42159136] {\n    width: 100%;\n    height: auto;\n    display: block;\n}\n.no-info[data-v-42159136] {\n  padding: 200px 0;\n  text-align: center;\n  font-size: 30px;\n}\n.price[data-v-42159136] {\n  display: block;\n  color: #d44d44;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n  text-align: right;\n}\n.price i[data-v-42159136] {\n    padding-left: 2px;\n    font-size: 24px;\n}\n"],sourceRoot:""}])},219:function(n,e,t){var i=t(205);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t(129)("6f038d57",i,!0)},237:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"w store-content"},[t("div",{staticClass:"gray-box"},[t("div",{staticClass:"gallery-wrapper"},[t("div",{staticClass:"gallery"},[t("div",{staticClass:"thumbnail"},[t("ul",n._l(n.small,function(e){return t("li",{class:{on:n.big===e},on:{click:function(t){n.big=e}}},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"item"}],attrs:{alt:n.product.productName}})])}))]),n._v(" "),t("div",{staticClass:"thumb"},[t("div",{staticClass:"big"},[t("img",{attrs:{src:n.big,alt:n.product.productName}})])])])]),n._v(" "),t("div",{staticClass:"banner"},[t("div",{staticClass:"sku-custom-title"},[t("h4",[n._v(n._s(n.product.productName))]),n._v(" "),t("h6",[t("span",[n._v(n._s(n.product.sub_title))]),n._v(" "),t("span",{staticClass:"price"},[t("em",[n._v("¥")]),t("i",[n._v(n._s(n.product.salePrice))])])])]),n._v(" "),t("div",{staticClass:"num"},[t("span",{staticClass:"params-name"},[n._v("数量")]),n._v(" "),t("buy-num",{attrs:{limit:Number(n.product.limit_num)},on:{"edit-num":n.editNum}})],1),n._v(" "),t("div",{staticClass:"buy"},[t("y-button",{staticStyle:{width:"145px",height:"50px","line-height":"48px"},attrs:{text:"加入购物车",classStyle:"main-btn"},on:{btnClick:function(e){n.addCart(n.product.productId,n.product.salePrice,n.product.productName,n.product.productImageBig)}}}),n._v(" "),t("y-button",{staticStyle:{width:"145px",height:"50px","line-height":"48px"},attrs:{text:"现在购买"},on:{btnClick:function(e){n.checkout(n.product.productId)}}})],1)])]),n._v(" "),t("div",{staticClass:"item-info"},[t("y-shelf",{attrs:{title:"产品信息"}},[t("div",{slot:"content"},[n.productMsg?t("div",{staticClass:"img-item"},n._l(n.productMsg.pieces_num,function(e){return t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.productMsg.url+"?x-oss-process=image/resize,w_2440/indexcrop,y_1440,i_"+(e-1)+"/quality,Q_100/format,webp",expression:"`${productMsg.url}?x-oss-process=image/resize,w_2440/indexcrop,y_1440,i_${item-1}/quality,Q_100/format,webp`"}],attrs:{alt:""}})})):t("div",{staticClass:"no-info"},[n._v("\n          该产品暂无内容\n        ")])])])],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=4.6fc12a1bbb677aa11712.js.map