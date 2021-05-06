//game states
//"win"- player robot has defeated all enemy-robots
// *fight all-enemy-robots
// *defeat each enemy-robot
//"lose"- plater robot's health is zero or less
var fightOrSkip = function() {
  // ask player if they'd like to fight or skip using fightOrSkip function
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  //conditional recursive function call
  if (promptFight === "" || promptFight === null) {
      window.alert("You need to provide a valid answer! Please try again.");
      return fightOrSkip();
      return false;
  }
promptFight = promptFight.toLocaleLowerCase();
  // if player picks "skip" confirm and then stop the loop
  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerInfo.playerMoney = playerInfo.money - 10;

      //return true if player wants to leave
      return true;
      shop();
      
      
    }
  }
}

var fight = function(enemy) {
  //keep track of who goes first
  var isPlayerTurn = true;
  
  if (Math.random() > 0.5) {
    isPlayerTurn = false;
  }
    while (playerInfo.health > 0 && enemy.health > 0) {
      if (isPlayerTurn) {
      if (fightOrSkip()) {
        break;
      }
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
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
      //player gets attacked first
    }else {
      var damage = randomNumber(enemy.attack - 3, enemy.attack);
    
  
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
        //break;
      } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
      }
    }
    //switch turn order
    isPlayerTurn = !isPlayerTurn;
  };

    //start game function
    var startGame = function() {
      //reset player stats
      playerInfo.reset();

      for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));
           
            var pickedEnemyObj = enemyInfo[i];
            
            pickedEnemyObj.health = randomNumber(40, 60);
            
            fight(pickedEnemyObj);
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
      "would you like to refill your health 1 , upgrade your attack 2 or leave the shop? 3"
    );
    shopOptionPrompt = parseInt(shopOptionPrompt);
    switch (shopOptionPrompt) {
      case 1:
        playerInfo.refillHealth();
        break;

      case 2:
        playerInfo.upgradeAttack();
        break;
        
      case 3:
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
    }
    var getPlayerName = function() {
      var name = "";
      while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
      }

      //add loop here with prompt and condition

      console.log("Your robot's name is" + name);
      return name;
    }
    var playerInfo = {
      name: getPlayerName(),
      health: 100,
      attack: 10,
      money: 10,
      reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
      },
      refillHealth: function() {
        if (this.money >=7) {
          window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
        }
        else {
          window.alert("You don't have enough money!")
        }
      },
      upgradeAttack: function() {
        if(this.money >= 7) {
          window.alert("Upgrading player's attack by 6 for 7 dollars.");
        this.attack += 6;
        this.money -= 7;
        }
        else {
          window.alert("You don't have enough money!");
        }
      }
    };
    //You can also log multiple calues at once like this//
    console.log(playerInfo.name, playerInfo.health, playerInfo.attack, playerInfo.money);
    
    var enemyInfo = [
      {
        name: "Roborto",
        attack: randomNumber(10, 14)
      },
      {
        name: "Amy Android",
        attack: randomNumber(10, 14)
      },
      {
        name: "Robot Trumble",
        attack: randomNumber(10, 14)
      }
    ];
    




 

startGame();
