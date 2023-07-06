<template>
  <div class="weather-widget">
    <h2 class="widget-title">CUACA</h2>
    <div class="location-input">
      <label for="location">Enter Location:</label>
      <input type="text" id="location" v-model="location" class="form-control" />
      <button @click="fetchWeatherData" class="btn btn-primary">Get Weather</button>
    </div>
    <div v-if="weatherData" class="weather-data">
      <p class="location"><i class="fas fa-map-marker-alt"></i> {{ weatherData.name }}</p>
      <p v-if="weatherData.main" class="temperature">
        <i class="fas fa-thermometer-half"></i> {{ weatherData.main.temp }}°C
      </p>
      <p v-if="weatherData.weather" class="description">
        <i class="fas fa-cloud"></i> {{ weatherData.weather[0].description }}
      </p>
    </div>
    <p v-else>Loading weather data...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: '',
      weatherData: null
    };
  },
  methods: {
    async fetchWeatherData() {
      try {
        const apiKey = 'b7bfca7b27a3485144fea086c50d09dc';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        this.weatherData = data;
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  }
};
</script>

<style scoped>
.weather-widget {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.widget-title {
  margin-top: 0;
  color: #333;
}

.location-input {
  margin-bottom: 10px;
}

.location-input label {
  display: block;
  margin-bottom: 5px;
  color: #333;
  font-size: 16px;
}

.weather-data {
  margin-top: 10px;
}

.location {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.temperature {
  font-size: 24px;
  color: #ff5722;
}

.description {
  font-size: 16px;
  color: #555;
  margin-top: 10px;
}

.fa-map-marker-alt,
.fa-thermometer-half,
.fa-cloud {
  margin-right: 5px;
}
</style>
