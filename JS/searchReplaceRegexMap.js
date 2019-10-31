function myReplace(str, before, after) {
   let mappedResult = str.split(' ').map(function(val) {
        
        if (val == before) {
            
            return /[A-Z]/.test(val[0]) === true
                ? val = after[0].toUpperCase() + after.slice(1, after.length) : (val = after);
        }
        return val;
        
    }).join(" ");
    
return mappedResult;
}
console.log(myReplace('A quick brown fox Jumped over the lazy dog', 'Jumped', 'leaped'));