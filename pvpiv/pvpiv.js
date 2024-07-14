function calc() {
  try {
    const pokemon = document.getElementById("pokemon").value;
  
    const stat = [
      0.0,
      0.0,
      0.0
    ]
  
    for ( i in ["sta", "atk", "def"] ) {
      stat[i] = parseFloat(document.getElementById(rstats[i]).value) + baseStats[pokemon][i];
    }

    const lvl = parseInt(document.getElementById("lvl").value);
    const cpm = cpms[lvl*2-2];
    const _0 = ((Math.sqrt(stat[0]) * stat[1] * Math.sqrt(stat[2])) / 10) * (cpm**2);
    document.getElementById("result").innerHTML = "Calculated CP: " + _0;
  } catch (x) {
    alert(x);
  }
}
