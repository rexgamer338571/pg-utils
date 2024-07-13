function calc() {
  try {
    const pokemon = document.getElementById("pokemon").value;
  
    const stat = [
      0.0,
      0.0,
      0.0
    ]
    const rstats = stats;
    rstats.reverse()
  
    for ( i in rstats ) {
      stat[i] = document.getElementById(rstats[i]).value + baseStats[pokemon][i];
    }

    const lvl = parseInt(document.getElementById("lvl").value);
    alert(lvl);
    const cpm = cpms[lvl*2-2];
    alert(cpm);
    const _0 = ((stat[0] * Math.sqrt(stat[1]) * Math.sqrt(stat[2]) / 10) * (cpm**2);
    document.getElementById("result").innerHTML = "Calculated CP: " + _0;
    alert(_0);
  } catch (x) {
    alert(x);
  }
}
