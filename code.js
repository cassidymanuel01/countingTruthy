let truthy = ['true', 'true', 'false', 'true', 'false', 'false', 'true'];

let truthyAmount = 0;

for(let i = 0; i<truthy.length ; i++) {
    if(truthy[i] == 'true'){
        truthyAmount++;
    }
}

document.write(`${truthy} <br> <p> There are ${truthyAmount} true values </p>`)

