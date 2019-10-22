function whatIsInAName(collection, source) {
   
 var keys = Object.keys(source);

// use of filter to get objs from collection
return collection.filter(function(obj){
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    for (let key of keys)
    {
        console.log (key);
        if(!obj.hasOwnProperty(key) || obj[key] !== source[key])
            return false;
    }//end for
    return true;

});

 
 }
 
 whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 });
 