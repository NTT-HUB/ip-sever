{'method':_0x741e48(0x1e6),'headers':_0x522454,'body':JSON[_0x741e48(0x1fd)](_0x3face3)});if(_0x6c8c0c['ok'])console['log']('File\x20Lua\x20đã\x20cập\x20nhật\x20thành\x20công');else{const _0x3219ba=await _0x6c8c0c[_0x741e48(0x1ff)]();console['error'](_0x741e48(0x1fe),_0x3219ba);}}catch(_0xe728d0){console[_0x741e48(0x20d)]('Error\x20creating\x20or\x20updating\x20Lua\x20file:',_0xe728d0);}}async function handleKeyCreation(){const _0x28e4f4=_0x56b26d,_0x3b03c6=getRandomKey();await loadtime(_0x3b03c6),await createOrUpdateLuaFile(_0x3b03c6),localStorage[_0x28e4f4(0x1f0)](_0x28e4f4(0x21f),_0x3b03c6);}const urlParams=new URLSearchParams(window['location']['search']),hash=urlParams['get'](_0x56b26d(0x1f4));function checkHash(){hash?setTimeout(()=>{const _0x5f3057=_0x4198;fetch(_0x5f3057(0x1f9)+hash,{'method':'POST'})[_0x5f3057(0x1f1)](_0x7e83b3=>_0x7e83b3[_0x5f3057(0x1ff)]())[_0x5f3057(0x1f1)](_0x5b62e7=>{_0x5b62e7['status']?buttonClicked():setTimeout(()=>{const _0x5a7eb5=_0x4198;window[_0x5a7eb5(0x208)][_0x5a7eb5(0x209)]='index.html';},0x1388);})['catch'](_0x5cc9ae=>{const _0x29a433=_0x5f3057;console[_0x29a433(0x20d)](_0x29a433(0x212),_0x5cc9ae),setTimeout(()=>{const _0x59d98f=_0x29a433;window[_0x59d98f(0x208)][_0x59d98f(0x209)]=_0x59d98f(0x200);},0x1388);});},0x7d0):setTimeout(()=>{const _0x4cd0d9=_0x4198;window[_0x4cd0d9(0x208)][_0x4cd0d9(0x209)]=_0x4cd0d9(0x213);},0x1388);}window[_0x56b26d(0x21a)]=function(){checkHash();};function _0x4198(_0x39439b,_0x2e17b2){const _0x5d80a2=_0x5d80();return _0x4198=function(_0x41983a,_0x31a3f4){_0x41983a=_0x41983a-0x1e6;let _0x3562b1=_0x5d80a2[_0x41983a];return _0x3562b1;},_0x4198(_0x39439b,_0x2e17b2);}function buttonClicked(){handleKeyCreation();}
