const HOVER_COLOR = "#EFAE88";
const MAP_COLOR = "#fff2e3";
const TOTAL_CITIES = 81;
window.sehirler = [];

function updateStats() {
    const count = window.sehirler.length;
    const countEl = document.getElementById('visit_count');
    const pctEl = document.getElementById('visit_percent');
    if (countEl) countEl.textContent = count;
    if (pctEl) pctEl.textContent = Math.round((count / TOTAL_CITIES) * 100) + '%';
}

d3.json('tr-cities.json').then(function (data) {
    let width = 1200, height = 800;
    let projection = d3.geoEqualEarth();
    projection.fitSize([width, height], data);
    let path = d3.geoPath().projection(projection);

    let svg = d3.select("#map_container")
        .append('svg')
        .attr('viewBox', `0 0 ${width} ${height}`)
        .attr('preserveAspectRatio', 'xMidYMid meet')
        .attr('width', width)
        .attr('height', height);

    let g = svg.append('g').selectAll('path').data(data.features).join('path').attr('d', path).attr('fill', MAP_COLOR).attr('stroke', '#000').attr('id', function (d) {
            return d.properties.name;
        }).attr('boya', 'Hayır')
        .on("mouseover", function (d, i) {
            d3.select(this).attr("fill", HOVER_COLOR)
        })

        .on("mouseout", function (d, i) {
			if ( d3.select(this).attr("boya") == 'Evet' ) {
				d3.select(this).attr("fill", HOVER_COLOR)
			} else {
				d3.select(this).attr("fill", MAP_COLOR)
			}
        })
        .on("click", function (d, i) {
            if ( d3.select(this).attr("boya") == 'Hayır' ) {
				window.sehirler.push(d.properties.name);
                d3.select(this).attr("fill", HOVER_COLOR);
                d3.select(this).attr("boya", 'Evet');
            } else {
                d3.select(this).attr("fill", MAP_COLOR);
                d3.select(this).attr("boya", 'Hayır');
				for( var i = 0; i < window.sehirler.length; i++){
				if ( window.sehirler[i] === d.properties.name) { window.sehirler.splice(i, 1); }
				}
            }
            updateStats();
        });

    window.openFile = (e) => {
      const reader = new FileReader();
      reader.readAsText(e.target.files[0]);
      reader.onload = () => {
        const text = reader.result;
        window.sehirler = text.split(/\r?\n/).filter(s => s.length > 0);
        for (var i = 0; i < window.sehirler.length; i++) {
            const el = document.getElementById(window.sehirler[i]);
            if (el) {
                el.setAttribute("fill", HOVER_COLOR);
                el.setAttribute("boya", 'Evet');
            }
        }
        updateStats();
      };
    };

    window.clearAll = () => {
        window.sehirler = [];
        svg.selectAll('path')
            .attr('fill', MAP_COLOR)
            .attr('boya', 'Hayır');
        updateStats();
    };

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
        .attr('style', 'pointer-events: none;');

    updateStats();
});

function downloadMap() {
	let data = [];
    let div = document.getElementById('map_container');
	for (var i = 0; i < window.sehirler.length; i++)
	{ data.push(window.sehirler[i]) }
	data = data.join('\r\n')
	const textToBLOB = new Blob([data], { type: 'text/plain' });
	const sFileName = 'sehirler.txt';
	let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click();

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
			var yazik = document.getElementById("yazi").value;
            ctx.fillText(yazik, 10, canvas.height - 25);
            ctx.fillText('Ziyaret Edilen İl Sayısı : '+ window.sehirler.length, canvas.width - 250, canvas.height - 25);

            destCanvas.toBlob(function (blob) {
                saveAs(blob, "turkeyvisited.png")
            })
        })
}
