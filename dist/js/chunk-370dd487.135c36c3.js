(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-370dd487"],{"07ad":function(e,t,n){},"090e":function(e,t,n){"use strict";n("07ad")},"17e1":function(e,t,n){"use strict";n("8d0b")},"1dde":function(e,t,n){var i=n("d039"),a=n("b622"),r=n("2d00"),o=a("species");e.exports=function(e){return r>=51||!i((function(){var t=[],n=t.constructor={};return n[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"25f0":function(e,t,n){"use strict";var i=n("6eeb"),a=n("825a"),r=n("d039"),o=n("ad6d"),s="toString",c=RegExp.prototype,l=c[s],u=r((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=s;(u||d)&&i(RegExp.prototype,s,(function(){var e=a(this),t=String(e.source),n=e.flags,i=String(void 0===n&&e instanceof RegExp&&!("flags"in c)?o.call(e):n);return"/"+t+"/"+i}),{unsafe:!0})},"2e2d":function(e,t,n){},"44e7":function(e,t,n){var i=n("861d"),a=n("c6b6"),r=n("b622"),o=r("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==a(e))}},"4d63":function(e,t,n){var i=n("83ab"),a=n("da84"),r=n("94ca"),o=n("7156"),s=n("9bf2").f,c=n("241c").f,l=n("44e7"),u=n("ad6d"),d=n("9f7f"),p=n("6eeb"),b=n("d039"),g=n("69f3").set,m=n("2626"),f=n("b622"),h=f("match"),v=a.RegExp,y=v.prototype,O=/a/g,j=/a/g,w=new v(O)!==O,C=d.UNSUPPORTED_Y,x=i&&r("RegExp",!w||C||b((function(){return j[h]=!1,v(O)!=O||v(j)==j||"/a/i"!=v(O,"i")})));if(x){var k=function(e,t){var n,i=this instanceof k,a=l(e),r=void 0===t;if(!i&&a&&e.constructor===k&&r)return e;w?a&&!r&&(e=e.source):e instanceof k&&(r&&(t=u.call(e)),e=e.source),C&&(n=!!t&&t.indexOf("y")>-1,n&&(t=t.replace(/y/g,"")));var s=o(w?new v(e,t):v(e,t),i?this:y,k);return C&&n&&g(s,{sticky:n}),s},D=function(e){e in k||s(k,e,{configurable:!0,get:function(){return v[e]},set:function(t){v[e]=t}})},E=c(v),I=0;while(E.length>I)D(E[I++]);y.constructor=k,k.prototype=y,p(a,"RegExp",k)}m("RegExp")},"65f0":function(e,t,n){var i=n("861d"),a=n("e8b5"),r=n("b622"),o=r("species");e.exports=function(e,t){var n;return a(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?i(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"6fc0":function(e,t,n){"use strict";n("b4fc")},"705d":function(e,t,n){e.exports=n.p+"img/icon_close_dark.a751b261.svg"},7156:function(e,t,n){var i=n("861d"),a=n("d2bb");e.exports=function(e,t,n){var r,o;return a&&"function"==typeof(r=t.constructor)&&r!==n&&i(o=r.prototype)&&o!==n.prototype&&a(e,o),e}},"825d":function(e,t,n){"use strict";n.r(t);n("b0c0");var i=n("7a23"),a=n("705d"),r=n.n(a),o=Object(i["H"])("data-v-5baf7502");Object(i["s"])("data-v-5baf7502");var s={key:0,class:"content-wrap"},c={class:"icon-wrap"},l=Object(i["g"])("img",{src:r.a},null,-1),u={class:"title"},d={class:"content-card"},p={class:"text-link-wrap"},b={class:"author"},g=Object(i["g"])("div",{class:"text-link"},"Read more",-1);Object(i["q"])();var m=o((function(e,t,n,a,r,o){return!0===n.person.isShow?(Object(i["p"])(),Object(i["d"])("div",s,[Object(i["g"])("div",c,[Object(i["g"])("span",{class:"close-icon",onClick:t[1]||(t[1]=function(e){return o.provideName(n.person.name)})},[l])]),Object(i["g"])("div",u,Object(i["z"])(n.person.title),1),Object(i["g"])("div",d,Object(i["z"])(n.person.decription),1),Object(i["g"])("div",p,[Object(i["g"])("div",b,"🎖"+Object(i["z"])("".concat(n.person.name," • 3 days ago")),1),g])])):Object(i["e"])("",!0)})),f={data:function(){return{}},methods:{provideName:function(e){this.$emit("findIndex",e),console.log(e)}},props:["person","newHero","removeCard"],emits:["findIndex"]};n("6fc0");f.render=m,f.__scopeId="data-v-5baf7502";t["default"]=f},8418:function(e,t,n){"use strict";var i=n("c04e"),a=n("9bf2"),r=n("5c6c");e.exports=function(e,t,n){var o=i(t);o in e?a.f(e,o,r(0,n)):e[o]=n}},"8d0b":function(e,t,n){},9263:function(e,t,n){"use strict";var i=n("ad6d"),a=n("9f7f"),r=n("5692"),o=RegExp.prototype.exec,s=r("native-string-replace",String.prototype.replace),c=o,l=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],p=l||d||u;p&&(c=function(e){var t,n,a,r,c=this,p=u&&c.sticky,b=i.call(c),g=c.source,m=0,f=e;return p&&(b=b.replace("y",""),-1===b.indexOf("g")&&(b+="g"),f=String(e).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==e[c.lastIndex-1])&&(g="(?: "+g+")",f=" "+f,m++),n=new RegExp("^(?:"+g+")",b)),d&&(n=new RegExp("^"+g+"$(?!\\s)",b)),l&&(t=c.lastIndex),a=o.call(p?n:c,f),p?a?(a.input=a.input.slice(m),a[0]=a[0].slice(m),a.index=c.lastIndex,c.lastIndex+=a[0].length):c.lastIndex=0:l&&a&&(c.lastIndex=c.global?a.index+a[0].length:t),d&&a&&a.length>1&&s.call(a[0],n,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(a[r]=void 0)})),a}),e.exports=c},"9a84":function(e,t,n){"use strict";n.r(t);n("b0c0");var i=n("7a23"),a={class:"title-card-wrap gradient-bg"},r=Object(i["g"])("div",{class:"title-wrap"},[Object(i["g"])("h2",null,"UX Community"),Object(i["g"])("h4",null,"A place to seek and share UX advices.")],-1),o={class:"button-wrap"},s={class:"headline-card-wrap"},c=Object(i["g"])("div",{class:"title-wrap"},[Object(i["g"])("h3",null,"Top UX stories"),Object(i["g"])("p",{class:"author"},"We believe designers are thinkers as much as they are makers.")],-1),l={class:"button-wrap"},u={class:"card-wrap"},d=Object(i["g"])("br",null,null,-1),p=Object(i["g"])("br",null,null,-1),b={class:"title-card-wrap gradient-bg"},g=Object(i["g"])("div",{class:"title-wrap"},[Object(i["g"])("h2",null,"🎖 188K followers"),Object(i["g"])("h4",null,"Connect with UX Community.")],-1),m={class:"button-wrap"};function f(e,t,n,f,h,v){var y=Object(i["x"])("name-card"),O=Object(i["x"])("input-form"),j=Object(i["x"])("signup-form");return Object(i["p"])(),Object(i["d"])(i["a"],null,[Object(i["g"])("div",a,[r,Object(i["g"])("div",o,[Object(i["g"])("button",{class:"button",onClick:t[1]||(t[1]=function(){return v.toggleSignup&&v.toggleSignup.apply(v,arguments)})},"Become a member")])]),Object(i["g"])("div",s,[c,Object(i["g"])("div",l,[Object(i["g"])("button",{class:"chip",onClick:t[2]||(t[2]=function(){return v.toggleCard&&v.toggleCard.apply(v,arguments)})},"Write a story"),Object(i["g"])("button",{class:"chip",onClick:t[3]||(t[3]=function(){return v.sortCard&&v.sortCard.apply(v,arguments)})},"Sorting by name")])]),Object(i["g"])("div",u,[(Object(i["p"])(!0),Object(i["d"])(i["a"],null,Object(i["v"])(h.personList,(function(e){return Object(i["p"])(),Object(i["d"])(y,{class:"Kiyu"===e.name?"highlight-content":"content-wrap",key:e,onFindIndex:v.removeCard,person:e},null,8,["class","onFindIndex","person"])})),128))]),d,p,Object(i["g"])("div",b,[g,Object(i["g"])("div",m,[Object(i["g"])("button",{class:"button",onClick:t[4]||(t[4]=function(){return v.toggleCard&&v.toggleCard.apply(v,arguments)})},"Write your first story")])]),!0===h.cardDisplay?(Object(i["p"])(),Object(i["d"])(O,{key:0,personList:h.personList},null,8,["personList"])):Object(i["e"])("",!0),!0===h.signUpDisplay?(Object(i["p"])(),Object(i["d"])(j,{key:1,personList:h.personList},null,8,["personList"])):Object(i["e"])("",!0)],64)}n("c740"),n("a434");var h={data:function(){return{message:"Please input hero name",cardDisplay:!1,signUpDisplay:!1,newHero:{name:"Kiyu",title:"Think about me, then i may call you",decription:"Dont you think heroes use decription?",isShow:!0},newMember:{name:"",title:"",decription:"",isShow:!0},customCard:{name:"",title:"",decription:"",isShow:!0},personList:[{name:"Anthony",title:"Bringing product thinking to any team",decription:"Imagine this scenario. A team member approaches you excitedly and says, “I have an idea for a new feature we have to build! You would click here and here, then be able to do this, and it would work like this! Sh$t.",isShow:!0},{name:"Kleine",title:"What design research can learn from Socrates’ sneakers",decription:"So Greek philosophy isn’t the first subject that comes to mind when I talk about design research. But this might be one of those puzzle pieces that only falls into place after a few years.",isShow:!0},{name:"Mick",title:"A simple static visualization can often be the best approach",decription:"As a part of the process of learning Tableau, I’ve been exposed to a wealth of interactivity options. From dashboards to stories, I’ve been exposed to the world of dynamic visualization.",isShow:!0},{name:"Kiyu",title:"From designed-for-women to design-by-women",decription:"Design has evolved from a pragmatic methodology towards a strategic influence over the past decades; designers have engaged in complex...",isShow:!0},{name:"Michelle",title:"Ten genius ways Disney’s customer experience keeps the magic alive",decription:"Magic Kingdom in Disney World is known as “the most magical place on earth.” Visitors go there to disappear from reality and live in a fairy tale.",isShow:!0},{name:"Jarvey",title:"The art of visualising music: A brief history of graphic notation",decription:"Design and music intersect in many areas; fashion, art, filmmaking and set design, yet one relatively obscure but staggeringly creative area is in the design of graphic notation used by composers.",isShow:!0},{name:"Wanwan Tran",title:"Designing honesty",decription:"Rams is known for his “less is better” approach and industrial design works with Braun and Vitsoe. Most famously, this approach would go on to influence Jonathan Ive and the Apple production team’s concepts",isShow:!0},{name:"Jimmy Pena",title:"What can researchers learn from con artists?",decription:"Good con artists identify and study their victims, learning who they are, what motivates them, and what they want. Con artists need to build an emotional.",isShow:!0}]}},methods:{removeCard:function(e){var t=this.personList,n=t.findIndex((function(t){return t.name==e}));"Kiyu"===this.personList[n].name?(this.isDialogDisplay=!0,console.log(this.isDialogDisplay)):(t.splice(n,1),console.log(n))},addPerson:function(){this.personList.push(this.newHero),console.table(this.personList)},sortCard:function(){this.personList=this.personList.sort((function(e,t){return e.name<t.name?-1:1}))},submitCard:function(){var e=this,t={name:this.customCard.name,title:this.customCard.title,decription:this.customCard.decription,isShow:this.customCard.isShow};this.personList.some((function(t){return t.name===e.customCard.name}))?(alert("Please type new name. Can't add duplicated ".concat(this.customCard.name)),console.log("Duplicated")):(this.personList.unshift(t),console.log("Added ".concat(this.customCard.name," to Hero list!"))),this.customCard.name="",this.customCard.title="",this.customCard.decription="",this.cardDisplay=!this.cardDisplay},toggleCard:function(){this.cardDisplay=!this.cardDisplay,this.customCard.name="",this.customCard.title="",this.customCard.decription=""},toggleSignup:function(){this.signUpDisplay=!this.signUpDisplay,this.customCard.name=""}},components:{"name-card":n("825d").default,"input-form":n("9eb0").default,"signup-form":n("bd82").default},provide:function(){return{customCard:this.customCard,logConsole:this.logItem,submitData:this.submitCard,closeDialog:this.toggleCard,toggleSignup:this.toggleSignup,dialogMessage:this.message}}};n("a23b");h.render=f;t["default"]=h},"9eb0":function(e,t,n){"use strict";n.r(t);n("b0c0");var i=n("7a23"),a=n("705d"),r=n.n(a),o=Object(i["H"])("data-v-c30cb0ee");Object(i["s"])("data-v-c30cb0ee");var s={class:"scrim-bg"},c={class:"dialog-wrap"},l={class:"content-wrap"},u={class:"icon-wrap"},d=Object(i["g"])("img",{src:r.a},null,-1),p=Object(i["g"])("h3",null,"Write a story",-1),b=Object(i["g"])("p",{class:"author"},"We believe designers are thinkers as much as they are makers.",-1),g=Object(i["g"])("br",null,null,-1),m=Object(i["g"])("br",null,null,-1),f=Object(i["g"])("span",null,"Title",-1),h=Object(i["g"])("br",null,null,-1),v=Object(i["g"])("span",null,"Tell your story",-1),y=Object(i["g"])("span",{class:"desciption"},"Describe your story within 60-100 characters.",-1),O=Object(i["g"])("br",null,null,-1),j=Object(i["g"])("span",null,"Your name",-1),w={key:0,class:"desciption"},C={key:1,class:"desciption errorMessage"},x={class:"button-wrap"};Object(i["q"])();var k=o((function(e,t,n,a,r,o){return Object(i["p"])(),Object(i["d"])("div",s,[Object(i["g"])("div",c,[Object(i["g"])("div",l,[Object(i["g"])("div",u,[Object(i["g"])("span",{class:"icon opacity",onClick:t[1]||(t[1]=function(){return o.closeDialog&&o.closeDialog.apply(o,arguments)})},[d])]),p,b,g,m,f,Object(i["E"])(Object(i["g"])("input",{onKeydown:t[2]||(t[2]=Object(i["F"])((function(){return o.resetInput&&o.resetInput.apply(o,arguments)}),["esc"])),"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.customCard.title=e}),type:"text"},null,544),[[i["B"],o.customCard.title,void 0,{trim:!0}]]),h,v,Object(i["E"])(Object(i["g"])("textarea",{onKeydown:t[4]||(t[4]=Object(i["F"])((function(){return o.resetInput&&o.resetInput.apply(o,arguments)}),["esc"])),"onUpdate:modelValue":t[5]||(t[5]=function(e){return o.customCard.decription=e}),type:"text"},null,544),[[i["B"],o.customCard.decription]]),y,O,j,Object(i["E"])(Object(i["g"])("input",{onKeydown:[t[6]||(t[6]=Object(i["F"])((function(){return o.checkDuplicate&&o.checkDuplicate.apply(o,arguments)}),["enter"])),t[7]||(t[7]=Object(i["F"])((function(){return o.resetInput&&o.resetInput.apply(o,arguments)}),["esc"]))],"onUpdate:modelValue":t[8]||(t[8]=function(e){return o.customCard.name=e}),type:"text"},null,544),[[i["B"],o.customCard.name,void 0,{trim:!0}]]),!1===r.errorDuplicated.isActive?(Object(i["p"])(),Object(i["d"])("span",w,"Your name will display in story")):Object(i["e"])("",!0),!0===r.errorDuplicated.isActive?(Object(i["p"])(),Object(i["d"])("span",C,Object(i["z"])(r.errorDuplicated.message),1)):Object(i["e"])("",!0),Object(i["g"])("div",x,[Object(i["g"])("button",{class:"button",onClick:t[9]||(t[9]=function(){return o.submitData&&o.submitData.apply(o,arguments)}),disabled:!o.isFormCompleted},"Submit",8,["disabled"])])])])])})),D=(n("4d63"),n("ac1f"),n("25f0"),{data:function(){return{errorDuplicated:{message:"Duplicated name, please choose another name.",isActive:!1},errorEmail:{message:"Sorry, your email format is not correct.",isActive:!1}}},methods:{resetInput:function(){this.customCard.name="",this.customCard.advice="",this.customCard.email=""},checkDuplicate:function(){var e=this;this.personList.some((function(t){return t.name.toLowerCase()===e.customCard.name.toLowerCase()}))?(this.errorDuplicated.isActive=!0,console.log("duplicated")):console.log("not duplicated")},isEmailValid:function(){var e=new RegExp(".com");!0===e.test(this.customCard.email)?(this.errorEmail.isActive=!1,console.log("Found @")):(this.errorEmail.isActive=!0,console.log("Not Found @"))}},computed:{isFormCompleted:function(){return""!==this.customCard.name&&""!==this.customCard.email}},props:{personList:Object},inject:["customCard","logConsole","submitData","closeDialog","dialogMessage"]});n("090e");D.render=k,D.__scopeId="data-v-c30cb0ee";t["default"]=D},"9f7f":function(e,t,n){"use strict";var i=n("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=i((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=i((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a23b:function(e,t,n){"use strict";n("2e2d")},a434:function(e,t,n){"use strict";var i=n("23e7"),a=n("23cb"),r=n("a691"),o=n("50c4"),s=n("7b0b"),c=n("65f0"),l=n("8418"),u=n("1dde"),d=u("splice"),p=Math.max,b=Math.min,g=9007199254740991,m="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var n,i,u,d,f,h,v=s(this),y=o(v.length),O=a(e,y),j=arguments.length;if(0===j?n=i=0:1===j?(n=0,i=y-O):(n=j-2,i=b(p(r(t),0),y-O)),y+n-i>g)throw TypeError(m);for(u=c(v,i),d=0;d<i;d++)f=O+d,f in v&&l(u,d,v[f]);if(u.length=i,n<i){for(d=O;d<y-i;d++)f=d+i,h=d+n,f in v?v[h]=v[f]:delete v[h];for(d=y;d>y-i+n;d--)delete v[d-1]}else if(n>i)for(d=y-i;d>O;d--)f=d+i-1,h=d+n-1,f in v?v[h]=v[f]:delete v[h];for(d=0;d<n;d++)v[d+O]=arguments[d+2];return v.length=y-i+n,u}})},ac1f:function(e,t,n){"use strict";var i=n("23e7"),a=n("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,n){"use strict";var i=n("825a");e.exports=function(){var e=i(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b0c0:function(e,t,n){var i=n("83ab"),a=n("9bf2").f,r=Function.prototype,o=r.toString,s=/^\s*function ([^ (]*)/,c="name";i&&!(c in r)&&a(r,c,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(e){return""}}})},b4fc:function(e,t,n){},b727:function(e,t,n){var i=n("0366"),a=n("44ad"),r=n("7b0b"),o=n("50c4"),s=n("65f0"),c=[].push,l=function(e){var t=1==e,n=2==e,l=3==e,u=4==e,d=6==e,p=7==e,b=5==e||d;return function(g,m,f,h){for(var v,y,O=r(g),j=a(O),w=i(m,f,3),C=o(j.length),x=0,k=h||s,D=t?k(g,C):n||p?k(g,0):void 0;C>x;x++)if((b||x in j)&&(v=j[x],y=w(v,x,O),e))if(t)D[x]=y;else if(y)switch(e){case 3:return!0;case 5:return v;case 6:return x;case 2:c.call(D,v)}else switch(e){case 4:return!1;case 7:c.call(D,v)}return d?-1:l||u?u:D}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},bd82:function(e,t,n){"use strict";n.r(t);n("b0c0");var i=n("7a23"),a=n("705d"),r=n.n(a),o=Object(i["H"])("data-v-218bee46");Object(i["s"])("data-v-218bee46");var s={class:"scrim-bg"},c={class:"dialog-wrap"},l={class:"content-wrap"},u={class:"icon-wrap"},d=Object(i["g"])("img",{src:r.a},null,-1),p=Object(i["g"])("h3",null,"Become member",-1),b=Object(i["g"])("p",{class:"author"},"Start your UX Journey, get unlimited access to everything.",-1),g=Object(i["g"])("br",null,null,-1),m=Object(i["g"])("br",null,null,-1),f=Object(i["g"])("span",null,"Full name",-1),h={key:0,class:"desciption"},v={key:1,class:"desciption errorMessage"},y=Object(i["g"])("br",null,null,-1),O=Object(i["g"])("span",null,"Email",-1),j={key:2,class:"desciption"},w={key:3,class:"desciption errorMessage"},C=Object(i["g"])("br",null,null,-1),x={class:"button-wrap"},k=Object(i["g"])("br",null,null,-1);Object(i["q"])();var D=o((function(e,t,n,a,r,o){return Object(i["p"])(),Object(i["d"])("div",s,[Object(i["g"])("div",c,[Object(i["g"])("div",l,[Object(i["g"])("div",u,[Object(i["g"])("span",{class:"icon opacity",onClick:t[1]||(t[1]=function(){return o.toggleSignup&&o.toggleSignup.apply(o,arguments)})},[d])]),p,b,g,m,f,Object(i["E"])(Object(i["g"])("input",{onKeydown:[t[2]||(t[2]=Object(i["F"])((function(){return o.checkDuplicate&&o.checkDuplicate.apply(o,arguments)}),["enter"])),t[3]||(t[3]=Object(i["F"])((function(){return o.resetInput&&o.resetInput.apply(o,arguments)}),["esc"]))],"onUpdate:modelValue":t[4]||(t[4]=function(e){return o.customCard.name=e}),type:"text"},null,544),[[i["B"],o.customCard.name,void 0,{trim:!0}]]),!1===r.errorDuplicated.isActive?(Object(i["p"])(),Object(i["d"])("span",h,"Fullname will display in your certificate")):Object(i["e"])("",!0),!0===r.errorDuplicated.isActive?(Object(i["p"])(),Object(i["d"])("span",v,Object(i["z"])(r.errorDuplicated.message),1)):Object(i["e"])("",!0),y,O,Object(i["E"])(Object(i["g"])("input",{onKeydown:[t[5]||(t[5]=Object(i["F"])((function(){return o.isEmailValid&&o.isEmailValid.apply(o,arguments)}),["enter"])),t[6]||(t[6]=Object(i["F"])((function(){return o.resetInput&&o.resetInput.apply(o,arguments)}),["esc"]))],"onUpdate:modelValue":t[7]||(t[7]=function(e){return o.customCard.email=e}),type:"text"},null,544),[[i["B"],o.customCard.email]]),!1===r.errorEmail.isActive?(Object(i["p"])(),Object(i["d"])("span",j,"Keep in-touch with us anytime")):Object(i["e"])("",!0),!0===r.errorEmail.isActive?(Object(i["p"])(),Object(i["d"])("span",w,Object(i["z"])(r.errorEmail.message),1)):Object(i["e"])("",!0),C,Object(i["g"])("div",x,[Object(i["g"])("button",{class:"button",onClick:t[8]||(t[8]=function(){return o.submitData&&o.submitData.apply(o,arguments)}),disabled:!o.isFormCompleted},"Submit",8,["disabled"])]),k])])])})),E=(n("4d63"),n("ac1f"),n("25f0"),{data:function(){return{errorDuplicated:{message:"Duplicated name, please choose another name.",isActive:!1},errorEmail:{message:"Sorry, your email format is not correct.",isActive:!1}}},methods:{resetInput:function(){this.customCard.name="",this.customCard.advice="",this.customCard.email=""},checkDuplicate:function(){var e=this;this.personList.some((function(t){return t.name.toLowerCase()===e.customCard.name.toLowerCase()}))?(this.errorDuplicated.isActive=!0,console.log("duplicated")):console.log("not duplicated")},isEmailValid:function(){var e=new RegExp(".com");!0===e.test(this.customCard.email)?(this.errorEmail.isActive=!1,console.log("Found @")):(this.errorEmail.isActive=!0,console.log("Not Found @"))}},computed:{isFormCompleted:function(){return""!==this.customCard.name&&""!==this.customCard.email}},props:{personList:Object},inject:["customCard","logConsole","submitData","toggleSignup","dialogMessage"]});n("17e1");E.render=D,E.__scopeId="data-v-218bee46";t["default"]=E},c740:function(e,t,n){"use strict";var i=n("23e7"),a=n("b727").findIndex,r=n("44d2"),o="findIndex",s=!0;o in[]&&Array(1)[o]((function(){s=!1})),i({target:"Array",proto:!0,forced:s},{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),r(o)},e8b5:function(e,t,n){var i=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==i(e)}}}]);
//# sourceMappingURL=chunk-370dd487.135c36c3.js.map