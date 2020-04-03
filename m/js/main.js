var APIurl = "https://script.google.com/macros/s/AKfycbzYPTjObWfAe0sBQrCCjPN1FjYxdJ1Vp178WIN5rrnUeRlzw4ft/exec?"; //fill url google app script
$("#submitLogin").click(function(event) {
  if ($("#fill-user").val() == "" || $("#fill-secret").val() == "")
    return;
  document.querySelector(".input-group .loading").classList.remove("is-hidden");

  var url = APIurl + "access_log=" + get_access_log() + "&action=overview";
  var HASH, alert;
  $.getJSON(url, function(data) {
    $.each(data.auth, function(key, val) {
      HASH = val.result;
      alert = val.alert;
    });
    if (!HASH) log_fail(HASH);
    else {
      setCoo456ysahjkie(HASH, 1);
      requestAlert(alert, 1);
      window.location = '/';
      $("#login").css({
        'display': 'none  ',
        'opacity': '0'
      });
      document.querySelector(".input-group .loading").classList.add("is-hidden");

    }
  });
})

$("#main-load").ready(function() {
  if (getCoo56yhjkk() == undefined)
    return;
  document.querySelector(".loader").classList.remove("is-hidden");
  var url = APIurl + getCoo56yhjkk() + "&action=DASHBOARD_MB";
  $.getJSON(url, function(data) {
    var strText, strMenu,strScript,
      REsult, strFullname;
    $.each(data.data, function(key, val) {
      strText = val.overview;
      strFullname = val.accountname;
      strMenu = val.menu;
      strScript = val.script;
      REsult = val.result;
    });
    if (REsult) {
      $("#app-main").html(strText);
      $("#menu").html(strMenu);
      $("#widget-script").html(strScript);

      document.querySelector('span#name-after').innerHTML= "Xin chào " +strFullname + " !";
      result();
      if (getCo82nckie_alert() == "true") {
        $('body').append('<div id="modelAlert"> <div class="modelAlert "> <div class="modelAlert-content modelAlert"> <div class="modelAlertST"> <div class="row-12"> <div class="row-center"> <h2 style="margin-bottom: 10px">THÔNG BÁO CẬP NHẬT THÔNG TIN </h2> <h2 style="color:red; font-weight:bold; text-decoration:none">THAY ĐỔI MẬT KHẨU CHO LẦN ĐĂNG NHẬP LẦN ĐẦU</h2> </div> <div class="content-alert"> <p>1. Truy cập vào danh mục "<strong>Thông tin cá nhân</strong>" để tiến hành thay đổi mật khẩu cá nhân</p> <p>2. Nhập mật khẩu được cấp và mật khẩu mới để tiến hành thay đổi mật khẩu </p> <p style="float:right" class="gap-top50px">Xin cảm ơn! ITHUTECH</p> </div> </div> <div class="row-12"> <div class="form-input-absoluted"> <input type="submit" class="inputButton btn-center btn-radius7-50" value="TÔI ĐÃ HIỂU" onclick="understand_alert();"> </div> </div> </div> </div> </div> </div>');
      }
    }
    if (!REsult) {
      document.querySelector(".loader").classList.add("is-hidden");
      alert("Phiên đã hết hạn! Xin Vui Lòng Đăng Nhập Lại");
      logout();
    }

  });
})

function log_fail(e) {
  document.querySelector(".loader").classList.add("is-hidden");
  document.querySelector(".input-group .loading").classList.add("is-hidden");
  if (e == null) {
    alert('Thông tin đăng nhập không tìm thấy Xin vui lòng liên hệ văn phòng khoa! Xin cảm ơn');
  } else if (!e) {
    alert('Thông tin đăng nhập không chính xác');

  }
}

function result() {
  document.querySelector(".loader").classList.add("is-hidden");
  document.querySelector(".input-group .loading").classList.add("is-hidden");

}

$("span#logout").click(function() {
  logout();
  document.querySelector(".login.active").classList.remove("is-hidden");
  location.reload(true);
})

// The main class
var AlertBox = function(id, option) {
  this.show = function(msg) {
      var alertArea = document.querySelector(id);
      var alertBox = document.createElement('DIV');
      var alertContent = document.createElement('DIV');
      var alertClose = document.createElement('A');
      var alertClass = this;
      alertContent.classList.add('alert-content');
      alertContent.innerHTML = msg;
      alertClose.classList.add('alert-close');
      alertClose.setAttribute('href', '#');
      alertBox.classList.add('alert-box');
      alertBox.appendChild(alertContent);
      if (!option.hideCloseButton || typeof option.hideCloseButton === 'undefined') {
        alertBox.appendChild(alertClose);
      }
      alertArea.appendChild(alertBox);
      alertClose.addEventListener('click', function(event) {
        event.preventDefault();
        alertClass.hide(alertBox);
      });
      if (!option.persistent) {
        var alertTimeout = setTimeout(function() {
          alertClass.hide(alertBox);
          clearTimeout(alertTimeout);
        }, option.closeTime);
      }
  };

  this.hide = function(alertBox) {
    alertBox.classList.add('hide');
    var disperseTimeout = setTimeout(function() {
      alertBox.parentNode.removeChild(alertBox);
      clearTimeout(disperseTimeout);
    }, 500);
  };
};

// Thiết lập thời gian để tắt alert

const alertbox = new AlertBox('#alert-area', {
  closeTime: 6000,
  persistent: false,
  hideCloseButton: false
});

// Cuộn ẩn hiện menuitem
var prevScroll_bandau  = window.pageYOffset;
window.onscroll = function() {
  var currentScroll_hientai  = window.pageYOffset;
  if (prevScroll_bandau  > currentScroll_hientai ) {
    document.getElementById("header-scroll").style.top = "0";
  } else {
    document.getElementById("header-scroll").style.top = "-50px";
  }
  prevScroll_bandau  = currentScroll_hientai ;
} 
