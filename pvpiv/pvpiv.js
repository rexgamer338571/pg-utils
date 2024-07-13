function calc() {
  const stat = [
    0.0,
    0.0,
    0.0
  ]

  const rstats = stats;
  rstats.reverse()
  
  for ( i in rstats ) {
    stat[i] = document.getElementById(rstats[i]).value;
  }

  alert(stat[0]+ " " + stat[1] + " " + stat[2]);
}
