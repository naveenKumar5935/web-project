const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
        var a = JSON.parse(this.responseText);
        console.log(a.data.recovered);

        var conf = document.getElementById("conf");
        conf.innerHTML="Confirmed: "+a.data.confirmed;

        var rec = document.getElementById("rec");
        rec.innerHTML="Recovered: "+a.data.recovered;

        var death = document.getElementById("death");
        death.innerHTML="Deaths: "+a.data.deaths;
	}
});

xhr.open("GET", "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Canada");
xhr.setRequestHeader("x-rapidapi-key", "1366f543a7msh7eee114a160410ep1ce807jsnf5a600f6ba09");
xhr.setRequestHeader("x-rapidapi-host", "covid-19-coronavirus-statistics.p.rapidapi.com");

xhr.send(data);