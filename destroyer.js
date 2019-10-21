function destroyer(arr) {
  // turn the args into a full array
  // using deconstruct
  var args = [...arguments];

  // we could also use Array.from
  // var args = Array.from(arguments);
  // it'll give the same result
  console.log(args);
  // remove the first arg that is our array arr using splice
  // splice will modify the original args variable
  args.splice(0, 1);
  // or use slice for simplicity
  //let remover = args.slice(1);
  //console.log(remover);
  console.log(args);
  //use of filter to get the elements needed and keep the ones needed
  // filter takes a function that takes an element
  return arr.filter(function(value) {
    return args.indexOf(value) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);