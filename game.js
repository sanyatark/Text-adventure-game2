var user = prompt('Lets go to work. CYCLE, DANCE or DRIVE. Pick your transport').toUpperCase();
switch(user) {
  case 'CYCLE':
    var helmet = prompt("Do you put on your helmet (YES or NO)?").toUpperCase();
    var noHelmet = prompt("Are you dumb?").toUpperCase();
    if(helmet === 'YES' || noHelmet === 'NO') {
      console.log("You put your helmet on, good on you champ!");
    } else {
      console.log("You're a dumb ass, ride safe next time");
    }
    break;
    case 'DANCE':
    console.log("Look at you, shredding mad shapes.");
    break;
    case 'DRIVE':
        var seatbelt = prompt("Do you put on your seatbelt (YES or NO)?").toUpperCase();
    var noSeatbelt = prompt("Are you dumb?").toUpperCase();
    if(seatbelt === 'YES' && noSeatbelt === 'NO') {
      console.log("You put your seatbelt on, good on you champ!");
    } else {
      console.log("You're a dumb ass, drive safe next time");
    }
}
