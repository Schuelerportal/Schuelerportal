function resizeIframe() {
    var iframe = document.getElementById('myIframe');
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
  }
  
  function loadSchedule() {
    var scheduleData = localStorage.getItem('scheduleData');
    if (scheduleData) {
      var scheduleArray = scheduleData.split('|');
      var inputs = document.querySelectorAll('.eingabe');
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = scheduleArray[i];
      }
    }
  }
  
  function saveSchedule() {
    var inputs = document.querySelectorAll('.eingabe');
    var scheduleArray = [];
    for (var i = 0; i < inputs.length; i++) {
      scheduleArray.push(inputs[i].value);
    }
    var scheduleData = scheduleArray.join('|');
    localStorage.setItem('scheduleData', scheduleData);
    return true; // Erlaube das Absenden des Formulars
  }
  
  
  window.addEventListener('load', loadSchedule);
  

  

  