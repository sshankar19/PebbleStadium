/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */
var count = 0;
var numberObj = 0;
var numPoke = 0;
var UI = require('ui');
var Vector2 = require('vector2');
//var choosePokemon = require('choosePokemon');

var hash_tables = {};

var user = {
  pokemon_list:[],
  curr_list:[],
  curr_poke:undefined,
  select:false
}
/**

function user_turn(){
  if(this.curr_poke == undefined && remPoke == 0){
    var temp = new UI.Card({
      title: "you have lost. gg"
    });
  else if()

  }

}
function produce2(){
  if(count < numberObj){
    var temp = new UI.Card({
      title: poked[count].name,
      //icon: //need to fill in
      subtitle: poked[count].description
      scrollable = true;
    });
    temp.on('click','select', function(e){
      if(numPoke < 6){
        user.curr_list.push(poked[count]);
        numPoke++;
      }
      count++;
      produce2();
    });
    temp.on('click','down', function(e){
      count++;
      produce2();
    });    
    temp.show();
  }
  else{
    count = 0;
    return;
  }
}


**/

/**
function produce(){
  if(count < numberObj){
    var temp = new UI.Card({
      title: poked[count].name,
      //icon: //need to fill in
      subtitle: poked[count].description
      scrollable = true;
    })
    temp.on('click', function(e){
      count++;
      produce();
    });
    temp.show();
  }
  else{
    count = 0;
    return;
  }
} 

function populateFromPokedex(){
  var file = 'pokedex.json';
  var poked = JSON.parse(file);
  numberObj = poked.count;
  produce();
  numberObj = 0;
}
**/

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

/**
function createPokemonList(){
  var file = 'pokedex.json';
  var poked = JSON.parse(file);
  numberObj = poked.count;
  produce2();
  numberObj;
}


function selectList(index, pk_list){
  if(index == pk_list.length-1)
   createPokemonList();
  else
    user.curr_list = hash_tables[pk_list[i].title];
  remPoke = curr_list.length;
}
**/
var main = new UI.Card({
  title: 'Pebble.js',
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
      /**
      [{
        title: 'Pebble.js',
        icon: 'images/menu_icon.png',
        subtitle: 'Can do Menus'
      }, {
        title: 'Second Item',
        subtitle: 'Subtitle Text'
      }]**/
    }]
  });
  menu.on('select', function(e) {
    //selectList(e.itemIndex, yo);
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
});

main.on('click', 'select', function(e) {
  var wind = new UI.Window();
  var textfield = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Text Anywhere!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
});

main.on('click', 'down', function(e) {
  //var poked = populateFromPokedex();
});
