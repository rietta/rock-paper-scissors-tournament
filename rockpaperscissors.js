const selection_options = ['rock', 'paper', 'scissors'];
const selection_icons = { 'rock': "🪨", "paper": "📃", "scissors": "✂️" };

const tie = 0;
const p1 = 1;
const p2 = 2;

function computer_random_choice() {
  return  selection_options[(Math.random() * selection_options.length) | 0]
}

function player_selected_choice() {
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

function update_text_content(element_id, value) {
  element = document.getElementById(element_id);
  element.textContent = value;
}

function get_match_number() {
  element = document.getElementById('current_match_number');
  return Number(element.textContent);
}

function set_match_number(value) {
  if (value >= 1 && value <= 3) {
    update_text_content('current_match_number', value)
  } else {
    console.log("Error: Invalid match number specified.");
  }
}

function update_choice_display(player_number, choice) {

  if (choice === "") {
    choice_icon = "";
  } else { 
    choice_icon = selection_icons[choice];
  }

  icon_selector = "p" + player_number + "_choice_icon";
  update_text_content(icon_selector, choice_icon);

  label_selector = "p" + player_number + "_choice_label";
  update_text_content(label_selector, choice);
}

function display_element(player_number) {
  element_id = "p" + player_number + "_display";
  element = document.getElementById(element_id);
  return element;
}

function remove_winner_border(player_number) {
  element = display_element(player_number);
  element.classList.remove('winner');
  element.classList.remove('tie');
}

function add_winner_border(player_number) {
  display_element(player_number).classList.add('winner');
}

function add_tie_border(player_number) {
  display_element(player_number).classList.add('tie');
}

function reset_display() {
  remove_winner_border(p1);
  update_choice_display(p1, "");
  remove_winner_border(p2);
  update_choice_display(p2, "");
}

function reset_tournament_table() {
  update_text_content('m1p1', '');
  update_text_content('m1p2', '');
  update_text_content('m2p1', '');
  update_text_content('m2p2', '');
  update_text_content('m3p1', '');
  update_text_content('m3p2', '');
  update_text_content('total_p1', '');
  update_text_content('total_p2', '');
  update_text_content('winner', '');
  set_match_number(1);
}

function reset_game() {
  reset_display();
  reset_tournament_table();
}


function call_winner(player_number) {
  add_winner_border(player_number);
}

function call_tie() {
  add_tie_border(p1);
  add_tie_border(p2);
}


function play() {
  // For perceived fairness, always pick the computer answer before reading
  // the user's choice
  computer_choice_val = computer_random_choice();
  player_choice_val = player_selected_choice();
  
  reset_display();
  update_choice_display(2, computer_choice_val);
  update_choice_display(1, player_choice_val);

  result = winner(player_choice_val, computer_choice_val);
  if (result === p1) {
    call_winner(p1);
  } else if (result === p2) {
    call_winner(p2);
  } else {
    call_tie();
  }
}

