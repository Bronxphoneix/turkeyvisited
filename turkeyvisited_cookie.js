console.log("Hello Africa! Tell me how you're doin'");
const HOVER_COLOR = "#EFAE88"
const MAP_COLOR = "#fff2e3"
window.cities = [];
console.log(document.cookie);
d3.json('tr-cities.json').then(function (data) {
    let width = 1200; height = 800;
    let projection = d3.geoEqualEarth();
    projection.fitSize([width, height], data);
    let path = d3.geoPath().projection(projection);

    let svg = d3.select("#map_container").append('svg').attr("width", width).attr("height", height);


    let g = svg.append('g').selectAll('path').data(data.features).join('path').attr('d', path).attr('fill', MAP_COLOR).attr('stroke', '#000').attr('id', function (d) {
            return d.properties.name;
        }).attr('paint', 'No')
        .on("mouseover", function (d, i) {
            d3.select(this).attr("fill", HOVER_COLOR)
        })

        .on("mouseout", function (d, i) {
			if ( d3.select(this).attr("paint") == 'Yes' ) {
				d3.select(this).attr("fill", HOVER_COLOR)
			} else {
				d3.select(this).attr("fill", MAP_COLOR)
			}
			
        })
        .on("click", function (d, i) {
            if ( d3.select(this).attr("paint") == 'No' ) {
				window.cities.push(d.properties.name);
                d3.select(this).attr("fill", HOVER_COLOR);
                d3.select(this).attr("paint", 'Yes');
				document.cookie = cities;
            } else {
                d3.select(this).attr("fill", MAP_COLOR);
                d3.select(this).attr("paint", 'No');
				for( var i = 0; i < window.cities.length; i++){ 
				if ( window.cities[i] === d.properties.name) { window.cities.splice(i, 1); }
				}
				document.cookie = cities;
				if(cities.length === 0){ document.cookie = "Ankara" }
				console.log(cities.length);

            }
        });
		
if (document.cookie !=""){		
window.cities = document.cookie.split(",");
	for (var i = 0; i < cities.length; i++) {
	document.getElementById(cities[i]).setAttribute("fill", HOVER_COLOR)
	document.getElementById(cities[i]).setAttribute("paint", 'Yes')

	}		
}
    g = svg.append('g')

    g
        .selectAll("text")
        .data(data.features)
        .enter()
        .append("text")
        .text(function (d) {
            return d.properties.name;
        })
        .attr("x", function (d) {
            return path.centroid(d)[0];
        })
        .attr("y", function (d) {
            return path.centroid(d)[1];
        })
        .attr('text-anchor', 'middle')
        .attr('font-size', '10pt')
        .attr('style', 'color: black;')
        .attr('style', 'pointer-events: none;');

});

function downloadMap() {
	let data =[];
    let div = document.getElementById('map_container')		
    html2canvas(div).then(
        function (canvas) {

            var destCanvas = document.createElement('canvas');
            destCanvas.width = canvas.width;
            destCanvas.height = canvas.height;
            var destCtx = destCanvas.getContext('2d')
            destCtx.drawImage(canvas, 0, 0)

            const ctx = destCanvas.getContext('2d')
            ctx.textBaseline = "top"
            ctx.font = "2em Calibri";
            ctx.fillStyle = "black";
            ctx.textAlign = "start";
            var textWidth = ctx.measureText("ozanyerli.github.io/turkeyvisited")
	    var leftText = document.getElementById("yazi").value;
            ctx.fillText(leftText, 10, canvas.height - 25);
            ctx.fillText('Ziyaret Edilen İl Sayısı : '+ window.cities.length, canvas.width - 250, canvas.height - 25);
            
            /*ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(canvas.width, canvas.height);
            ctx.stroke(); */

            destCanvas.toBlob(function (blob) {
                saveAs(blob, "turkeyvisited.png")
            }) 
        })
}
