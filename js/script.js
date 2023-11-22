
const geoBlock = document.querySelector('#geo');


async function loadGeo(){
    geoBlock.innerHTML = `
    <div class="load__block"><h1>LOADING...</h1></div>
    `

    let server = 'https://get.geojs.io/v1/ip/geo.json';
    let responce = await fetch(server, { method: 'GET', });

    const responceResult = await responce.json();

    if (responce.ok){
        getGeo(responceResult)
    } else {
        geoBlock.innerHTML = responceResult.massage; 
    }
}

function getGeo(data){
    const geoContinentCode = data.continent_code;
    const geoCountryCode = data.country_code3;
    const geoCountry = data.country;
    const geoRegion = data.region;
    const geoCity = data.city;
    const geoIp = data.ip;
    const geoProvider = data.organization;
    const geoTimezone = data.timezone;
    const geoAutonomousSystemNumber = data.asn;
    const geoLatitude = data.latitude;
    const geoLongitude = data.longitude;

    const template = `
    <div class="geo__header">
        <h1>--YOUR INFO--</h1>
    </div>
    <ul>
        <li><div><h2>//Continent Code:   ${geoContinentCode}</h2></div></li>
        <li><div><h2>//Country Code:     ${geoCountryCode}</h2></div></li>
        <li><div><h2>//Country:          ${geoCountry}</h2></div></li>
        <li><div><h2>//Region:           ${geoRegion}</h2></div></li>
        <li><div><h2>//City:             ${geoCity}</h2></div></li>
        <li><div><h2>//Timezone:         ${geoTimezone}</h2></div></li>
    </ul>
    <div class="grean-line"></div>
    <ul>
        <li><div><h2>//IP:                       ${geoIp}</h2></div></li>
        <li><div><h2>//Provider:                 ${geoProvider}</h2></div></li>
        <li><div><h2>//Autonomous System Number: ${geoAutonomousSystemNumber}</h2></div></li>
    </ul>
    <div class="grean-line"></div>
    <ul>
        <li><div><h2>//Latitude:                  ${geoLatitude}</h2></div></li>
        <li><div><h2>//Longitude:                 ${geoLongitude}</h2></div></li>
    </ul>
    `
    function addMargin(element) {
        element.style.marginLeft = "10px";
    }

    document.querySelectorAll(".ul li h2").forEach(addMargin);

    geoBlock.innerHTML = template;
}

if (geoBlock){
    loadGeo();
}