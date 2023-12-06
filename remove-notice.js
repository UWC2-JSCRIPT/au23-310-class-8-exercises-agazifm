//class exercise

document.addEventListener("DOMContentLoaded", function () {
    // Function to remove the notice
    const removeMaintenanceNotice = function () {
      const maintenanceEL = document.getElementById('maintenance-notice');
      maintenanceEL.classList.add('d-done');
    };
  
setTimeout (removeMaintenanceNotice, 5000);

});