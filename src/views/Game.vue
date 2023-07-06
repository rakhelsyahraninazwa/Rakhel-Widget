<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card mt-5">
            <div class="card-body">
              <h1 class="card-title text-center">Game Tebak Kata</h1>
              <p v-if="!gameOver" class="card-text">Tebak kata: {{ currentWord.scrambled }}</p>
              <input v-model="userGuess" class="form-control mb-2" v-bind:disabled="gameOver">
              <button v-on:click="checkGuess" class="btn btn-primary mb-2" v-bind:disabled="gameOver">Cek</button>
              <p v-if="message" class="text-center">{{ message }}</p>
              <button v-on:click="resetGame" class="btn btn-secondary btn-block" v-bind:disabled="!gameOver">Mulai Lagi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        words: [
          { word: 'jeruk', scrambled: 'kurej' },
          { word: 'apel', scrambled: 'lepa' },
          { word: 'mangga', scrambled: 'agganm' },
          { word: 'pisang', scrambled: 'nagisp' },
          { word: 'anggur', scrambled: 'rugnga' },
          { word: 'kiwi', scrambled: 'iwik' },
          { word: 'pepaya', scrambled: 'ayapep' },
          { word: 'melon', scrambled: 'nolem' }
        ],
        currentWord: {},
        userGuess: '',
        message: '',
        gameOver: false
      };
    },
    created() {
      this.getRandomWord();
    },
    methods: {
      getRandomWord() {
        const randomIndex = Math.floor(Math.random() * this.words.length);
        this.currentWord = this.words[randomIndex];
      },
      checkGuess() {
        if (this.userGuess.toLowerCase() === this.currentWord.word) {
          this.message = 'Tebakan Anda benar!';
          this.gameOver = true;
        } else {
          this.message = 'Tebakan Anda salah. Coba lagi!';
        }
      },
      resetGame() {
        this.getRandomWord();
        this.userGuess = '';
        this.message = '';
        this.gameOver = false;
      }
    }
  };
  </script>
  
  <style>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

}

.card {
  width: 100%;
  max-width: 400px;
  background: rgb(34,193,195);
background: linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(240,45,253,1) 100%);
  border: none;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

}

.card-title {
  font-size: 24px;
  color: white;
  margin-top: 20px;
  margin-bottom: 30px;
}

.card-text {
  font-size: 18px;
  color: white;
  margin-bottom: 10px;
}

.form-control {
  padding: 10px;
  border-radius: 5px;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}

.btn-primary:disabled {
  background-color: #adb5bd;
  cursor: not-allowed;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}

.btn-secondary:disabled {
  background-color: #adb5bd;
  cursor: not-allowed;
}

.btn-secondary:hover {
  background-color: #4e5459;
}

.text-center {
  text-align: center;
}


</style>
