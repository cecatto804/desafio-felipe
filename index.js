let nomeHeroi = ["Harry Potter" , "Naruto", "Spider-man", "Goku", "Capitão América", "Michael Jackson"]
let xpHeroi = [ 985, 2250, 6000, 8002, 3500, 10000]

for (let i = 0; i < nomeHeroi.length; i++){

    let nome = nomeHeroi[i]
    let xp = xpHeroi[i]
    let nivel

    if(xp <1000){
        nivel= "Ferro"
    }
    
    else if(xp >=1001 && xp<= 2000){
        nivel= "bronze"
    }

    else if(xp >=2001 && xp <=5000){
        nivel= "prata"
    }

    else if(xp >=5001 && xp<= 7000){
        nivel= "Ouro"
    }

    else if(xp >=7001 && xp<= 8000){
        nivel = "Platina"
    }

    else if(xp >=8001 && xp<=9000){
        nivel = "Ascendete"
    }

    else if(xp>=9001 && xp<= 10000){
        nivel = "Imortal"
    }

    else if(xp>=10001){
        nivel= "Radiante"
    }

    console.log("O Herói de nome ${nome) está no nivel de ${nivel}")




}
