let StockBodies = [
  {"name": "Kerbin", "Radius": 600000, "GravitationalParameter": 3.5316000e12, "SiderealOrbitalPeriod": 9203545, "J2": 0.002},
  {"name": "Eve", "Radius": 700000, "GravitationalParameter": 8.1717302e12, "SiderealOrbitalPeriod": 5657995, "J2": 0},
  {"name": "Moho", "Radius": 250000, "GravitationalParameter": 1.6860938e11, "SiderealOrbitalPeriod": 2215754, "J2": 0},
  {"name": "Duna", "Radius": 320000, "GravitationalParameter": 3.0136321e11, "SiderealOrbitalPeriod": 17315400, "J2": 0},
  {"name": "Jool", "Radius": 6000000, "GravitationalParameter": 2.8252800e14, "SiderealOrbitalPeriod": 104661432, "J2": 0},
  {"name": "Dres", "Radius": 138000, "GravitationalParameter": 2.1484489e10, "SiderealOrbitalPeriod": 47893063, "J2": 0},
  {"name": "Eeloo", "Radius": 210000, "GravitationalParameter": 7.4410815e10, "SiderealOrbitalPeriod": 156992048, "J2": 0},
  {"name": "Gilly", "Radius": 13000, "GravitationalParameter": 8289449.8, "SiderealOrbitalPeriod": 28255, "J2": 0},
  {"name": "Mun", "Radius": 200000, "GravitationalParameter": 6.5138398e10, "SiderealOrbitalPeriod": 138984.38, "J2": 0},
  {"name": "Minmus", "Radius": 60000, "GravitationalParameter": 1.7658000e9, "SiderealOrbitalPeriod": 1077310.4, "J2": 0},
  {"name": "Ike", "Radius": 130000, "GravitationalParameter": 1.8568369e10, "SiderealOrbitalPeriod": 65517.859375, "J2": 0},
  {"name": "Laythe", "Radius": 500000, "GravitationalParameter": 1.9620000e12, "SiderealOrbitalPeriod": 52980.879883, "J2": 0.00025},
  {"name": "Vall", "Radius": 300000, "GravitationalParameter": 2.0748150e11, "SiderealOrbitalPeriod": 105962.09, "J2": 0.00005},
  {"name": "Tylo", "Radius": 600000, "GravitationalParameter": 2.82528e12, "SiderealOrbitalPeriod": 211926.36, "J2": 0},
  {"name": "Bop", "Radius": 65000, "GravitationalParameter": 2486834944, "SiderealOrbitalPeriod": 544507.43, "J2": 0},
  {"name": "Pol", "Radius": 44000, "GravitationalParameter": 721702080, "SiderealOrbitalPeriod": 901902.62, "J2": 0}
];

let RSSBodies = [
  {"name": "Jupiter", "Radius": 69911000.0, "GravitationalParameter": 1.266865349218008e+17, "SiderealOrbitalPeriod": 374335776, "J2": 14695.62e-6},
  {"name": "Saturn", "Radius": 58232000.0, "GravitationalParameter": 3.793120749865224e+16, "SiderealOrbitalPeriod": 929596608, "J2": 16290.71e-6},
  {"name": "Neptune", "Radius": 24622000.0, "GravitationalParameter": 6835099502439672.0, "SiderealOrbitalPeriod": 5200543040, "J2": 3408.43e-6}, 
  {"name": "Uranus", "Radius": 25362000.0, "GravitationalParameter": 5793951322279009.0, "SiderealOrbitalPeriod": 2649690400, "J2": 3510.68e-6},
  {"name": "Earth", "Radius": 6371008.399999999, "GravitationalParameter": 398600435436096.0, "SiderealOrbitalPeriod": 31557600, "J2": 0.00108262545},
  {"name": "Venus", "Radius": 6051800.0, "GravitationalParameter": 324858592000000.06, "SiderealOrbitalPeriod": 19414080, "J2": 4.4044353248204983e-6},
  {"name": "Mars", "Radius": 3389500.0, "GravitationalParameter": 42828373620699.086, "SiderealOrbitalPeriod": 59356800, "J2": 0.0019566091594086663},
  {"name": "Mercury", "Radius": 2439700.0, "GravitationalParameter": 22031780000000.02, "SiderealOrbitalPeriod": 7603200, "J2": 4.4044353248204983e-6},
  {"name": "Ganymede", "Radius": 2631200.0, "GravitationalParameter": 9887834453334.145, "SiderealOrbitalPeriod": 604800, "J2": 0},
  {"name": "Titan", "Radius": 2574730.0, "GravitationalParameter": 8978138376543.0, "SiderealOrbitalPeriod": 1377792, "J2": 0},
  {"name": "Callisto", "Radius": 2410300.0, "GravitationalParameter": 7179289361397.2705, "SiderealOrbitalPeriod": 1442367, "J2": 0},
  {"name": "Io", "Radius": 1821490.0, "GravitationalParameter": 5959916033410.404, "SiderealOrbitalPeriod": 152853, "J2": 0},
  {"name": "Moon", "Radius": 1737400.0, "GravitationalParameter": 4902800066163.796, "SiderealOrbitalPeriod": 2360592, "J2": 2.0321568464952570e-04},
  {"name": "Europa", "Radius": 1560800.0, "GravitationalParameter": 3202738774922.892, "SiderealOrbitalPeriod": 306720, "J2": 0},
  {"name": "Triton", "Radius": 1352600.0, "GravitationalParameter": 1427598140725.034, "SiderealOrbitalPeriod": 507984, "J2": 0},
  {"name": "Eris", "Radius": 1163000.0, "GravitationalParameter": 1108000000000.0, "SiderealOrbitalPeriod": 17621424000, "J2": 0},
  {"name": "Pluto", "Radius": 1195000.0, "GravitationalParameter": 869613817760.8748, "SiderealOrbitalPeriod": 7824384000, "J2": 0},
  {"name": "Titania", "Radius": 788900.0, "GravitationalParameter": 226943700374.12482, "SiderealOrbitalPeriod": 752256, "J2": 0},
  {"name": "Oberon", "Radius": 761400.0, "GravitationalParameter": 205323430253.5623, "SiderealOrbitalPeriod": 1166400, "J2": 0},
  {"name": "Rhea", "Radius": 763500.0, "GravitationalParameter": 153942464353.5, "SiderealOrbitalPeriod": 390758.4, "J2": 0},
  {"name": "Iapetus", "Radius": 734300.0, "GravitationalParameter": 120512088703.29999, "SiderealOrbitalPeriod": 6848064, "J2": 0},
  {"name": "Charon", "Radius": 605000.0, "GravitationalParameter": 105879988860.18811, "SiderealOrbitalPeriod": 552134.88, "J2": 0},
  {"name": "Umbriel", "Radius": 584700.0, "GravitationalParameter": 85093380944.89388, "SiderealOrbitalPeriod": 357849, "J2": 0},
  {"name": "Ariel", "Radius": 578900.0, "GravitationalParameter": 83463444317.70477, "SiderealOrbitalPeriod": 216000, "J2": 0},
  {"name": "Dione", "Radius": 561400.0, "GravitationalParameter": 73116366487.31999, "SiderealOrbitalPeriod": 236544.768, "J2": 0},
  {"name": "Ceres", "Radius": 476200.0, "GravitationalParameter": 62632500000.0, "SiderealOrbitalPeriod": 145152000, "J2": 0},
  {"name": "Tethys", "Radius": 531000.0, "GravitationalParameter": 41211077826.409996, "SiderealOrbitalPeriod": 162000, "J2": 0},
  {"name": "Vesta", "Radius": 266000.0, "GravitationalParameter": 17288244969.3, "SiderealOrbitalPeriod": 114484800, "J2": 0.071060891954441914},
  {"name": "Enceladus", "Radius": 252100.0, "GravitationalParameter": 7211454165.826, "SiderealOrbitalPeriod": 118440, "J2": 0},
  {"name": "Miranda", "Radius": 235800.0, "GravitationalParameter": 4319516899.2321, "SiderealOrbitalPeriod": 122400, "J2": 0},
  {"name": "Mimas", "Radius": 198200.0, "GravitationalParameter": 2503524000.0, "SiderealOrbitalPeriod": 81396, "J2": 0},
  {"name": "Phobos", "Radius": 11080.0, "GravitationalParameter": 708754.6066894452, "SiderealOrbitalPeriod": 27552, "J2": 0},
  {"name": "Deimos", "Radius": 6200.0, "GravitationalParameter": 96155.69648120314, "SiderealOrbitalPeriod": 109723, "J2": 0}
];

//clear Fields
function clearFields() {
  document.getElementById('altitude').value = '';
  document.getElementById('eccentricity').value = '';
  document.getElementById('j2').value = '';
}
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.btn-danger').addEventListener('click', function() {
      clearFields();
  });
});


//modify planet option
function readBodies(system){
  if(system=='Stock')
    return StockBodies.map(body => body.name);
  else if(system=='RSS')
    return RSSBodies.map(body => body.name);
}
document.addEventListener('DOMContentLoaded', function() {
    const systemSelect = document.getElementById('system');
    const planetSelect = document.getElementById('planet');
  
    const planetOptions = {
        Stock:readBodies('Stock'),
        RealSolarSystem:readBodies('RSS')
      };
  
    function updatePlanetOptions() {
      document.getElementById('j2').value = '';
      const selectedSystem = systemSelect.value;
      const options = planetOptions[selectedSystem];
  
      planetSelect.innerHTML = '';

      options.forEach(planet => {
        const option = document.createElement('option');
        option.value = planet;
        option.textContent = planet;
        planetSelect.appendChild(option);
      });
    }
  
    updatePlanetOptions();
    systemSelect.addEventListener('change', updatePlanetOptions);
  });


//calculate result
function getBodyPropertyValue(bodies, name, property) {
  const body = bodies.find(body => body.name === name);
  return body ? body[property] : undefined;
}
function calculate() {
  var galaxy = document.getElementById('system').value;
  var planet = document.getElementById('planet').value;
  var alt = parseFloat(document.getElementById('altitude').value);
  var ecc = parseFloat(document.getElementById('eccentricity').value);
  var j2 = parseFloat(document.getElementById('j2').value);
  switch(galaxy)
  {
    case 'Stock':
      {
        var R_E = getBodyPropertyValue(StockBodies,planet,'Radius');
        var μ = getBodyPropertyValue(StockBodies,planet,'GravitationalParameter');
        var T_year = getBodyPropertyValue(StockBodies,planet,'SiderealOrbitalPeriod');
        var J2 = j2;
        var C20 = -1 * (J2 * Math.sqrt(5)) / 5;
      }break;
    case 'RealSolarSystem':
      {
        var R_E = getBodyPropertyValue(RSSBodies,planet,'Radius');
        var μ = getBodyPropertyValue(RSSBodies,planet,'GravitationalParameter');
        var T_year = getBodyPropertyValue(RSSBodies,planet,'SiderealOrbitalPeriod');
        var J2 = getBodyPropertyValue(RSSBodies,planet,'J2');
      }break;
  }

  var ρ = 2 * Math.PI / T_year;
  var SMA = alt + R_E;
  var p = SMA * (1 - ecc * ecc);
  var period = 2 * Math.PI * Math.sqrt(SMA * SMA * SMA / μ);
  var ΔΩ = period * ρ;
  var cosi = (ΔΩ * p * p) / (-3 * Math.PI * J2 * R_E * R_E);
  var inc = Math.acos(cosi);
  var degrees = inc * (180 / Math.PI);

  var result = {
    Planet: planet,
    Altitude: alt + " m",
    Inclination: degrees.toFixed(4) + "°",
    SMA: SMA.toFixed(2) + " m",
    Eccentricity: ecc.toFixed(2),
    C20: (galaxy === 'Stock' ? ("C(2,0)(cos):\t" + C20.toExponential(17)) : "")
  };

  var outputText = `Planet:\t\t${result.Planet}\n` +
                    `Altitude:\t${result.Altitude}\n` +
                    `Inclination:\t${result.Inclination}\n` +
                    `SMA:\t\t${result.SMA}\n` +
                    `Eccentricity:\t${result.Eccentricity}\n` +
                    `${result.C20}`;

  document.getElementById('resultContent').innerText = outputText;
}
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.btn-primary').addEventListener('click', function() {
    calculate();
  });
});

//lock J2 input
document.addEventListener('DOMContentLoaded', function() {
  const systemSelect = document.getElementById('system');
  const j2Input = document.getElementById('j2');

  systemSelect.addEventListener('change', function() {
    if (systemSelect.value === 'RealSolarSystem') {
      j2Input.disabled = true;
    } else {
      j2Input.disabled = false;
    }
  });

  systemSelect.dispatchEvent(new Event('change'));
});
