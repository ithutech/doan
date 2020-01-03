$("#submitstChProfile").click(function(event) {
  var stName = $("#stName").val();
  var stEmail = $.trim($("#stEmail").val()).replace(/ /g, "");
  var stPhone = $.trim($("#stPhone").val()).replace(/ /g, "");
  var stBirth = $.trim($("#stBirth").val()).replace(/ /g, "");
  if (stEmail.length == "" || stPhone.length == "" || stBirth.length == "" || stName.length == "")
    return alert('Vui lòng không để trống nội dung');
  var strResult;
  document.querySelector(".form-input-absoluted .loading-change-profile").classList.remove("is-hidden");
  var url_stInfo = APIurl + getCoo56yhjkk() + "&name=" + stName + "&email=" + stEmail + "&phone=" + stPhone + "&birth=" + stBirth + "&action=updateinfo";
  $.getJSON(url_stInfo, function(data) {
    $.each(data.output, function(key, val) {
      strResult = val.result;
    });
    document.querySelector(".form-input-absoluted .loading-change").classList.add("is-hidden");
    alert(strResult);
  });
})

$("#submitChangePW").click(function(event) {
  var oldPASS = $.trim($("#oldPASS").val()).replace(/ /g, "");
  var newPASS = $.trim($("#newPASS").val()).replace(/ /g, "");
  if (oldPASS.length == "" || newPASS.length == "" || oldPASS.length < 5 || newPASS.length < 5)
    return alert('Mật khẩu không được bỏ trống hoặc ít hơn 5 ký tự');
  var strResult;

  document.querySelector(".form-input-absoluted .loading-change").classList.remove("is-hidden");
  var url_stPW = APIurl + getCoo56yhjkk() + "&oldPASS=" + oldPASS + "&newPASS=" + newPASS + "&action=updatepw";
  $.getJSON(url_stPW, function(data) {
    $.each(data.output, function(key, val) {
      strResult = val.result;
    });
    document.querySelector(".form-input-absoluted .loading-change").classList.add("is-hidden");
    alert(strResult);
  });

})
