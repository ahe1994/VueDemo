var weatherApp = new Vue({
    el: "#weatherApp",
    data: {
        city: "北京",
        weathers: [],
    },
    methods: {
        queryWeather: function(){
            var weatherAppObj = this;
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city="+this.city)
            .then(function(response){
                weatherAppObj.weathers = response.data.data.forecast;
                console.log(weatherAppObj.weathers);
            })
            .catch(function(err){
                console.log(err);
            })
        }
    }
})