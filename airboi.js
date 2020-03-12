const V = new Vue({
  el: '#app',
  data: {
    PM25: 0,
    average: 0,
    nums: [],
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      fetch('aqi.json')
        .then(response => response.json())
        .then(results => {
          results.forEach(result => {
            this.nums.push(result.PM25);
          });
        })
        .then(() => {
          this.getAverage();
        })
        .catch(err => console.log(err));
    },
    getAverage() {
      const sum = this.nums.reduce((previous, current) => previous + current);
      const average = sum / this.nums.length;
      this.average = average;
      this.calcPM25();
    },
    calcPM25() {
      const pm1 = 0;
      const pm2 = 12;
      const pm3 = 35.4;
      const pm4 = 55.4;
      const pm5 = 150.4;
      const pm6 = 250.4;
      const pm7 = 350.4;
      const pm8 = 500.4;

      const aqi1 = 0;
      const aqi2 = 50;
      const aqi3 = 100;
      const aqi4 = 150;
      const aqi5 = 200;
      const aqi6 = 300;
      const aqi7 = 400;
      const aqi8 = 500;

      let aqipm25 = 0;

      if (this.average >= pm1 && this.average <= pm2) {
        aqipm25 = ((aqi2 - aqi1) / (pm2 - pm1)) * (this.average - pm1) + aqi1;
      } else if (this.average >= pm2 && this.average <= pm3) {
        aqipm25 = ((aqi3 - aqi2) / (pm3 - pm2)) * (this.average - pm2) + aqi2;
      } else if (this.average >= pm3 && this.average <= pm4) {
        aqipm25 = ((aqi4 - aqi3) / (pm4 - pm3)) * (this.average - pm3) + aqi3;
      } else if (this.average >= pm4 && this.average <= pm5) {
        aqipm25 = ((aqi5 - aqi4) / (pm5 - pm4)) * (this.average - pm4) + aqi4;
      } else if (this.average >= pm5 && this.average <= pm6) {
        aqipm25 = ((aqi6 - aqi5) / (pm6 - pm5)) * (this.average - pm5) + aqi5;
      } else if (this.average >= pm6 && this.average <= pm7) {
        aqipm25 = ((aqi7 - aqi6) / (pm7 - pm6)) * (this.average - pm6) + aqi6;
      } else if (this.average >= pm7 && this.average <= pm8) {
        aqipm25 = ((aqi8 - aqi7) / (pm8 - pm7)) * (this.average - pm7) + aqi7;
      }
      this.PM25 = aqipm25.toFixed(0);
    },
  },
});
