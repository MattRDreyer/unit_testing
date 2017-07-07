function cherokee(cherokeeHares, birthRate, numberOfWeeks, week) {

  while (week <= numberOfWeeks) {
    cherokeeHares *= 2
    week++;

  }
  return cherokeeHares
}

module.exports = cherokee;
