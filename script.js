function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
 
    // Laden der Textdatei mit den Anmeldedaten
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'anmeldedaten.txt', true);
    xhr.onload = function() {
       if (xhr.status === 200) {
          var anmeldedaten = xhr.responseText;
          var lines = anmeldedaten.split('\n');
          var validCredentials = false;
 
          // Überprüfung der Anmeldeinformationen
          for (var i = 0; i < lines.length; i++) {
             var line = lines[i];
             var credentials = line.split(':');
 
             if (credentials[0] === username && credentials[1] === password) {
                // Anmeldeinformationen sind korrekt
                validCredentials = true;
                break;
             }
          }
 
          if (validCredentials) {
             // Weiterleitung zu Google.com
             window.location.href = "Home.html";
          } else {
             // Anmeldeinformationen sind ungültig
             alert("Ungültige Anmeldedaten. Bitte versuchen Sie es erneut.");
          }
       }
    };
    xhr.send();
 }
 