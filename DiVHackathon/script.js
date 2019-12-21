let checkName = document.getElementById('fn').value;
let submitButton =  document.getElementById('formSubmitButton');
function fillAll() {
   
    if ((checkName == null) || (checkName == "")) {
        alert('Please Fill all fields marked with asteriked sections');
        return false;
    }
}

function callNext() {
    submitButton.addEventListener('click', fillAll);
}
callNext();

function openDashboard(evt, menuTabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(menuTabName).style.display = "block";
    evt.currentTarget.className += " active";
  }




