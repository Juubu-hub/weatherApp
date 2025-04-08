# 🌦️ Weather App  
*A minimalist, real-time weather application built with JavaScript and the OpenWeather API.*  

---

## ✨ Features  
- **Real-time weather data** (temperature, humidity, wind speed)  
- **Dynamic weather icons** (changes based on conditions: ☀️🌧️⛅)  
- **City search** (type any location worldwide)  
- **Error handling** (alerts for invalid inputs)  
- **Mobile-friendly** (responsive design)  

---

## 🛠️ Tech Stack  
- **Frontend**: Vanilla JavaScript, HTML5, CSS3  
- **API**: [OpenWeatherMap](https://openweathermap.org/api)  
- **HTTP Requests**: Axios (for fetching data)  

---

## 🚀 Quick Setup  
1. **Clone the repo**  
   ```sh
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Run the app**  
   - Open `index.html` in a browser (no server needed!).  

---

## 📝 Code Highlights  
### Dynamic Weather Icons  
```js
if (data.weather[0].main === "Clouds") {
  image.src = "./thunder-unscreen.gif"; // Example GIF for clouds
} else if (data.weather[0].main === "Clear") {
  image.src = "./clear.png"; // Sunny icon
}
// ... (other conditions)
```

### Error Handling  
```js
try {
  // API fetch logic...
} catch (error) {
  alert("Invalid input!"); // User-friendly error
  console.log(error); // Debugging
}
```

---

## 🌟 Why This Project?  
- **No frameworks** → Pure JS for lightweight performance.  
- **Beginner-friendly** → Great for learning API integration.  
- **Visual feedback** → Animated icons make it engaging.  

---

### 🎨 **Want to Contribute?**  
- Add more weather conditions (e.g., fog, haze).  
- Improve UI with CSS animations.  
- Support geolocation (auto-detect user’s weather).  

---
