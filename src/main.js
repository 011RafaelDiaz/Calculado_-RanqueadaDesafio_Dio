function calculateLevel(victories, 
  defeats) {
    
    const balanceVitorias = victories - 
  defeats;
  
    
    let nivel;
    if (victories < 10) {
        nivel = "Iron";
    } else if (victories >= 11 && victories <= 20) {
        nivel = "Bronze";
    } else if (victories >= 21 && victories <= 50) {
        nivel = "Silver";
    } else if (victories >= 51 && victories <= 80) {
        nivel = "Gold";
    } else if (victories >= 81 && victories <= 90) {
        nivel = "Diamond";
    } else if (victories >= 91 && victories <= 100) {
        nivel = "Legendary";
    } else {
        nivel = "Immortal";
    }
  
    
    return { balanceVitorias, nivel };
  }
  
  
  const heroWins = 200;
  const defeatsHeroi = 25;
  
  const resultado = calculateLevel(heroWins, defeatsHeroi);
  
  
  console.log(`O Herói tem um saldo de ${resultado.balanceVitorias} está no nível de ${resultado.nivel}`);