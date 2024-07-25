function calculate() {
  // Get form values
  var galaxy = document.getElementById('system').value;
  var planet = document.getElementById('planet').value;
  var alt = parseFloat(document.getElementById('altitude').value);
  var ecc = parseFloat(document.getElementById('eccentricity').value);
  var j2 = parseFloat(document.getElementById('j2').value);

  // Calculate
  var R_E = 6371;  // Replace with actual value
  var μ = 398600;  // Replace with actual value
  var T_year = 365.25 * 24 * 60 * 60;  // Replace with actual value
  var J2 = j2;

  var ρ = 2 * Math.PI / T_year;
  var SMA = alt + R_E;
  var p = SMA * (1 - ecc * ecc);
  var period = 2 * Math.PI * Math.sqrt(SMA * SMA * SMA / μ);
  var ΔΩ = period * ρ;
  var cosi = (ΔΩ * p * p) / (-3 * Math.PI * J2 * R_E * R_E);
  var inc = Math.acos(cosi);

  var result;
  /*if (galaxy == 'Stock') {
    var C20 = -1 * (J2 * Math.sqrt(5)) / 5;
    result = [planet, inc.toFixed(4), SMA.toFixed(2), ecc, C20.toExponential(17)];
  } else {
    result = [planet, inc.toFixed(4), SMA.toFixed(2), ecc];
  }*/
  var C20 = -1 * (J2 * Math.sqrt(5)) / 5;
  result = [planet, inc.toFixed(4), SMA.toFixed(2), ecc, C20.toExponential(17)];
  // Display result
  document.getElementById('resultContent').innerText = JSON.stringify(result);
}


document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.btn-primary').addEventListener('click', function() {
    calculate();
  });
});
