(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{147:function(a,t,e){(a.exports=e(3)(!1)).push([a.i,'.avator[data-v-20bf42a4]{height:100vh;background:#333}.avator .header[data-v-20bf42a4]{left:0;height:1.06667rem;top:0;width:100%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;color:#fff;padding:0 .2rem;font-size:14px}[data-dpr="2"] .avator .header[data-v-20bf42a4]{font-size:28px}[data-dpr="3"] .avator .header[data-v-20bf42a4]{font-size:42px}.avator .header .option[data-v-20bf42a4]{font-size:40px;min-width:1rem;text-align:center}[data-dpr="2"] .avator .header .option[data-v-20bf42a4]{font-size:80px}[data-dpr="3"] .avator .header .option[data-v-20bf42a4]{font-size:120px}.avator .avator-img[data-v-20bf42a4]{width:6rem;height:6rem;margin:3.73333rem 2rem}.avator .mask[data-v-20bf42a4]{background:rgba(0,0,0,.6);height:100vh;width:100vw;position:absolute;top:0;left:0}.avator .mask div[data-v-20bf42a4]{width:100vw;position:absolute;background:#fff;bottom:0}.avator .mask div.btn-able[data-v-20bf42a4]{height:5rem}.avator .mask div.btn-disable[data-v-20bf42a4]{height:2rem;border-top:.04rem solid #f5f5f5}.avator .mask div button[data-v-20bf42a4]{width:9.33333rem;height:1rem;display:block;margin:.33333rem auto;font-size:16px;color:#fff;border:none;border-radius:.1rem;background:#b84747}[data-dpr="2"] .avator .mask div button[data-v-20bf42a4]{font-size:32px}[data-dpr="3"] .avator .mask div button[data-v-20bf42a4]{font-size:48px}.avator .mask div button.cancel[data-v-20bf42a4]{background:#ccc}',""])},148:function(a,t,e){var o=e(147);"string"==typeof o&&(o=[[a.i,o,""]]),o.locals&&(a.exports=o.locals),(0,e(2).default)("629c33c5",o,!0,{})},192:function(a,t,e){"use strict";e.r(t);var o=e(0),i={store:o.a,data:function(){return{company:o.a.state.company,isShow:!1}},mounted:function(){var a=this;document.querySelector(".mask").addEventListener("click",function(t){console.log(t.path),console.log(t.path.id),console.log("=============================================="),"btn-able"===t.path?a.isShow=!0:a.isShow=!1})},methods:{toggle:function(a){this.isShow=!this.isShow},upload:function(){var a=this,t=document.createElement("input");t.type="file",t.id="pengliheng",t.click(),t.addEventListener("change",function(t){a.ajax_upload_image(t,"${ctx}/file/upload")})},init_camera:function(){var a=this,t=document.createElement("input");t.type="file",t.accept="image/*",t.click(),t.addEventListener("change",function(t){a.ajax_upload_image(t,"${ctx}/file/upload")})},ajax_upload_image:function(a,t){var e=this,o=a.path[0].files[0],i=new FormData;i.append("file",o),this.$ajax({method:"post",url:"/upload",data:i}).then(function(a){console.log("上传图片成功",a.data),e.$el.querySelector("img").src=a.data[0].url})}}},n=e(1),s=Object(n.a)(i,function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("div",{staticClass:"avator"},[o("header",{staticClass:"header"},[o("router-link",{attrs:{fst:"",tag:"span",to:"/"+a.company+"/message"}},[o("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[o("use",{attrs:{"xlink:href":"#icon-jiantou-copy"}})]),a._v("\n      返回\n    ")]),a._v(" "),o("span",{staticClass:"option",on:{click:a.toggle}},[a._v("···")])],1),a._v(" "),o("img",{staticClass:"avator-img",attrs:{src:e(37),alt:""}}),a._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:a.isShow,expression:"isShow"}],staticClass:"mask"},[o("div",{staticClass:"btn-able",attrs:{id:"btn-able"}},[o("button",{staticClass:"local-photo",on:{click:a.upload}},[a._v("本地相册")]),a._v(" "),o("button",{staticClass:"take-photo",on:{click:a.init_camera}},[a._v("拍照")])]),a._v(" "),o("div",{staticClass:"btn-disable",attrs:{id:"btn-disable"}},[o("button",{staticClass:"cancel",on:{click:a.toggle}},[a._v("取消")])])])])},[],!1,function(a){e(148)},"data-v-20bf42a4",null);t.default=s.exports},37:function(a,t,e){a.exports=e.p+"images/autoPhoto.jpg"}}]);