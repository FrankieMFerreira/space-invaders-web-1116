class Spaceship{
  constructor(name, teamArray, phasers, shields){
    this.name = name
    this.teamArray = teamArray
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    if (teamArray.length == 0) {
      this.docked = true
    } else {
      this.docked = false
      teamArray.forEach ((element) => {
        element.currentShip = this
      })
    }
    this.phasersCharge = "uncharged"

  }

}
