'use strict';const a1_0xe06cae=a1_0x5ec4;(function(_0x5c6e3a,_0x14bd04){const _0x2b2233=a1_0x5ec4,_0x59f19e=_0x5c6e3a();while(!![]){try{const _0x176f1a=parseInt(_0x2b2233(0x17d))/0x1+-parseInt(_0x2b2233(0x174))/0x2+-parseInt(_0x2b2233(0x177))/0x3*(-parseInt(_0x2b2233(0x178))/0x4)+-parseInt(_0x2b2233(0x189))/0x5+parseInt(_0x2b2233(0x17f))/0x6*(parseInt(_0x2b2233(0x176))/0x7)+parseInt(_0x2b2233(0x18e))/0x8+parseInt(_0x2b2233(0x17b))/0x9;if(_0x176f1a===_0x14bd04)break;else _0x59f19e['push'](_0x59f19e['shift']());}catch(_0x3d96ea){_0x59f19e['push'](_0x59f19e['shift']());}}}(a1_0x1b1e,0xe3a36));var __importDefault=this&&this['__importDefault']||function(_0x220067){const _0xdc6067=a1_0x5ec4;return _0x220067&&_0x220067[_0xdc6067(0x17e)]?_0x220067:{'default':_0x220067};};function a1_0x1b1e(){const _0x88f29d=['105PdmFEu','9heFlEx','1105196OkJYOU','defineProperty','listen','4111029WZOMjv','raise','723507ImrtTD','__esModule','28734DPWUcH','clients','connection','call','default','./socket.class','crypto','Attempted\x20to\x20remove\x20an\x20handler\x20for\x20','handlers','handshake','7311690pzLePd','findIndex','off','fromUpgradeRequest','upgrade','4035608gtdiMQ','381454NpIcwC','\x20event\x20type\x20but\x20it\x20wasn\x27t\x20found'];a1_0x1b1e=function(){return _0x88f29d;};return a1_0x1b1e();}function a1_0x5ec4(_0xa8ad5c,_0x4cda46){const _0x1b1e4a=a1_0x1b1e();return a1_0x5ec4=function(_0x5ec457,_0x4f52b1){_0x5ec457=_0x5ec457-0x174;let _0x1ae0d0=_0x1b1e4a[_0x5ec457];return _0x1ae0d0;},a1_0x5ec4(_0xa8ad5c,_0x4cda46);}Object[a1_0xe06cae(0x179)](exports,a1_0xe06cae(0x17e),{'value':!![]});const crypto_1=__importDefault(require(a1_0xe06cae(0x185))),socket_class_1=__importDefault(require(a1_0xe06cae(0x184)));class Server{constructor(){const _0x10efa0=a1_0xe06cae;this['clients']={},this[_0x10efa0(0x187)]={};}[a1_0xe06cae(0x17a)](_0x382737){const _0x41102f=a1_0xe06cae;_0x382737['on'](_0x41102f(0x18d),(_0xc8850,_0x29b811)=>{const _0x5b70d7=_0x41102f,_0x25e0f5=socket_class_1[_0x5b70d7(0x183)][_0x5b70d7(0x18c)](_0xc8850,_0x29b811),_0x4996fe=crypto_1[_0x5b70d7(0x183)]['randomUUID']();if(_0x25e0f5===null)return;this[_0x5b70d7(0x180)][_0x4996fe]=_0x25e0f5,_0x25e0f5['on'](_0x5b70d7(0x188),_0x3e21d9=>{const _0xb1ddac=_0x5b70d7;this['raise'](_0xb1ddac(0x181),[_0x4996fe,_0x25e0f5,_0x3e21d9]);}),_0x25e0f5['on']('close',()=>{const _0x3620da=_0x5b70d7;delete this[_0x3620da(0x180)][_0x4996fe];});});}['on'](_0x3c6a60,_0x4a658a){const _0x678de1=a1_0xe06cae;if(this[_0x678de1(0x187)][_0x3c6a60]==undefined)this['handlers'][_0x3c6a60]=[];this[_0x678de1(0x187)][_0x3c6a60]['push'](_0x4a658a);}[a1_0xe06cae(0x18b)](_0x1cb9ff,_0x32eb87){const _0x178ba2=a1_0xe06cae;if(_0x32eb87==undefined){this[_0x178ba2(0x187)][_0x1cb9ff]=[];return;}const _0x126545=this[_0x178ba2(0x187)][_0x1cb9ff],_0x110072=(_0x126545!==null&&_0x126545!==void 0x0?_0x126545:[])[_0x178ba2(0x18a)](_0x2d8536=>_0x2d8536===_0x32eb87);if(_0x110072===-0x1)throw new Error(_0x178ba2(0x186)+_0x1cb9ff+_0x178ba2(0x175));_0x126545['splice'](_0x110072,0x1);}[a1_0xe06cae(0x17c)](_0x7e0782,[_0x1fc27d,_0x3d669e,_0x4d93cb]){const _0x4b5aa0=a1_0xe06cae;var _0x5025d2;const _0x67280c=(_0x5025d2=this[_0x4b5aa0(0x187)][_0x7e0782])!==null&&_0x5025d2!==void 0x0?_0x5025d2:[];for(const _0x1f5be2 of _0x67280c){_0x1f5be2[_0x4b5aa0(0x182)](undefined,...[_0x1fc27d,_0x3d669e,_0x4d93cb]);}}}exports[a1_0xe06cae(0x183)]=Server;