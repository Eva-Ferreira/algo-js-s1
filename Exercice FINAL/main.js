class Character {
    constructor ( name, sanity ) {
        this.name = name
        this.sanity = sanity
    }
    trajet( playList ){
        console.log(musics)

        let nbchangetaxi = 0 
        let nbRedLight = 0
        
        while ( nbRedLight < 30 && this.sanity > 0 ){
            nbRedLight ++ 
            console.log ( nbRedLight, " Feu rouge passé ")

            let random = Math.floor( Math.random()*5)
            console.log( musics [random] )
            if ( musics[random]==" Anissa-Wejdene" ){
                this.sanity--
                console.log ( "John perd un point de santé mentale")
                nbchangetaxi ++
                console.log ( "nombre de chandement de taxi", nbchangetaxi )
            }
            if ( this.sanity == 0){
                console.log ( "explose" )
                break
            }
            if ( nbRedLight == 30 ){
                console.log ( this.name + " est arrivé ")
                break
            }
        }

       
    }
}


let John = new Character ( " John ", 10 )
let musics = [" Thriller-Mickeal Jackson", " Anissa-Wejdene", " Under the Bridge- Red Hot Chili Peppers", " Technologic-Daft Punk ", " Tsuki Wo Miteita-Kenshi Yonezu "]
 
John.trajet(musics)
