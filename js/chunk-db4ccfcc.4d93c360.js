(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-db4ccfcc"],{"10d8":function(t,e,n){},"12ec":function(module,__webpack_exports__,__webpack_require__){"use strict";var _components_Header__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("981c"),_config__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("f121"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("ed08"),_utils_metaMask_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("ddd2"),_utils_storage_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("5d2d"),_abi_tokenAdr_json__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("1617"),_abi_tokenAdr_json__WEBPACK_IMPORTED_MODULE_5___namespace=__webpack_require__.t("1617",1),ethers__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("6779"),ethers__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("f179");__webpack_exports__["a"]={name:"home",components:{Header:_components_Header__WEBPACK_IMPORTED_MODULE_0__["a"]},data(){return{contractShow:!1,handShow:!1,handFlexShow:!1,tokenShow:!1,UserAmount:"0",UserAmount1:"0",UserAmount2:"0",UserAmount3:"0",UserAmount4:"0",UserAmount5:"0",url:""}},async mounted(){console.log(this.contractShow),window.addEventListener("scroll",this.handleScroll);const{invite:t}=this.$route.query;_utils_storage_js__WEBPACK_IMPORTED_MODULE_4__["a"].setItem("olyoly_invite",t),await this.init()},watch:{"$store.state.privateAddress":{async handler(){await this.init()},deep:!0}},methods:{handleScroll(){let t=this,e=[{ref:"contract",show:"contractShow"},{ref:"hand",show:"handShow"},{ref:"hand_flex",show:"handFlexShow"},{ref:"token",show:"tokenShow"},{ref:"time",show:"timeShow"},{ref:"dixian",show:"dixianShow"}];e.forEach((e,n)=>{t.gdjz(e.ref,200,()=>{console.log(e.show,t[e.show]),t[e.show]=!0})})},gdjz(div,offset,callback){let dom=this.$refs[div];var a,b,c,d;dom&&(d=dom.offsetTop,a=eval(d+offset),b=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,c=document.documentElement.clientHeight||document.body.clientHeight,b>d&&callback&&callback())},tapMenu(t){document.querySelector("."+t).scrollIntoView()},tapFaq(t){this.currentIndex.indexOf(t)>-1?this.currentIndex=this.currentIndex.filter(e=>e!=t):this.currentIndex.push(t)},async init(){var t=this.$store.state.privateAddress,e="https://bsc-dataseed.binance.org",n=new ethers__WEBPACK_IMPORTED_MODULE_6__["providers"].JsonRpcProvider(e),a=__webpack_require__("7dcd"),i={};i["ido"]=new ethers__WEBPACK_IMPORTED_MODULE_7__["b"](_abi_tokenAdr_json__WEBPACK_IMPORTED_MODULE_5__[2].LuckIdoAdr,a,n);var s=await i["ido"].idoUserAmount();if(this.UserAmount=s.toString(),t){var u=__webpack_require__("11ec");i["muticall"]=new ethers__WEBPACK_IMPORTED_MODULE_7__["b"](_abi_tokenAdr_json__WEBPACK_IMPORTED_MODULE_5__[4].muticallAdr,u,n);var o=await i["muticall"].idoInvterInfo(t);this.UserAmount1=o[0].toString(),this.UserAmount2=o[1].toString(),this.UserAmount3=o[2].toString(),this.UserAmount4=o[3].toString(),this.UserAmount5=o[4].toString();var r=await i["ido"].tokenBalanceBool(t);r&&(this.url=this.$store.state.yourLink)}},copy(){let t=document.createElement("input");t.value=this.url,document.body.appendChild(t),t.select(),document.execCommand("Copy"),t.remove(),this.$toast.center("Copy Success!")}}}},4050:function(t,e,n){t.exports=n.p+"img/cat2.ba57054d.png"},"7dcd":function(t){t.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allWeight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyBool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimBool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dev_address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getAmountBNB","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getAmountERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBNB","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getInvterUsdtAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getInvterUserAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"idoUserAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"idohandel","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"invter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"invterAmountrewardAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"invterDirectPushAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"invterRewardIsCreate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"invterRewardUsdtAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"invterUsdtAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"invterUserList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxIdoAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minIdoAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oneWeight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"permanentNftAdr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"bools","type":"bool"}],"name":"setBuy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"bools","type":"bool"}],"name":"setClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"min","type":"uint256"},{"internalType":"uint256","name":"max","type":"uint256"}],"name":"setMinMaxIdoAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"setPermanentNftAdr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_decimals","type":"uint256"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"adrs","type":"address[]"},{"internalType":"bool","name":"bools","type":"bool"}],"name":"setTokenBalanceBool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"},{"internalType":"uint256","name":"_decimals","type":"uint256"}],"name":"setUsdtInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allWeight","type":"uint256"},{"internalType":"uint256","name":"_oneWeight","type":"uint256"}],"name":"setWeight","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokenBalanceBool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenDecimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtDecimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userIdoAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]')},"92f3":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("Header",{on:{tapMenu:t.tapMenu}}),e("div",{staticClass:"main_box"},[e("div",{ref:"partner",staticClass:"partner_box"},[e("div",{staticClass:"dash_title"},[t._v(t._s(t.$t("part.v1")))]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"partner_left_box"},[e("div",{staticClass:"left_item_box"},[e("img",{attrs:{src:n("4050"),alt:""}}),e("div",{staticClass:"left_link_box"},[e("div",[t._v(t._s(t.$t("part.v2_1")))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"par_input",attrs:{type:"text"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}}),e("div",{staticClass:"copy_btn btn_common",on:{click:function(e){return t.copy()}}},[t._v(t._s(t.$t("part.v2_2")))])])]),e("div",{staticClass:"enjoy_box"},[t._v(t._s(t.$t("part.v3")))]),e("div",{staticClass:"per_info_box"},[t._v(t._s(t.$t("part.v4")))]),e("img",{staticClass:"sheep_img",attrs:{src:n("dbf3"),alt:""}})])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"partner_right_box"},[e("div",{staticClass:"partner_item_box"},[e("div",{staticClass:"par_price_box"},[t._v(t._s(t.UserAmount))]),e("div",[t._v(t._s(t.$t("part.v5")))])]),e("div",{staticClass:"partner_item_box"},[e("div",{staticClass:"par_price_box"},[t._v(t._s(t.UserAmount1))]),e("div",[t._v(t._s(t.$t("part.v6")))])])]),e("div",{staticClass:"partner_right_box"},[e("div",{staticClass:"partner_item_box"},[e("div",{staticClass:"par_price_box"},[t._v(t._s(t.UserAmount2))]),e("div",[t._v(t._s(t.$t("part.v7")))])]),e("div",{staticClass:"partner_item_box"},[e("div",{staticClass:"par_price_box"},[t._v(t._s(t.UserAmount3))]),e("div",[t._v(t._s(t.$t("part.v8")))])])]),e("div",{staticClass:"partner_right_box"},[e("div",{staticClass:"partner_item_box"},[e("div",{staticClass:"par_price_box"},[t._v(t._s(t.UserAmount4))]),e("div",[t._v(t._s(t.$t("part.v9")))])]),e("div",{staticClass:"partner_item_box"},[e("div",{staticClass:"par_price_box"},[t._v(t._s(t.UserAmount5))]),e("div",[t._v(t._s(t.$t("part.v10")))])])])])])])])],1)},i=[],s=n("12ec"),u=s["a"],o=(n("f5db"),n("2877")),r=Object(o["a"])(u,a,i,!1,null,"6fc9d06a",null);e["default"]=r.exports},dbf3:function(t,e,n){t.exports=n.p+"img/sheep.08bdeb37.png"},f5db:function(t,e,n){"use strict";n("10d8")}}]);