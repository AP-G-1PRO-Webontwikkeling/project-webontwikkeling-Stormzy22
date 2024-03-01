import { DragonBallSuper } from './interface';
import dragonBallSuperData from './characters.json';

const characters: DragonBallSuper[] = dragonBallSuperData.characters;

function viewAllData() {
    console.log("All Dragon Ball Super characters:");
    characters.forEach(function(character) {
        console.log(`- ${character.name} (${character.id})`);
    });
}

viewAllData();

  
  async function main() {
      
  
      // Toon alle data optie
      console.log("Welcome to the JSON data viewer!\n");
      console.log("1. View all data");
      console.log("2. Filter by ID");
      console.log("3. Exit");
  
      // Vraag om de keuze a 
      let choice = prompt("Please enter your choice:");
  
      switch (choice) {
          case "1":
              // Toon alle data
              showAllData(dragonBallSuperData);
              break;
          case "2":
              // Filteren op ID
              let id = parseInt(prompt("Please enter the ID you want to filter by:") || "");
              filterByID(dragonBallSuperData, id);
              break;
          case "3":
              // Exit
              console.log("Exiting...");
              break;
          default:
              console.log("Invalid choice!");
      }
  }
  
  function showAllData(data: DragonBallSuper) {
      console.log("All Data:");
      for (let character of data.characters) {
          console.log(`- ${character.name} (${character.id})`);
          console.log(`  - Description: ${character.description}`);
          console.log(`  - Age: ${character.age}`);
          console.log(`  - Active: ${character.active}`);
          console.log(`  - Birthdate: ${character.birthdate}`);
          console.log(`  - Image: ${character.image_url}`);
          console.log(`  - Status: ${character.status}`);
          console.log(`  - Hobbies: ${character.hobbies.join(", ")}`);
          if (character.friend) {
              console.log("  - Friend:");
              console.log(`    - Name: ${character.friend.name}`);
              console.log(`    - Description: ${character.friend.description}`);
              console.log(`    - Age: ${character.friend.age}`);
              console.log(`    - Active: ${character.friend.active}`);
              console.log(`    - Birthdate: ${character.friend.birthdate}`);
              console.log(`    - Image: ${character.friend.image_url}`);
              console.log(`    - Status: ${character.friend.status}`);
              console.log(`    - Hobbies: ${character.friend.hobbies.join(", ")}`);
          }
      }
  }
  
  function filterByID(data: DragonBallSuper, id: number) {
      let character = data.characters.find(char => char.id === id);
      if (character) {
          console.log(`- ${character.name} (${character.id})`);
          console.log(`  - Description: ${character.description}`);
          console.log(`  - Age: ${character.age}`);
          console.log(`  - Active: ${character.active}`);
          console.log(`  - Birthdate: ${character.birthdate}`);
          console.log(`  - Image: ${character.image_url}`);
          console.log(`  - Status: ${character.status}`);
          console.log(`  - Hobbies: ${character.hobbies.join(", ")}`);
          if (character.friend) {
              console.log("  - Friend:");
              console.log(`    - Name: ${character.friend.name}`);
              console.log(`    - Description: ${character.friend.description}`);
              console.log(`    - Age: ${character.friend.age}`);
              console.log(`    - Active: ${character.friend.active}`);
              console.log(`    - Birthdate: ${character.friend.birthdate}`);
              console.log(`    - Image: ${character.friend.image_url}`);
              console.log(`    - Status: ${character.friend.status}`);
              console.log(`    - Hobbies: ${character.friend.hobbies.join(", ")}`);
          }
      } else {
          console.log(`No character found with ID: ${id}`);
      }
  }
  
  main();
  
  export {}
  