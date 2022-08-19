var socrates = 36
var platao = -11
var hercules = 250
var jornal
var resut


function Garen(jornal) { 
    if (jornal != 0 ) {
    
         resut = jornal + (socrates + platao + hercules)
    } 
        else
        resut =  jornal + (" valor zero não é permitido")

        return resut
}

console.log(Garen(0))