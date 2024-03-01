export interface DragonBallSuper {
    characters: Character[];
  }
  
  export interface Character {
    id: number;
    name: string;
    description: string;
    age: number | string;
    active: boolean;
    birthdate: string;
    image_url: string;
    status: string;
    hobbies: string[];
    friend?: Character;
  }