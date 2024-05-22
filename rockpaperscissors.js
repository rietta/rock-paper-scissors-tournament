const selection_options = ['rock', 'paper', 'scissors'];

function computer_random_choice() {
  return  selection_options[(Math.random() * selection_options.length) | 0]
}

function get_player_choice() {
  return document.querySelector("input[type='radio'][name=item]:checked").value;
}
function play() {
  // For perceived fairness, always pick the computer answer before reading
  // the user's choice
  computer_choice_val = computer_random_choice();
  player_choice_val = get_player_choice();
  
  computer_choice = document.getElementById('computer_choice');
  computer_choice.textContent = computer_choice_val;

  player_choice = document.getElementById('player_choice');
  player_choice.textContent = player_choice_val; 
}

