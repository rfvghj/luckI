(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0244641f"],{"11ec":function(t){t.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"Token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"charitable","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dev_address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllInfo","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getAmountBNB","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getAmountERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getBNB","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getLotteryInfo1","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getLotteryInfo2","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getUserInfoIdo","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getUserLuckNumbers","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"idoInvterInfo","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lottery","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"luckIdo","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"permanentNft","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapRouter","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]')},1617:function(t){t.exports=JSON.parse('[{"TokenAdr":"0xD13A0015021e14B82aA4E560abdAA9701D4bc7D8"},{"UsdtAdr":"0x55d398326f99059fF775485246999027B3197955"},{"LuckIdoAdr":"0xeAe8B6d49ee1fE6d13F9846B05235269852bE0eF"},{"LuckNFTAdr":"0xADDC67cE8FF576b47eF6420f59F7D7E7DE1e9157"},{"muticallAdr":"0xf0421b3A2E30Ef3B8f65398049D017D2f23082b6"},{"idoVault":"0x3b223264D3EB2b41119a98F3b9Cb5D0B9E6B13F3"}]')},8586:function(t,e,a){},"970a":function(t,e,a){"use strict";a("8586")},"981c":function(t,e,a){"use strict";var n=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{width:"100%",position:"fixed","z-index":"9"}},[e("div",{staticClass:"visible-xs-inline-block visible-sm-inline-block",staticStyle:{width:"100%"}},[e("div",{staticClass:"header"},[e("div",{staticClass:"left-wrap"},[e("div",{staticClass:"nav-icon image",on:{click:function(e){return t.hasShowNav(!0)}}}),e("img",{staticClass:"logo_img",attrs:{src:a("e56b"),alt:""}}),e("div",{staticClass:"logo-icon image"})]),e("div",{staticClass:"head_right_box",staticStyle:{width:"25%",height:"40px",background:"rgb(255, 76, 75) none repeat scroll 0% 0%","text-align":"center","line-height":"40px","border-radius":"15px"},on:{click:function(e){return t.linkWalletAction()}}},[t._v(" "+t._s(t.priviteAddress?t.priviteAddress:t.$t("header.connect"))+" ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showNav,expression:"showNav"}],staticClass:"nav-wrap",on:{click:function(e){return t.hasShowNav(!1)}}},[e("div",{staticClass:"nav-list"},t._l(t.menuList1,(function(a,n){return e("div",{key:n,staticClass:"nav-item",on:{click:function(e){return t.goPage(a.path)}}},[e("div",{staticClass:"item_left"},[e("span",[t._v(t._s(t.$t(a.name)))])])])})),0)])])]),e("div",{staticClass:"visible-md-block visible-lg-block",staticStyle:{width:"100%"}},[e("div",{staticClass:"head_box"},[e("div",{staticClass:"head_left_box"},[e("img",{staticClass:"logo_img",attrs:{src:a("e56b"),alt:""}}),e("img",{staticClass:"lucky_logo_img",attrs:{src:a("ef47"),alt:""}}),e("div",{on:{click:function(e){return t.goPage("language")}}},[e("div",{staticStyle:{"margin-left":"50px"}},[e("span",{staticStyle:{"line-hight":"20px"}},[t._v(t._s(t.$t("header.menu7")))])])])]),e("div",{staticClass:"head_center_box"},t._l(t.menuList2,(function(a){return e("div",{on:{click:function(e){return t.goPage(a.path)}}},[t._v(t._s(t.$t(a.name)))])})),0),e("div",[e("div",{staticStyle:{"margin-left":"80px"}},[e("a",{attrs:{href:"https://twitter.com/LuckyAngelToken"}},[e("svg",{staticClass:"icon",attrs:{t:"1660024297868",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1647",width:"20",height:"20"}},[e("path",{attrs:{d:"M967.97698918 285.54371282a19.51843191 19.51843191 0 0 0-23.15815385-15.03267009l-56.71851397 12.08261653a1140.39525014 1140.39525014 0 0 0 12.82829859-18.4658416 580.79646268 580.79646268 0 0 0 14.74443304-22.89442279 287.00940399 287.00940399 0 0 0 7.02271453-12.18880912l3.37599089-6.60261197c1.12027351-2.28022336 2.17986553-4.92920342 3.2382906-7.40430769a17.92087521 17.92087521 0 0 0-23.34603306-23.61443191l-3.13093105 1.30348491c-4.45425413 1.56604901-8.83265641 3.19394644-13.26123761 4.6911453-4.51610256 1.3466621-8.94468376 2.80068376-13.47362279 4.05282279-4.57795099 1.15294815-9.06954758 2.43076011-13.66150199 3.47051396-4.62812992 0.9709037-9.17574017 2.07250598-13.81087179 2.9372171-4.67364103 0.80753048-9.26559544 1.73525697-13.94973904 2.44943133-4.69814701 0.66399544-9.3461151 1.41551226-14.04426211 2.01065755-3.11225983 0.39442963-6.23852308 0.71417436-9.35778462 1.0455886a169.70043077 169.70043077 0 0 0-41.38477037-30.21704387c-20.42165242-10.60408889-42.7454359-16.83094245-65.04471338-18.99797151-22.31794872-2.18570029-44.65456867-0.43177208-66.03895612 4.57911795a213.79719658 213.79719658 0 0 0-60.77833846 24.6168433c-18.87310769 11.2809208-36.12415271 25.60058348-50.61185641 42.70109174-14.47603418 17.06199886-26.08953618 36.98769687-33.5055134 58.49111339-7.47315784 21.47891054-10.62976183 44.36749857-9.82806609 66.64810485 0.19488091 6.27003077 0.73984729 12.47121139 1.5345413 18.60937664-3.03757492-0.34425072-6.08215157-0.66983021-9.11972649-1.08409802a444.38799316 444.38799316 0 0 1-25.85731282-4.03998631 460.24803191 460.24803191 0 0 1-25.65659715-5.33646952 520.86999886 520.86999886 0 0 1-50.47415612-14.5577208 541.65340627 541.65340627 0 0 1-49.00263021-19.57444558C261.22677607 305.91401936 202.27938462 263.95860968 149.89492877 214.54988034a18.86727293 18.86727293 0 0 0-31.5392 6.01913618l-0.47611624 1.24630428c-2.11685014 5.53718518-4.13334245 11.13155099-5.73089915 16.85661538-1.5975567 5.71806268-3.00723418 11.50614245-3.99097435 17.36307236-1.09576752 5.83825869-1.81577664 11.74420056-2.26038518 17.65130941-0.51345869 5.91294359-0.64532422 11.83872364-0.59514531 17.75166723 0.09335612 5.90710883 0.42010256 11.81421766 0.97673847 17.69565357a235.22242735 235.22242735 0 0 0 2.48093903 17.50077264 231.05407636 231.05407636 0 0 0 9.05087635 34.07498576 221.44072934 221.44072934 0 0 0 6.42756923 16.45635099 205.80591226 205.80591226 0 0 0 7.65987009 15.99773904 205.06723191 205.06723191 0 0 0 8.92017778 15.47727863 191.87367749 191.87367749 0 0 0 10.25400341 14.890302 189.47675897 189.47675897 0 0 0 5.64337779 7.17675213c-4.70981652 0.6336547-9.44063817 1.15294815-14.18779715 1.49719886-4.25937322 0.30807521-8.53041595 0.47028149-12.59024046 0.39559658-2.09234415 0-4.07732877-0.08752136-5.95728775-0.25089458-2.07250598-0.08168662-3.53236239-0.39442963-5.35514075-0.57647408a11.90757379 11.90757379 0 0 0-17.12501424 10.44188262l-0.01867122 0.93939601c-0.13186553 5.92578005-0.11319431 11.90173903 0.42010256 17.91504046a135.44806838 135.44806838 0 0 0 2.7925151 18.00256182 132.70573219 132.70573219 0 0 0 13.12353732 34.52542907c5.95028604 10.88765812 13.36042849 20.93511111 21.63528205 29.97315099a200.7063339 200.7063339 0 0 0 26.99625755 24.40329116c17.60929915 13.31725128 36.61894017 23.87816296 56.01134132 32.89869859-1.04558861 0.30690826-2.08534245 0.63832251-3.13793276 0.92655953-2.38641595 0.62665299-4.76699715 1.35949857-7.1779191 1.84728434-2.40508718 0.50762393-4.82301082 1.17862108-7.24676923 1.57888547-4.85451851 0.93356125-9.74754644 1.69207977-14.65807863 2.26155213-4.91053219 0.53796467-9.81522963 0.83320342-14.7456 0.98957494a18.54052649 18.54052649 0 0 0-18.68406154 27.2669903l0.81336525 1.48436239c9.90975271 18.10875441 23.12664615 33.68055612 37.58400911 47.16001369 14.50637492 13.50513048 30.34774245 25.03111111 46.80876125 35.18358974a415.86886382 415.86886382 0 0 0 47.76332764 25.04978234c-1.2288 0.80753048-2.41909059 1.65940513-3.6525584 2.44943133a364.0235396 364.0235396 0 0 1-53.70661197 28.49345641c-18.59770713 7.89909516-37.80923077 14.08160456-57.22030313 17.79017665-4.83584729 0.90205356-9.69736752 1.65940513-14.57522508 2.28605811a241.32558405 241.32558405 0 0 1-14.57055726 1.25914074 219.27019944 219.27019944 0 0 1-14.4877037 0.13069858 197.96166382 197.96166382 0 0 1-14.31849573-1.07009459h-0.01400342l-0.19954872-0.03850941a23.13831567 23.13831567 0 0 0-13.84354644 43.47828149c18.8416 9.72070655 38.26550883 19.04815043 58.48527863 27.18997151a449.10481139 449.10481139 0 0 0 62.61395329 20.20226553 463.77572649 463.77572649 0 0 0 64.94318859 10.74762393c10.86781995 0.88338234 21.74147465 1.69791453 32.57195215 1.99198632 5.39365014 0.29523875 10.91099715 0.30807521 16.41200683 0.34541766 5.45549857 0.02450598 11.15605697 0.14353505 16.21012422-0.03734244l15.58463818-0.35125243 16.54854016-0.91489003c10.82464274-0.41310085 21.61077607-1.74692649 32.41558064-2.76217436 21.55359544-2.63030883 43.09552136-5.99463021 64.33053902-11.09304159 21.30853561-4.71098348 42.26698575-11.18756467 62.90685812-18.55452991 20.63987236-7.42764672 40.69043418-16.52986894 60.32789516-26.47696411 19.3982359-10.40920798 38.40904388-21.66562279 56.380098-34.52542905 17.85202508-12.97883533 35.30962051-26.64617208 51.21400342-42.0370963 16.0105755-15.24038747 31.23695954-31.37582678 44.92413448-48.75173561 7.14057664-8.47440228 13.36159544-17.62096867 19.95020398-26.48980058 6.03780741-9.24459031 12.43386894-18.28379715 17.91504046-27.86680341 11.56915784-18.82993048 21.42756467-38.60509174 30.43526382-58.69299601 8.95752023-20.14391795 16.38049915-40.85264046 22.96327293-61.80525584 6.20118063-21.04013675 11.75703704-42.28682393 15.6348171-63.81591339 2.192702-10.63092877 3.78325697-21.73563989 5.38664843-32.81701197 0.91489003-5.6935567 1.40384274-10.7604604 1.96047864-15.92188718l0.36992364-3.33281367c1.4913641-1.35366382 3.05741311-2.65598176 4.47292536-4.04582109l7.6668718-7.44165013c2.59296638-2.43659487 4.94203989-5.11124787 7.42881367-7.65520229 2.41792364-2.59296638 4.94203989-5.07974017 7.24093447-7.76722963l7.00871111-7.96094359c2.36190997-2.61863931 4.50443305-5.43099259 6.75898347-8.13015157 2.2358792-2.72483191 4.48459487-5.42515784 6.57693904-8.25034757a404.60077949 404.60077949 0 0 0 24.07771167-34.47525014 383.96790883 383.96790883 0 0 0 10.69277721-18.12742564c1.68507806-3.12626325 3.37599088-6.18250941 4.97938234-9.39629402a251.46872707 251.46872707 0 0 0 4.90469744-10.13497436l1.14011168-2.46810257a19.5429379 19.5429379 0 0 0 1.35366381-12.23315327z m-86.35441596 51.93401253c-2.17286382 2.18570029-4.47175841 4.240702-6.74498006 6.31320798-2.28722508 2.04916695-4.47876011 4.20335954-6.85934131 6.15800342l-7.00287635 5.95145299c-2.29889458 2.01649231-4.79150313 3.80776296-7.16508263 5.72389744-2.43076011 1.84845128-4.74249117 3.84627236-7.24210141 5.57569458l-7.39847295 5.32946781c-4.89769572 3.55920228-10.07079202 6.70296979-15.05717606 10.07312593a29.32782678 29.32782678 0 0 0-12.68476353 21.44040114l-0.09335613 1.04675554-1.41551225 15.52745756c-0.46327977 5.18126495-0.90205356 10.46755556-1.59172193 15.05250826-1.23930256 9.50832136-2.38641595 19.00380627-4.23370029 28.78169345-3.14493447 19.46825299-7.80457208 38.57358405-13.00450827 57.49570371-5.54301995 18.80425755-11.82588718 37.38912821-19.44841481 55.38585526-7.68554303 17.9453812-16.07359088 35.62819829-26.00784957 52.39612535-4.64796809 8.58176183-10.19098803 16.59405128-15.33957835 24.87473961-5.68188718 7.88625869-10.98684901 16.07942564-17.14485242 23.61443191-11.74420056 15.52745755-24.90508034 29.90896867-38.74279203 43.57747236-13.72335043 13.81203875-28.90655726 26.069698-44.43518176 37.827902-15.65232136 11.63100627-32.30822108 21.87334017-49.34571396 31.44934473-17.30122393 9.11389174-35.00271226 17.57779146-53.38103248 24.5421584-18.37832023 6.91535498-37.10672593 13.11653561-56.32408433 17.70265527-19.11700056 4.96654587-38.66694017 8.35537322-58.31607065 11.11171282-9.87241026 1.08293106-19.70631111 2.51127977-29.66040798 3.0504114l-14.56355556 1.08993277-15.57763646 0.63248774c-5.33063476 0.28240228-10.02178005 0.21355213-14.96381995 0.28823705-4.89186097 0.05017892-9.77205242 0.13770029-14.76427123-0.04434417-9.95993162-0.10035784-19.82534017-0.66399544-29.69074872-1.28364673a414.61672479 414.61672479 0 0 1-58.16553389-8.55608888 347.42482051 347.42482051 0 0 1-14.21347008-3.43317151 366.20923989 366.20923989 0 0 0 31.00590312-9.19557836 421.21233505 421.21233505 0 0 0 64.30486611-28.70000683c20.58385869-11.33109971 40.33918176-24.23525014 59.13060285-39.27492193a31.40733447 31.40733447 0 0 0-11.11171282-54.73352935l-2.4120889-0.66399544-0.00583475-0.01166952c-32.78433732-5.469502-65.53249915-14.98365812-95.74837608-28.79569686-15.07701425-6.92819146-29.52854245-15.01399886-42.60773561-24.50364901-0.52512821-0.38276011-1.00824615-0.80169572-1.53454131-1.18445583 1.61039316-0.10619259 3.22078633-0.21938689 4.83001254-0.31274302a226.63833162 226.63833162 0 0 0 18.31530485-2.0048228 228.4797812 228.4797812 0 0 0 36.54892307-8.48140399 174.87352707 174.87352707 0 0 0 18.2849641-6.93402621c3.05041139-1.24630428 6.10665755-2.88703817 9.16407065-4.3970735 3.05741311-1.53454131 6.12649572-3.44484103 9.18857665-5.19293447a30.14235897 30.14235897 0 0 0-5.18593277-54.67051396l-6.63411965-2.28722507c-20.57685697-2.97455954-40.80246154-6.82666667-60.36407066-12.19464388-19.53126838-5.38081367-38.44171851-12.27049572-55.6285812-21.53492422-17.15768889-9.25859373-32.55444787-20.99695954-43.99174016-35.88609459a100.91096979 100.91096979 0 0 1-13.93690257-24.49781423 100.78493903 100.78493903 0 0 1-2.58129687-7.38446952c2.70732764 0.93939601 5.36797721 1.96631338 8.11848205 2.76800911a269.45728547 269.45728547 0 0 0 29.45852536 6.90251852 232.34239088 232.34239088 0 0 0 30.7993527 3.49618689c2.63030883 0.18671226 5.43799431 0.1178621 8.1873322 0.14936981 2.71899715 0.07585185 5.68072023-0.16337322 8.58059487-0.31274302 2.82518974-0.0746849 6.10198974-0.62665299 9.21424957-1.02691738 3.09475556-0.38859487 6.87801253-1.45402165 10.31585186-2.29305983 9.565502-2.40508718 17.95938462-9.47681367 21.42989857-19.49275897v-0.00700172a30.2357151 30.2357151 0 0 0-18.68522849-38.45922279l-3.74007977-1.29648319c-2.91737892-1.00941311-6.06348034-2.03633048-9.31344046-3.84627236-3.25812877-1.61039316-6.55826781-3.75174928-9.86540854-6.01330143-6.58394074-4.71681824-13.02317949-10.51073277-19.01780969-16.9814792-12.00793162-12.97883533-22.27360456-28.55063704-30.06067236-45.22520798a181.02569572 181.02569572 0 0 1-9.76505072-25.84447635 189.8326792 189.8326792 0 0 1-3.30714074-13.39193618 175.15592934 175.15592934 0 0 1-2.14252308-13.57398063 142.93989744 142.93989744 0 0 1-0.92655953-13.66733676 116.6951567 116.6951567 0 0 1-0.01867124-6.28286723c45.49477379 43.71517265 96.60025072 82.41945527 153.42612422 112.35409687a594.00051966 594.00051966 0 0 0 52.47314416 24.49898119 576.21150997 576.21150997 0 0 0 54.86422792 19.26053561 520.92367864 520.92367864 0 0 0 28.15620741 7.55484445 509.26816638 509.26816638 0 0 0 28.53780057 6.13233049 567.15363191 567.15363191 0 0 0 28.8260376 4.70981652c9.64718861 1.35366382 19.33055271 2.37474644 29.02675328 3.31414245a31.69440456 31.69440456 0 0 0 32.35956695-41.78620171l-0.20655042-0.60681481c-5.11824957-15.06534473-8.43122508-30.36874758-8.8571624-45.38274644-0.52629516-15.00699715 1.55321253-29.70941995 6.34471567-43.50862223 9.43363646-27.62407749 30.10501652-51.52674644 56.50612878-67.23624843 26.30308832-15.80402508 58.09785072-23.39504502 87.8014359-20.45082621 14.83778918 1.44701995 29.08860171 5.50567749 41.82937891 12.11295727 12.76645014 6.59094245 23.97151909 15.76668262 33.27329003 27.01726267l7.3728 6.30737322a24.7615453 24.7615453 0 0 0 23.35770256 4.7296547 709.68159544 709.68159544 0 0 0 30.0478359-10.03578348c4.96771282-1.80294017 9.92142223-3.77625527 14.8517926-5.65621423 4.92920342-1.93480569 9.81406268-4.10183476 14.70125583-6.144 2.7563396-1.18445585 5.49284103-2.4552661 8.22467465-3.74007978a1120.60258462 1120.60258462 0 0 1-22.78239545 41.96824616h-0.00583475a11.62517151 11.62517151 0 0 0 9.27026324 18.9162849l2.32340058-0.05017892 44.3861698-0.95806723a362.47032707 362.47032707 0 0 1-23.82098234 25.22482506z",fill:"#ffffff","p-id":"1648"}})])]),e("a",{attrs:{href:"https://t.me/LuckyAngelToken"}},[e("svg",{staticClass:"icon",staticStyle:{"margin-left":"20px"},attrs:{t:"1660024588843",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3721",width:"20",height:"20"}},[e("path",{attrs:{d:"M896 117.76c-30.72 15.36-793.6 384-793.6 384s258.56 156.16 256 153.6l153.6 281.6s404.48-780.8 409.6-793.6c5.12-17.92-7.68-33.28-25.6-25.6z m-691.2 384l588.8-281.6-409.6 384-179.2-102.4z m307.2 332.8s-79.36-153.6-102.4-204.8L819.2 238.08 512 834.56z","p-id":"3722",fill:"#ffffff"}})])])])]),e("div",{staticClass:"head_right_box",staticStyle:{width:"13%",height:"50px",background:"#ff4c4b","text-align":"center","line-height":"50px","border-radius":"20px"},on:{click:function(e){return t.linkWalletAction()}}},[t._v(" "+t._s(t.priviteAddress?t.priviteAddress:t.$t("header.connect"))+" ")])])])])},i=[],s={name:"heade",data(){return{showNav:!1,priviteAddress:this.$store.state.showWallerAddress,menuList1:[{name:"header.menu1",path:"home"},{name:"header.menu2",path:"dash"},{name:"header.menu4",path:"Lootery"},{name:"header.menu6",path:"charity"},{name:"header.menu7",path:"language"},{name:"header.menu8",path:"twitter"},{name:"header.menu9",path:"telegram"}],menuList2:[{name:"header.menu1",path:"home"},{name:"header.menu2",path:"dash"},{name:"header.menu4",path:"Lootery"},{name:"header.menu6",path:"charity"}]}},mounted(){this.$store.dispatch("getUserInfoAction")},methods:{switchLang(){"zh"===this.$i18n.locale?this.$i18n.locale="en":this.$i18n.locale="zh"},hasShowNav(t){this.showNav=t},goPage(t){"language"==t?this.switchLang():"twitter"==t?window.location.href="https://twitter.com/LuckyAngelToken":"telegram"==t?window.location.href="https://t.me/LuckyAngelToken":this.$router.push({name:t})},async linkWalletAction(){console.log(2),await this.$store.dispatch("linkWalletAction"),this.priviteAddress=this.$store.state.showWallerAddress}}},r=s,l=(a("970a"),a("2877")),u=Object(l["a"])(r,n,i,!1,null,"1dedd20c",null);e["a"]=u.exports},e56b:function(t,e,a){t.exports=a.p+"img/logo.6d9e2a31.png"},ef47:function(t,e,a){t.exports=a.p+"img/lucky.96be6769.png"}}]);