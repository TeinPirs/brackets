module.exports = function check(str, bracketsConfig) {
    let elementBrackets = bracketsConfig.map( bracket => bracket.join(''));
    
    for (let i = 0; i<elementBrackets.length; i++){
        if (str.includes(elementBrackets[i])){
            str = str.replace(elementBrackets[i], '');
            i = -1;
        } 
        
    }

    if (str) {
        return false;
    } else {
        return true;
    }
}
