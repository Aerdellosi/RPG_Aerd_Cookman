export class Character{
  constructor(charClass, str, dex, int, cha, con, inventory, hp) {
    this.charClass = charClass;
    this.str = str;
    this.dex = dex;
    this.int = int;
    this.cha = cha;
    this.con = con;
    this.inventory = inventory;
    this.hp = hp;
  }
}

export class Items{
  constructor(item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18) {
    this.item1 = item1;
    this.item2 = item2;
    this.item3 = item3;
    this.item4 = item4;
    this.item5 = item5;
    this.item6 = item6;
    this.item7 = item7;
    this.item8 = item8;
    this.item9 = item9;
    this.item10 = item10;
    this.item11 = item11;
    this.item12 = item12;
    this.item13 = item13;
    this.item14 = item14;
    this.item15 = item15;
    this.item16 = item16;
    this.item17 = item17;
    this.item18 = item18;
  }
}

export class CharClass{
  constructor(charClass) {
    this.name = charClass;
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