const a10_0x5485f3=a10_0x43ee;(function(_0x4e3df1,_0x29f589){const _0x1012af=a10_0x43ee,_0x5951af=_0x4e3df1();while(!![]){try{const _0x36ddd9=-parseInt(_0x1012af(0xdb))/0x1*(parseInt(_0x1012af(0xa4))/0x2)+-parseInt(_0x1012af(0xd5))/0x3+parseInt(_0x1012af(0xe7))/0x4+parseInt(_0x1012af(0xd9))/0x5*(parseInt(_0x1012af(0xd4))/0x6)+-parseInt(_0x1012af(0xb3))/0x7*(parseInt(_0x1012af(0xc1))/0x8)+parseInt(_0x1012af(0xcc))/0x9*(-parseInt(_0x1012af(0xa1))/0xa)+-parseInt(_0x1012af(0xd0))/0xb*(-parseInt(_0x1012af(0xb6))/0xc);if(_0x36ddd9===_0x29f589)break;else _0x5951af['push'](_0x5951af['shift']());}catch(_0x18344f){_0x5951af['push'](_0x5951af['shift']());}}}(a10_0x2ccf,0x29de5));function a10_0x43ee(_0x2de1ef,_0x4932c5){const _0x2ccfdc=a10_0x2ccf();return a10_0x43ee=function(_0x43eead,_0x363308){_0x43eead=_0x43eead-0xa0;let _0x349f2c=_0x2ccfdc[_0x43eead];return _0x349f2c;},a10_0x43ee(_0x2de1ef,_0x4932c5);}var __awaiter=this&&this[a10_0x5485f3(0xd1)]||function(_0x3d413f,_0x1187aa,_0x312b01,_0x11453f){function _0x4629d4(_0x275fdc){return _0x275fdc instanceof _0x312b01?_0x275fdc:new _0x312b01(function(_0x337625){_0x337625(_0x275fdc);});}return new(_0x312b01||(_0x312b01=Promise))(function(_0x4d165a,_0x4deee0){const _0x1ab9d6=a10_0x43ee;function _0x173b94(_0xde1438){const _0x1bbda3=a10_0x43ee;try{_0x33fd7b(_0x11453f[_0x1bbda3(0xa9)](_0xde1438));}catch(_0x271af6){_0x4deee0(_0x271af6);}}function _0x48c72a(_0x48643a){const _0x3f127c=a10_0x43ee;try{_0x33fd7b(_0x11453f[_0x3f127c(0xa0)](_0x48643a));}catch(_0x38e80e){_0x4deee0(_0x38e80e);}}function _0x33fd7b(_0xad9a0b){const _0x4c7802=a10_0x43ee;_0xad9a0b[_0x4c7802(0xa3)]?_0x4d165a(_0xad9a0b[_0x4c7802(0xe1)]):_0x4629d4(_0xad9a0b[_0x4c7802(0xe1)])[_0x4c7802(0xbc)](_0x173b94,_0x48c72a);}_0x33fd7b((_0x11453f=_0x11453f[_0x1ab9d6(0xb2)](_0x3d413f,_0x1187aa||[]))[_0x1ab9d6(0xa9)]());});};export default class SimpleClient{constructor(){const _0x2d237a=a10_0x5485f3;this[_0x2d237a(0xb1)]=null,this[_0x2d237a(0xb5)]='waiting',this[_0x2d237a(0xd7)]=0x1,this['pendingRequests']={},this[_0x2d237a(0xb0)]={};}['connect'](){return __awaiter(this,arguments,void 0x0,function*({url:_0x3a373f,allowReject:_0x11d55b,handshakeData:_0x1d3bcd,reconnectTimeout:_0x2ac57d}={}){return new Promise((_0x1f5b7d,_0x3e1329)=>{const _0x4c9553=a10_0x43ee;if(this['socket']!=undefined&&this['socket'][_0x4c9553(0xa7)]===WebSocket[_0x4c9553(0xae)]){if(_0x11d55b!==!![])_0x3e1329(new Error(_0x4c9553(0xbb)));else _0x1f5b7d();}this[_0x4c9553(0xe4)]!=undefined&&(this[_0x4c9553(0xe4)]['onopen']=()=>{},this[_0x4c9553(0xe4)][_0x4c9553(0xc6)]=()=>{},this[_0x4c9553(0xe4)][_0x4c9553(0xab)]=()=>{},this[_0x4c9553(0xe4)][_0x4c9553(0xd2)]=()=>{},this[_0x4c9553(0xb5)]=_0x4c9553(0xdc));if(this[_0x4c9553(0xa6)]==undefined&&_0x3a373f==undefined)_0x3e1329(new Error(_0x4c9553(0xdd)));this[_0x4c9553(0xa6)]=_0x3a373f||this['url'];if(_0x2ac57d!==undefined)this['reconnectTimeout']=_0x2ac57d;if(_0x1d3bcd!==undefined)this[_0x4c9553(0xe3)]=_0x1d3bcd;this[_0x4c9553(0xe4)]=new WebSocket(this[_0x4c9553(0xa6)]),this['socket'][_0x4c9553(0xc9)]=_0x5b7b9b=>{const _0x569cd7=_0x4c9553;this['raise'](_0x569cd7(0xde),_0x5b7b9b);},this[_0x4c9553(0xe4)][_0x4c9553(0xc6)]=_0x1c650e=>{const _0x50b248=_0x4c9553;this['raise'](_0x50b248(0xe2),_0x1c650e);},this[_0x4c9553(0xe4)][_0x4c9553(0xab)]=_0x2f5cfa=>{const _0x492199=_0x4c9553;this[_0x492199(0xa2)](_0x2f5cfa);},this[_0x4c9553(0xe4)]['onclose']=_0x5dce4d=>{const _0xc950fa=_0x4c9553;if(this['heartbeatTimeout']!=undefined)clearTimeout(this['heartbeatTimeout']);if(this[_0xc950fa(0xb1)]!=undefined)setTimeout(()=>this['connect'](),this[_0xc950fa(0xb1)]);this['raise']('close',_0x5dce4d);};const _0x10c0e5=()=>{_0x1f5b7d(),_0x2f970b();},_0x981fa8=_0x5344c9=>{_0x11d55b?_0x3e1329(_0x5344c9):_0x1f5b7d(),_0x2f970b();};this['socket'][_0x4c9553(0xc2)](_0x4c9553(0xde),_0x10c0e5,{'once':!![]}),this[_0x4c9553(0xe4)]['addEventListener'](_0x4c9553(0xe2),_0x981fa8,{'once':!![]});const _0x2f970b=()=>{const _0x295dd2=_0x4c9553;var _0x5033bc,_0x581936;(_0x5033bc=this[_0x295dd2(0xe4)])===null||_0x5033bc===void 0x0?void 0x0:_0x5033bc[_0x295dd2(0xc7)](_0x295dd2(0xde),_0x10c0e5),(_0x581936=this['socket'])===null||_0x581936===void 0x0?void 0x0:_0x581936[_0x295dd2(0xc7)]('error',_0x981fa8);};});});}['disconnect'](_0x438772,_0x3ab903){return __awaiter(this,void 0x0,void 0x0,function*(){return new Promise((_0x457521,_0xa5c2ea)=>{const _0x37ea09=a10_0x43ee;if(this[_0x37ea09(0xe4)]==undefined||this[_0x37ea09(0xe4)]['readyState']===WebSocket[_0x37ea09(0xb8)]||this['socket'][_0x37ea09(0xa7)]===WebSocket[_0x37ea09(0xc4)])return _0xa5c2ea(new Error(_0x37ea09(0xe6)));this[_0x37ea09(0xe4)][_0x37ea09(0xac)](_0x438772,_0x3ab903);const _0x430891=()=>{_0x457521(),_0x16c574();},_0x2acbd1=_0x518e0f=>{_0xa5c2ea(_0x518e0f),_0x16c574();};this[_0x37ea09(0xe4)][_0x37ea09(0xc2)](_0x37ea09(0xac),_0x430891,{'once':!![]}),this[_0x37ea09(0xe4)][_0x37ea09(0xc2)](_0x37ea09(0xe2),_0x2acbd1,{'once':!![]});const _0x16c574=()=>{const _0x53090f=_0x37ea09;var _0x9932b9,_0x1183cb;(_0x9932b9=this[_0x53090f(0xe4)])===null||_0x9932b9===void 0x0?void 0x0:_0x9932b9[_0x53090f(0xc7)](_0x53090f(0xac),_0x430891),(_0x1183cb=this[_0x53090f(0xe4)])===null||_0x1183cb===void 0x0?void 0x0:_0x1183cb[_0x53090f(0xc7)](_0x53090f(0xe2),_0x2acbd1);};});});}get[a10_0x5485f3(0xaf)](){const _0xb58138=a10_0x5485f3;var _0x4176bf;switch((_0x4176bf=this[_0xb58138(0xe4)])===null||_0x4176bf===void 0x0?void 0x0:_0x4176bf[_0xb58138(0xa7)]){case WebSocket['CONNECTING']:return _0xb58138(0xe0);case WebSocket[_0xb58138(0xae)]:return this[_0xb58138(0xb5)]===_0xb58138(0xdf)?_0xb58138(0xde):_0xb58138(0xd8);case WebSocket[_0xb58138(0xb8)]:return _0xb58138(0xb7);case WebSocket['CLOSED']:default:return'closed';}}['emit'](_0x8b3244,_0x42e80b,_0x217f9f,_0x2043a7=0x5*0x3e8){const _0x22aad2=a10_0x5485f3;if(this['socket']==undefined||this[_0x22aad2(0xaf)]!==_0x22aad2(0xde))throw new Error(_0x22aad2(0xc3));if(['handshake',_0x22aad2(0xde),_0x22aad2(0xe2),'close','*'][_0x22aad2(0xbf)](_0x8b3244))throw new Error('Cannot\x20emit\x20a\x20class\x20internal\x20event\x20as\x20handshake,\x20open,\x20error,\x20close\x20or\x20\x22*\x22');const _0xce352e=_0x217f9f==undefined?0x0:this[_0x22aad2(0xd7)],_0x14073e=Buffer['from'](_0x8b3244,'utf-8');if(_0x14073e['length']>0xff)throw new Error(_0x22aad2(0xcb));if(_0x217f9f!=undefined){this['requestId']=(this[_0x22aad2(0xd7)]+0x1)%0x80||0x1;const _0x249ae3=setTimeout(()=>{const _0x3cab76=_0x22aad2;delete this[_0x3cab76(0xcf)][_0xce352e],_0x217f9f(new Error(_0x3cab76(0xd3)));},_0x2043a7);this[_0x22aad2(0xcf)][_0xce352e]=_0x1fd1d7=>{if(!(_0x1fd1d7 instanceof Error))clearTimeout(_0x249ae3);_0x217f9f(_0x1fd1d7);};}const _0x3e8df3=Buffer['concat']([Buffer[_0x22aad2(0xa5)]([_0xce352e|0x80,_0x14073e['length']]),_0x14073e,this[_0x22aad2(0xd6)](_0x42e80b)]);this[_0x22aad2(0xe4)]['send'](_0x3e8df3);}[a10_0x5485f3(0xa2)]({data:_0x80636e}){const _0x551dab=a10_0x5485f3;var _0x17f768,_0x27a3df,_0x448512;let _0x1c0bac=Buffer['alloc'](0x0);if(_0x80636e instanceof Buffer)_0x1c0bac=_0x80636e;if(typeof _0x80636e==='string')_0x1c0bac=Buffer[_0x551dab(0xa5)](_0x80636e,_0x551dab(0xc8));if(_0x80636e instanceof ArrayBuffer)_0x1c0bac=Buffer['from'](_0x80636e);if(Array[_0x551dab(0xbd)](_0x80636e))_0x1c0bac=Buffer[_0x551dab(0xad)](_0x80636e);if(this[_0x551dab(0xb5)]==='waiting'){const {pingInterval:_0x56ea5b}=this[_0x551dab(0xe5)](_0x1c0bac),_0xc9769f=this[_0x551dab(0xd6)](this[_0x551dab(0xe3)]===undefined?null:this[_0x551dab(0xe3)]);(_0x17f768=this[_0x551dab(0xe4)])===null||_0x17f768===void 0x0?void 0x0:_0x17f768['send'](_0xc9769f),this['handshakeStatus']='sent-info';return;}else{if(this['handshakeStatus']===_0x551dab(0xc5)){this[_0x551dab(0xb5)]=_0x551dab(0xdf);return;}}const _0x30c270=_0x1c0bac[_0x551dab(0xcd)](0x0),_0x3b64ba=_0x30c270&0x7f,_0x45dd13=(_0x30c270&0x80)!==0x0;if(_0x45dd13){const _0x45eb4=_0x1c0bac[_0x551dab(0xcd)](0x1),_0x164f6f=_0x1c0bac[_0x551dab(0xce)](0x2,0x2+_0x45eb4)[_0x551dab(0xb9)]('utf-8');if([_0x551dab(0xd8),'open',_0x551dab(0xe2),'close','*'][_0x551dab(0xbf)](_0x164f6f))return;const _0x3f579b=this[_0x551dab(0xe5)](_0x1c0bac[_0x551dab(0xce)](0x2+_0x45eb4)),_0x5468f7=(_0x27a3df=this[_0x551dab(0xb0)][_0x164f6f])!==null&&_0x27a3df!==void 0x0?_0x27a3df:[];let _0x4cd646=![];const _0x54383a=_0xae5e3b=>{const _0x166de4=_0x551dab;var _0x4170bc;if(_0x3b64ba===0x0&&_0x4cd646)return;if(_0xae5e3b===undefined)return;const _0x43d558=Buffer[_0x166de4(0xad)]([Buffer[_0x166de4(0xa5)]([_0x3b64ba&0x7f]),this[_0x166de4(0xd6)](_0xae5e3b)]);(_0x4170bc=this[_0x166de4(0xe4)])===null||_0x4170bc===void 0x0?void 0x0:_0x4170bc[_0x166de4(0xca)](_0x43d558),_0x4cd646=!![];};for(const _0x1c5985 of _0x5468f7)_0x1c5985[_0x551dab(0xba)](undefined,_0x3f579b,_0x54383a);const _0x866b63=(_0x448512=this[_0x551dab(0xb0)]['*'])!==null&&_0x448512!==void 0x0?_0x448512:[];for(const _0x7e3ea7 of _0x866b63)_0x7e3ea7['call'](undefined,_0x164f6f,_0x3f579b);if(!_0x4cd646&&_0x3b64ba!==0x0){}return;}const _0x2ef498=this[_0x551dab(0xcf)][_0x3b64ba];if(_0x2ef498==undefined)return;const _0xb63514=this['decode'](_0x1c0bac[_0x551dab(0xce)](0x1));_0x2ef498(_0xb63514);}[a10_0x5485f3(0xd6)](_0x177b5b){const _0x3edc3d=a10_0x5485f3;return Buffer[_0x3edc3d(0xa5)](JSON[_0x3edc3d(0xb4)](_0x177b5b),'utf-8');}[a10_0x5485f3(0xe5)](_0x33265e){const _0x3cb792=a10_0x5485f3;return JSON[_0x3cb792(0xa8)](_0x33265e[_0x3cb792(0xb9)](_0x3cb792(0xc8)));}['on'](_0x7aec99,_0x608fd9){const _0x564214=a10_0x5485f3;if(this['handlers'][_0x7aec99]==undefined)this[_0x564214(0xb0)][_0x7aec99]=[];this[_0x564214(0xb0)][_0x7aec99][_0x564214(0xda)](_0x608fd9);}[a10_0x5485f3(0xaa)](_0x4467c3,_0x453248){const _0x33d256=a10_0x5485f3;if(_0x453248==undefined){delete this[_0x33d256(0xb0)][_0x4467c3];return;}const _0x5a794f=this[_0x33d256(0xb0)][_0x4467c3],_0x4e314d=(_0x5a794f!==null&&_0x5a794f!==void 0x0?_0x5a794f:[])[_0x33d256(0xc0)](_0xcc8907=>_0xcc8907===_0x453248);if(_0x4e314d===-0x1)throw new Error('Attempted\x20to\x20remove\x20an\x20handler\x20for\x20'+_0x4467c3+_0x33d256(0xe8));_0x5a794f['splice'](_0x4e314d,0x1);}[a10_0x5485f3(0xbe)](_0x52f3c5,_0x55c741){const _0x3d6d1f=a10_0x5485f3;var _0xca2846,_0x26d5ee;const _0x5d93c0=(_0xca2846=this[_0x3d6d1f(0xb0)][_0x52f3c5])!==null&&_0xca2846!==void 0x0?_0xca2846:[];for(const _0x21e311 of _0x5d93c0)_0x21e311(_0x55c741);const _0x315609=(_0x26d5ee=this[_0x3d6d1f(0xb0)]['*'])!==null&&_0x26d5ee!==void 0x0?_0x26d5ee:[];for(const _0x32a2b9 of _0x315609)_0x32a2b9(_0x52f3c5,_0x55c741);}}function a10_0x2ccf(){const _0x637da1=['from','url','readyState','parse','next','off','onmessage','close','concat','OPEN','status','handlers','reconnectTimeout','apply','1413741urywlQ','stringify','handshakeStatus','8540532oyFCRT','closing','CLOSING','toString','call','The\x20websocket\x20is\x20already\x20connected','then','isArray','raise','includes','findIndex','8zyWcyT','addEventListener','The\x20websocket\x20is\x20not\x20connected','CLOSED','sent-info','onerror','removeEventListener','utf-8','onopen','send','Event\x20name\x20too\x20long\x20(max\x20255\x20bytes)','54iNpwvk','readUInt8','slice','pendingRequests','11geXbaa','__awaiter','onclose','Timeout','1679178TjpGtb','456156PXYJcL','encode','requestId','handshake','5NErXnC','push','23488TuURjp','waiting','No\x20url\x20specified','open','completed','connecting','value','error','handshakeData','socket','decode','The\x20websocket\x20isn\x27t\x20connected\x20or\x20is\x20already\x20trying\x20to\x20close\x20the\x20connection','1728ckPEZu','\x20event\x20type\x20but\x20it\x20wasn\x27t\x20found','throw','386030SHRgve','handle','done','20poPPFX'];a10_0x2ccf=function(){return _0x637da1;};return a10_0x2ccf();}