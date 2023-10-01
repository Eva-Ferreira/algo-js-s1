class Killer {
    constructor ( kname, hp ) {
        this.kname = kname
        this.hp = hp        


}}
  

let Jason = new Killer ( " Jason ", 100 )

class Characters {
    constructor ( name, probdying, dodge, dyingdamage, pv ) {
        this.name = name
        this.probdying = probdying
        this.dodge = dodge
        this.dyingdamage = dyingdamage
        this.pv = pv
    }
}

let girl = new Characters ( " girl ", 0.6, 0.3, 0.1, 1 )
let coward = new Characters ( " coward ", 0.2, 0.2, 0.5, 1 )
let nerd = new Characters ( " nerd ", 0.7, 0.4, 0.5, 1)
let fighter = new Characters ( " fighter ", 0.2, 0.8, 0.9, 1 )
let crazy = new Characters ( " crazy ", 0.4, 0.6, 0.7, 1 )

let speciality  = [ " girl " ," coward " , " nerd ", " fighter ", " crazy " ]
let Names = [ " Aerith ", " Usopp ", " Malcolm ", " Sephiroth ", " Eren "]

let survivor0 = {
    name : Names [Math.floor( Math.random()*5)],
    characteristic : speciality  [Math.floor( Math.random()*5)]

}
let survivor1 = {
    name : Names [Math.floor( Math.random()*5)],
    characteristic : speciality [Math.floor( Math.random()*5)]
}
let survivor2 = {
    name : Names [Math.floor( Math.random()*5)],
    characteristic : speciality [Math.floor( Math.random()*5)]
}
let survivor3 = {
    name : Names [Math.floor( Math.random()*5)],
    characteristic : speciality [Math.floor( Math.random()*5)]
     
}    
let survivor4 = {
    name :  Names [Math.floor( Math.random()*5)],
    characteristic : speciality [Math.floor( Math.random()*5)]
}
let survivors = [ survivor0, survivor1, survivor2, survivor3, survivor4 ]

console.log ( survivors )



attackKiller ( survivors, Jason ) {
    let proba = Math.random()
    if ( proba < survivors.probdying ){
    }
    
    if ( proba < survivors.dodge ){
         ( survivors.atkdamage == Jason.hp --)
    }




    if ( survivors.pv < 0 ){
        break
}
    if ( survivors.dodge )

while ( Jason.hp > 0 ){


}