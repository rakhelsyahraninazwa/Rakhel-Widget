<template>
    <div class="stopwatch-widget">
      <h2 class="widget-title">Stopwatch</h2>
      <p class="time">{{ formatTime }}</p>
      <div class="button-group">
        <button @click="startStopwatch" :disabled="isRunning" class="start-button">Start</button>
        <button @click="stopStopwatch" :disabled="!isRunning" class="stop-button">Stop</button>
        <button @click="resetStopwatch" class="reset-button">Reset</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isRunning: false,
        startTime: null,
        elapsedTime: 0,
        timerInterval: null,
      };
    },
    computed: {
      formatTime() {
        const milliseconds = Math.floor((this.elapsedTime % 1000) / 10);
        const seconds = Math.floor((this.elapsedTime / 1000) % 60);
        const minutes = Math.floor((this.elapsedTime / 60000) % 60);
        const hours = Math.floor(this.elapsedTime / 3600000);
  
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
      },
    },
    methods: {
      startStopwatch() {
        if (!this.isRunning) {
          this.isRunning = true;
          this.startTime = Date.now();
  
          this.timerInterval = setInterval(() => {
            this.elapsedTime = Date.now() - this.startTime;
          }, 10);
        }
      },
      stopStopwatch() {
        if (this.isRunning) {
          this.isRunning = false;
          clearInterval(this.timerInterval);
        }
      },
      resetStopwatch() {
        this.isRunning = false;
        clearInterval(this.timerInterval);
        this.elapsedTime = 0;
      },
    },
  };
  </script>
  
  <style scoped>
  .stopwatch-widget {
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    text-align: center;
    background-color: #f2f2f2;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .widget-title {
    margin-top: 0;
    color: #333;
    font-size: 24px;
  }
  
  .time {
    font-size: 36px;
    color: #333;
    margin-bottom: 20px;
  }
  
  .button-group {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin: 0 10px;
  }
  
  button:hover {
    background-color: #0069d9;
  }
  
  button:disabled {
    background-color: #ccc;
    color: #999;
    cursor: not-allowed;
  }
  </style>
  