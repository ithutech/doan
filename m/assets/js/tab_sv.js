/*active button class onclick*/
$('ul#menu a').click(function(e) {
  $("#cb-close").prop("checked", false);
  e.preventDefault();
  $('ul#menu a').removeClass('active');
  $(this).addClass('active');
  var jsLoading = '<form class="form-view full-width"><div class="form-input box-loading">  <input class="text input input_f disabled" type="text">  </div><div class="form-input heigh-250px box-loading">  <input class="input input_f disabled" type="text">  </div> <div class="form-input box-loading">  <input class="input input_f disabled" type="text">  </div><div class="box-loading">  <input class="input input_f disabled box-loading" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="form-input-absoluted box-loading"></div> </form>';
  if (this.id === !'studentNotif') {
    $('.studentNotif').addClass('noshow');
  } else if (this.id === 'studentNotif') {
    $('.studentNotif').removeClass('noshow');
    $('.mb-content').children().not('.studentNotif').addClass('noshow');
    if ($('#article_alert_contents').html() == "") {
      var jsLoading = '<div class="row-12"> <div class="title bottom-10px title-bg-lightyellow"> <span>Đang tải tin. Xin vui lòng đợi ... </span></div> </div>';
      $('#article_alert_contents').append(jsLoading);
      article_studentNotif();
    }
  } else if (this.id === 'studentProfile') {
    $('.studentProfile').removeClass('noshow');
    $('.mb-content').children().not('.studentProfile').addClass('noshow');
    if ($('.profileSV').html() == "" || $('.profileSV').hasClass('formtest') == undefined) {
      var jsLoading = '<form class="form-view full-width"><div class="form-input box-loading">  <input class="text input input_f disabled" type="text">  </div><div class="form-input heigh-250px box-loading">  <input class="input input_f disabled" type="text">  </div> <div class="form-input box-loading">  <input class="input input_f disabled" type="text">  </div><div class="box-loading">  <input class="input input_f disabled box-loading" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="form-input-absoluted box-loading"></div> </form>';
      $('.profileSV').append(jsLoading);
      profileSV_();
    }
  } else if (this.id === 'studentReport') {
    $('.studentReport').removeClass('noshow');
    $('.mb-content').children().not('.studentReport').addClass('noshow');
  }
    else if (this.id === 'studentReportTT') {
    $('.studentReportTT').removeClass('noshow');
    $('.mb-content').children().not('.studentReportTT').addClass('noshow');

  } else if (this.id === 'studentViewRp') {
    $('.studentViewRp').removeClass('noshow');
    $('.mb-content').children().not('.studentViewRp').addClass('noshow');
    studentViewRp_();
    if ($('#viewerSection').html() == "" || $('.studentViewRp').hasId('#viewerSection') == undefined) {
      var jsLoading = '<form class="form-view full-width"><div class="form-input box-loading">  <input class="text input input_f disabled" type="text">  </div><div class="form-input box-loading">  <input class="input input_f disabled" type="text">  </div> <div class="form-input box-loading">  <input class="input input_f disabled" type="text">  </div><div class="box-loading">  <input class="input input_f disabled box-loading" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="form-input-absoluted box-loading"></div> </form>';
      $('#viewerSection').append(jsLoading);
      studentViewRp_();
    }
  } else if (this.id === 'studentResult') {
    $('.studentResult').removeClass('noshow');
    $('.mb-content').children().not('.studentResult').addClass('noshow');
  } else if (this.id === 'studentGuide') {
    $('.studentGuide').removeClass('noshow');
    $('.mb-content').children().not('.studentGuide').addClass('noshow');
    if ($('.yourlecturer').html() == "" || $('.yourlecturer').hasClass('formtest') == undefined) {
      var jsLoading = '<form class="form-view full-width"><div class="form-input box-loading">  <input class="text input input_f disabled" type="text">  </div><div class="form-input box-loading">  <input class="input input_f disabled" type="text">  </div> <div class="form-input box-loading">  <input class="input input_f disabled" type="text">  </div><div class="box-loading">  <input class="input input_f disabled box-loading" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="form-input-absoluted box-loading"></div> </form>';

      $('.yourlecturer').append(jsLoading);
      yourlecturer_();
    }
  } else if (this.id === 'studentRegister') {
    $('.studentRegister').removeClass('noshow');
    $('.mb-content').children().not('.studentRegister').addClass('noshow');
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

function yourlecturer_() {
  if (getCoo56yhjkk() == undefined)
    return;
  var url = APIurl + getCoo56yhjkk() + "&action=stLookup";

  $.getJSON(url, function(data) {
    var strText = '<div class="title"> <h2 style="text-align:center">Thông tin giảng viên hướng dẫn</h2> </div><table class="table-ithutech">';
    $.each(data.lookup, function(key, val) {
      strText += '<tr><th>MSSV: </th>' + '<td>'+ val["sv-masv"] + '</td>';
      strText += '<tr><th>Họ và tên: </th>' + '<td>'+ val["sv-hoten"] + '</td>';
      strText += '<tr><th>Email: </th>' + '<td>'+ val["sv-email"] + '</td>';
      strText += '<tr><th>Ngày sinh: </th>' + '<td>'+ val["sv-birth"] + '</td>';
      strText += '<tr><th>Số điện thoại: </th>' + '<td>'+ val["sv-sdt"] + '</td>';
      strText += '<tr><th>Mã lớp: </th>' + '<td>'+ val["sv-malop"] + '</td>';
      strText += '<tr><th>Họ và tên GVHD: </th>' + '<td>'+ val["gv-hoten"] + '</td>';
      strText += '<tr><th>Email GVHD: </th>' + '<td>'+ val["gv-email"] + '</td>';
      strText += '<tr><th>SĐT GVHD: </th>' + '<td>'+ val["gv-sdt"] + '</td>';


    });
    strText += "</table>";
    $(".yourlecturer").html(strText);

  });
  
  var urltt = APIurl + getCoo56yhjkk() + "&action=stLookupTT";

  $.getJSON(urltt, function(data) {
    var strTextTT = '<div class="title"> <h2 style="text-align:center;padding-top:10px;color:red">Thông tin giảng viên hướng dẫn thực tập</h2> </div><table class="table-ithutech">';
    $.each(data.lookup, function(key, val) {
      strTextTT += '<tr><th>MSSV: </th>' + '<td>'+ val["sv-masv"] + '</td>';
      strTextTT += '<tr><th>Họ và tên: </th>' + '<td>'+ val["sv-hoten"] + '</td>';
      strTextTT += '<tr><th>Email: </th>' + '<td>'+ val["sv-email"] + '</td>';
      strTextTT += '<tr><th>Ngày sinh: </th>' + '<td>'+ val["sv-birth"] + '</td>';
      strTextTT += '<tr><th>Số điện thoại: </th>' + '<td>'+ val["sv-sdt"] + '</td>';
      strTextTT += '<tr><th>Mã lớp: </th>' + '<td>'+ val["sv-malop"] + '</td>';
      strTextTT += '<tr><th>Họ và tên GVHD: </th>' + '<td>'+ val["gv-hoten"] + '</td>';
      strTextTT += '<tr><th>Email GVHD: </th>' + '<td>'+ val["gv-email"] + '</td>';
      strTextTT += '<tr><th>SĐT GVHD: </th>' + '<td>'+ val["gv-sdt"] + '</td>';


    });
    strTextTT += "</table>";
    $(".yourlecturerTT").html(strTextTT);

  });

}

$(".yourlecturer").ready(function() {
  yourlecturer_();
})
$(".profileSV").ready(function() {
  profileSV_();
})

function profileSV_() {
  if (getCoo56yhjkk() == undefined)
    return;
  var url = APIurl + getCoo56yhjkk() + "&action=stprofile";
  var strOFI = '<div class="form-input validate-input" data-validate="';
  $.getJSON(url, function(data) {
    var strText = '<div class="formtest"><div class="title"> <h2>Thông tin cá nhân sinh viên</h2> </div> <form class="form-view" onsubmit="return false;">';
    $.each(data, function(key, val) {
      strText += strOFI + 'Vui lòng nhập họ tên \"> <span class="label-input">Mã số sinh viên:</span> <input class="input input_f disabled" type="text" value="' + val[0]["sv-mssv"] + '" placeholder="Mã số sinh viên"> <span class="focus-input"></span> </div>';
      strText += strOFI + 'Lớp đang học \"> <span class="label-input">Lớp:</span> <input class="input input_f disabled" type="text" value="' + val[0]["sv-lop"] + '" placeholder="Lớp"> <span class="focus-input"></span> </div>';
      strText += strOFI + 'Nhập họ tên \"> <span class="label-input">Họ và tên:</span> <input id="stName" class="input input_f " type="text" value="' + val[0]["sv-hoten"] + '" placeholder="Nhập họ tên" required> <span class="focus-input"></span> </div>';
      strText += strOFI + 'Email là bắt buộc \"> <span class="label-input">Email:</span> <input id="stEmail" class="input input_f " type="text" value="' + val[0]["sv-email"] + '" placeholder="Nhập email" required> <span class="focus-input"></span> </div>';
      strText += strOFI + 'Số điện thoại là bắt buộc \"> <span class="label-input">Số điện thoại:</span> <input id="stPhone" class="input input_f " type="text" value="' + val[0]["sv-phone"] + '" placeholder="Nhập số điện thoại" required> <span class="focus-input"></span> </div>';
      strText += strOFI + 'Nhập ngày sinh \"> <span class="label-input">Ngày sinh:</span> <input id="stBirth" class="input input_f " type="text" value="' + val[0]["sv-birth"] + '" placeholder="Nhập ngày sinh" required> <span class="focus-input"></span> </div>';
      strText += '<div class="form-input-absoluted"><input id="submitstChProfile" type="submit" class="inputButton btn-left" value="ĐÔNG Ý THAY ĐỖI"><span id="submitChangeInf_Comp" class="inputButton btn-left" onclick="modelDetails();">CẬP NHẬT THÔNG TIN CÔNG TY HD THỰC TẬP</span> <div class="lg-oad loading-change-profile is-hidden"><i class="fas fa-spinner fa-pulse"></i></div> </div></form>';
      // With title hightlight
      strText += '<div class="title"> <h2>thay đổi mật khẩu</h2> </div>';
      // Change password form for student

      strText += '<form class="form-view" onsubmit="return false;">';
      strText += strOFI + 'Nhập mật khẩu cũ \"> <span class="label-input">Nhập mật khẩu cũ:</span> <input id="oldPASS" class="input input_f" type="password" name="phone" placeholder="Nhập mật khẩu cũ" required> <span class="focus-input"></span> </div><div class="form-input validate-input" data-validate="Nhập mật khẩu mới"> <span class="label-input">Nhập mật khẩu mới:</span> <input id="newPASS" class="input input_f" type="password" name="phone" placeholder="Nhập mật khẩu mới" required> <span class="focus-input"></span> </div><div class="form-input-absoluted"><input id="submitChangePW" type="submit" class="inputButton btn-left" value="ĐÔNG Ý THAY ĐỖI MẬT KHẨU"> <div class="lg-oad loading-change is-hidden"><i class="fas fa-spinner fa-pulse"></i></div> </div> </div></div class="script_tab_sv"><script src="./assets/js/tab_profile.js"></script></div>';

    });
    strText += '</form></div>';
    $(".profileSV").html(strText);

  });
}

function modelDetails() {
  $(".modelDetails").css("display", "block");
  if ($('.infoCompanySV').html() == "" || $('.modelDetails').hasClass('infoCompanySV') == undefined) {
    var jsLoading = '<form class="form-view full-width gap-top"><div class="form-input box-loading width50">    </div><div class="form-input validate-input box-loading width75">    </div><div class="form-input validate-input box-loading">    </div><div class="form-input validate-input box-loading heightx100">    </div><div class="box-loading width25">    </div> </form>';
    $('.infoCompanySV').append(jsLoading);
    infoCompanySV_()

  }

}

$('.modelDetails').ready(function() {
  var span = document.getElementsByClassName('modelDetails-close')[0];
  span.onclick = function() {
    $('.modelDetails').css("display", "none");
  }
});



function infoCompanySV_() {
  if (getCoo56yhjkk() == undefined)
    return;
  var url = APIurl + getCoo56yhjkk() + "&action=stprofile";
  var heading = '<div class="row-12"><div class="row-center"> <h2>CẬP NHẬT THÔNG TIN CÔNG TY THỰC TẬP DÀNH CHO SINH VIÊN</h2> </div> </div>';
  var form = '<form class="form-view col-2" onsubmit="return false;">';
  var row_ = '<div class="row-6">',
    finput = '<div class="form-input">',
    fin_Abs = '<div class="form-input-absoluted">';
  var lbel = '<span class="label-input">',
    s_input_f = '</span> <input class="input input_f"';
  $.getJSON(url, function(data) {
    var strText = heading + '<div class="row-12">' + form;
    $.each(data, function(key, val) {
      strText += row_ + finput + lbel + 'Tên Công Ty:' + s_input_f + ' type="text" value="" placeholder="Nhập tên công ty" required=""> <span class="focus-input"></span> </div>';
      strText += finput + lbel + 'Website:' + s_input_f + ' type="text" value="" placeholder="Nhập website" required=""> <span class="focus-input"></span> </div>';
      strText += finput + lbel + 'Ngày bắt đầu :' + s_input_f + ' type="text" value="" placeholder="Nhập ngày bắt đầu" required=""> <span class="focus-input"></span> </div>';
      strText += finput + lbel + 'Ngày kết thúc :' + s_input_f + ' type="text" value="" placeholder="Nhập ngày kết thúc" required=""> <span class="focus-input"></span> </div>';
      strText += finput + lbel + 'Họ tên người quản lý:' + s_input_f + ' type="text" value="" placeholder="Nhập họ tên" required=""> <span class="focus-input"></span> </div>';
      strText += finput + lbel + 'SĐT người quản lý:' + s_input_f + ' type="text" value="" placeholder="Nhập số điện thoại" required=""> <span class="focus-input"></span> </div></div>';
      strText += row_ + finput + lbel + 'Họ và tên người quản lý:' + s_input_f + ' type="text" value="" placeholder="Nhập họ và tên" required=""> <span class="focus-input"></span> </div>';
      strText += finput + lbel + 'Email người quản lý:' + s_input_f + ' type="text" value="" placeholder="Nhập Email" required=""> <span class="focus-input"></span> </div>';
      strText += finput + lbel + 'Chức vụ đang làm:' + s_input_f + ' type="text" value="" placeholder="Nhập chức vụ đang làm" required=""> <span class="focus-input"></span> </div>';
      strText += finput + lbel + 'Vị trí công việc:' + s_input_f + ' type="text" value="" placeholder="Nhập vị trí công việc" required=""> <span class="focus-input"></span> </div></div>';
      strText += '<div class="row-12 width100" id="resultUpdateCPN"></div>'
      strText += '<div class="row-12 width100">' + fin_Abs + '<input id="submitChangeINFC" type="submit" class="inputButton btn-center" value="ĐÔNG Ý THAY ĐỖI"> <div class="lg-oad loading-change-company  is-hidden"><i class="fas fa-spinner fa-pulse"></i></div> </div> </div> </form></div>';

    });
    strText += '</div>';
    $(".infoCompanySV").html(strText);

  });
}
$(".infoCompanySV").ready(function() {
  infoCompanySV_();
})


// Report for student `var content = editor.getValue();`
$("#submitREPORT").click(function(event) {
  var content = editor.getValue();
  if (content.length == "" || content.length <= 20)
    return alert('Bài báo cáo quá ngắn hoặc bạn chưa nhập nội dung');
  document.querySelector(".form-input-absoluted .loading-change-report").classList.remove("is-hidden");
  var url = APIurl + getCoo56yhjkk() + "&content_rp=" + encodeURIComponent(content) + "&action=stReportTT";
  var strResult;
  $.getJSON(url, function(data) {
    $.each(data.output, function(key, val) {
      strResult = val.result;
    });
    document.querySelector(".form-input-absoluted .loading-change-report").classList.add("is-hidden");
    alert(strResult);
  });
})


// ViewerSection report
function studentViewRp_() {
  if (getCoo56yhjkk() == undefined)
    return;
  var url = APIurl + getCoo56yhjkk() + "&action=stViewrp";

  $.getJSON(url, function(data) {
    // var result = "";
    var mdContent = "",
      strView = "<div class='view-content view-content-";
    $.each(data.lookup, function(key, val) {
      for (var i = 1; i <= val.sotuan; i++) {
        var vrp = "vrp_" + i + "";var tuan = "tuan_" + i +"";
        mdContent += "<div id='sheetsW" + i + "'><div class='title'>Tuần " + i + ": "+val[tuan]+" </div> \n\n";
        mdContent += strView + i + "'>" + val[vrp] + "\n\n" + "</div></div>";
      }
    });
    var editor = tui.Editor.factory({
      el: document.querySelector('#viewerSection'),
      viewer: true,
      height: '500px',
      initialValue: mdContent
    });
  });

}

$("select.input.input_f.select_mon_hoc").change(function() {
  var selectedMonHoc = $(this).children("option:selected").val();
});
// $("#submitREGTOPIC").click(function(event) {
//   var e = document.getElementById('select_mon_hoc');
//   var selectedMonHoc = e.options[e.selectedIndex].value;
//   var topicDescription = editor_register_monhoc.getValue();
//   var topicTitile = $("#topicTitile").val();
//   if (topicDescription.length == "" || topicDescription.length < 2)
//     return alert('Vui lòng không để trống hoặc quá ít nội dung không hiểu đề tài');
//   document.querySelector(".form-input-absoluted .loading-register-topic").classList.remove("is-hidden");
//   var url = APIurl + getCoo56yhjkk() + "&topicTitile=" + topicTitile + "&selectedMonHoc=" + selectedMonHoc + "&topicDescription=" + encodeURIComponent(topicDescription) + "&action=stRegisterTOPIC";
//   var strResult;
//   $.getJSON(url, function(data) {
//     $.each(data.output, function(key, val) {
//       strResult = val.result;
//     });
//     document.querySelector(".form-input-absoluted .loading-register-topic").classList.add("is-hidden");
//     alert(strResult);
//   });
// })
$("#submitREGTOPIC").click(function(event) {
  var e = document.getElementById('select_mon_hoc');
  var selectedMonHoc = e.options[e.selectedIndex].value;
  var topicDescription = editor_register_monhoc.getValue();
  var topicTitile = $("#topicTitile").val();
  if (topicDescription.length == "" || topicDescription.length < 2)
    return alert('Vui lòng không để trống hoặc quá ít nội dung không hiểu đề tài');

  document.querySelector(".form-input-absoluted .loading-register-topic").classList.remove("is-hidden");
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzYPTjObWfAe0sBQrCCjPN1FjYxdJ1Vp178WIN5rrnUeRlzw4ft/exec?request=stDetai&" + getCoo56yhjkk(),
    type: "post",
    data: {
      "topicTitile": topicTitile,
      "selectedMonHoc": selectedMonHoc,
      "topicDescription": encodeURIComponent(topicDescription),
    },
    jsonp: "callback",
    success: function(response) {
      document.querySelector(".form-input-absoluted .loading-register-topic").classList.add("is-hidden");
      alert(response.result);

    }
  });
})
$("#article_alert_contents").ready(function() {
  article_studentNotif();
})

function article_studentNotif() {
  if (getCoo56yhjkk() == undefined)
    return alert("Bạn đã đăng xuất hoặc phiên hoạt động đã hết hạn! Xin vui lòng đăng nhập lại!");
  var url = APIurl + getCoo56yhjkk() + "&action=stXemthongbao" + "&KeyAuthor=00305";

  $.getJSON(url, function(data) {
    // icon bài viết mới
    $("#newtitle_ithutech").html(data.title["newtitle-ithutech"]);
    $("#newtime_ithutech").html(data.time["newtime-ithutech"]);
    $("#nameauthor_ithutech").html(data.author["nameauthor-ithutech"]);
    $("#newtitle").html(data.title.newtitle);
    $("#oldtitle").html(data.title.oldtitle);
    $("#newtime").html(data.time.newtime);
    $("#oldtime").html(data.time.oldtime);
    $(".nameauthor").html(data.author.nameauthor);

    var newcontent = tui.Editor.factory({
      el: document.querySelector('#newcontent'),
      viewer: true,
      initialValue: data.content.newcontent
    });
    var oldcontent = tui.Editor.factory({
      el: document.querySelector('#oldcontent'),
      viewer: true,
      initialValue: data.content.oldcontent
    });
    var newcontent_ithutech = tui.Editor.factory({
      el: document.querySelector('#newcontent_ithutech'),
      viewer: true,
      initialValue: data.content["newcontent-ithutech"]
    });
      $(".downloading").html("");

  });
}
