(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{G6fN:function(l,n,t){"use strict";t.r(n);var u=t("8Y7J");class e{constructor(){console.log("Admin module constructor")}}var o=t("pMnS"),i=t("iInd"),s=t("SVse");class a{constructor(){}ngOnInit(){}}var r=u.nb({encapsulation:2,styles:[],data:{}});function c(l){return u.Ib(0,[(l()(),u.pb(0,0,null,null,18,"div",[["class","row"]],null,null,null,null,null)),(l()(),u.pb(1,0,null,null,14,"div",[["class","col-sm-3"]],null,null,null,null,null)),(l()(),u.pb(2,0,null,null,13,"div",[["class","card"]],null,null,null,null,null)),(l()(),u.pb(3,0,null,null,2,"div",[["class","card-header bg-primary"]],null,null,null,null,null)),(l()(),u.pb(4,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Gb(-1,null,["Side Menu"])),(l()(),u.pb(6,0,null,null,9,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u.pb(7,0,null,null,8,"ul",[["class","list-group"]],null,null,null,null,null)),(l()(),u.pb(8,0,null,null,3,"li",[["class","list-group-item"]],null,null,null,null,null)),(l()(),u.pb(9,0,null,null,2,"a",[["routerLink","categories"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.Ab(l,10).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e}),null,null)),u.ob(10,671744,null,0,i.n,[i.k,i.a,s.i],{routerLink:[0,"routerLink"]},null),(l()(),u.Gb(-1,null,[" Manage categories"])),(l()(),u.pb(12,0,null,null,3,"li",[["class","list-group-item"]],null,null,null,null,null)),(l()(),u.pb(13,0,null,null,2,"a",[["routerLink","products"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.Ab(l,14).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e}),null,null)),u.ob(14,671744,null,0,i.n,[i.k,i.a,s.i],{routerLink:[0,"routerLink"]},null),(l()(),u.Gb(-1,null,[" Manage Products"])),(l()(),u.pb(16,0,null,null,2,"div",[["class","col-sm-9"]],null,null,null,null,null)),(l()(),u.pb(17,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),u.ob(18,212992,null,0,i.p,[i.b,u.M,u.j,[8,null],u.h],null,null)],(function(l,n){l(n,10,0,"categories"),l(n,14,0,"products"),l(n,18,0)}),(function(l,n){l(n,9,0,u.Ab(n,10).target,u.Ab(n,10).href),l(n,13,0,u.Ab(n,14).target,u.Ab(n,14).href)}))}function b(l){return u.Ib(0,[(l()(),u.pb(0,0,null,null,1,"app-dashboard",[],null,null,null,c,r)),u.ob(1,114688,null,0,a,[],null,null)],(function(l,n){l(n,1,0)}),null)}var d=u.lb("app-dashboard",a,b,{},{},[]),g=t("s7LF");class p{constructor(){this.myEditEvent=new u.m,this.myDeleteEvent=new u.m,console.log("My table Constructor")}ngOnDestroy(){console.log("My table Destroy")}ngOnInit(){console.log("My table on Init",this.tblData)}ngOnChanges(){void 0!==this.tblData[0]&&(this.cols=Object.keys(this.tblData[0]))}edit(l){this.myEditEvent.emit(l)}delete(l){this.myDeleteEvent.emit(l)}}var h=u.nb({encapsulation:2,styles:[],data:{}});function m(l){return u.Ib(0,[(l()(),u.pb(0,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.Gb(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.context.$implicit)}))}function f(l){return u.Ib(0,[(l()(),u.pb(0,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Gb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit[n.context.$implicit])}))}function v(l){return u.Ib(0,[(l()(),u.pb(0,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),u.eb(16777216,null,null,1,null,f)),u.ob(2,278528,null,0,s.j,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.pb(3,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),u.pb(4,0,null,null,1,"button",[["class","btn btn-success"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.edit(l.context.$implicit)&&u),u}),null,null)),(l()(),u.Gb(-1,null,["Edit"])),(l()(),u.pb(6,0,null,null,1,"button",[["class","btn btn-danger"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.delete(l.context.$implicit.id)&&u),u}),null,null)),(l()(),u.Gb(-1,null,["Delete"]))],(function(l,n){l(n,2,0,n.component.cols)}),null)}function C(l){return u.Ib(0,[(l()(),u.pb(0,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),u.Gb(1,null,["",""])),(l()(),u.pb(2,0,null,null,7,"table",[["class","table table-bordered"]],null,null,null,null,null)),(l()(),u.pb(3,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),u.eb(16777216,null,null,1,null,m)),u.ob(5,278528,null,0,s.j,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.pb(6,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.Gb(-1,null,[" Actions "])),(l()(),u.eb(16777216,null,null,1,null,v)),u.ob(9,278528,null,0,s.j,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,5,0,t.colHeadings),l(n,9,0,t.tblData)}),(function(l,n){l(n,1,0,n.component.title)}))}class y{constructor(l,n){this.id=l,this.name=n}}class A{constructor(l){this.ctgSrvc=l,this.ctgTitle="Category Details",this.ctgHeadings=["Id","Category Name"],this.mgCategories=[],this.frnCtg=new y(null,null)}ngOnInit(){this.ctgSrvc.getCategories().subscribe(l=>{console.log("success",l),this.mgCategories=l},l=>{console.log("Error",l)})}save(){null==this.frnCtg.id?this.ctgSrvc.addCategory(this.frnCtg).subscribe(l=>{console.log("add Success"),this.mgCategories.push(l)},l=>{console.log("add Error",l)}):this.ctgSrvc.updateCategory(this.frnCtg).subscribe(l=>{console.log("update Success");const n=this.mgCategories.findIndex(n=>n.id=l.id);this.mgCategories[n]=l},l=>{console.log("update Error",l)}),this.frnCtg=new y(null,null)}handleEdit(l){Object.assign(this.frnCtg,l)}handleDelete(l){this.ctgSrvc.deleteCategory(l).subscribe(()=>{console.log("Delete Success");const n=this.mgCategories.findIndex(n=>n.id=l);this.mgCategories.splice(n,1)},l=>{console.log("Delete failure")})}}var D=t("lJxs"),I=t("EnSQ");let k=(()=>{class l{constructor(l){this.ds=l,this.restUrl="http://localhost:7000/wscategories"}getCategories(){return this.ds.getAllData(this.restUrl).pipe(Object(D.a)(l=>l))}addCategory(l){return this.ds.createData(this.restUrl,l).pipe(Object(D.a)(l=>l))}updateCategory(l){return this.ds.updateData(this.restUrl,l).pipe(Object(D.a)(l=>l))}deleteCategory(l){return this.ds.deleteData(this.restUrl,l)}}return l.ngInjectableDef=u.Mb({factory:function(){return new l(u.Nb(I.a))},token:l,providedIn:"root"}),l})();var E=u.nb({encapsulation:2,styles:[],data:{}});function M(l){return u.Ib(0,[(l()(),u.pb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u.Gb(-1,null,["Add Category"])),(l()(),u.pb(2,0,null,null,18,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,t){var e=!0;return"submit"===n&&(e=!1!==u.Ab(l,4).onSubmit(t)&&e),"reset"===n&&(e=!1!==u.Ab(l,4).onReset()&&e),e}),null,null)),u.ob(3,16384,null,0,g.n,[],null,null),u.ob(4,4210688,null,0,g.i,[[8,null],[8,null]],null,null),u.Db(2048,null,g.b,null,[g.i]),u.ob(6,16384,null,0,g.h,[[4,g.b]],null,null),(l()(),u.pb(7,0,null,null,5,"input",[["name","txtId"],["placeholder","Categeroy id"],["readonly",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,t){var e=!0,o=l.component;return"input"===n&&(e=!1!==u.Ab(l,8)._handleInput(t.target.value)&&e),"blur"===n&&(e=!1!==u.Ab(l,8).onTouched()&&e),"compositionstart"===n&&(e=!1!==u.Ab(l,8)._compositionStart()&&e),"compositionend"===n&&(e=!1!==u.Ab(l,8)._compositionEnd(t.target.value)&&e),"ngModelChange"===n&&(e=!1!==(o.frnCtg.id=t)&&e),e}),null,null)),u.ob(8,16384,null,0,g.c,[u.B,u.k,[2,g.a]],null,null),u.Db(1024,null,g.e,(function(l){return[l]}),[g.c]),u.ob(10,671744,null,0,g.j,[[2,g.b],[8,null],[8,null],[6,g.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.Db(2048,null,g.f,null,[g.j]),u.ob(12,16384,null,0,g.g,[[4,g.f]],null,null),(l()(),u.pb(13,0,null,null,5,"input",[["name","txtname"],["placeholder","Categeroy name"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,t){var e=!0,o=l.component;return"input"===n&&(e=!1!==u.Ab(l,14)._handleInput(t.target.value)&&e),"blur"===n&&(e=!1!==u.Ab(l,14).onTouched()&&e),"compositionstart"===n&&(e=!1!==u.Ab(l,14)._compositionStart()&&e),"compositionend"===n&&(e=!1!==u.Ab(l,14)._compositionEnd(t.target.value)&&e),"ngModelChange"===n&&(e=!1!==(o.frnCtg.name=t)&&e),e}),null,null)),u.ob(14,16384,null,0,g.c,[u.B,u.k,[2,g.a]],null,null),u.Db(1024,null,g.e,(function(l){return[l]}),[g.c]),u.ob(16,671744,null,0,g.j,[[2,g.b],[8,null],[8,null],[6,g.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.Db(2048,null,g.f,null,[g.j]),u.ob(18,16384,null,0,g.g,[[4,g.f]],null,null),(l()(),u.pb(19,0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.save()&&u),u}),null,null)),(l()(),u.Gb(-1,null,[" Save "])),(l()(),u.pb(21,0,null,null,1,"my-table",[],null,[[null,"myEditEvent"],[null,"myDeleteEvent"]],(function(l,n,t){var u=!0,e=l.component;return"myEditEvent"===n&&(u=!1!==e.handleEdit(t)&&u),"myDeleteEvent"===n&&(u=!1!==e.handleDelete(t)&&u),u}),C,h)),u.ob(22,770048,null,0,p,[],{title:[0,"title"],colHeadings:[1,"colHeadings"],tblData:[2,"tblData"]},{myEditEvent:"myEditEvent",myDeleteEvent:"myDeleteEvent"})],(function(l,n){var t=n.component;l(n,10,0,"txtId",t.frnCtg.id),l(n,16,0,"txtname",t.frnCtg.name),l(n,22,0,t.ctgTitle,t.ctgHeadings,t.mgCategories)}),(function(l,n){l(n,2,0,u.Ab(n,6).ngClassUntouched,u.Ab(n,6).ngClassTouched,u.Ab(n,6).ngClassPristine,u.Ab(n,6).ngClassDirty,u.Ab(n,6).ngClassValid,u.Ab(n,6).ngClassInvalid,u.Ab(n,6).ngClassPending),l(n,7,0,u.Ab(n,12).ngClassUntouched,u.Ab(n,12).ngClassTouched,u.Ab(n,12).ngClassPristine,u.Ab(n,12).ngClassDirty,u.Ab(n,12).ngClassValid,u.Ab(n,12).ngClassInvalid,u.Ab(n,12).ngClassPending),l(n,13,0,u.Ab(n,18).ngClassUntouched,u.Ab(n,18).ngClassTouched,u.Ab(n,18).ngClassPristine,u.Ab(n,18).ngClassDirty,u.Ab(n,18).ngClassValid,u.Ab(n,18).ngClassInvalid,u.Ab(n,18).ngClassPending)}))}function j(l){return u.Ib(0,[(l()(),u.pb(0,0,null,null,1,"app-managecategories",[],null,null,null,M,E)),u.ob(1,114688,null,0,A,[k],null,null)],(function(l,n){l(n,1,0)}),null)}var O=u.lb("app-managecategories",A,j,{},{},[]);class S{constructor(l){this.psvc=l,this.prdTitle="Product Details",this.prdHeadings=["Id","Product Name","Price","Description"],this.mgProducts=[]}ngOnInit(){this.psvc.getProducts().subscribe(l=>{console.log("success",l),this.mgProducts=l},l=>{console.log("Error",l)})}}var G=t("Gdn9"),w=u.nb({encapsulation:2,styles:[],data:{}});function P(l){return u.Ib(0,[(l()(),u.pb(0,0,null,null,1,"my-table",[],null,null,null,C,h)),u.ob(1,770048,null,0,p,[],{title:[0,"title"],colHeadings:[1,"colHeadings"],tblData:[2,"tblData"]},null)],(function(l,n){var t=n.component;l(n,1,0,t.prdTitle,t.prdHeadings,t.mgProducts)}),null)}function x(l){return u.Ib(0,[(l()(),u.pb(0,0,null,null,1,"app-manageproducts",[],null,null,null,P,w)),u.ob(1,114688,null,0,S,[G.a],null,null)],(function(l,n){l(n,1,0)}),null)}var z=u.lb("app-manageproducts",S,x,{},{},[]);class T{}var H=t("lGQG");let F=(()=>{class l{constructor(l){this.as=l}canActivate(){return this.as.getIsLoggedIn()}}return l.ngInjectableDef=u.Mb({factory:function(){return new l(u.Nb(H.a))},token:l,providedIn:"root"}),l})();t.d(n,"AdminModuleNgFactory",(function(){return L}));var L=u.mb(e,[],(function(l){return u.yb([u.zb(512,u.j,u.X,[[8,[o.a,d,O,z]],[3,u.j],u.v]),u.zb(4608,s.m,s.l,[u.s,[2,s.t]]),u.zb(4608,g.m,g.m,[]),u.zb(1073742336,s.b,s.b,[]),u.zb(1073742336,T,T,[]),u.zb(1073742336,g.l,g.l,[]),u.zb(1073742336,g.d,g.d,[]),u.zb(1073742336,i.o,i.o,[[2,i.t],[2,i.k]]),u.zb(1073742336,e,e,[]),u.zb(1024,i.i,(function(){return[[{path:"dashboard",component:a,canActivate:[F],children:[{path:"categories",component:A},{path:"products",component:S},{path:"",redirectTo:"categories",pathMatch:"full"}]}]]}),[])])}))}}]);