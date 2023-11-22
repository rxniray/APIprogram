/************************************ 
--Отримання даних зі сторонніх API--
-------Отримання геоданих-----------
************************************/
//Призначення константи до блоку, для того щоб ми моглм змінювати вміст 
const geoBlock = document.querySelector('#geo');
//Нижче зроблена функція, що завантажує дані з сайту
async function loadGeo(){
    //Нижче написананий невелчкий блок, що буде виводитись при завантажені
    geoBlock.innerHTML = `<div class="load__block"><h1>LOADING...</h1></div>`
    //Оголошуємо зміну сервер для підключення
    let server = 'https://get.geojs.io/v1/ip/geo.json';
    let responce = await fetch(server, { method: 'GET', }); //Отримуємо дані 
    const responceResult = await responce.json();           //Отримуємо резульатат отримання даних
    if (responce.ok){
        getGeo(responceResult) //якщо результат отримання даних істиний то виконуємо функцію getGeo, яку створюємо нижче
    } else {
        geoBlock.innerHTML = responceResult.massage; //якщо результат остримання даних не успішний, то виводиться вікно завантаження
    }
}
//Присвоюємо до блоку завантаження даних 
if (geoBlock){
    loadGeo();
}
//Створюємо функуію що вписували вище, для отримання даних
function getGeo(data){
    //console.log(data); <-- Вивід у консоль отриманих даних
    const geoContinentCode = data.continent_code; //Створення констант та присвоєння до них данних
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
    //Створення константи з тегами HTML, які будуть виводитись
    const template = `
    <div class="geo__header">
        <h1>--YOUR INFO--</h1>
    </div>
    <div class="categories-data">
        <h1>Adress:</h1>
    </div>
    <div class="grean-line"></div>
    <div class="geo-lists">
        <ul>
            <li><div><h2>//Continent Code:          </h2></div></li>
            <li><div><h2>//Country Code:            </h2></div></li>
            <li><div><h2>//Country:                 </h2></div></li>
            <li><div><h2>//Region:                  </h2></div></li>
            <li><div><h2>//City:                    </h2></div></li>
            <li><div><h2>//Timezone:                </h2></div></li>
        </ul>
        <ul>
            <li><div><h2>${geoContinentCode}</h2></div></li>
            <li><div><h2>${geoCountryCode}</h2></div></li>
            <li><div><h2>${geoCountry}</h2></div></li>
            <li><div><h2>${geoRegion}</h2></div></li>
            <li><div><h2>${geoCity}</h2></div></li>
            <li><div><h2>${geoTimezone}</h2></div></li>
        </ul>
    </div>
    <div class="grean-line"></div>
    <div class="categories-data">
        <h1>Internet Data:</h1>
    </div>
    <div class="grean-line"></div>
    <div class="geo-lists"> 
        <ul>
            <li><div><h2>//IP:                       </h2></div></li>
            <li><div><h2>//Provider:                 </h2></div></li>
            <li><div><h2>//Autonomous System Number: </h2></div></li>
        </ul>
        <ul>
            <li><div><h2>${geoIp}</h2></div></li>
            <li><div><h2>${geoProvider}</h2></div></li>
            <li><div><h2>${geoAutonomousSystemNumber}</h2></div></li>
        </ul>
    </div>
    <div class="grean-line"></div>
    <div class="categories-data">
        <h1>Location:</h1>
    </div>
    <div class="grean-line"></div>
    <div class="geo-lists"> 
        <ul>
            <li><div><h2>//Latitude:                  </h2></div></li>
            <li><div><h2>//Longitude:                 </h2></div></li>
        </ul>
        <ul>
            <li><div><h2>${geoLatitude}</h2></div></li>
            <li><div><h2>${geoLongitude}</h2></div></li>
        </ul>
    </div>
    `
    geoBlock.innerHTML = template; //Вивід створеного шаблону HTML з даними
}

