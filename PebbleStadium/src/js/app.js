/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var curr
var count = 0;
var numberObj = 0;
var numPoke = 0;
int totalPoke = 0;
var UI = require('ui');
var Vector2 = require('vector2');
var file = require('pokedex.json');
var hash_tables = {};

var user = {
  pokemon_list:[],
  curr_list:[],
  curr_poke:undefined,
  select:false
}

function createList(user){
  var menu = new UI.Menu({
    sections: [{
      items: populatePokeItem(file)
    }]
  });
  menu.on('select', function(e) {
    if(totalPoke < 6){
      user.curr_list.push(file[])
    }
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
}


function populatePokeItem(){
  var x = [];
  for(var i = 0; i < file.length; i++){
    var y = { title: file[i].identifier };
    x.push(y);
  }
  return x;
}

function produceC(){
  var menu = new UI.Menu({
    sections: [{
      items: populatePokeItem()
    }]
  });
  menu.on('select', function(e) {
    var card = new UI.Card();
    card.title(e.item.title);
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
    card.show();
  });
  menu.show();
}

function populateFromPokedex(){
  console.log(file);
  numberObj = file.length;
  produceC();
  numberObj = 0;
}


function populate(person){
  lists = person.pokemon_list;
  var x = [];
  for(var i = 0; i < lists.length; i++){
    var y = { title: 'Pokemon list'+i};
    hash_tables["Pokemon list"+i] = lists[i];
    x.push(y);
  }
  x.push({title: 'Create a new list of pokemon'});
  return x;
}

var main = new UI.Card({
  title: 'PokePebbles!',
  icon: 'images/menu_icon.png',
  subtitle: 'Let\'s Play Pokemon!!!!',
  body: 'Up - battle(Todo). Select - for pokedex. Down - for something (todo).'
});

main.show();

main.on('click', 'up', function(e) {
  var yo = populate(user);
  var menu = new UI.Menu({
    sections: [{
      items: yo
    }]
  });
  menu.on('select', function(e) {
    if(e.item.title == 'Create a new list of pokemon'){
      createList(user);
    }
    else{
      user.curr_list = hash_tables[pk_list[i].title];
      numPoke = curr_list.length;
    }
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
});

main.on('click', 'select', function(e) {
  var poked = populateFromPokedex();
  /**
  var wind = new UI.Window();
  var textfield = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Text Anywhere!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();**/
});

main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('A Card');
  card.subtitle('Is a Window');
  card.body('The simplest window type in Pebble.js.');
  card.show();
});
