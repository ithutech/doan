/*active button class onclick*/
$('nav a').click(function(e) {
  e.preventDefault();
  $('nav a').removeClass('active');
  $(this).addClass('active');
  var jsLoading = '<form class="form-view full-width"><div class="form-input box-loading">  <input class="text input input_f disabled" type="text">  </div><div class="form-input heigh-250px box-loading">  <input class="input input_f disabled" type="text">  </div> <div class="form-input box-loading">  <input class="input input_f disabled" type="text">  </div><div class="box-loading">  <input class="input input_f disabled box-loading" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="form-input-absoluted box-loading"></div> </form>';
  if(this.id === !'studentNotif'){
    $('.studentNotif').addClass('noshow');
  }
  else if(this.id === 'studentNotif') {
    $('.studentNotif').removeClass('noshow');
    $('.rightbox').children().not('.studentNotif').addClass('noshow');

  }
  else if (this.id === 'studentProfile') {
    $('.studentProfile').removeClass('noshow');
    $('.rightbox').children().not('.studentProfile').addClass('noshow');
    if($('.profileSV').html() == "" || $('.profileSV').hasClass('formtest') == undefined)
    {
      var jsLoading = '<form class="form-view full-width"><div class="form-input box-loading">  <input class="text input input_f disabled" type="text">  </div><div class="form-input heigh-250px box-loading">  <input class="input input_f disabled" type="text">  </div> <div class="form-input box-loading">  <input class="input input_f disabled" type="text">  </div><div class="box-loading">  <input class="input input_f disabled box-loading" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="form-input-absoluted box-loading"></div> </form>';
      $('.profileSV').append(jsLoading);
      profileSV_();
    }
    // else if ($('.rightbox').children('.studentProfileGV')) {
    //   {
    //     alert('ĐÃ TẢI');
    //   }
    // }
  }
  else if(this.id === 'studentReport') {
    $('.studentReport').removeClass('noshow');
    $('.rightbox').children().not('.studentReport').addClass('noshow');

  }
    else if(this.id === 'studentViewRp') {
    $('.studentViewRp').removeClass('noshow');
    $('.rightbox').children().not('.studentViewRp').addClass('noshow');studentViewRp_();
    if($('#viewerSection').html() == "" || $('.studentViewRp').hasId('#viewerSection') == undefined)
    {
      var jsLoading = '<form class="form-view full-width"><div class="form-input box-loading">  <input class="text input input_f disabled" type="text">  </div><div class="form-input box-loading">  <input class="input input_f disabled" type="text">  </div> <div class="form-input box-loading">  <input class="input input_f disabled" type="text">  </div><div class="box-loading">  <input class="input input_f disabled box-loading" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="box-loading">  <input class="input input_f" type="text">  </div><div class="form-input-absoluted box-loading"></div> </form>';
      $('#viewerSection').append(jsLoading);
      studentViewRp_();
    }
  }
  else if(this.id === 'studentResult') {
    $('.studentResult').removeClass('noshow');
    $('.rightbox').children().not('.studentResult').addClass('noshow');
  }
  else if(this.id === 'studentGuide') {
    $('.studentGuide').removeClass('noshow');
    $('.rightbox').children().not('.studentGuide').addClass('noshow');
    if($('.yourlecturer').html() == "" || $('.yourlecturer').hasClass('formtest') == undefined)
    {
      $('.yourlecturer').append(jsLoading);
      yourlecturer_();
    }
  }
  else if(this.id === 'studentRegister') {
    $('.studentRegister').removeClass('noshow');
    $('.rightbox').children().not('.studentRegister').addClass('noshow');
    if($('.registerTOPIC').html() == "" )
    {
      $('.registerTOPIC').append(jsLoading);
    }
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
  if(getCoo56yhjkk() == undefined)
  return;
  var url = APIurl  + getCoo56yhjkk() + "&action=stLookup";

  $.getJSON(url, function(data) {
    var strText = '<div class="divTable"> <div class="divHeading"> <div class="cell_ith"> MSSV </div> <div class="cell_ith">Họ và tên</div> <div class="cell_ith"> Email </div> <div class="cell_ith"> Ngày sinh </div> <div class="cell_ith"> Phone SV </div> <div class="cell_ith"> Mã lớp </div> <div class="cell_ith"> Họ tên GVHD </div><div class="cell_ith"> Email GVHD </div><div class="cell_ith"> Phone GVHD </div> </div>';
    $.each(data.lookup, function(key, val) {
      strText += '<div class="row_ith">'+ '<div class="cell_ith">'+ val["sv-masv"] + '</div>';
      strText += '<div class="cell_ith">' +val["sv-hoten"] + '</div>';
      strText += '<div class="cell_ith">' +val["sv-email"] + '</div>';
      strText += '<div class="cell_ith">' +val["sv-birth"] + '</div>';
      strText += '<div class="cell_ith">' +val["sv-sdt"] + '</div>';
      strText += '<div class="cell_ith">' +val["sv-malop"] + '</div>';
      strText += '<div class="cell_ith">' +val["gv-hoten"] + '</div>';
      strText += '<div class="cell_ith">' +val["gv-email"] + '</div>';
      strText += '<div class="cell_ith">' +val["gv-sdt"]  + '</div></div>';

    });
    strText += "</div>";
      $(".yourlecturer").html(strText);

  });
}

$(".yourlecturer").ready(function() {
  yourlecturer_();
})

function profileSV_(){
  if(getCoo56yhjkk() == undefined)
  return;
  var url = APIurl  + getCoo56yhjkk() + "&action=stprofile";
  var strOFI = '<div class="form-input validate-input" data-validate="';
  $.getJSON(url, function(data) {
    var strText = '<div class="formtest"> <form class="form-view" onsubmit="return false;">';
    $.each(data, function(key, val) {
      strText += strOFI+'Vui lòng nhập họ tên \"> <span class="label-input">Họ và tên:</span> <input class="input input_f disabled" type="text" value="'+val[0]["sv-mssv"]+'" placeholder="Nhập họ và tên" required> <span class="focus-input"></span> </div>';
      strText += strOFI+'Nhập họ tên \"> <span class="label-input">Họ và tên:</span> <input class="input input_f disabled" type="text" value="'+ val[0]["sv-hoten"]+'" placeholder="Nhập họ tên" required> <span class="focus-input"></span> </div>'  ;
      strText += strOFI+'Số điện thoại là bắt buộc \"> <span class="label-input">Email:</span> <input class="input input_f disabled" type="text" value="'+ val[0]["sv-email"]+'" placeholder="Nhập email" required> <span class="focus-input"></span> </div>';
      strText += strOFI+'Số điện thoại là bắt buộc \"> <span class="label-input">Số điện thoại:</span> <input class="input input_f disabled" type="text" value="'+ val[0]["sv-phone"]+'" placeholder="Nhập số điện thoại" required> <span class="focus-input"></span> </div>';
      strText += strOFI+'Số điện thoại là bắt buộc \"> <span class="label-input">Ngày sinh:</span> <input class="input input_f disabled" type="text" value="'+ val[0]["sv-birth"]+'" placeholder="Nhập ngày sinh" required> <span class="focus-input"></span> </div>';
      strText += strOFI+'Số điện thoại là bắt buộc \"> <span class="label-input">Lớp:</span> <input class="input input_f disabled" type="text" value="'+ val[0]["sv-lop"]+'" placeholder="Nhập số điện thoại" required> <span class="focus-input"></span> </div>';
      strText += strOFI+'Nhập mật khẩu cũ \"> <span class="label-input">Nhập mật khẩu cũ:</span> <input class="input input_f" type="password" name="phone" placeholder="Nhập mật khẩu cũ" required> <span class="focus-input"></span> </div><div class="form-input validate-input" data-validate="Nhập mật khẩu mới"> <span class="label-input">Nhập mật khẩu mới:</span> <input class="input input_f" type="password" name="phone" placeholder="Nhập mật khẩu mới" required> <span class="focus-input"></span> </div><div class="form-input-absoluted"><input id="submitChangePWGV" type="submit" class="inputButton btn-left" value="ĐÔNG Ý THAY ĐỖI"><span id="submitChangeInf_Comp" class="inputButton btn-left" onclick="modelDetails();">CẬP NHẬT THÔNG TIN CÔNG TY HD THỰC TẬP</span> <div class="lg-oad loading-change  is-hidden"><i class="fas fa-spinner fa-pulse"></i></div> </div> </div>';

    });
    strText += '</form></div>';
      $(".profileSV").html(strText);

  });
}
$(".profileSV").ready(function() {
  profileSV_();
})
function modelDetails(){
  $(".modelDetails").css("display","block");
  if($('.infoCompanySV').html() == "" || $('.modelDetails').hasClass('infoCompanySV') == undefined)
  {
    var jsLoading = '<form class="form-view full-width gap-top"><div class="form-input box-loading width50">    </div><div class="form-input validate-input box-loading width75">    </div><div class="form-input validate-input box-loading">    </div><div class="form-input validate-input box-loading heightx100">    </div><div class="box-loading width25">    </div> </form>';
    $('.infoCompanySV').append(jsLoading);
    infoCompanySV_()

  }

}

$('.modelDetails').ready(function() {
  var span = document.getElementsByClassName('modelDetails-close')[0];
  span.onclick = function() {
    $('.modelDetails').css("display","none");
  }
});

function infoCompanySV_(){
  if(getCoo56yhjkk() == undefined)
  return;
  var url = APIurl  + getCoo56yhjkk() + "&action=stprofile";
  var heading = '<div class="row-12"><div class="row-center"> <h2>CẬP NHẬT THÔNG TIN CÔNG TY THỰC TẬP DÀNH CHO SINH VIÊN</h2> </div> </div>';
  var form = '<form class="form-view col-2" onsubmit="return false;">';
  var row_ = '<div class="row-6">', finput = '<div class="form-input">',fin_Abs= '<div class="form-input-absoluted">';
  var lbel = '<span class="label-input">',s_input_f ='</span> <input class="input input_f"';
  $.getJSON(url, function(data) {
    var strText = heading + '<div class="row-12">' + form;
    $.each(data, function(key, val) {
       strText +=row_+ finput + lbel +'Tên Công Ty:'+ s_input_f + ' type="text" value="" placeholder="Nhập tên công ty" required=""> <span class="focus-input"></span> </div>';
       strText += finput +lbel+'Website:'+ s_input_f + ' type="text" value="" placeholder="Nhập website" required=""> <span class="focus-input"></span> </div>';
       strText += finput +lbel+'Ngày bắt đầu :'+ s_input_f + ' type="text" value="" placeholder="Nhập ngày bắt đầu" required=""> <span class="focus-input"></span> </div>';
       strText += finput +lbel+'Ngày kết thúc :'+ s_input_f + ' type="text" value="" placeholder="Nhập ngày kết thúc" required=""> <span class="focus-input"></span> </div>';
       strText += finput +lbel+'Họ tên người quản lý:'+ s_input_f + ' type="text" value="" placeholder="Nhập họ tên" required=""> <span class="focus-input"></span> </div>';
       strText += finput +lbel+'SĐT người quản lý:'+ s_input_f + ' type="text" value="" placeholder="Nhập số điện thoại" required=""> <span class="focus-input"></span> </div></div>';
       strText +=row_+finput +lbel+'Họ và tên người quản lý:'+ s_input_f + ' type="text" value="" placeholder="Nhập họ và tên" required=""> <span class="focus-input"></span> </div>';
       strText += finput +lbel+'Email người quản lý:'+ s_input_f + ' type="text" value="" placeholder="Nhập Email" required=""> <span class="focus-input"></span> </div>';
       strText += finput +lbel+'Chức vụ đang làm:'+ s_input_f + ' type="text" value="" placeholder="Nhập chức vụ đang làm" required=""> <span class="focus-input"></span> </div>';
       strText += finput +lbel+'Vị trí công việc:'+ s_input_f + ' type="text" value="" placeholder="Nhập vị trí công việc" required=""> <span class="focus-input"></span> </div></div>';
       strText += '<div class="row-12 width100" id="resultUpdateCPN"></div>'
       strText += '<div class="row-12 width100">' +fin_Abs+'<input id="submitChangeINFC" type="submit" class="inputButton btn-center" value="ĐÔNG Ý THAY ĐỖI"> <div class="lg-oad loading-change-company  is-hidden"><i class="fas fa-spinner fa-pulse"></i></div> </div> </div> </form></div>';

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
  if(content.length == "" || content.length <120 )
    return alert('Từ Chối');
  document.querySelector(".form-input-absoluted .loading-change-report").classList.remove("is-hidden");
  var url = APIurl + getCoo56yhjkk() +"&content_rp=" + encodeURIComponent(content) + "&action=stReport";
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
  if(getCoo56yhjkk() == undefined)
  return;
  var url = APIurl  + getCoo56yhjkk() + "&action=stViewrp";

  $.getJSON(url, function(data) {
    // var result = "";
    $.each(data.lookup, function(key, val) {

      var mdContent = "<div id='sheetsW1' class='title'>Tuần 1: val.timeW1 </div> \n\n";
mdContent += val.vrp_1 + "\n\n";
mdContent += "<div id='sheetsW2' class='title'>Tuần 2: val.timeW2 </div> \n\n";
mdContent += val.vrp_2 + "\n\n";
mdContent += "<div id='sheetsW3' class='title'>Tuần 3: val.timeW3 </div> \n\n";
mdContent += val.vrp_3 + "\n\n";
      var editor = tui.Editor.factory({
        // result +=  + val.vrp_1;
        // result += '<h1>Tuần 2: </h1>' + val.vrp_2;
        // result += '<h1>Tuần 3: </h1>' + val.vrp_3;
          el: document.querySelector('#viewerSection'),
          viewer: true,
          height: '500px',
          initialValue:mdContent,
      });
    });

  });

}

$("select.input.input_f.select_mon_hoc").change(function(){
  var selectedMonHoc = $(this).children("option:selected").val();
});
$("#submitREGTOPIC").click(function(event) {
  var e = document.getElementById('select_mon_hoc');
  var selectedMonHoc = e.options[e.selectedIndex].value;
  var topicDescription = editor_register_monhoc.getValue();
  var topicTitile = $("#topicTitile").val();
  if(topicDescription.length == "" || topicDescription.length < 2 )
    return alert('Vui lòng không để trống hoặc quá ít nội dung không hiểu đề tài');
  document.querySelector(".form-input-absoluted .loading-register-topic").classList.remove("is-hidden");
  var url = APIurl + getCoo56yhjkk() +"&topicTitile=" + topicTitile +"&selectedMonHoc=" + selectedMonHoc +"&topicDescription=" + encodeURIComponent(topicDescription) + "&action=stRegisterTOPIC";
  var strResult;
  $.getJSON(url, function(data) {
      $.each(data.output, function(key, val) {
        strResult = val.result;
      });
      document.querySelector(".form-input-absoluted .loading-register-topic").classList.add("is-hidden");
      alert(strResult);
  });
})
