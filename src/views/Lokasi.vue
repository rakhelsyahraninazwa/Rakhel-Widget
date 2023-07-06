<template>
  <div class="location-widget">
    <h2 class="widget-title">Your Location</h2>
    <div v-if="latitude && longitude" class="location-info">
      <p>Latitude: {{ latitude }}</p>
      <p>Longitude: {{ longitude }}</p>
    </div>
    <div v-else class="loading-info">
      <p>Finding your location...</p>
    </div>

    <div class="location-input">
      <label for="latitude">Latitude:</label>
      <input type="text" id="latitude" v-model="inputLatitude" class="form-control" />
    </div>
    <div class="location-input">
      <label for="longitude">Longitude:</label>
      <input type="text" id="longitude" v-model="inputLongitude" class="form-control" />
    </div>

    <button @click="fetchLocationDetails" class="btn btn-primary">Find Location Details</button>

    <div v-if="foundLocation" class="location-details">
      <h3>Location Details</h3>
      <p>Country: {{ foundLocation.components.country }}</p>
      <p>City: {{ foundLocation.components.city }}</p>
      <p>Street: {{ foundLocation.components.street }}</p>
      <p>Postal Code: {{ foundLocation.components.postcode }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      latitude: null,
      longitude: null,
      inputLatitude: '',
      inputLongitude: '',
      foundLocation: null,
    };
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getPosition);
    }
  },
  methods: {
    getPosition(position) {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    },
    async fetchLocationDetails() {
      try {
        const apiKey = '92591005a7b94008909d59a64b6d2a49';
        const latitude = this.inputLatitude || this.latitude;
        const longitude = this.inputLongitude || this.longitude;
        const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          latitude + ',' + longitude
        )}&key=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          const location = data.results[0];
          this.foundLocation = location;
          console.log('Location:', location);
          // Lakukan sesuatu dengan data lokasi yang ditemukan
        }
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    },
  },
};
</script>

<style scoped>
.location-widget {
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  background-color: #f2f2f2;
}

.widget-title {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

.location-info {
  margin-top: 20px;
  color: #666;
}

.loading-info {
  margin-top: 20px;
  color: #666;
}

.location-input {
  margin-top: 20px;
}

.location-input label {
  display: block;
  margin-bottom: 5px;
  color: #333;
  font-size: 16px;
}

.location-input input {
  width: 200px;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.btn-primary {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0069d9;
}

.location-details {
  margin-top: 20px;
  text-align: left;
}

.location-details h3 {
  margin-bottom: 10px;
  color: #333;
  font-size: 18px;
}

.location-details p {
  margin: 5px 0;
  color: #666;
}
</style>
