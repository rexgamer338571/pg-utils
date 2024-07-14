function calc() {
  const pokemon = document.getElementById("pokemon").value;

  const stat = [
    0.0,
    0.0,
    0.0
  ]

  const stats = ["sta", "atk", "def"]

  for ( i in stats ) {
    stat[i] = parseFloat(document.getElementById(stats[i]).value) + baseStats[pokemon][i];
  }

  const lvl = parseInt(document.getElementById("lvl").value);
  const cpm = cpms[lvl*2-2];
  const _0 = ((Math.sqrt(stat[0]) * stat[1] * Math.sqrt(stat[2])) / 10) * (cpm**2);
  document.getElementById("result").innerHTML = "Calculated CP: " + _0;
}
