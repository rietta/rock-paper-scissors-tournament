const selection_options = ['rock', 'paper', 'scissors'];
const tie = 0;
const p1 = 1;
const p2 = 2;

function computer_random_choice() {
  return  selection_options[(Math.random() * selection_options.length) | 0]
}

function get_player_choice() {
  return document.querySelector("input[type='radio'][name=item]:checked").value;
}

function winner(p1_choice, p2_choice) {
  if(p1_choice === p2_choice) {
    return tie;
  } else if (p1_choice === 'rock') {
    if (p2_choice === 'scissors') {
      return p1;
    } else if (p2_choice === 'paper') {
      return p2;
    }
  } else if (p1_choice === 'paper') {
    if (p2_choice === 'rock') {
      return p1;
    } else if (p2_choice === 'scissors') {
      return p2;
    }
  } else if (p1_choice === 'scissors') {
    if (p2_choice === 'paper') {
      return p1;
    } else if (p2_choice === 'rock') {
      return p2;
    }
  } else {
    console.log("Odd situation that should not happen. Returning tie.");
    return tie;
  }
}

function show_player_one_winner() {

}

function show_computer_winner() {

}

function show_tie() {
  
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

  result = winner(player_choice_val, computer_choice_val);
  if (result === p1) {
    show_player_one_winner();
  } else if (result === p2) {
    show_computer_winner();
  } else {
    show_tie();
  }
}

