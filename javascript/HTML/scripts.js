 fetch("https://jsonplaceholder.typicode.com/users")
 .then(res => res.json())
.then(users => {  
     let output="<h3>user list</h3><ul>";
    users.forEach(user => {
       output += `<li>${user.name} - ${user.email}</li>`;
    });
  output += "</ul>";
 document.body.innerHTML += output; })
 console.log("=== weather info fetcher project ===");


const citycoords = {
    "New York": { lat: 40.7128, lon: -74.0060 },
    "Los Angeles": { lat: 34.0522, lon: -118.2437 },
    "Chicago": { lat: 41.8781, lon: -87.6298 },
    "Houston": { lat: 29.7604, lon: -95.3698 },
    "Phoenix": { lat: 33.4484, lon: -112.0740 }
};


document.getElementById("fetchBtn").addEvevntListener("click", () => {
    let city = document.getElementById("cityInput").value.toLowerCase();
 
    if (!citycoords[city]) {
        document.getElementById("weather").innerText = "City not in the list!";
        return;
    }                
                                                            
    let coords = citycoords[city];
        let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;
    });

    // AJAX Fetch
 fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.current_weather) {
                document.getElementById("weather").innerHTML = `
                    <h3>Weather in ${city}</h3>
                    <p>Temperature: ${data.current_weather.temperature}°C</p>
                    <p>Wind Speed: ${data.current_weather.windspeed} km/h</p>
                    <p>Time: ${data.current_weather.time}</p>
                `;
            } else {
                document.getElementById("weather").innerText = "No data available.";
            }
        })
        .catch(err => {
            console.error(err);
            document.getElementById("weather").innerText = "Error fetching data.";

        });

       