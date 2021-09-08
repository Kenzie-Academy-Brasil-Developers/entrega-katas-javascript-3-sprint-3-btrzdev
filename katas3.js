function showResults(text){
    var p = document.createElement('p');
    p.innerText = (text)
    document.body.appendChild(p);
}

window.addEventListener('load', ()=>{
    
    showResults("Katas 1:")
    showResults(kata1());
    showResults("Katas 2:")
    showResults(kata2());
    showResults("Katas 3:")
    showResults(kata3());
    showResults("Katas 4:")
    showResults(kata4());
    showResults("Katas 5:")
    showResults(kata5());
    showResults("Katas 6:")
    showResults(kata6());
    showResults("Katas 7:")
    showResults(kata7());
    showResults("Katas 8:")
    showResults(kata8());
    showResults("Katas 9:")
    showResults(kata9());
    showResults("Katas 10:")
    showResults(kata10(sampleArray));
    showResults("Katas 11:")
    showResults(kata11(sampleArray));
    showResults("Katas 12:")
    showResults(kata12(sampleArray));
    showResults("Katas 13:")
    showResults(kata13(sampleArray));
    showResults("Katas 14:")
    showResults(kata14(sampleArray));
    showResults("Katas 15:")
    showResults(kata15(sampleArray));
    showResults("Katas 16:")
    showResults(kata16(sampleArray));
    showResults("Katas 17:")
    showResults(kata17(sampleArray));
    showResults("Katas 18:")
    showResults(kata18(sampleArray));

})



const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


function kata1() {
    let resultado1 = [];
    for( let i = 1; i <= 25; i ++) {
        resultado1.push(i);
    }
    return resultado1 
};


function kata2() {
    let resultado2 = [];
    for(let i = 25; i > 0; i --) {
        resultado2.push(i);
    }
    return resultado2 
 };
kata2();



function kata3() {
    let resultado3 = [];
    for( let i = -1; i >= - 25; i --) {
        resultado3.push(i);
    }
    return resultado3 
};
kata3();



function kata4() {
    let resultado4 = [];
    for( let i = -25; i <= - 1; i ++) {
        resultado4.push(i);
    }
    return resultado4
};
kata4();



function kata5() {
    let resultado5 = [];
    for( let i = 25; i >= -25; i --) {
        if(i % 2 === 1)
        resultado5.push(i);  
    
    }
    return resultado5

 };
kata5();


function kata6() {
    let resultado6 = [];
    for( let i = 3; i <= 100; i ++) {
        if(i % 3 === 0){
         resultado6.push(i);

        }        
    }
    return resultado6
};
kata6();
    


function kata7() {
    let resultado7 = [];
    for( let i = 7; i <= 100; i ++) {
        if(i % 7 === 0){
         resultado7.push(i);

        }        
    };
    return resultado7
} 
kata7();


function kata8() {
    let resultado8 = [];
    for( let i = 100; i >= 3; i --) {
        if(i % 7 === 0 || i % 3 === 0){
         resultado8.push(i);

        }        
    };
    return resultado8
} 
kata8();

function kata9() {
    let resultado9 = [];
    for( let i = 5; i <= 100; i ++) {
        if(i % 2 === 1 || i % 5 === 0){
         resultado9.push(i);

        }        
    };
    return resultado9
} 
kata9();

function kata10(sArr) {
    let resultado10 = [];
    for( let i = 0; i < 20; i ++){
      resultado10.push(sArr[i]);  
    }
    return resultado10    
}
kata10(sampleArray);

function kata11(sArr) {
    resultado11 = [];
    for( let i = 0; i < sArr.length; i ++){
        if(sArr[i] % 2 === 0){
            resultado11.push(sArr[i])
        }
        
    }
    return resultado11
}
kata11(sampleArray);


function kata12(sArr) {
    resultado12 = [];
    for( let i = 0; i < sArr.length; i ++){
        if(sArr[i] % 2 === 1){
            resultado12.push(sArr[i]);
        }
        
    }
    return resultado12
}
kata12(sampleArray);


function kata13(sArr) {
    resultado13 = [];
    for( let i = 0; i < sArr.length; i ++){
        if(sArr[i] % 8 === 0){
            resultado13.push(sArr[i]);
        }
        
    }
    return resultado13  
}
kata13(sampleArray);



function kata14(sArr) {
    let arrQuadrado = [];
    for( let i = 0; i < sArr.length; i ++){
            arrQuadrado.push(sArr[i]*sArr[i]);
        }
        
        return arrQuadrado
         
}
kata14(sampleArray);


function kata15(sArr) {
    let sum20Result = 0;
        for( let i = 0; i < 20; i ++){
            sum20Result += sArr[i];
        }
        return sum20Result    
    }
    

kata15(sampleArray);



function kata16(sArr) {
        let sumResult = 0;
        for( let i = 0; i < sArr.length; i ++){
            sumResult += sArr[i];
        }
        return sumResult   
    }
    

kata16(sampleArray);



function kata17(sArr) {
    let menorValor = sArr[0]; 
    for( let i = 0; i < sArr.length; i ++){
        if (menorValor > sArr[i] ){
            menorValor = sArr[i]
        }
        
    }
    return menorValor;
         
}
kata17(sampleArray);


function kata18(sArr) {
    let maiorValor = sArr[0]; 
    for( let i = 0; i < sArr.length; i ++){
        if (maiorValor < sArr[i] ){
            maiorValor = sArr[i]
        }
        
    }
    return maiorValor;
         
}
kata18(sampleArray);


/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
