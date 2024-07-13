function calc() {
	
	const lvl = parseInt(document.getElementById("fieldCPM").value);


	const cpm = cpms[lvl*2-2]

	const ball = parseFloat(document.getElementById('fieldBall').value);
	const berry = parseFloat(document.getElementById('fieldBerry').value);
	const throw_ = parseFloat(document.getElementById('fieldThrow').value);
	const curveball = parseFloat(document.getElementById('fieldCurveball').value);
	const medal = parseFloat(document.getElementById('fieldMedal').value);
	const baseCatchRate = parseInt(document.getElementById('fieldBCR').value);

	const modifier = ball * berry * throw_ * curveball * medal
	const dcpm = 2*cpm
	const bcrFrac = baseCatchRate / 100

	const frac = bcrFrac / dcpm
	const subFromOne = 1 - frac

	const raised = subFromOne**modifier
	const finalSub = 1 - raised

	const percent = finalSub * 100

	document.getElementById("result").innerHTML = percent + "% approx. catch rate";
}
