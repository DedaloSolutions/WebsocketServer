function a7_0x1ef7(_0x10a750,_0xbcb9b1){const _0x3f73b7=a7_0x3f73();return a7_0x1ef7=function(_0x1ef747,_0x5c5dc3){_0x1ef747=_0x1ef747-0xf0;let _0x12cf94=_0x3f73b7[_0x1ef747];return _0x12cf94;},a7_0x1ef7(_0x10a750,_0xbcb9b1);}const a7_0x3a7b69=a7_0x1ef7;(function(_0x2a0238,_0x1e8585){const _0x20e509=a7_0x1ef7,_0x6a3eac=_0x2a0238();while(!![]){try{const _0xc805ec=-parseInt(_0x20e509(0xfe))/0x1*(parseInt(_0x20e509(0x116))/0x2)+-parseInt(_0x20e509(0x111))/0x3*(parseInt(_0x20e509(0x120))/0x4)+parseInt(_0x20e509(0x126))/0x5+parseInt(_0x20e509(0xf1))/0x6+-parseInt(_0x20e509(0x11f))/0x7*(parseInt(_0x20e509(0x102))/0x8)+parseInt(_0x20e509(0xf5))/0x9*(-parseInt(_0x20e509(0x136))/0xa)+parseInt(_0x20e509(0x122))/0xb;if(_0xc805ec===_0x1e8585)break;else _0x6a3eac['push'](_0x6a3eac['shift']());}catch(_0x541f07){_0x6a3eac['push'](_0x6a3eac['shift']());}}}(a7_0x3f73,0x96184));var __awaiter=this&&this[a7_0x3a7b69(0xf7)]||function(_0xc9802b,_0x27d98d,_0x46ffa4,_0x1c1e72){function _0x2c54c4(_0x4461e5){return _0x4461e5 instanceof _0x46ffa4?_0x4461e5:new _0x46ffa4(function(_0x5bbfee){_0x5bbfee(_0x4461e5);});}return new(_0x46ffa4||(_0x46ffa4=Promise))(function(_0x2dd19c,_0xce711c){const _0x106f5f=a7_0x1ef7;function _0x426b95(_0x4a5ef4){try{_0x71f77a(_0x1c1e72['next'](_0x4a5ef4));}catch(_0x956905){_0xce711c(_0x956905);}}function _0x1f831a(_0x500e21){const _0x30777f=a7_0x1ef7;try{_0x71f77a(_0x1c1e72[_0x30777f(0x12e)](_0x500e21));}catch(_0x3ca1ee){_0xce711c(_0x3ca1ee);}}function _0x71f77a(_0xe9cf6d){const _0x3a673f=a7_0x1ef7;_0xe9cf6d[_0x3a673f(0xf0)]?_0x2dd19c(_0xe9cf6d[_0x3a673f(0x13a)]):_0x2c54c4(_0xe9cf6d[_0x3a673f(0x13a)])[_0x3a673f(0x11b)](_0x426b95,_0x1f831a);}_0x71f77a((_0x1c1e72=_0x1c1e72[_0x106f5f(0x12a)](_0xc9802b,_0x27d98d||[]))['next']());});};import a7_0xbc2484 from'ws';export default class Client{constructor(){const _0x534529=a7_0x3a7b69;this[_0x534529(0x100)]=0x5*0x3e8+0x1f4,this['reconnectTimeout']=null,this[_0x534529(0xf9)]='waiting',this['requestId']=0x1,this[_0x534529(0x124)]={},this[_0x534529(0x115)]={},this[_0x534529(0x117)]=()=>{const _0x1cd256=_0x534529;if(this[_0x1cd256(0xf8)]!=undefined)clearTimeout(this[_0x1cd256(0xf8)]);this['heartbeatTimeout']=setTimeout(()=>{const _0x7d7cc9=_0x1cd256;var _0x1cd211;if(this[_0x7d7cc9(0x11a)]!=undefined&&this[_0x7d7cc9(0x11a)][_0x7d7cc9(0x125)]!==a7_0xbc2484[_0x7d7cc9(0x130)])return;(_0x1cd211=this['socket'])===null||_0x1cd211===void 0x0?void 0x0:_0x1cd211[_0x7d7cc9(0x118)]();},this['heartbeatInterval']);};}[a7_0x3a7b69(0x12d)](){return __awaiter(this,arguments,void 0x0,function*({url:_0x44397a,allowReject:_0x17a295,handshakeData:_0x2c2337,reconnectTimeout:_0x403bed}={}){return new Promise((_0x58ac44,_0x2b7bf6)=>{const _0x1ed3d0=a7_0x1ef7;if(this[_0x1ed3d0(0x11a)]!=undefined&&this[_0x1ed3d0(0x11a)][_0x1ed3d0(0x125)]===a7_0xbc2484['OPEN']){if(_0x17a295!==!![])_0x2b7bf6(new Error(_0x1ed3d0(0x11d)));else _0x58ac44();}this[_0x1ed3d0(0x11a)]!=undefined&&(this[_0x1ed3d0(0x11a)][_0x1ed3d0(0x10c)](),this[_0x1ed3d0(0x11a)][_0x1ed3d0(0x121)]('ping',this['checkHeartbeat']),this['handshakeStatus']=_0x1ed3d0(0x112));if(this[_0x1ed3d0(0x127)]==undefined&&_0x44397a==undefined)_0x2b7bf6(new Error(_0x1ed3d0(0x113)));this[_0x1ed3d0(0x127)]=_0x44397a||this[_0x1ed3d0(0x127)];if(_0x403bed!==undefined)this[_0x1ed3d0(0x12c)]=_0x403bed;if(_0x2c2337!==undefined)this[_0x1ed3d0(0x12b)]=_0x2c2337;this['socket']=new a7_0xbc2484(this[_0x1ed3d0(0x127)]),this['socket']['addEventListener'](_0x1ed3d0(0x133),this[_0x1ed3d0(0x117)]),this[_0x1ed3d0(0x11a)]['addEventListener'](_0x1ed3d0(0x10d),this[_0x1ed3d0(0x117)]),this['socket']['on'](_0x1ed3d0(0x10f),_0x473f04=>{const _0xab914a=_0x1ed3d0;var _0x4025b2;(_0x4025b2=this[_0xab914a(0x11a)])===null||_0x4025b2===void 0x0?void 0x0:_0x4025b2[_0xab914a(0x105)](_0x473f04),this[_0xab914a(0x117)]();}),this[_0x1ed3d0(0x11a)][_0x1ed3d0(0x132)](_0x1ed3d0(0x118),()=>{const _0x5887a7=_0x1ed3d0;if(this[_0x5887a7(0xf8)]!=undefined)clearTimeout(this['heartbeatTimeout']);});if(this[_0x1ed3d0(0x12c)]!=undefined)this[_0x1ed3d0(0x11a)][_0x1ed3d0(0x132)](_0x1ed3d0(0x118),()=>{const _0x53f1df=_0x1ed3d0;setTimeout(()=>this[_0x53f1df(0x12d)](),this[_0x53f1df(0x12c)]);});this[_0x1ed3d0(0x11a)][_0x1ed3d0(0x132)]('message',_0x42e4a6=>this[_0x1ed3d0(0x110)](_0x42e4a6)),this['socket'][_0x1ed3d0(0x132)](_0x1ed3d0(0x133),_0x5e0102=>this[_0x1ed3d0(0xf3)](_0x1ed3d0(0x133),_0x5e0102)),this[_0x1ed3d0(0x11a)][_0x1ed3d0(0x132)](_0x1ed3d0(0x138),_0x17545f=>this[_0x1ed3d0(0xf3)](_0x1ed3d0(0x138),_0x17545f)),this[_0x1ed3d0(0x11a)][_0x1ed3d0(0x132)](_0x1ed3d0(0x118),_0x1da67a=>this['raise'](_0x1ed3d0(0x118),_0x1da67a));const _0x44e731=()=>{_0x58ac44(),_0x7d881b();},_0x29bf7f=_0x112743=>{_0x17a295?_0x2b7bf6(_0x112743):_0x58ac44(),_0x7d881b();};this[_0x1ed3d0(0x11a)][_0x1ed3d0(0x132)]('open',_0x44e731,{'once':!![]}),this[_0x1ed3d0(0x11a)]['addEventListener'](_0x1ed3d0(0x138),_0x29bf7f,{'once':!![]});const _0x7d881b=()=>{const _0x1f94aa=_0x1ed3d0;var _0x4c70a2,_0x122e4c;(_0x4c70a2=this[_0x1f94aa(0x11a)])===null||_0x4c70a2===void 0x0?void 0x0:_0x4c70a2[_0x1f94aa(0x11e)](_0x1f94aa(0x133),_0x44e731),(_0x122e4c=this[_0x1f94aa(0x11a)])===null||_0x122e4c===void 0x0?void 0x0:_0x122e4c['removeEventListener'](_0x1f94aa(0x138),_0x29bf7f);};});});}[a7_0x3a7b69(0x135)](_0x2c0710,_0x3bc3c2){return __awaiter(this,void 0x0,void 0x0,function*(){return new Promise((_0xfd7c44,_0xd5cd74)=>{const _0x4c59c9=a7_0x1ef7;if(this[_0x4c59c9(0x11a)]==undefined||this[_0x4c59c9(0x11a)][_0x4c59c9(0x125)]===a7_0xbc2484[_0x4c59c9(0x13b)]||this[_0x4c59c9(0x11a)]['readyState']===a7_0xbc2484[_0x4c59c9(0x114)])return _0xd5cd74(new Error('The\x20websocket\x20isn\x27t\x20connected\x20or\x20is\x20already\x20trying\x20to\x20close\x20the\x20connection'));this['socket']['close'](_0x2c0710,_0x3bc3c2);const _0xd6f0b6=()=>{_0xfd7c44(),_0x40c96f();},_0x30a2a6=_0x2f6620=>{_0xd5cd74(_0x2f6620),_0x40c96f();};this[_0x4c59c9(0x11a)][_0x4c59c9(0x132)](_0x4c59c9(0x118),_0xd6f0b6,{'once':!![]}),this[_0x4c59c9(0x11a)][_0x4c59c9(0x132)](_0x4c59c9(0x138),_0x30a2a6,{'once':!![]});const _0x40c96f=()=>{const _0x52db67=_0x4c59c9;var _0x22d81b,_0x118aab;(_0x22d81b=this['socket'])===null||_0x22d81b===void 0x0?void 0x0:_0x22d81b['removeEventListener'](_0x52db67(0x118),_0xd6f0b6),(_0x118aab=this[_0x52db67(0x11a)])===null||_0x118aab===void 0x0?void 0x0:_0x118aab[_0x52db67(0x11e)]('error',_0x30a2a6);};});});}get[a7_0x3a7b69(0x119)](){const _0x150afb=a7_0x3a7b69;var _0x592d70;switch((_0x592d70=this[_0x150afb(0x11a)])===null||_0x592d70===void 0x0?void 0x0:_0x592d70['readyState']){case a7_0xbc2484['CONNECTING']:return'connecting';case a7_0xbc2484[_0x150afb(0x130)]:return this[_0x150afb(0xf9)]===_0x150afb(0xfc)?_0x150afb(0x133):_0x150afb(0x129);case a7_0xbc2484['CLOSING']:return'closing';case a7_0xbc2484[_0x150afb(0x114)]:default:return _0x150afb(0x139);}}[a7_0x3a7b69(0x10a)](_0x45cc37,_0x1cede9,_0x5452a4,_0x8e9dea=0x5*0x3e8){const _0x2a8437=a7_0x3a7b69;if(this['socket']==undefined||this[_0x2a8437(0x119)]!==_0x2a8437(0x133))throw new Error(_0x2a8437(0x10b));if([_0x2a8437(0x129),_0x2a8437(0x133),_0x2a8437(0x138),'close','*'][_0x2a8437(0x12f)](_0x45cc37))throw new Error(_0x2a8437(0x11c));const _0x35f0a9=_0x5452a4==undefined?0x0:this[_0x2a8437(0x123)],_0x2c0a09=Buffer[_0x2a8437(0x106)](_0x45cc37,_0x2a8437(0x10e));if(_0x2c0a09['length']>0xff)throw new Error(_0x2a8437(0x103));if(_0x5452a4!=undefined){this[_0x2a8437(0x123)]=(this['requestId']+0x1)%0x80||0x1;const _0x5c57=setTimeout(()=>{const _0x26ef15=_0x2a8437;delete this['pendingRequests'][_0x35f0a9],_0x5452a4(new Error(_0x26ef15(0xfa)));},_0x8e9dea);this[_0x2a8437(0x124)][_0x35f0a9]=_0x334beb=>{if(!(_0x334beb instanceof Error))clearTimeout(_0x5c57);_0x5452a4(_0x334beb);};}const _0x1c9afe=Buffer[_0x2a8437(0x137)]([Buffer['from']([_0x35f0a9|0x80,_0x2c0a09[_0x2a8437(0xf6)]]),_0x2c0a09,this[_0x2a8437(0x109)](_0x1cede9)]);this[_0x2a8437(0x11a)][_0x2a8437(0x104)](_0x1c9afe);}[a7_0x3a7b69(0x110)]({data:_0xdfe5b7}){const _0x121151=a7_0x3a7b69;var _0x51f870,_0x49c663,_0x4a90d5;let _0x4faef4=Buffer[_0x121151(0xfb)](0x0);if(_0xdfe5b7 instanceof Buffer)_0x4faef4=_0xdfe5b7;if(typeof _0xdfe5b7==='string')_0x4faef4=Buffer[_0x121151(0x106)](_0xdfe5b7,_0x121151(0x10e));if(_0xdfe5b7 instanceof ArrayBuffer)_0x4faef4=Buffer[_0x121151(0x106)](_0xdfe5b7);if(Array['isArray'](_0xdfe5b7))_0x4faef4=Buffer['concat'](_0xdfe5b7);if(this[_0x121151(0xf9)]==='waiting'){const {pingInterval:_0x523cbe}=this[_0x121151(0x108)](_0x4faef4);this[_0x121151(0x100)]=_0x523cbe+0x1f4;const _0x27a298=this[_0x121151(0x109)](this[_0x121151(0x12b)]===undefined?null:this[_0x121151(0x12b)]);(_0x51f870=this[_0x121151(0x11a)])===null||_0x51f870===void 0x0?void 0x0:_0x51f870[_0x121151(0x104)](_0x27a298),this[_0x121151(0xf9)]=_0x121151(0xf4);return;}else{if(this[_0x121151(0xf9)]===_0x121151(0xf4)){this[_0x121151(0xf9)]=_0x121151(0xfc);return;}}const _0x16b11f=_0x4faef4[_0x121151(0x101)](0x0),_0xb1d8f4=_0x16b11f&0x7f,_0x305cb8=(_0x16b11f&0x80)!==0x0;if(_0x305cb8){const _0x1eddae=_0x4faef4[_0x121151(0x101)](0x1),_0x54df54=_0x4faef4[_0x121151(0x134)](0x2,0x2+_0x1eddae)[_0x121151(0x107)](_0x121151(0x10e));if([_0x121151(0x129),_0x121151(0x133),_0x121151(0x138),'close','*'][_0x121151(0x12f)](_0x54df54))return;const _0xf6d34a=this[_0x121151(0x108)](_0x4faef4['slice'](0x2+_0x1eddae)),_0x1a47de=(_0x49c663=this[_0x121151(0x115)][_0x54df54])!==null&&_0x49c663!==void 0x0?_0x49c663:[];let _0x474fbf=![];const _0x43d0d4=_0x596eff=>{const _0x23fcbc=_0x121151;var _0x1bb87d;if(_0xb1d8f4===0x0&&_0x474fbf)return;if(_0x596eff===undefined)return;const _0x4de2be=Buffer['concat']([Buffer['from']([_0xb1d8f4&0x7f]),this[_0x23fcbc(0x109)](_0x596eff)]);(_0x1bb87d=this[_0x23fcbc(0x11a)])===null||_0x1bb87d===void 0x0?void 0x0:_0x1bb87d['send'](_0x4de2be),_0x474fbf=!![];};for(const _0x2a8ff1 of _0x1a47de)_0x2a8ff1[_0x121151(0xfd)](undefined,_0xf6d34a,_0x43d0d4);const _0x30e5d7=(_0x4a90d5=this[_0x121151(0x115)]['*'])!==null&&_0x4a90d5!==void 0x0?_0x4a90d5:[];for(const _0x44fc94 of _0x30e5d7)_0x44fc94[_0x121151(0xfd)](undefined,_0x54df54,_0xf6d34a);if(!_0x474fbf&&_0xb1d8f4!==0x0){}return;}const _0x3f9af6=this[_0x121151(0x124)][_0xb1d8f4];if(_0x3f9af6==undefined)return;const _0x1a8c6d=this[_0x121151(0x108)](_0x4faef4['slice'](0x1));_0x3f9af6(_0x1a8c6d);}[a7_0x3a7b69(0x109)](_0xec6c7c){const _0x2da3bd=a7_0x3a7b69;return Buffer['from'](JSON[_0x2da3bd(0xff)](_0xec6c7c),_0x2da3bd(0x10e));}['decode'](_0x4c9fcc){const _0x18c761=a7_0x3a7b69;return JSON[_0x18c761(0xf2)](_0x4c9fcc[_0x18c761(0x107)](_0x18c761(0x10e)));}['on'](_0x2f2d04,_0x3d13d1){const _0x2eec9c=a7_0x3a7b69;if(this[_0x2eec9c(0x115)][_0x2f2d04]==undefined)this[_0x2eec9c(0x115)][_0x2f2d04]=[];this['handlers'][_0x2f2d04]['push'](_0x3d13d1);}[a7_0x3a7b69(0x121)](_0x136a6a,_0x18b2e1){const _0x3ca434=a7_0x3a7b69;if(_0x18b2e1==undefined){delete this['handlers'][_0x136a6a];return;}const _0x2005e8=this['handlers'][_0x136a6a],_0x424287=(_0x2005e8!==null&&_0x2005e8!==void 0x0?_0x2005e8:[])['findIndex'](_0x56114f=>_0x56114f===_0x18b2e1);if(_0x424287===-0x1)throw new Error(_0x3ca434(0x131)+_0x136a6a+_0x3ca434(0x128));_0x2005e8['splice'](_0x424287,0x1);}[a7_0x3a7b69(0xf3)](_0x273454,_0x31be6e){const _0x3f17e4=a7_0x3a7b69;var _0x3cdecd,_0x3fa73;const _0x5bd313=(_0x3cdecd=this[_0x3f17e4(0x115)][_0x273454])!==null&&_0x3cdecd!==void 0x0?_0x3cdecd:[];for(const _0x2cf7e6 of _0x5bd313)_0x2cf7e6(_0x31be6e);const _0x421764=(_0x3fa73=this['handlers']['*'])!==null&&_0x3fa73!==void 0x0?_0x3fa73:[];for(const _0x1c3cc1 of _0x421764)_0x1c3cc1(_0x273454,_0x31be6e);}}function a7_0x3f73(){const _0x482780=['heartbeatInterval','readUInt8','16sxUTRP','Event\x20name\x20too\x20long\x20(max\x20255\x20bytes)','send','pong','from','toString','decode','encode','emit','The\x20websocket\x20is\x20not\x20connected','removeAllListeners','message','utf-8','ping','handle','16209gMmRLq','waiting','No\x20url\x20specified','CLOSED','handlers','114008MqGHtu','checkHeartbeat','close','status','socket','then','Cannot\x20emit\x20a\x20class\x20internal\x20event\x20as\x20handshake,\x20open,\x20error,\x20close\x20or\x20\x22*\x22','The\x20websocket\x20is\x20already\x20connected','removeEventListener','3479357cXGZuY','308FSxtRo','off','36615216vVWFsI','requestId','pendingRequests','readyState','866140gShoMS','url','\x20event\x20type\x20but\x20it\x20wasn\x27t\x20found','handshake','apply','handshakeData','reconnectTimeout','connect','throw','includes','OPEN','Attempted\x20to\x20remove\x20an\x20handler\x20for\x20','addEventListener','open','slice','disconnect','6740gctpwc','concat','error','closed','value','CLOSING','done','2598546IDTdPK','parse','raise','sent-info','16371uzXJVo','length','__awaiter','heartbeatTimeout','handshakeStatus','Timeout','alloc','completed','call','12fYXSqd','stringify'];a7_0x3f73=function(){return _0x482780;};return a7_0x3f73();}