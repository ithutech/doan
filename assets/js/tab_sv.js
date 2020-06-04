/*active button class onclick*/
$('nav a').click(function(e) {
  e.preventDefault();
  $('nav a').removeClass('active');
  $(this).addClass('active');
  var jsLoading = '<form class="form-view full-width"><div class="form-input box-loading">  <input class="text input input_f disabled" type="text">  </div><div class="form-input heigh-250px box-loading">  <input class="input input_f disabled" type="text">  </div> <div class="form-input box-loading">  <input class="input input_f disabled" type="text">  </div><div class="box-loading">  <input class="input input_f disabled box-loading" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="form-input-absoluted box-loading"></div> </form>';
  if (this.id === !'studentNotif') {
    $('.studentNotif').addClass('noshow');
  } else if (this.id === 'studentNotif') {
    $('.studentNotif').removeClass('noshow');
    $('.rightbox').children().not('.studentNotif').addClass('noshow');
    if ($('#article_alert_contents').html() == "") {
      var jsLoading = '<div class="row-12"> <div class="title bottom-10px title-bg-lightyellow"> <span>Đang tải tin. Xin vui lòng đợi ... </span></div> </div>';
      $('#article_alert_contents').append(jsLoading);
      article_studentNotif();
    }
  } else if (this.id === 'studentProfile') {
    $('.studentProfile').removeClass('noshow');
    $('.rightbox').children().not('.studentProfile').addClass('noshow');
    if ($('.profileSV').html() == "" || $('.profileSV').hasClass('formtest') == undefined) {
      var jsLoading = '<form class="form-view full-width"><div class="form-input box-loading">  <input class="text input input_f disabled" type="text">  </div><div class="form-input heigh-250px box-loading">  <input class="input input_f disabled" type="text">  </div> <div class="form-input box-loading">  <input class="input input_f disabled" type="text">  </div><div class="box-loading">  <input class="input input_f disabled box-loading" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="form-input-absoluted box-loading"></div> </form>';
      $('.profileSV').append(jsLoading);
      profileSV_();
    }
    // else if ($('.rightbox').children('.studentProfileGV')) {
    //   {
    //     alert('ĐÃ TẢI');
    //   }
    // }
  } else if (this.id === 'studentReport') {
    $('.studentReport').removeClass('noshow');
    $('.rightbox').children().not('.studentReport').addClass('noshow');

  }else if (this.id === 'studentReportTT') {
    $('.studentReportTT').removeClass('noshow');
    $('.rightbox').children().not('.studentReportTT').addClass('noshow');

  }
  else if (this.id === 'studentViewRp') {
    $('.studentViewRp').removeClass('noshow');
    $('.rightbox').children().not('.studentViewRp').addClass('noshow');
    studentViewRp_();
    if ($('#viewerSection').html() == "" || $('.studentViewRp').hasId('#viewerSection') == undefined) {
      var jsLoading = '<form class="form-view full-width"><div class="form-input box-loading">  <input class="text input input_f disabled" type="text">  </div><div class="form-input box-loading">  <input class="input input_f disabled" type="text">  </div> <div class="form-input box-loading">  <input class="input input_f disabled" type="text">  </div><div class="box-loading">  <input class="input input_f disabled box-loading" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="form-input-absoluted box-loading"></div> </form>';
      $('#viewerSection').append(jsLoading);
      studentViewRp_();
    }
  } else if (this.id === 'studentResult') {
    $('.studentResult').removeClass('noshow');
    $('.rightbox').children().not('.studentResult').addClass('noshow');
  } else if (this.id === 'studentGuide') {
    $('.studentGuide').removeClass('noshow');
    $('.rightbox').children().not('.studentGuide').addClass('noshow');
    if ($('.yourlecturer').html() == "" || $('.yourlecturer').hasClass('formtest') == undefined) {
      var jsLoading = '<form class="form-view full-width"><div class="form-input box-loading">  <input class="text input input_f disabled" type="text">  </div><div class="form-input box-loading">  <input class="input input_f disabled" type="text">  </div> <div class="form-input box-loading">  <input class="input input_f disabled" type="text">  </div><div class="box-loading">  <input class="input input_f disabled box-loading" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="form-input-absoluted box-loading"></div> </form>';

      $('.yourlecturer').append(jsLoading);
      yourlecturer_();
    }
  } else if (this.id === 'studentRegister') {
    $('.studentRegister').removeClass('noshow');
    $('.rightbox').children().not('.studentRegister').addClass('noshow');
  }
  else if (this.id === 'studentDocument') {
    $('.studentDocument').removeClass('noshow');
    $('.rightbox').children().not('.studentDocument').addClass('noshow');
    sv_viewFiles();
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
    var strText = '<div class="divTable"> <div class="divHeading"> <div class="cell_ith"> MSSV </div> <div class="cell_ith">Họ và tên</div> <div class="cell_ith"> Email </div> <div class="cell_ith"> Ngày sinh </div> <div class="cell_ith"> Phone SV </div> <div class="cell_ith"> Mã lớp </div> <div class="cell_ith"> Họ tên GVHD </div><div class="cell_ith"> Email GVHD </div><div class="cell_ith"> Phone GVHD </div> </div>';
    $.each(data.lookup, function(key, val) {
      strText += '<div class="row_ith">' + '<div class="cell_ith">' + val["sv-masv"] + '</div>';
      strText += '<div class="cell_ith">' + val["sv-hoten"] + '</div>';
      strText += '<div class="cell_ith">' + val["sv-email"] + '</div>';
      strText += '<div class="cell_ith">' + val["sv-birth"] + '</div>';
      strText += '<div class="cell_ith">' + val["sv-sdt"] + '</div>';
      strText += '<div class="cell_ith">' + val["sv-malop"] + '</div>';
      strText += '<div class="cell_ith">' + val["gv-hoten"] + '</div>';
      strText += '<div class="cell_ith">' + val["gv-email"] + '</div>';
      strText += '<div class="cell_ith">' + val["gv-sdt"] + '</div></div>';

    });
    strText += "</div>";
    $(".yourlecturer").html(strText);

  });
  
  
  var urltt = APIurl + getCoo56yhjkk() + "&action=stLookupTT";

  $.getJSON(urltt, function(data) {
    var strTextTT = '<div class="divTable"> <div class="divHeading"> <div class="cell_ith"> MSSV </div> <div class="cell_ith">Họ và tên</div> <div class="cell_ith"> Email </div> <div class="cell_ith"> Ngày sinh </div> <div class="cell_ith"> Phone SV </div> <div class="cell_ith"> Mã lớp </div> <div class="cell_ith"> Họ tên GVHD </div><div class="cell_ith"> Email GVHD </div><div class="cell_ith"> Phone GVHD </div> </div>';
    $.each(data.lookup, function(key, val) {
      strTextTT += '<div class="row_ith">' + '<div class="cell_ith">' + val["sv-masv"] + '</div>';
      strTextTT += '<div class="cell_ith">' + val["sv-hoten"] + '</div>';
      strTextTT += '<div class="cell_ith">' + val["sv-email"] + '</div>';
      strTextTT += '<div class="cell_ith">' + val["sv-birth"] + '</div>';
      strTextTT += '<div class="cell_ith">' + val["sv-sdt"] + '</div>';
      strTextTT += '<div class="cell_ith">' + val["sv-malop"] + '</div>';
      strTextTT += '<div class="cell_ith">' + val["gv-hoten"] + '</div>';
      strTextTT += '<div class="cell_ith">' + val["gv-email"] + '</div>';
      strTextTT += '<div class="cell_ith">' + val["gv-sdt"] + '</div></div>';

    });
    strTextTT += "</div>";
    $("#gvhdtt").html(strTextTT);

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
  var form = '<form id="form_update_cp" class="form-view col-2" onsubmit="return false;">';
  var row_ = '<div class="row-6">',
    finput = '<div class="form-input">',
    fin_Abs = '<div class="form-input-absoluted"><div class="submit-form-status">';
  var lbel = '<span class="label-input">',
    s_input_f = '</span> <input class="input input_f"';
  $.getJSON(url, function(data) {
    var strText = heading + '<div class="row-12">' + form;
    $.each(data, function(key, val) {
      strText += row_ + finput + lbel + 'Tên Công Ty:' + s_input_f + ' type="text" name="company" value="" placeholder="Nhập tên công ty" required=""> <span class="focus-input"></span> </div>';
      strText += finput + lbel + 'Website:' + s_input_f + ' type="text" name="website" value="" placeholder="Nhập website" required=""> <span class="focus-input"></span> </div>';
      strText += finput + lbel + 'Ngày bắt đầu :' + s_input_f + ' type="text" name="work_start_date" value="" placeholder="Nhập ngày bắt đầu" required=""> <span class="focus-input"></span> </div>';
      strText += finput + lbel + 'Ngày kết thúc :' + s_input_f + ' type="text" name="work_end_date" value="" placeholder="Nhập ngày kết thúc" required=""> <span class="focus-input"></span> </div>';
      strText += finput + lbel + 'SĐT người quản lý:' + s_input_f + ' type="text" name="manager_phonenumber" value="" placeholder="Nhập số điện thoại" required=""> <span class="focus-input"></span> </div></div>';
      strText += row_ + finput + lbel + 'Họ và tên người quản lý:' + s_input_f + ' type="text" name="manager_fullname"   value="" placeholder="Nhập họ và tên" required=""> <span class="focus-input"></span> </div>';
      strText += finput + lbel + 'Email người quản lý:' + s_input_f + ' type="text" name="manager_email" value="" placeholder="Nhập Email" required=""> <span class="focus-input"></span> </div>';
      strText += finput + lbel + 'Chức vụ đang làm:' + s_input_f + ' type="text" name="st_role" value="" placeholder="Nhập chức vụ đang làm" required=""> <span class="focus-input"></span> </div>';
      strText += finput + lbel + 'Vị trí công việc:' + s_input_f + ' type="text" name="st_job_position" value="" placeholder="Nhập vị trí công việc" required=""> <span class="focus-input"></span> </div></div>';
      strText += '<div class="row-12 width100" id="resultUpdateCPN"></div>'
      strText += '<div class="row-12 width100">' + fin_Abs + '<input id="submitChangeINFC" type="submit" class="inputButton btn-center" value="ĐÔNG Ý THAY ĐỖI"></div> </div> </div> </form></div>';

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
  var url = APIurl + getCoo56yhjkk() + "&content_rp=" + encodeURIComponent(content) + "&action=stReport";
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

// Sinh viên xem file thầy/cô đã chia sẻ
function sv_viewFiles(){
document.querySelector('.process-uploading').classList.remove("hidden");
var url = "https://script.google.com/macros/s/AKfycbyx-g1oJY3FKsFXZNIZY7WkSmHH82VpY1bjs8VzO_oorzdLz9M/exec?" + getCoo56yhjkk() + "&action=sv_viewFiles";


var entryTag = '<div class="release-entry"><div class="release pt-2 pt-md-0 pb-3 pb-md-0 clearfix label-latest">';
// </div>
var leftTag_Header = '<div class="d-none d-md-block flex-wrap flex-items-center col-12 col-md-3 col-lg-2 px-md-3 pb-1 pb-md-4 pt-md-4 float-left text-md-right v-align-top">';
// </div>
var leftTag_Date = '<div class="flex-auto flex-self-start"> <span class="flex-shrink-0 Label Label--outline mb-md-2 mr-2 mr-md-0 Label--outline-green"> <span class="border-0 Label--outline-green" href="#">';
//</span> </span> </div>
var leftTag_Name = '<ul class="d-none d-md-block mt-2 list-style-none"> <li class="d-block mb-1"> <svg class="octicon octicon-tag" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"> <path fill-rule="evenodd" d="M7.73 1.73C7.26 1.26 6.62 1 5.96 1H3.5C2.13 1 1 2.13 1 3.5v2.47c0 .66.27 1.3.73 1.77l6.06 6.06c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 000-1.41L7.73 1.73zM2.38 7.09c-.31-.3-.47-.7-.47-1.13V3.5c0-.88.72-1.59 1.59-1.59h2.47c.42 0 .83.16 1.13.47l6.14 6.13-4.73 4.73-6.13-6.15zM3.01 3h2v2H3V3h.01z"> </path> </svg> <span class="css-truncate-target" style="max-width: 125px">';
//</span> </li> </ul>

var rightTag_Header = '<div class="col-12 col-md-9 col-lg-10 px-md-3 py-md-4 release-main-section commit open float-left">';
//</div>
var rightTag_ReaHeader = '<div class="release-header">';
//</div>
var rightTag_RH_name = '<div class="d-flex flex-items-start"> <div class="f1 flex-auto min-width-0 text-normal"> <h2 style="font-size: 20px; padding-bottom: 5px;">';
//</a> </div> </div>

var rightTag_RH_info = '<p class="f5 text-gray mt-2 mt-md-1 mb-2 mb-md-4"> <img class="avatar" src="https://img.icons8.com/wired/64/000000/human-head.png" width="20" height="20"> <span class="text-bold text-gray">Giảng viên hướng dẫn của bạn</span> Đã đăng tải vào ngày <relative-time class="no-wrap">';

//</relative-time> </p>

var rightTag_entry_content = '<div class="markdown-body" id="entry_release_content">';

var rightTag_detail_file = '<details class="details-reset Details-element border-top pt-3 mt-4 mb-2 mb-md-4" open=""> <summary> <div class="d-flex flex-items-center"> <span class="mr-2 Details-content--closed"><svg class="octicon octicon-triangle-right" viewBox="0 0 6 16" version="1.1" width="6" height="16" aria-hidden="true"> <path fill-rule="evenodd" d="M0 14l6-6-6-6v12z"></path> </svg></span> <span class="mr-2 Details-content--open"><svg class="octicon octicon-triangle-down" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"> <path fill-rule="evenodd" d="M0 5l6 6 6-6H0z"></path> </svg></span> <span class="text-bold">File đính kèm</span> </div> </summary>';

var rightTag_view_file = '<div class="Box Box--condensed mt-3">';
// </div>

var fileview = '<div class="d-block py-1 py-md-2 Box-body px-2">';

//</div>
var svg_icon = '<svg class="octicon octicon-file-zip flex-shrink-0 text-gray" width="16" height="16" viewBox="0 0 12 16" version="1.1" aria-hidden="true"> <path fill-rule="evenodd" d="M8.5 1H1a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V4.5L8.5 1zM11 14H1V2h3v1h1V2h3l3 3v9zM5 4V3h1v1H5zM4 4h1v1H4V4zm1 2V5h1v1H5zM4 6h1v1H4V6zm1 2V7h1v1H5zM4 9.28A2 2 0 003 11v1h4v-1a2 2 0 00-2-2V8H4v1.28zM6 10v1H4v-1h2z"> </path> </svg>';
var file_description = "";
var entry_description = [], markd_e_dc =[];
$.getJSON(url, function(data) {
  // var result = "";

  var fileContent = "", fileid = "";
  $.each(data.lookup, function(key, val) { fileid = val.fileid;
     fileContent += entryTag + leftTag_Header + leftTag_Date + val.timerelease+ '</span> </span> </div>';
     fileContent += leftTag_Name + val.fileid + '</span> </li> </ul></div>';
     fileContent += rightTag_Header + rightTag_ReaHeader + rightTag_RH_name + val.contenttitle + '</h2> </div> </div>';
     fileContent += rightTag_RH_info + val.timerelease + '</relative-time> </p></div>';
     entry_description.push(val.fileid);
     markd_e_dc.push(val.contentrelease);
     fileContent += '<div class="markdown-body entry_description_'+val.fileid+'"></div>';
     fileContent += rightTag_detail_file + rightTag_view_file + fileview;
     fileContent += '<a href="'+val.fileurl+'" rel="nofollow" class="d-flex flex-items-center" target="_blank">' + svg_icon + '<span class="px-1 text-bold">'+val.filename+'</span> (Xem File .DOCX, .PDF, .TXT, ...)</a></div>';
     fileContent += fileview + '<a href="'+val.filedownload+'" rel="nofollow" class="d-flex flex-items-center">' + svg_icon + '<span class="px-1 text-bold">'+val.filename+'</span> (Tải Xuống)</a></div>'

     // Endtag
     fileContent += '</div></div></div>';
  });
if(fileid == null ||fileid == "")
{
  document.querySelector('.process-uploading').classList.add("hidden");
  return $("#filePostContent").html('<h2 class="error"><strong>Lỗi 404: </strong>Không tìm thấy thông tin</h2>');
}
$("#filePostContent").html(fileContent);
 for(var i =  0; i < entry_description.length; i++)
 {
   tui.Editor.factory({
         el: document.querySelector('.entry_description_'+entry_description[i]),
         viewer: true,
         initialValue: markd_e_dc[i]
       });
 }document.querySelector('.process-uploading').classList.add("hidden");
});

}

// Report for student `var content = editor.getValue();`
$("#submitREPORTTT").click(function(event) {
  
  var contenttt = tteditor.getValue();
  if (contenttt.length == "" || contenttt.length <= 20)
    return alert('Bài báo cáo quá ngắn hoặc bạn chưa nhập nội dung');
//     document.querySelector(".form-input-absoluted .loading-change-report").classList.remove("is-hidden");
 document.querySelector(".form-input-absoluted .submit-tt").classList.remove("is-hidden");
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzYPTjObWfAe0sBQrCCjPN1FjYxdJ1Vp178WIN5rrnUeRlzw4ft/exec?request=stReportTT&" + getCoo56yhjkk(),
    type: "post",
    data: {
     
      "content_rptt": contenttt,
    },
    jsonp: "callback",
    success: function(response) {
//           document.querySelector(".form-input-absoluted .loading-change-report").classList.add("is-hidden");
 document.querySelector(".form-input-absoluted .submit-tt").classList.add("is-hidden");
      alert(response.result);

    }
  });
})

// Submit change info company
    $("#submitChangeINFC").click(function(event) {

      var form_info_cp = $("#form_update_cp");
      var formData = new FormData(form_info_cp);
      var url = APIurl + "&action=stUpdate_C_INFO";
      document.querySelector(".form-input-absoluted .submit-form-status").classList.add('disabled');
      $.ajax({
        type: "post",
        url: url,
        data: formData, // serializes the form's elements.
        contentType: false,
        processData: false,
        success: function(data) {
          document.querySelector(".form-input-absoluted .submit-form-status").classList.remove('disabled');
          return alert(data.result); // show response from the GAS script.
        }
      });
    });
