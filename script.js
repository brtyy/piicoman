console.log(`ahoj ty buzíku, co tu chceš?`);

const MINIMUM = 15;
const MAXIMUM = 40; 
const heslofetaka = `milujupiko`
let prihlaseny = false;
let spatnePrihlaseni = 0

//alerty

let jmenoFetaka = window.prompt('Wassup feťáku, jak se jmenuješ?')
console.log('Tvé jméno je ' + jmenoFetaka + '.')

window.alert(`pamatuj si tohle heslo "milujupiko"`)

do {
    const zadaneheslo = window.prompt(`zadejte heslo ${jmenoFetaka}`)
    if (zadaneheslo === heslofetaka){
     window.alert(`vítej ${jmenoFetaka}`)
     prihlaseny = true;
    }
 
    else{
     spatnePrihlaseni ++;
    }
     if(spatnePrihlaseni > 3){
         const jebot = window.confirm(`jsi bot?`)
     }
     
    } while (!prihlaseny);

const chceFet = window.confirm('sháníš fet?')

if (chceFet) {
    window.alert('jsi tu správně ' +jmenoFetaka+ '.')
    
let vekUzivatele = window.prompt('jak jsi starý ' + jmenoFetaka+ '?')

if (Number(vekUzivatele) >= MINIMUM){
    window.alert('jsi připraven fetovat')
}

else {
    if(!isNaN(vekUzivatele)) {
        window.alert('jsi moc mladý na to fetovt, vymysli si větší věk a dej si piko s námi')
    }
}

let mnozstviFetu = 1;
window.alert(`Tvé množství fetu je ${mnozstviFetu}.`)
}
else{
    window.alert('jdi pryč a nevolej benga')
}
