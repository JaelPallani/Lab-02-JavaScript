function arrayGenerator(n, min, max){
    let a=[];
    for(let x=0; x<n;x++){
        a.push(Map.ceil(Math.random()*(max-min)+min));
    }
    return a
}