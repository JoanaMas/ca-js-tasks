console.groupCollapsed('https://edabit.com/challenge/2FF7RKw9RLwc3EBY9');
{



  class Challenge {
    id;
    level;

    constructor(id, level) {
      this.id = id; // numerical identifier
      this.level = level; // code made of two uppercased letters
    }

    get points() {
    
      let obj = {
        "VE" : 5,
        "EA" : 10,
        "ME" : 20,
        "HA" : 40,
        "VH" : 80,
        "EX" : 120
      }
  
      for (var key in obj) {
        if(key == this.level) {
          return obj[key]
        }
      }
    }
  }



  
  class User {
    name;
    xp; 
    log; 

    constructor(name, xp, log) {
      this.name = name; // username
      this.xp = xp; // accumulator that stores the XP points earnd
      this.log = log; // will store id of the challenges solved
    }

    newSolvedChallenge(challenge) {
      this.xp += challenge.points;
      this.log.push(challenge.id)
    } 
  }

  // User case declaration
  const user1 = new User ('Madam', 0, []);
  const user2 = new User ('Steve', 0, []);

  // Challenge case declaration
  const challenge1 = new Challenge (1, 'VE');
  const challenge2 = new Challenge (2, 'EA');
  const challenge3 = new Challenge (3, 'ME');
  const challenge4 = new Challenge (4, 'HA');
  const challenge5 = new Challenge (5, 'VH');
  const challenge6 = new Challenge (6, 'EX');

  // Challenge solved
  user1.newSolvedChallenge(challenge1);
  user1.newSolvedChallenge(challenge4);
  user1.newSolvedChallenge(challenge6);

  user2.newSolvedChallenge(challenge5);
  user2.newSolvedChallenge(challenge3);
  user2.newSolvedChallenge(challenge2);

  console.log(user1.name);
  console.log(user2.xp);
  console.log(user1.log);
  console.log(challenge4.level);
  console.log(challenge3.id);
  console.log(challenge1.points);


}
console.groupEnd();


console.groupCollapsed('https://edabit.com/challenge/ifDM26p25bqS8EsFu');
{
  class Player {
    #hp; // private health variable;
    #maxHp; // private max health variable;
    #en; // private energy variable;
    #maxEn; // private max energy variable;

    armor; // public value
    name; // public value

    constructor(name, health, energy, armor) {
      this.#maxHp = health;
      this.#maxEn = energy;
      this.hp = health;
      this.en = energy;
      this.name = name;
      this.armor = armor;
    };


    // Getters

    get hp() {
      return this.#hp;
    }

    get en() {
      return this.#en;
    }

    get hpPerc() {
      return Number(100 * this.#hp / this.#maxHp.toFixed(2));
    }


    // Setters

    set hp(value) {
      if(value >= 0 && value <= this.#maxHp) {
        this.#hp = value;
      } else if(value > this.#maxHp) {
        this.#hp = this.#maxHp;
      } else if(value < 0) {
        this.#hp = 0;
      }
    }

    set en(value) {
      if(value >= 0 && value <= this.#maxEn) {
        this.#en = value;
      }
    }

    learnSkill(skillName, { damage, desc, penetration, cost, heal}) {
      this[skillName] = function (target) {
        if(this.#en < cost) return `${this.name} attempted to use ${skillName}, but didn't have enough energy!`;
        this.en -= cost;

        const effectiveArmor = target.armor - penetration;

        const effectiveDamage = Math.round(100 * damage * ((100 - effectiveArmor) / 100)) / 100;
        target.hp -= effectiveDamage

        const beforeHeal = this.hp;
        this.hp += heal;


        const healAmount = this.hp - beforeHeal;

        return `${this.name} used ${skillName}, ${desc}, against ${target.name}, doing ${effectiveDamage} damage!` +
        (
          healAmount > 0
          ? `${this.name} healed for ${healAmount} health!`
          : ' '
        ) +
        (
          target.hp <= effectiveDamage
          ? `${target.name} died.`
          : `${target.name} is at ${target.hpPerc}% health.`
        )
      }
    }
  }

  const alice = new Player("Alice", 110, 50, 10);
  const bob = new Player("Bob", 100, 60, 20);

  alice.learnSkill("fireball", {
    damage: 23,
    penetration: 1.2,
    heal: 5,
    cost: 15,
    desc: "a firey magical attack"
});

console.log(alice.fireball(bob))
// Alice used fireball, a firey magical attack, against Bob, doing
// 18.68 damage! Alice healed for 5 health! Bob is at 81.32% health.

bob.learnSkill("superbeam", {
  damage:200,
  penetration:50,
  heal:50,
  cost:75,
  desc: "an overpowered attack, pls nerf"
});
console.log(bob.superbeam(alice));
// Bob attempted to use superbeam, but didn't have enough energy!

}
console.groupEnd();
