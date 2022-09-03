const submitBtn = document.getElementById("submitbtn");
const cityName = document.getElementById("cityname")
const city_Name = document.getElementById("city_name")
const temp = document.getElementById("temp")
const tempStatus = document.getElementById("temp_status")
const dataHide = document.querySelector(".middle_layer")

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_Name.innerText = `Please write the city-name before you search`
        dataHide.classList.add('data_hide')
    } else {
        try {

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=9e7749cebda851d090064be0d9476adc`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data]

            city_Name.innerText = `${arrData[0].name},${arrData[0].sys.country}`
            temp.innerHTML = `<p><span>${(arrData[0].main.temp-273.15).toFixed(2)}</span><sup>o</sup>C</p>`

            // console.log(data);
            const tempMod = arrData[0].weather[0].main;

            if (tempMod === "Clear") {
                tempStatus.innerHTML = `<i class='fas fa-sun' style='color:#eccc68'></i>`
            }
            else if (tempMod === "Clouds") {
                tempStatus.innerHTML = `<i class='fas fa-cloud' style='color:#f1f2f6'></i>`
            }
            else if (tempMod === "Rain") {
                tempStatus.innerHTML = `<i class='fas fa-rain' style='color:#a4b0be'></i>`
            }
            else {
                tempStatus.innerHTML = `<i class='fas fa-cloud' style='color:#f1f2f6'></i>`
            }

            dataHide.classList.remove('data_hide')

        } catch (error) {
            city_Name.innerText = `Please wtite the correct spellings`
            dataHide.classList.add('data_hide')
        }

    }
}

submitBtn.addEventListener('click', getInfo)