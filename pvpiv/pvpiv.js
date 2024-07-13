function calc() {
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

  const lvl = document.getElementById("lvl").value;
  const cpm = cpms[lvl*2-2];
  const _0 = ((stat[0] * Math.sqrt(stat[1]) * Math.sqrt(stat[2]) / 10) * (cpm**2);
  document.getElementById("result").innerHTML = _0;
}
