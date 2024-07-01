"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[712],{712:(_,g,i)=>{i.r(g),i.d(g,{HomePageModule:()=>S});var d=i(6814),h=i(95),o=i(2511),m=i(3044),e=i(6689),c=i(4258),l=i(5861),v=i(5875);const b=function(){return{class:"enVerde",condicion:"row['estadoid'] ==2"}},y=function(){return{class:"enNaranja",condicion:"row['estadoid'] == 1"}},Z=function(t,a){return[t,a]};let U=(()=>{var t;class a{constructor(n,r){this.myHttpService=n,this.alertController=r,this.columns=[]}ngOnInit(){var n=this;return(0,l.Z)(function*(){yield n.getUser(),console.log(n.userid),n.columns=[{name:"id",prop:"id",type:"number",hide:!0},{name:"fecha",prop:"fecha",type:"date",OrderInit:"DESC"},{name:"importe",prop:"importe",type:"number"},{name:"Borrar",prop:"estadodesc",type:"action",action:"delBizum",canAction:!0,condicion:"row['estadoid'] == 1"},{name:"E",prop:"estadoid",type:"number",hide:!0},{name:"user",prop:"userid",type:"number",filterInit:` ux."userid" = ${n.userid}`,hide:!0}],n.refresh()})()}refresh(){var n=this;return(0,l.Z)(function*(){n.tableRefresh=(new Date).getTime()})()}actionEmiter(n){if("delBizum"===(null==n?void 0:n.action)){if(1!=n.row.estadoid)return;this.borrar(n.row)}}getUser(){var n=this;return(0,l.Z)(function*(){try{const r=new c.classHttp("get","user",null,"",null,n.userid.toString()),u=yield n.myHttpService.ejecuteURL(r);u&&(n.user=u)}catch{}})()}borrar(n){var r=this;return(0,l.Z)(function*(){var p;yield(yield r.alertController.create({header:`Antenci\xf3n!! se va a borrar el bizum de importe ${n.importe} \u20ac. \xbfContinuar?`,buttons:[{text:"Cancelar",role:"cancel",handler:()=>{}},{text:"OK",role:"confirm",handler:(p=(0,l.Z)(function*(){r.isLoading=!0;const f=new c.classHttp("delete","userxbizum",null,"",null,n.id);yield r.myHttpService.ejecuteURL(f),r.isLoading=!1,r.refresh()}),function(){return p.apply(this,arguments)})}]})).present()})()}}return(t=a).\u0275fac=function(n){return new(n||t)(e.Y36(c.MyHttpService),e.Y36(o.Br))},t.\u0275cmp=e.Xpm({type:t,selectors:[["user-data"]],inputs:{userid:"userid"},decls:31,vars:18,consts:[[2,"font-size","25px"],[1,"avisarBizum","hand",3,"click"],[3,"title","entityName","columns","refresh","pageSize","withCache","objNgClass","actionEmiter"],[3,"SetUser","saveEvent","cancelEvent"]],template:function(n,r){1&n&&(e.TgZ(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),e._uU(3),e.qZA(),e.TgZ(4,"ion-card-subtitle"),e._uU(5),e.qZA()(),e.TgZ(6,"ion-card-content")(7,"ion-row")(8,"ion-col")(9,"span",0),e._uU(10," Saldo"),e.qZA()(),e.TgZ(11,"ion-col")(12,"span",0),e._uU(13),e.ALo(14,"number"),e.qZA()()()()(),e.TgZ(15,"ion-card")(16,"ion-card-header")(17,"ion-card-title"),e._uU(18,"Bizum"),e.qZA(),e.TgZ(19,"ion-card-subtitle")(20,"p"),e._uU(21,"Una vez que hagas el bizum desde tu banco, para registrarlo en la aplicaci\xf3n pulsa en"),e.qZA(),e.TgZ(22,"p")(23,"span",1),e.NdJ("click",function(){return r.userBizum=r.user}),e._uU(24,"Avisar Bizum"),e.qZA()(),e.TgZ(25,"p")(26,"i"),e._uU(27,"(se pueden borrar en estado pendiente)"),e.qZA()()()(),e.TgZ(28,"ion-card-content")(29,"my-table",2),e.NdJ("actionEmiter",function(p){return r.actionEmiter(p)}),e.qZA()()(),e.TgZ(30,"add-bizum",3),e.NdJ("saveEvent",function(){return r.refresh()})("cancelEvent",function(){return r.userBizum=null}),e.qZA()),2&n&&(e.xp6(3),e.Oqu(null==r.user?null:r.user.name),e.xp6(2),e.Oqu(null==r.user?null:r.user.email),e.xp6(8),e.hij(" ",e.lcZ(14,11,null==r.user?null:r.user.saldo),"\u20ac"),e.xp6(16),e.Q6J("title","Bizums")("entityName","userxbizum")("columns",r.columns)("refresh",r.tableRefresh)("pageSize",4)("withCache",!0)("objNgClass",e.WLB(15,Z,e.DdM(13,b),e.DdM(14,y))),e.xp6(1),e.Q6J("SetUser",r.userBizum))},dependencies:[o.PM,o.FN,o.Zi,o.tO,o.Dq,o.wI,o.Nd,c.MyTableComponent,v.I,d.JJ],styles:["ion-checkbox[_ngcontent-%COMP%]{--size: 32px;--checkbox-background-checked: #6815ec}ion-checkbox[_ngcontent-%COMP%]::part(container){border-radius:6px;border:2px solid #6815ec}.avisarBizum[_ngcontent-%COMP%]{font-size:14px;color:#fff;background-color:green;border:1px solid;border-radius:10px;padding:3px}"]}),a})();function z(t,a){1&t&&(e.TgZ(0,"ion-row")(1,"ion-col",2)(2,"ion-button",3),e._UZ(3,"ion-icon",4),e._uU(4," Conectate a la aplicaci\xf3n "),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("routerLink","/login"))}function C(t,a){if(1&t&&e._UZ(0,"user-data",5),2&t){const s=e.oxw();e.Q6J("userid",s.user.id)}}const H=[{path:"",component:(()=>{var t;class a{constructor(n){this.seguridadService=n,this.seguridadService.subjectUser.subscribe(r=>{this.user=r})}ngOnInit(){this.user=this.seguridadService.UserGet()}}return(t=a).\u0275fac=function(n){return new(n||t)(e.Y36(c.SeguridadService))},t.\u0275cmp=e.Xpm({type:t,selectors:[["home-ttec-euromillones"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"userid",4,"ngIf"],[1,"ion-text-center"],["color","success","title","Conectate a la aplicaci\xf3n",3,"routerLink"],["slot","start","name","person",2,"color","gray"],[3,"userid"]],template:function(n,r){1&n&&(e.TgZ(0,"ion-grid"),e.YNc(1,z,5,1,"ion-row",0),e.qZA(),e.YNc(2,C,1,1,"user-data",1)),2&n&&(e.xp6(1),e.Q6J("ngIf",!r.user),e.xp6(1),e.Q6J("ngIf",r.user))},dependencies:[d.O5,o.YG,o.wI,o.jY,o.gu,o.Nd,o.YI,m.rH,U]}),a})()}];let T=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.Bz.forChild(H),m.Bz]}),a})();var A=i(3355),P=i(540);let S=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,h.u5,o.Pc,T,A.S,P.hJ]}),a})()}}]);