'use strict';const a1_0x1335b6=a1_0x5643;(function(_0x230071,_0x26a950){const _0x44fade=a1_0x5643,_0x5d4fb7=_0x230071();while(!![]){try{const _0x2c3fd5=-parseInt(_0x44fade(0x1ce))/0x1*(parseInt(_0x44fade(0x1d5))/0x2)+-parseInt(_0x44fade(0x1e0))/0x3*(-parseInt(_0x44fade(0x1e1))/0x4)+-parseInt(_0x44fade(0x1e4))/0x5+parseInt(_0x44fade(0x1d0))/0x6*(parseInt(_0x44fade(0x1d9))/0x7)+-parseInt(_0x44fade(0x1d8))/0x8+parseInt(_0x44fade(0x1dd))/0x9*(-parseInt(_0x44fade(0x1d6))/0xa)+parseInt(_0x44fade(0x1e3))/0xb;if(_0x2c3fd5===_0x26a950)break;else _0x5d4fb7['push'](_0x5d4fb7['shift']());}catch(_0x1ccb5a){_0x5d4fb7['push'](_0x5d4fb7['shift']());}}}(a1_0x57b4,0x7011b));var __importDefault=this&&this[a1_0x1335b6(0x1de)]||function(_0x2cd854){return _0x2cd854&&_0x2cd854['__esModule']?_0x2cd854:{'default':_0x2cd854};};function a1_0x5643(_0x3391d0,_0x3ea6c1){const _0x57b416=a1_0x57b4();return a1_0x5643=function(_0x564364,_0xe228fc){_0x564364=_0x564364-0x1cb;let _0x4b9ee0=_0x57b416[_0x564364];return _0x4b9ee0;},a1_0x5643(_0x3391d0,_0x3ea6c1);}Object[a1_0x1335b6(0x1e2)](exports,a1_0x1335b6(0x1df),{'value':!![]});const crypto_1=__importDefault(require(a1_0x1335b6(0x1d3))),socket_class_1=__importDefault(require('./socket.class'));function a1_0x57b4(){const _0x2c4af8=['\x20event\x20type\x20but\x20it\x20wasn\x27t\x20found','close','upgrade','9uxarez','__importDefault','__esModule','599463JpLUGN','4igakcz','defineProperty','20283483DSlIWB','2024155juggIO','connection','push','sockets','19NaWXof','raise','11622eIgMcP','handlers','default','crypto','off','72274qRFUMI','5497430wCKRXE','call','2322280nYcXeO','1253SbVMSm'];a1_0x57b4=function(){return _0x2c4af8;};return a1_0x57b4();}class Server{constructor(){const _0xad5b28=a1_0x1335b6;this['sockets']={},this[_0xad5b28(0x1d1)]={};}['listen'](_0x5e343b){const _0x4db3b5=a1_0x1335b6;_0x5e343b['on'](_0x4db3b5(0x1dc),(_0x183362,_0x9ab124)=>{const _0x306159=_0x4db3b5,_0x37cdfd=socket_class_1['default']['fromUpgradeRequest'](_0x183362,_0x9ab124),_0x1ddfc6=crypto_1[_0x306159(0x1d2)]['randomUUID']();if(_0x37cdfd===null)return;this[_0x306159(0x1cd)][_0x1ddfc6]=_0x37cdfd,_0x37cdfd['on']('handshake',_0x45f2d5=>{const _0x29bd74=_0x306159;this[_0x29bd74(0x1cf)](_0x29bd74(0x1cb),[_0x1ddfc6,_0x37cdfd,_0x45f2d5]);}),_0x37cdfd['on'](_0x306159(0x1db),()=>{const _0x485bc1=_0x306159;delete this[_0x485bc1(0x1cd)][_0x1ddfc6];});});}['on'](_0x539b85,_0x2d3dbd){const _0xe6de1b=a1_0x1335b6;if(this[_0xe6de1b(0x1d1)][_0x539b85]==undefined)this['handlers'][_0x539b85]=[];this['handlers'][_0x539b85][_0xe6de1b(0x1cc)](_0x2d3dbd);}[a1_0x1335b6(0x1d4)](_0x2d6723,_0x1c3def){const _0xc9ba84=a1_0x1335b6;if(_0x1c3def==undefined){this[_0xc9ba84(0x1d1)][_0x2d6723]=[];return;}const _0x7f39cd=this[_0xc9ba84(0x1d1)][_0x2d6723],_0x15c8f7=(_0x7f39cd!==null&&_0x7f39cd!==void 0x0?_0x7f39cd:[])['findIndex'](_0x1121d1=>_0x1121d1===_0x1c3def);if(_0x15c8f7===-0x1)throw new Error('Attempted\x20to\x20remove\x20an\x20handler\x20for\x20'+_0x2d6723+_0xc9ba84(0x1da));_0x7f39cd['splice'](_0x15c8f7,0x1);}[a1_0x1335b6(0x1cf)](_0x26dec7,[_0x380f88,_0x33c0ed,_0x3288ad]){const _0x279810=a1_0x1335b6;var _0xc1dcf8;const _0x1fa35e=(_0xc1dcf8=this[_0x279810(0x1d1)][_0x26dec7])!==null&&_0xc1dcf8!==void 0x0?_0xc1dcf8:[];for(const _0x1fd48e of _0x1fa35e){_0x1fd48e[_0x279810(0x1d7)](undefined,...[_0x380f88,_0x33c0ed,_0x3288ad]);}}}exports[a1_0x1335b6(0x1d2)]=Server;