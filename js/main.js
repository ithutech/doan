var APIurl = "https://script.google.com/macros/s/AKfycbzYPTjObWfAe0sBQrCCjPN1FjYxdJ1Vp178WIN5rrnUeRlzw4ft/exec?"; //fill url google app script
$("#submitLogin").click(function(event) {
  if($("#fill-user").val() == "" || $("#fill-secret").val() == "")
    return;
    document.querySelector(".input-group .loading").classList.remove("is-hidden");

  var url = APIurl +"access_log=" + get_access_log() + "&action=overview";
  var HASH,alert;
  $.getJSON(url, function(data) {
      $.each(data.auth, function(key, val) {
        HASH = val.result;alert = val.alert;
      });
      if(!HASH) log_fail();
      else{
        setCoo456ysahjkie(HASH, 1);
        requestAlert(alert ,1);
        window.location = '/doan';
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
      if (getCo82nckie_alert() == "true") {
        $('body').append('<div id="modelAlert"> <div class="modelAlert "> <div class="modelAlert-content modelAlert"> <div class="modelAlertST"> <div class="row-12"> <div class="row-center"><h2 style="margin-bottom: 10px">THÔNG BÁO CẬP NHẬT THÔNG TIN </h2> <h2 style="color:red; font-weight:bold; text-decoration:none">THAY ĐỔI MẬT KHẨU CHO LẦN ĐĂNG NHẬP LẦN ĐẦU</h2> </div> <div class="content-alert"> <p>Sinh viên tiến hành vào danh mục "<strong>Thông tin cá nhân</strong>" để tiến hành thay đổi mật khẩu cá nhân</p> <p>Sinh viên tiến hành đăng ký đề tài đồ án, và thực hiện đúng nhiệm vụ của mình </p> <p style="float:right" class="gap-top50px">Thân! ITHUTECH</p></div> </div> <div class="row-12"> <div class="form-input-absoluted gap-top50px"> <input type="submit" class="inputButton btn-center btn-radius7-50" value="TÔI ĐÃ HIỂU" onclick="understand_alert();"><script><script> </div> </div> </div> </div> </div> </div>');
      }
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
