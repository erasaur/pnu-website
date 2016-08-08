;(function () {
  var btns = document.querySelectorAll(".enroll_option");

  function bindHandler (optionId) {
    var btnId = optionId + "_button";
    var option = document.getElementById(optionId);
    document.getElementById(btnId).onclick = function toggleHandler (event) {
      for (var i = 0; i < btns.length; i++) {
        btns[i].className = btns[i].className.replace("active", "");
      }
      var className = option.className.trim();
      option.className = className + " active";
    }
  }

  bindHandler("enroll_android");
  bindHandler("enroll_ios");
})();
