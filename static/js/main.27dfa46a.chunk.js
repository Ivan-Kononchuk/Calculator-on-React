(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],[,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Warrior_Calculator_on_React_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),C_Users_Warrior_Calculator_on_React_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),C_Users_Warrior_Calculator_on_React_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),C_Users_Warrior_Calculator_on_React_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_App_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__),_components_ResultComponent__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(6),_components_KeyPadComponent__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(7),App=function(_Component){Object(C_Users_Warrior_Calculator_on_React_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(App,_Component);var _super=Object(C_Users_Warrior_Calculator_on_React_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(App);function App(e){var t;return Object(C_Users_Warrior_Calculator_on_React_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),(t=_super.call(this,e)).reset=function(){t.setState({result:"0"})},t.handleKey=function(e){var _=e.key||e,n=t.state.result,a=n.split(/[*/+\-%]/);/Enter|=/.test(_)?t.calculate():/^c$|^\u0441$/i.test(_)?t.reset():/Backspace/.test(_)?t.clearLastChar():n.length<=47&&/[*/+\-%().]|^\d$/.test(_)&&(/error|infinity|-infinity|NaN|undefined/i.test(n)||/\d/.test(_)&&"0"===n?t.setState({result:_}):"."===_&&n.match(/\d$/)&&!/[d.]/.test(a[a.length-1])?t.setState({result:n+_}):("+"!==_||"0"===n||/[*./+\-(%]$/.test(n))&&("-"!==_||"0"===n||/[*./+\-(%]$/.test(n))&&("*"!==_||"0"===n||/[*./+\-(%]$/.test(n))&&("/"!==_||"0"===n||/[*./+\-(%]$/.test(n))&&("%"!==_||"0"===n||/[*./+\-(%]$/.test(n))?")"===_&&/\(/.test(n)&&!/\)/.test(n)&&!/\(/.test(a[a.length-1])&&n.match(/\d$/)||")"===_&&n.match(/\d$/)&&/\(/.test(n)&&!/\(/.test(a[a.length-1])&&n.match(/\(/g).length!==n.match(/\)/g).length?t.setState({result:n+_}):"("===_&&"0"===n?t.setState({result:_}):("("===_&&"0"!==n&&!/[(.]$/.test(n)&&/[*/+\-%]$/.test(n)||"0"===_&&"0"!==n&&!/[(.]$/.test(n)&&/[*/+\-%]$/.test(n)||/\d/.test(_)&&!/\)$/.test(n))&&t.setState({result:n+_}):t.setState({result:n+_}))},t.state={result:"0"},t}return Object(C_Users_Warrior_Calculator_on_React_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"calculate",value:function calculate(){try{var x=eval(this.state.result);x.toString().length>17&&!/\./.test(x)?x=x.toPrecision(17):x.toString().length>17&&/\./.test(x)&&(x=eval(x.toFixed(16))),this.setState({result:x.toString()})}catch(e){this.setState({result:"error"})}}},{key:"clearLastChar",value:function(){/error|infinity|-infinity|NaN|undefined/i.test(this.state.result)?this.reset():this.setState({result:this.state.result.substring(0,this.state.result.length-1)||"0"})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKey)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKey)}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"calculator-body"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_ResultComponent__WEBPACK_IMPORTED_MODULE_6__.a,{result:this.state.result}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_KeyPadComponent__WEBPACK_IMPORTED_MODULE_7__.a,{onClick:this.handleKey}))}}]),App}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=App},,,function(e,t,_){"use strict";var n=_(0),a=_.n(n);t.a=function(e){var t=e.result;return a.a.createElement("div",{className:"result"},a.a.createElement("p",null,t))}},function(e,t,_){"use strict";var n=_(0),a=_.n(n);t.a=function(e){return a.a.createElement("div",{className:"button"},a.a.createElement("button",{name:"(",onClick:function(t){return e.onClick(t.target.name)}},"("),a.a.createElement("button",{name:")",onClick:function(t){return e.onClick(t.target.name)}},")"),a.a.createElement("button",{className:"width2",name:"Backspace",style:{fontSize:"38px",padding:"15.7px 0"},onClick:function(t){return e.onClick(t.target.name)}},"\u21a4"),a.a.createElement("button",{name:"%",onClick:function(t){return e.onClick(t.target.name)}},"%"),a.a.createElement("button",{name:"*",style:{fontSize:"45px",padding:"8.8px 0"},onClick:function(t){return e.onClick(t.target.name)}},"*"),a.a.createElement("button",{name:"/",style:{fontSize:"36px",padding:"16.6px 0"},onClick:function(t){return e.onClick(t.target.name)}},"/"),a.a.createElement("button",{name:"C",onClick:function(t){return e.onClick(t.target.name)}},"C"),a.a.createElement("button",{name:"7",onClick:function(t){return e.onClick(t.target.name)}},"7"),a.a.createElement("button",{name:"8",onClick:function(t){return e.onClick(t.target.name)}},"8"),a.a.createElement("button",{name:"9",onClick:function(t){return e.onClick(t.target.name)}},"9"),a.a.createElement("button",{name:"-",style:{fontSize:"55px",padding:"7.27px 0"},onClick:function(t){return e.onClick(t.target.name)}},"-"),a.a.createElement("button",{name:"4",onClick:function(t){return e.onClick(t.target.name)}},"4"),a.a.createElement("button",{name:"5",onClick:function(t){return e.onClick(t.target.name)}},"5"),a.a.createElement("button",{name:"6",onClick:function(t){return e.onClick(t.target.name)}},"6"),a.a.createElement("button",{name:"+",style:{fontSize:"53px",padding:"7.54px 0",fontWeight:"normal"},onClick:function(t){return e.onClick(t.target.name)}},"+"),a.a.createElement("button",{name:"1",onClick:function(t){return e.onClick(t.target.name)}},"1"),a.a.createElement("button",{name:"2",onClick:function(t){return e.onClick(t.target.name)}},"2"),a.a.createElement("button",{name:"3",onClick:function(t){return e.onClick(t.target.name)}},"3"),a.a.createElement("button",{name:"=",className:"height2",style:{fontSize:"40px",padding:"10px 0"},onClick:function(t){return e.onClick(t.target.name)}},"="),a.a.createElement("button",{name:"0",className:"width2",onClick:function(t){return e.onClick(t.target.name)}},"0"),a.a.createElement("button",{name:".",style:{fontSize:"45px",padding:"8.8px 0"},onClick:function(t){return e.onClick(t.target.name)}},"."))}},,,function(e,t,_){e.exports=_(11)},function(e,t,_){"use strict";_.r(t);var n=_(0),a=_.n(n),r=_(2),o=_.n(r),l=_(3);o.a.render(a.a.createElement(l.a,null),document.getElementById("root"))},,,,,function(e,t,_){}],[[10,1,2]]]);
//# sourceMappingURL=main.27dfa46a.chunk.js.map