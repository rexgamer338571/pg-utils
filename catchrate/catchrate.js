const select = document.createElement('select');

for (const key in bcrs) {
	if (bcrs.hasOwnProperty(key)) {
		const option = document.createElement("option");
		option.textContent = key;
		option.value = bcrs[key]
		select.appendChild(option);
	}
}

document.getElementById("fieldBCR").appendChild(select);

function calc() {
	const lvl = parseInt(document.getElementById("fieldCPM").value);


	const cpm = cpms[lvl*2-2]

	const fieldBall = parseFloat(document.getElementById('fieldBall').value);
	const fieldBerry = parseFloat(document.getElementById('fieldBerry').value);
	const fieldThrow = parseFloat(document.getElementById('fieldThrow').value);
	const baseCatchRate = parseInt(document.getElementById('fieldBCR').value);

	const modifier = fieldBall * fieldBerry * fieldThrow
	const dcpm = 2*cpm
	const bcrFrac = baseCatchRate / 100

	const frac = bcrFrac / dcpm
	const subFromOne = 1 - frac

	const raised = subFromOne**modifier
	const finalSub = 1 - raised

	const percent = finalSub * 100

	document.getElementById("result").innerHTML = percent + "% approx. catch rate";
}
