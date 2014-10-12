/**
* List of functions to deal with populating the list of pokemon 
**/



//module.exports = function populate(person){
  lists = person.pokemon_list;
  var x = [];
  for(var i = 0; i < lists.length; i++){
    var y = { title: 'Pokemon list'+i};
    x.push(y);
  }
  x.push({title: 'Create a new list of pokemon'});
  return x;
};