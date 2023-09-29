class Pokemon {
    constructor( name, atk, def, PV,) {
        this.name = name
        this.atk = atk
        this.def = def
        this.PV = PV 
    }
    attackPokemon(Pokemon) {

        Pokemon.PV = Pokemon.PV - this.atk + Pokemon.def
    }

}


let Rondoudou = new Pokemon ("Rondoudou", 20, 10, 100 )
let Noctali = new Pokemon ( "Noctali", 30, 10, 95 )

 
while ( Noctali.PV >= 0 || Rondoudou.PV >= 0 ) {
    Rondoudou.attackPokemon ( Noctali )

    console.log (Noctali.name + " a " + Noctali.PV + " PV.")
    if ( Noctali.PV <= 0){
        console.log ( Rondoudou.name + " a win " )
        break
    }
    Noctali.attackPokemon ( Rondoudou )

    console.log ( Rondoudou.name + " a " + Rondoudou.PV +  " PV ")
    if ( Rondoudou.PV <= 0){
        console.log (Noctali.name + " a win ")
        break
    }
}


       


