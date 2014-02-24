document.addEventListener('DOMContentLoaded', function () {
    
  var textarea = document.createElement("textarea");
  textarea.style.position = "absolute"
  textarea.style.left = "-100%"
  
  textarea.value = "r\xE9sum\xE9";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("Copy");
  document.body.removeChild(textarea);

  alert('finished');
});
