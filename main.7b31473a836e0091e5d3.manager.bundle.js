(self.webpackChunkstorybook_app=self.webpackChunkstorybook_app||[]).push([[179],{79002:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var _storybook_addons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(21872),theme=(0,__webpack_require__(77439).create)({base:"dark",appContentBg:"white"});_storybook_addons__WEBPACK_IMPORTED_MODULE_1__.KP.setConfig({theme})},98670:function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__awaiter=this&&this.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):function adopt(value){return value instanceof P?value:new P((function(resolve){resolve(value)}))}(result.value).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))},__generator=this&&this.__generator||function(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}};Object.defineProperty(exports,"__esModule",{value:!0});var templateObject_1,templateObject_2,templateObject_3,templateObject_4,theming_1=__webpack_require__(77439),react_1=__importStar(__webpack_require__(2784)),Title=theming_1.styled.span(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  margin-top: 2px;\n  margin-bottom: 8px;\n  font-size: 20px;\n  font-size: 20px;\n  display: block;\n"],["\n  margin-top: 2px;\n  margin-bottom: 8px;\n  font-size: 20px;\n  font-size: 20px;\n  display: block;\n"]))),InstallCommandRoot=theming_1.styled.div(templateObject_2||(templateObject_2=__makeTemplateObject(["\n  position: relative;\n  background: black;\n  color: white;\n  font-size: 14px;\n  border-radius: 2px;\n  border: 1px solid white;\n"],["\n  position: relative;\n  background: black;\n  color: white;\n  font-size: 14px;\n  border-radius: 2px;\n  border: 1px solid white;\n"]))),InstallCommandText=theming_1.styled.div(templateObject_3||(templateObject_3=__makeTemplateObject(["\n  overflow-x: auto;\n  white-space: nowrap;\n  padding: 8px;\n"],["\n  overflow-x: auto;\n  white-space: nowrap;\n  padding: 8px;\n"]))),CopyText=theming_1.styled.span(templateObject_4||(templateObject_4=__makeTemplateObject(["\n  position: absolute;\n  font-size: 12px;\n  right: 0;\n  bottom: 0;\n  color: black;\n  padding: 4px;\n  cursor: pointer;\n  border-top-left-radius: 4px;\n  background-color: white;\n  &:hover {\n    text-decoration: underline;\n    text-decoration-color: ",";\n  }\n"],["\n  position: absolute;\n  font-size: 12px;\n  right: 0;\n  bottom: 0;\n  color: black;\n  padding: 4px;\n  cursor: pointer;\n  border-top-left-radius: 4px;\n  background-color: white;\n  &:hover {\n    text-decoration: underline;\n    text-decoration-color: ",";\n  }\n"])),(function(props){return props.theme.color.secondary})),copyTextToClipboard=function(text){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(_a){switch(_a.label){case 0:return _a.trys.push([0,2,,3]),[4,navigator.clipboard.writeText(text)];case 1:return _a.sent(),[2,!0];case 2:return _a.sent(),[3,3];case 3:return[2,!1]}}))}))};exports.default=function PackageInstallationInstructions(_a){var _this=this,packages=_a.packages,text="npm install ".concat(packages.join(" ")),_b=(0,react_1.useState)(!1),copySuccessful=_b[0],setCopySuccessful=_b[1];return(0,react_1.useEffect)((function(){setCopySuccessful(!1)}),[text]),packages&&0!==packages.length?react_1.default.createElement("div",null,react_1.default.createElement(Title,null,"Installation Instructions"),react_1.default.createElement(InstallCommandRoot,null,react_1.default.createElement(InstallCommandText,null,text),react_1.default.createElement(CopyText,{onClick:function(){return __awaiter(_this,void 0,void 0,(function(){var _a;return __generator(this,(function(_b){switch(_b.label){case 0:return _a=setCopySuccessful,[4,copyTextToClipboard(text)];case 1:return _a.apply(void 0,[_b.sent()]),[2]}}))}))}},"Copy Script",copySuccessful&&" ✔"))):null}},30690:function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(__webpack_require__(2784));exports.default=function ShoppingCartIcon(){return react_1.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},react_1.default.createElement("circle",{cx:"9",cy:"21",r:"1"}),react_1.default.createElement("circle",{cx:"20",cy:"21",r:"1"}),react_1.default.createElement("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}))}},57886:function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(__webpack_require__(2784)),components_1=__webpack_require__(24926),ShoppingCartIcon_1=__importDefault(__webpack_require__(30690)),ShoppingCartTooltip_1=__importDefault(__webpack_require__(43723)),api_1=__webpack_require__(98918);exports.default=function ShoppingCartToolbar(){var _a=(0,api_1.useAddonState)("storybook-addon-package-shopping-cart",[]),packages=_a[0],setPackages=_a[1],packageContext=(0,api_1.useParameter)("packageContext");return react_1.default.createElement(components_1.WithTooltip,{placement:"top",trigger:"click",closeOnClick:!0,tooltip:function(){return packages?react_1.default.createElement(ShoppingCartTooltip_1.default,{packages,setPackages,packageContext}):null}},react_1.default.createElement(components_1.IconButton,{title:"Storybook Package Shopping Cart"},react_1.default.createElement(ShoppingCartIcon_1.default,null)))}},43723:function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__spreadArray=this&&this.__spreadArray||function(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var templateObject_1,templateObject_2,templateObject_3,templateObject_4,react_1=__importDefault(__webpack_require__(2784)),components_1=__webpack_require__(24926),PackageInstallationInstructions_1=__importDefault(__webpack_require__(98670)),theming_1=__webpack_require__(77439),types_1=__webpack_require__(8813),Root=theming_1.styled.div(templateObject_1||(templateObject_1=__makeTemplateObject(["\n    padding: 24px;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    width: 600px;\n    max-width: 90vw;\n  }}\n"],["\n    padding: 24px;\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    width: 600px;\n    max-width: 90vw;\n  }}\n"]))),AddRemoveButton=(0,theming_1.styled)(components_1.Button)(templateObject_2||(templateObject_2=__makeTemplateObject(["\n  font-size: 16px;\n  @media (max-width: 768px) {\n    font-size: 12px;\n  }\n  display: flex;\n  alignitems: center;\n  justifycontent: center;\n"],["\n  font-size: 16px;\n  @media (max-width: 768px) {\n    font-size: 12px;\n  }\n  display: flex;\n  alignitems: center;\n  justifycontent: center;\n"]))),ButtonText=theming_1.styled.span(templateObject_3||(templateObject_3=__makeTemplateObject(["\n  padding-top: 2px;\n  padding-bottom: 2px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex-grow: 1;\n  text-align: left;\n"],["\n  padding-top: 2px;\n  padding-bottom: 2px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex-grow: 1;\n  text-align: left;\n"]))),ShoppingCartTitle=(0,theming_1.styled)(components_1.Span)(templateObject_4||(templateObject_4=__makeTemplateObject(["\n  align-self: center;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 20px;\n"],["\n  align-self: center;\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 20px;\n"])));exports.default=function ShoppingCartTooltip(_a){var packages=_a.packages,setPackages=_a.setPackages,packageContext=_a.packageContext,packageInfo=function(packageContext,packages){if(!packageContext||!packageContext.pkgJson||!packageContext.pkgJson.name||packageContext.pkgJson.private)return{text:"No related package found",type:types_1.PackageInfoType.NO_PACKAGE};var packageName=packageContext.pkgJson.name;return packages.includes(packageName)?{text:"Remove ".concat(packageName),type:types_1.PackageInfoType.ALREADY_ADDED}:{text:"Add ".concat(packageName),type:types_1.PackageInfoType.NOT_ADDED}}(packageContext,packages);return react_1.default.createElement(Root,null,react_1.default.createElement(AddRemoveButton,{primary:packageInfo.type===types_1.PackageInfoType.NOT_ADDED,secondary:packageInfo.type===types_1.PackageInfoType.ALREADY_ADDED,tertiary:packageInfo.type===types_1.PackageInfoType.NO_PACKAGE,disabled:packageInfo.type===types_1.PackageInfoType.NO_PACKAGE,onClick:function(){packageInfo.type===types_1.PackageInfoType.NOT_ADDED?setPackages((function(before){return __spreadArray(__spreadArray([],before||[],!0),[packageContext.pkgJson.name],!1)})):setPackages((function(before){return before.filter((function(pkg){return pkg!==packageContext.pkgJson.name}))}))}},react_1.default.createElement(components_1.Icons,{style:{width:"1.25em",height:"1.25em",marginBottom:0},icon:packageInfo.type===types_1.PackageInfoType.ALREADY_ADDED?"subtract":"add"}),react_1.default.createElement(ButtonText,null,packageInfo.text)),react_1.default.createElement(PackageInstallationInstructions_1.default,{packages}),react_1.default.createElement(ShoppingCartTitle,{style:{}},"Package Shopping Cart"),0===packages.length&&react_1.default.createElement(components_1.Span,{style:{alignSelf:"center"}},"No Packages in Cart"),packages.map((function(pkg){return react_1.default.createElement(AddRemoveButton,{key:pkg,secondary:!0,onClick:function(){setTimeout((function(){return setPackages((function(before){return before.filter((function(subPkg){return subPkg!==pkg}))}))}),0)}},react_1.default.createElement(components_1.Icons,{style:{width:"1.25em",height:"1.25em",flexGrow:0,marginBottom:0},icon:"subtract"}),react_1.default.createElement(ButtonText,null,"Remove ",pkg))})))}},3415:function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var addons_1=__webpack_require__(93e3),ShoppingCartToolbar_1=__importDefault(__webpack_require__(57886));addons_1.addons.register("storybook-addon-package-shopping-cart",(function(){addons_1.addons.add("storybook-addon-package-shopping-cart/toolbar",{title:"Storybook Package Shopping Cart for Monorepos",type:addons_1.types.TOOL,match:function(_a){var viewMode=_a.viewMode;return!(!viewMode||!viewMode.match(/^(story|docs)$/))},render:ShoppingCartToolbar_1.default})}))},8813:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PackageInfoType=void 0,function(PackageInfoType){PackageInfoType[PackageInfoType.NO_PACKAGE=0]="NO_PACKAGE",PackageInfoType[PackageInfoType.ALREADY_ADDED=1]="ALREADY_ADDED",PackageInfoType[PackageInfoType.NOT_ADDED=2]="NOT_ADDED"}(exports.PackageInfoType||(exports.PackageInfoType={}))},53260:()=>{}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[603],(()=>(__webpack_exec__(47513),__webpack_exec__(79002),__webpack_exec__(52195),__webpack_exec__(92812),__webpack_exec__(49157),__webpack_exec__(91867),__webpack_exec__(80763),__webpack_exec__(35852),__webpack_exec__(12101),__webpack_exec__(47121),__webpack_exec__(63464),__webpack_exec__(33027),__webpack_exec__(52511),__webpack_exec__(3415))));__webpack_require__.O()}]);