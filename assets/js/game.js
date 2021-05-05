//game states
//"win"- player robot has defeated all enemy-robots
// *fight all-enemy-robots
// *defeat each enemy-robot
//"lose"- plater robot's health is zero or less

var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10
};
//You can also log multiple calues at once like this//
console.log(playerInfo.name, playerInfo.health, playerInfo.attack, playerInfo.money);

var enemyInfo = [
  {
    name: "Roborto",
    attack: 12
  },
  {
    name: "Amy Android",
    attack: 13
  },
  {
    name: "Robot Trumble",
    attack: 14
  }
];

var fight = function(enemy) {
    while (playerInfo.health > 0 && enemy.health > 0) {
      // ask player if they'd like to fight or run
      var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if player picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
          // subtract money frlayeom playerMoney for skipping
          playerInfo.money = Math.max(0, playerInfo.money - 10);
          console.log("playerMoney", playerInfo.money)
          break;
        }
      }
  
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
      enemyHealth = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
      );
  
      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + ' has died!');
  
        // award player money for winning
        playerInfo.money = playerInfo.money + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      var damage = randomNumber(enemy.attack - 3, enemy.attack);
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
      );
  
      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
      }
    }
  };
    //start game function
    var startGame = function() {
      //reset player stats
      playerInfo.health = 100;
      playerInfo.attack = 10;
      playerInfo.money = 10;

      for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));
           
            var pickedEnemyObj = enemyInfo[i];
            
            pickedEnemyObj.health = randomNumber(40, 60);
            
            fight(pickedEnemyobj);
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
              //ask if player wants to enter the shop
              var storeConfirm = window.confirm("the fight is over, would you like to visit the store?");

              //if yes enter shop
              if (storeConfirm) {
                shop();
              }
            }
        }
        
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
    
  }

 endGame();
 
};

//end game function
var endGame = function() {
  // if player is still alive they win
  if (playerInfo.health > 0) {
    window.alert("great job, you survived the game! you now have a score of " + playerInfo.money + ".");
  }
  else {
    window.alert("You've lost your robot in battle.");
  }
  var playAgainConfirm = window.confirm("Would you like to play again?");
  if (playAgainConfirm) {
    //restart the game
    startGame();
  }
  else {
    window.alert("thank you for playing Robot Gladaitors! Come back again soon!");
  }
}
  var shop = function() {
    //ask player what they want to do
    var shopOptionPrompt = window.prompt(
      "would you like to refill your health, upgrade your attack or leave the shop?"
    );
    switch (shopOptionPrompt) {
      case "REFILL":
      case "refill":
        if (playerInfo.money >= 7) {
        window.alert("refilling player's health by 20 for 7 dollars.");
        //increase health and decrease money
        playerInfo.health = playerInfo.health + 20;
        playerInfo.money = playerInfo.money - 7;
        }
        else {
          window.alert("You don't have enough money!");
        }
        break;
      case "UPGRADE":
      case "upgrade":
      if(playerInfo.money >= 7) {    
      window.alert("upgrading player's attack by 6 for 7 dollars");

        // increase attack and decrease money
        playerInfo.attack = playerInfo.attack + 6;
        playerInfo.money = playerInfo.money - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }
        break;
        case "LEAVE":
        case "leave":
          window.alert("Leaving the store.");
          break;
          default:
            window.alert("You did not pick a valid option. Try again.");
            //call shop again to force player to pick a valid option
            shop();
            break;
    }
  }
    //function to generate a random numeric value
    var randomNumber = function(min, max) {
      var value = Math.floor(Math.random() * (max - min + 1) + min);

      return value;
    
    };



 

startGame();
