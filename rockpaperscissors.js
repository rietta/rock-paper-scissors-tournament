const selection_options = ['rock', 'paper', 'scissors'];

function computer_random_choice() {
  return  selection_options[(Math.random() * selection_options.length) | 0]
}

function play() {
  player_choice_form = document.getElementById('player_choice_form');
  player_choice = player_choice_form.elements['item'].value;
  computer_choice = computer_random_choice();
  
  console.log(item);
}

