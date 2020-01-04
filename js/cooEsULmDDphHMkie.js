const inputUSER = $("#fill-user");
const inputPASS = $("#fill-secret");
const access_log = "";

function get_access_log(access_log) {
  access_log = $.trim(inputUSER.val()).replace(/ /g, '') + ';' + $.trim(inputPASS.val()).replace(/ /g, '');
  return EncodeUnicode(access_log);
}

function setCoo456ysahjkie(value, expires) {
  var coo456yhjkie = EncodeUnicode(value);
  var time = new Date();
  time.setTime(time.getTime() + (expires * 60 * 12 * 60 * 1000));
  var expires = "expires=" + time.toGMTString();
  document.cookie = "tgnoienyzwf0zsbuaglz_a_t=" + encodeURIComponent(coo456yhjkie) + ";" + expires + ";domain=.ithutech.github.io;path=/";
}

function requestAlert(value, expires) {
  var time = new Date();
  time.setTime(time.getTime() + (expires * 600 * 1000));
  var expires = "expires=" + time.toGMTString();
  document.cookie = "tgn0369173043lch_give_alert=" + value + ";" + expires + ";domain=.ithutech.github.io;path=/";
  // encodeURIComponent(coo456yhjkie) + ";" + expires + + ";domain=.luonghieu184.github.io;path=/";
}
function getCo82nckie_alert() {
  var getCoo_SPLIT_ALERT = document.cookie.split(';');
  for( var i = 0; i < getCoo_SPLIT_ALERT.length; i++)
  {
    if(getCoo_SPLIT_ALERT[i].match(/tgn0369173043lch_give_alert=/g))
      return getCoo_SPLIT_ALERT[i].replace(/ /g, '').split('=')[1];
  }
}
function getCoo56yhjkk() {
  var getCoo_SPLIT = document.cookie.split(';');
  for( var i = 0; i < getCoo_SPLIT.length; i++)
  {
    if(getCoo_SPLIT[i].match(/tgnoienyzwf0zsbuaglz_a_t=/g))
      return getCoo_SPLIT[i].replace(/ /g, '');
  }
}

function EncodeUnicode(str) {
  // First: UTF-8 Encoding Character0s,
  // Then: Convert %d%d encodings into raw bytes, and finally feed it to btoa() function.
  utf8Bytes = encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
    return String.fromCharCode('0x' + p1);
  });
  return btoa(utf8Bytes);
}

function logout() {
  document.cookie = 'tgnoienyzwf0zsbuaglz_a_t=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  document.cookie = 'tgn0369173043lch_give_alert=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}function understand_alert() {
  document.cookie = 'tgn0369173043lch_give_alert=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
  $('#modelAlert').css("display","none");
}
