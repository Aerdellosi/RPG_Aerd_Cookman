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


}

export class Items{
  constructor() {
    
    // constructor(item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18) {
    //   Object.assign(this, {item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18})
      
    // this.item1 = item1;
    // this.item2 = item2;
    // this.item3 = item3;
    // this.item4 = item4;
    // this.item5 = item5;
    // this.item6 = item6;
    // this.item7 = item7;
    // this.item8 = item8;
    // this.item9 = item9;
    // this.item10 = item10;
    // this.item11 = item11;
    // this.item12 = item12;
    // this.item13 = item13;
    // this.item14 = item14;
    // this.item15 = item15;
    // this.item16 = item16;
    // this.item17 = item17;
    // this.item18 = item18;
  }
}

export class CharClass{
  constructor(charClass) {
    this.name = charClass;
    if(charClass === "opium smuggler"){
      
    }
  }
}

export class ItemObj{
  constructor(name, damage, range) {
    this.name = name; 
    this.damage = damage;
    this.range = range;
    this.special = null;
  }
}

export class FireLizard{
  constructor(name, hp, atkDMG, atkChance) {
    this.name = name;
    this.hp = hp;
    this.atkDMG = atkDMG;
    this.atkChance = atkChance;
  }
}

export class RockMonster{
  constructor(name, hp, atkDMG, atkChance) {
    this.name = name;
    this.hp = hp;
    this.atkDMG = atkDMG;
    this.atkChance = atkChance;
  }
}

export class Wizard{
  constructor(name, hp, atkDMG, atkChance) {
    this.name = name;
    this.hp = hp;
    this.atkDMG = atkDMG;
    this.atkChance = atkChance;
  }
}

export class Skeleton{
  constructor(name, hp, atkDMG, atkChance) {
    this.name = name;
    this.hp = hp;
    this.atkDMG = atkDMG;
    this.atkChance = atkChance;
  }
}

export class Wolves{
  constructor(name, hp, atkDMG, atkChance) {
    this.name = name;
    this.hp = hp;
    this.atkDMG = atkDMG;
    this.atkChance = atkChance;
  }
}

export class Pirate{
  constructor(name, hp, atkDMG, atkChance) {
    this.name = name;
    this.hp = hp;
    this.atkDMG = atkDMG;
    this.atkChance = atkChance;
  }
}

export class Bats{
  constructor(name, hp, atkDMG, atkChance) {
    this.name = name;
    this.hp = hp;
    this.atkDMG = atkDMG;
    this.atkChance = atkChance;
  }
}

export class ShadowDemon{
  constructor(name, hp, atkDMG, atkChance) {
    this.name = name;
    this.hp = hp;
    this.atkDMG = atkDMG;
    this.atkChance = atkChance;
  }
}

export class SpiderSnake{
  constructor(name, hp, atkDMG, atkChance) {
    this.name = name;
    this.hp = hp;
    this.atkDMG = atkDMG;
    this.atkChance = atkChance;
  }
}

