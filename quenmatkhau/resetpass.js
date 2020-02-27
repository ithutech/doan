    $("#resetPassword").click(function(event) {
      var inputMSSV = $.trim($("#sendmeCode").val()).replace(/ /g, '');
      if (inputMSSV.length == "")
        return alert('Mã số sinh viên không được bỏ trống');
      $(".loading-change").removeClass("is-hidden");
	  $(".form-input-absoluted").addClass("disabled");
      setTimeout(function(){
         $(".loading-result").removeClass("is-hidden");
      }, 2000)
      var url = APIurl + "&mssv=" + inputMSSV + "&step=generateCode&action=resetpassword";
      
      $.getJSON(url, function(data) {
        $(".loading-change,.loading-result").addClass("is-hidden");
		$(".form-input-absoluted").removeClass("disabled");
        if(data.success == true){
            var htmlReset = '<form="" class="form-view" onsubmit="return false;"><div class="title bottom-10px" style="color:#FAC903"><h2>Mã code đã gửi đến email sinh viên<span id="masosinhvien" style="color:red; font-size: 16px; padding: 0 5px"></span></h2></div> <div class="form-input validate-input"> <span class="label-input">Nhập mã xác nhận</span> <input id="confirmCode" class="input input_f" type="text" name="phone" placeholder="Nhập mã xác nhận" required=""> <span class="focus-input"></span> </div><div class="form-input validate-input"> <span class="label-input">Nhập mật khẩu mới</span> <input id="newPass" class="input input_f" type="password" name="phone" placeholder="Nhập mật khẩu mới" required=""> <span class="focus-input"></span> </div> <div class="form-input validate-input"> <span class="label-input">Xác nhận mật khẩu mới:</span> <input id="confirmPass" class="input input_f" type="password" name="phone" placeholder="Xác nhận mật khẩu mới" required=""> <span class="focus-input"></span> </div> <div class="form-input-absoluted"> <input id="confirmResetPassword" type="submit" class="inputButton btn-left" value="ĐỒNG Ý THAY ĐỖI MẬT KHẨU"> <div class="lg-oad loading-change is-hidden"><i class="fas fa-spinner fa-pulse"></i></div> </div><div class="row-12 loading-result is-hidden"> <div class="title bottom-10px title-bg-green"> <span>Đang thay đổi mật khẩu... Vui lòng uống cafe chờ đợi</span></div></div></div>'
            $("#htmlRSP").html(htmlReset);}

        else
            alert(data.result);
      });
    })
	
	$("#confirmResetPassword").click(function(event) {
	  var inputMasosinhvien = $.trim($("span#masosinhvien").html()).replace(/ /g, '');
      var inputCode = $.trim($("#confirmCode").val()).replace(/ /g, '');
	  var inputnewPass = $.trim($("#newPass").val()).replace(/ /g, '');
	  var inputconfirmPass = $.trim($("#confirmPass").val()).replace(/ /g, '');

      if (inputMSSV.length == "")
        return alert('Vui lòng nhập mã xác nhận');
	  if (inputnewPass == inputconfirmPass)
        return alert('Mật khẩu không trùng khớp');
		
      $(".loading-change").removeClass("is-hidden");
	  $(".form-input-absoluted").addClass("disabled");
      setTimeout(function(){
         $(".loading-result").removeClass("is-hidden");
      }, 2000)
      var url = APIurl + "&mssv=" + inputMasosinhvien + "&step=confirmCode" + "&newPASS=" + inputnewPass + "&confirmPass=" + inputconfirmPass + "&code" + inputCode + "&action=resetpassword"
      
      $.getJSON(url, function(data) {
        $(".loading-change,.loading-result").addClass("is-hidden");
		$(".form-input-absoluted").removeClass("disabled");
            alert(data.result);
      });
    })
	