;(function () {
  var btns = document.querySelectorAll(".enroll.button");

  var toggleHandler = function toggleHandler (event) {
    for (var i = 0; i < btns.length; i++) {
      btns[i].className.replace("active", "");
    }
    var className = event.target.className.trim();
    event.target.className = className + " active";
  };

  function bindHandler (elemId) {
    document.getElementById(elemId).onclick = toggleHandler;
  }

  bindHandler("enroll_android");
  bindHandler("enroll_ios");
})();
