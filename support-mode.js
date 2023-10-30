
var l_uri = leftUsrAttr.location.href;
var uID = location.href.match(/usrID=\d+/)[0].match(/\d+/)[0];
leftUsrAttr.location.href = l_uri.replace(/\.php\?.+?$/i, '.php?usrID=' + uID + '&supportFlg=on');

