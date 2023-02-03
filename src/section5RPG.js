export class Character{
  constructor(charClass, inventory) {
    this.charClass = charClass;
    this.str = 5;
    this.dex = 5;
    this.int = 5;
    this.cha = 5;
    this.con = 5;
    this.inventory = inventory;
    this.hp = this.con * 3;
    this.lvl = 1;
    this.dodgeChance = (this.dex * 2) / 100;
  }

  charClassApplyStats() {
    if (this.charClass === "opium smuggler") {
      this.str = this.str + 5;
      this.con = this.con + 5;
    } else if (this.charClass === "spice trader") {
      this.dex = this.dex + 5;
      this.cha = this.cha + 5;
    } else if (this.charClass === "missionary") {
      this.cha = this.cha + 5;
      this.int = this.int + 5;
    }
  }

  LvlUp(strengthAdd, dexterityAdd, intelligenceAdd, charismaAdd, constitutionAdd) {
    this.str = this.str + strengthAdd;
    this.dex = this.dex + dexterityAdd;
    this.int = this.int + intelligenceAdd;
    this.cha = this.cha + charismaAdd;
    this.con = this.con + constitutionAdd;
  }
}

export let listOfFirstItemsArray = function(){
  let cavalrySabre = new ItemObj("cavalry sabre", 6, 10, "A Common seafaring weapon. 6 damage, 10 range");
  let gunKit = new ItemObj("gunKit", null, null, "Ammo, and gunpowder and the rest of what you need in order to use your firearm.");
  let tradChineseMedicines = new ItemObj("traditional chinese medicine", null, null, "Herbs to heal the soul, or so said the merchants note left with it.");
  let kungFuManual = new ItemObj("kung fu manual", 3, 4, "Learn martial arts with these tree easy steps.");
  let opium = new ItemObj("opium", null, null, "Increase your health and strength for a short while, but dont use ALL of it.. oops.");
  let katana = new ItemObj("katana", 6, 10, "A sharp blade just a little shorter than a boat oar. 6 damage 10 range.");
  let fuShensLuckyCricket = new ItemObj("fu shens lucky cricket", null, null, "A small box with a cricket, the chipring inspiring you to be faster. +4 Dexterity.");
  let blunderbuss = new ItemObj("blunderbuss", 30, 50, "Fill it with hard stuff and them BOOM! 30 damage and 50 range.");
  let handaxe = new ItemObj("handaxe", 4, 10, "a wooden handle with a sharp steel head. 4 damage 10 range.");
  let floggingWhip = new ItemObj("flogging whip", 4, 25, "Your personal whip for personal activities. 4 damage and 25 range.");
  let canteen = new ItemObj("canteen", null, null, "Smells funny, rum and floaters. You should probably fill this with some water instead...");
  let hempRope = new ItemObj("hemp rope", null, null, "You can always use a rope sometimes.");
  let freshBoots = new ItemObj("fresh boots", null, null, "Thick heel for better footing. +4 Dexterity.");
  let purseOfGoldAndSilver = new ItemObj("purse of gold and silver", null, null, "The remainder of your net worth.");
  let porcelainPlate = new ItemObj("porcelein plate", null, null, "How did this get here?");
  let flintlock = new ItemObj("flint lock", 20, 150, "Standard issue military rifle. 20 damage, 150 range.");

  let arrayToFillItems = [cavalrySabre, gunKit, tradChineseMedicines, kungFuManual, opium, katana, fuShensLuckyCricket, blunderbuss, handaxe, floggingWhip, canteen, hempRope, freshBoots, purseOfGoldAndSilver, porcelainPlate, flintlock];

  console.log(arrayToFillItems);

  return arrayToFillItems;

};

export let listOfAllItems = function(){
  let cavalrySabre = new ItemObj("cavalry sabre", 6, 10, "A Common seafaring weapon. 6 damage, 10 range");
  let gunKit = new ItemObj("gunKit", null, null, "Ammo, and gunpowder and the rest of what you need in order to use your firearm.");
  let tradChineseMedicines = new ItemObj("traditional chinese medicine", null, null, "Herbs to heal the soul, or so said the merchants note left with it.");
  let kungFuManual = new ItemObj("kung fu manual", 3, 4, "Learn martial arts with these tree easy steps.");
  let opium = new ItemObj("opium", null, null, "Increase your health and strength for a short while, but dont use ALL of it.. oops.");
  let katana = new ItemObj("katana", 6, 10, "A sharp blade just a little shorter than a boat oar. 6 damage 10 range.");
  let fuShensLuckyCricket = new ItemObj("fu shens lucky cricket", null, null, "A small box with a cricket, the chipring inspiring you to be faster. +4 Dexterity.");
  let blunderbuss = new ItemObj("blunderbuss", 30, 50, "Fill it with hard stuff and them BOOM! 30 damage and 50 range.");
  let handaxe = new ItemObj("handaxe", 4, 10, "a wooden handle with a sharp steel head. 4 damage 10 range.");
  let floggingWhip = new ItemObj("flogging whip", 4, 25, "Your personal whip for personal activities. 4 damage and 25 range.");
  let canteen = new ItemObj("canteen", null, null, "Smells funny, rum and floaters. You should probably fill this with some water instead...");
  let hempRope = new ItemObj("hemp rope", null, null, "You can always use a rope sometimes.");
  let freshBoots = new ItemObj("fresh boots", null, null, "Thick heel for better footing. +4 Dexterity.");
  let purseOfGoldAndSilver = new ItemObj("purse of gold and silver", null, null, "The remainder of your net worth.");
  let porcelainPlate = new ItemObj("porcelein plate", null, null, "How did this get here?");
  let flintlock = new ItemObj("flint lock", 20, 150, "Standard issue military rifle. 20 damage, 150 range.");
  let miwuZhiya = new ItemObj("miwu zhiya", 50, 10, "A spear tooth spear. 50 damage, 10 range.");
  let bowAndArrows = new ItemObj("bow and arrows", 10, 100, "A bow with a large quiver of arrows.");

  let arrayToFillItems = [cavalrySabre, gunKit, tradChineseMedicines, kungFuManual, opium, katana, fuShensLuckyCricket, blunderbuss, handaxe, floggingWhip, canteen, hempRope, freshBoots, purseOfGoldAndSilver, porcelainPlate, flintlock, miwuZhiya, bowAndArrows];

  return arrayToFillItems;
};

export class ItemObj{
  constructor(name, damage, range, description) {
    this.name = name; 
    this.damage = damage;
    this.range = range;
    this.description = description;
    this.special = null;
  }
}

export class CombatMethods{
  constructor () {
  }
  enemyAttackCheck() {
    let combatDistance = this.initiationDistance;
    if (this.range >= combatDistance) {
      this.attack();
    } else {
      combatDistance = combatDistance - this.move;
    }
    return combatDistance;
  }

  attack(opponentDodgeChance, ownerHp) {
    let hitAttempt = Math.random();
    if (hitAttempt >= opponentDodgeChance) {
      ownerHp = ownerHp - this.dmg;
    }
    return ownerHp;
  }
}

export class Enemy extends CombatMethods{
  constructor(move, range, initi, dex, dmg, hp, enemyAttackCheck, enemyAttack) {
    super(enemyAttackCheck, enemyAttack);
    this.move = move;
    this.range = range;
    this.initiationDistance = initi;
    this.dex = dex;
    this.dmg = dmg;
    this.hp = hp;
    this.dodgeChance = (this.dex * 2) / 100;
  }
}

// export class FireLizard{
//   constructor(name, hp, atkDMG, atkChance) {
//     this.name = name;
//     this.hp = hp;
//     this.atkDMG = atkDMG;
//     this.atkChance = atkChance;
//   }
// }

// export class RockMonster{
//   constructor(name, hp, atkDMG, atkChance) {
//     this.name = name;
//     this.hp = hp;
//     this.atkDMG = atkDMG;
//     this.atkChance = atkChance;
//   }
// }

// export class Wizard{
//   constructor(name, hp, atkDMG, atkChance) {
//     this.name = name;
//     this.hp = hp;
//     this.atkDMG = atkDMG;
//     this.atkChance = atkChance;
//   }
// }

// export class Skeleton{
//   constructor(name, hp, atkDMG, atkChance) {
//     this.name = name;
//     this.hp = hp;
//     this.atkDMG = atkDMG;
//     this.atkChance = atkChance;
//   }
// }

// export class Wolves{
//   constructor(name, hp, atkDMG, atkChance) {
//     this.name = name;
//     this.hp = hp;
//     this.atkDMG = atkDMG;
//     this.atkChance = atkChance;
//   }
// }

// export class Pirate{
//   constructor(name, hp, atkDMG, atkChance) {
//     this.name = name;
//     this.hp = hp;
//     this.atkDMG = atkDMG;
//     this.atkChance = atkChance;
//   }
// }

// export class Bats{
//   constructor(name, hp, atkDMG, atkChance) {
//     this.name = name;
//     this.hp = hp;
//     this.atkDMG = atkDMG;
//     this.atkChance = atkChance;
//   }
// }

// export class ShadowDemon{
//   constructor(name, hp, atkDMG, atkChance) {
//     this.name = name;
//     this.hp = hp;
//     this.atkDMG = atkDMG;
//     this.atkChance = atkChance;
//   }
// }

// export class SpiderSnake{
//   constructor(name, hp, atkDMG, atkChance) {
//     this.name = name;
//     this.hp = hp;
//     this.atkDMG = atkDMG;
//     this.atkChance = atkChance;
//   }
// }

// export let LvlUp = function(strength, dexterity, intelegence, charisma, constitution){
//     new Character("something", [])
//     Character.str += strength;
//     Character.dex += dexterity;
//     Character.int += intelegence;
//     Character.cha += charisma;
//     Character.con += constitution;
//   }


//Hello world!

// export class Items{
//   constructor() {
    
//     // constructor(item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18) {
//     //   Object.assign(this, {item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18})
      
//     // this.item1 = item1;
//     // this.item2 = item2;
//     // this.item3 = item3;
//     // this.item4 = item4;
//     // this.item5 = item5;
//     // this.item6 = item6;
//     // this.item7 = item7;
//     // this.item8 = item8;
//     // this.item9 = item9;
//     // this.item10 = item10;
//     // this.item11 = item11;
//     // this.item12 = item12;
//     // this.item13 = item13;
//     // this.item14 = item14;
//     // this.item15 = item15;
//     // this.item16 = item16;
//     // this.item17 = item17;
//     // this.item18 = item18;
//   }
// }


// export class Enemy{
//   constructor(move, range, initi, dex, dmg, hp) {
//     this.move = move;
//     this.range = range;
//     this.initiationDistance = initi;
//     this.dex = dex;
//     this.dmg = dmg;
//     this.hp = hp;
//   }
// }