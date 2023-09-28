class Pokemon {
    constructor( name, atk, def, PV,) {
        this.name = name
        this.atk = atk
        this.def = def
        this.PV = PV 
    }
    attackPokemon(Pokemon) {

        Pokemon.PV = Pokemon.PV - this.atk + this.def
    }

}


let Rondoudou = new Pokemon ("Rondoudou", 20, 10, 100 )
let Noctali = new Pokemon ( "Noctali", 30, 10, 95 )

 
while ( Noctali.PV >= 0 || Rondoudou.PV >= 0 ) {
    Rondoudou.attackPokemon ( Noctali )

    console.log ( Noctali.PV , Noctali.name)
    if ( Noctali.PV <= 0){
        console.log ( Rondoudou.name + " win " )
        break
    }
    Noctali.attackPokemon ( Rondoudou )

    console.log ( Rondoudou.PV , Rondoudou.name)
    if ( Rondoudou.PV <= 0){
        console.log (Noctali.name + " win ")
        break
    }
}


       


