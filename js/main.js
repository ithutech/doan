var APIurl = "https://script.google.com/macros/s/AKfycbzYPTjObWfAe0sBQrCCjPN1FjYxdJ1Vp178WIN5rrnUeRlzw4ft/exec?"; //fill url google app script
$("#submitLogin").click(function(event) {
  if($("#fill-user").val() == "" || $("#fill-secret").val() == "")
    return;
    document.querySelector(".input-group .loading").classList.remove("is-hidden");

  var url = APIurl +"access_log=" + get_access_log() + "&action=overview";
  var HASH;
  $.getJSON(url, function(data) {
      $.each(data.auth, function(key, val) {
        HASH = val.result;
      });
      if(!HASH) log_fail();
      else{
        setCoo456ysahjkie(HASH, 1);
        window.location.href = '/doan2019';
        $("#login").css({'display':'none  ', 'opacity':'0'});
        document.querySelector(".input-group .loading").classList.add("is-hidden");

      }
  });
})

$("#main-load").ready(function() {
  if(getCoo56yhjkk() == undefined)
  return;
  document.querySelector(".loader").classList.remove("is-hidden");
  var url = APIurl  + getCoo56yhjkk() + "&action=overview_a_t";
  $.getJSON(url, function(data) {
    var strText = "", REsult;
    $.each(data.data, function(key, val) {
      strText += val.overview;
      REsult = val.result;
    });
    if(REsult){
      document.querySelector(".login.active").classList.remove("is-hidden");
      $("#app-main").html(strText);
      document.querySelector(".ope-log").classList.add("active_l0G");
      $("span#profile").html("Xin Chào! Chúc bạn một ngày học tập và làm việc vui vẽ ");
      result();
    }
    if(!REsult){
      document.querySelector(".loader").classList.add("is-hidden");
      alert("Phiên đã hết hạn! Xin Vui Lòng Đăng Nhập Lại");
      logout();
    }

  });
})
function log_fail(e) {
  document.querySelector(".loader").classList.add("is-hidden");
  document.querySelector(".input-group .loading").classList.add("is-hidden");

  alert('Thông tin đăng nhập không chính xác');
}
function result(){
  document.querySelector(".loader").classList.add("is-hidden");
  document.querySelector(".input-group .loading").classList.add("is-hidden");

}

$("span#logout").click(function() {
  logout();
  document.querySelector(".login.active").classList.remove("is-hidden");
  location.reload(true);
})
$(".profileSV").ready(function() {
  profileSV_();
})
