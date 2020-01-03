/*active button class onclick*/
$('nav a').click(function(e) {
  e.preventDefault();
  $('nav a').removeClass('active');
  $(this).addClass('active');
  if(this.id === !'studentManager'){
    $('.studentManager').addClass('noshow');
  }
  else if(this.id === 'studentManager') {
    $('.studentManager').removeClass('noshow');
    $('.rightbox').children().not('.studentManager').addClass('noshow');
    if($('.studentAll').html() == "" || $('.studentAll').hasClass('formtest') == undefined)
    {
      var jsLoading = '<form class="form-view full-width"><div class="form-input box-loading">  <input class="text input input_f disabled" type="text">  </div><div class="form-input heigh-250px box-loading">  <input class="input input_f disabled" type="text">  </div> <div class="form-input box-loading">  <input class="input input_f disabled" type="text">  </div><div class="box-loading">  <input class="input input_f disabled box-loading" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="form-input-absoluted box-loading"></div> </form>';
      $('.studentAll').append(jsLoading);
      studentManager_();
    }
  }
  else if (this.id === 'profile') {
    $('.profile').removeClass('noshow');
    $('.rightbox').children().not('.profile').addClass('noshow');
    if($('.profileGV').html() == "" || $('.profileGV').hasClass('formtest') == undefined)
    {
      var jsLoading = '<form class="form-view"><div class="form-input validate-input box-loading"> <span class="label-input">Họ và tên:</span> <input class="text input input_f disabled" type="text"> <span class="focus-input"></span> </div><div class="form-input validate-input box-loading"> <span class="label-input">Email:</span> <input class="input input_f disabled" type="text"> <span class="focus-input"></span> </div><div class="form-input validate-input box-loading"> <span class="label-input">Số điện thoại:</span> <input class="input input_f disabled box-loading" type="text"> <span class="focus-input"></span> </div><div class="form-input validate-input box-loading"> <span class="label-input">Nhập mật khẩu cũ:</span> <input class="input input_f" type="text"> <span class="focus-input"></span> </div><div class="form-input validate-input box-loading" > <span class="label-input">Nhập mật khẩu mới:</span> <input class="input input_f" type="text"> <span class="focus-input"></span> </div><div class="form-input-absoluted box-loading"></div> </div></form>';
      $('.profileGV').append(jsLoading);
      profile_();

    }
    // else if ($('.rightbox').children('.profileGV')) {
    //   {
    //     alert('ĐÃ TẢI');
    //   }
    // }
  }
  else if(this.id === 'subscription') {
    $('.subscription').removeClass('noshow');
    $('.rightbox').children().not('.subscription').addClass('noshow');
  }
    else if(this.id === 'privacy') {
    $('.privacy').removeClass('noshow');
    $('.rightbox').children().not('.privacy').addClass('noshow');
  }
  else if(this.id === 'settings') {
    $('.settings').removeClass('noshow');
    $('.rightbox').children().not('.settings').addClass('noshow');
  }
  else if(this.id === 'notif') {
    $('.notif').removeClass('noshow');
    $('.rightbox').children().not('.notif').addClass('noshow');
  }
});

// Message
function closeMessage(el) {
  el.addClass('is-hidden');
}

$('.js-messageClose').on('click', function(e) {
  closeMessage($(this).closest('.Message'));
});

$('#js-helpMe').on('click', function(e) {
  alert('Help you we will, young padawan');
  closeMessage($(this).closest('.Message'));
});

$('#js-authMe').on('click', function(e) {
  alert('Okelidokeli, requesting data transfer.');
  closeMessage($(this).closest('.Message'));
});

$('#js-showMe').on('click', function(e) {
  alert("You're off to our help section. See you later!");
  closeMessage($(this).closest('.Message'));
});

$(document).ready(function() {
  setTimeout(function() {
    closeMessage($('#js-timer'));
  }, 5000);
});

function viewrp(mssv){
    $(".modelDetails").css("display","block")
}

$('.modelDetails').ready(function() {
  var span = document.getElementsByClassName('modelDetails-close')[0];
  span.onclick = function() {
    $('.modelDetails').css("display","none");
  }
});

function studentManager_() {
  if(getCoo56yhjkk() == undefined)
  return;
  var url = APIurl  + getCoo56yhjkk() + "&action=ltLookup";

  $.getJSON(url, function(data) {
    var strText = '<div class="divTable"> <div class="divHeading"> <div class="cell_ith"> MSSV </div> <div class="cell_ith">Họ và tên</div> <div class="cell_ith"> Email </div> <div class="cell_ith"> Số điện thoại </div> <div class="cell_ith"> Ngày sinh </div> <div class="cell_ith"> Mã lớp </div> <div class="cell_ith"> Tên môn học </div> <div class="cell_ith"> Báo Cáo </div> </div>';
    $.each(data.lookup, function(key, val) {
      strText += '<div class="row_ith">'+ '<div class="cell_ith">'+ val["sv-masv"] + '</div>';
      strText += '<div class="cell_ith">' +val["sv-hoten"] + '</div>';
      strText += '<div class="cell_ith">' +val["sv-email"] + '</div>';
      strText += '<div class="cell_ith">' +val["sv-sdt"] + '</div>';
      strText += '<div class="cell_ith">' +val["sv-birth"] + '</div>';
      strText += '<div class="cell_ith">' +val["sv-malop"] + '</div>';
      strText += '<div class="cell_ith">' +val["sv-tenmonhoc"]  + '</div>';
      strText += '<div class="cell_ith">'+ '<button class="btn-hutech more" onclick="viewrp('+val["sv-masv"]+')"><i class="fas fa-search"><span>&nbsp;REVIEW</span></i></button>'  + "</div></div>";

    });
    strText += "</div>";
      $(".studentAll").html(strText);

  });
}
$(".studentManager").ready(function() {
studentManager_();
})
function profile_(){
  if(getCoo56yhjkk() == undefined)
  return;
  var url = APIurl  + getCoo56yhjkk() + "&action=ltprofile";

  $.getJSON(url, function(data) {
    var strText = '<div class="formtest"> <form class="form-view">';
    $.each(data, function(key, val) {
      strText += '<div class="form-input validate-input" data-validate="Vui lòng nhập họ tên"> <span class="label-input">Họ và tên:</span> <input class="input input_f disabled" type="text" value="'+val[0]["gv-hoten"]+'" placeholder="Nhập họ và tên"> <span class="focus-input"></span> </div>';
      strText += '<div class="form-input validate-input" data-validate="Nhập đúng định dạng email"> <span class="label-input">Email:</span> <input class="input input_f disabled" type="text" value="'+ val[0]["gv-email"]+'" placeholder="Nhập email"> <span class="focus-input"></span> </div>'  ;
      strText += '<div class="form-input validate-input" data-validate="Số điện thoại là bắt buộc"> <span class="label-input">Số điện thoại:</span> <input class="input input_f disabled" type="text" value="'+ val[0]["gv-phone"]+'" placeholder="Nhập số điện thoại"> <span class="focus-input"></span> </div>';
      strText += '<div class="form-input validate-input" data-validate="Nhập mật khẩu cũ"> <span class="label-input">Nhập mật khẩu cũ:</span> <input class="input input_f" type="password" name="phone" placeholder="Nhập mật khẩu cũ"> <span class="focus-input"></span> </div><div class="form-input validate-input" data-validate="Nhập mật khẩu mới"> <span class="label-input">Nhập mật khẩu mới:</span> <input class="input input_f" type="password" name="phone" placeholder="Nhập mật khẩu mới"> <span class="focus-input"></span> </div><div class="form-input-absoluted"><input id="submitChangePWGV" type="submit" class="inputButton" value="ĐÔNG Ý THAY ĐỖI"> <div class="lg-oad loading-change  is-hidden"><i class="fas fa-spinner fa-pulse"></i></div> </div>';

    });
    strText += '</form></div>';
      $(".profileGV").html(strText);

  });
}
$(".profile").ready(function() {
  profile_();
})
