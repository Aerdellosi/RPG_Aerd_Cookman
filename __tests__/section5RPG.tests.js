import {Character, Items, CharClass, ItemObj, FireLizard, RockMonster, Wizard, Skeleton, Wolves, Pirate, Bats, ShadowDemon, SpiderSnake, LvlUp} from './../src/section5RPG.js';

describe('Character', () => {

  test('should correctly create a character object with 8 key values', () => {
    const character = new Character("Opium Smuggler");
    expect(character.charClass).toEqual("Opium Smuggler");
    // expect(character.str).toEqual(10);
    // expect(character.dex).toEqual(5);
    // expect(character.int).toEqual(5);
    // expect(character.cha).toEqual(5);
    // expect(character.con).toEqual(10);
    // expect(character.inventory).toEqual([]);
    // expect(character.hp).toEqual(10);
  });
});

describe('Items', () => {
// let item1 = {num:1};
// let item2 = {num:2};
// let item3 = {num:3};
// let item4 = {num:4};
// let item5 = {num:5};
// let item6 = {num:6};
// let item7 = {num:7};
// let item8 = {num:8};
// let item9 = {num:9};
// let item10 = {num:10};
// let item11 = {num:11};
// let item12 = {num:12};
// let item13 = {num:13};
// let item14 = {num:14};
// let item15 = {num:15};
// let item16 = {num:16};
// let item17 = {num:17};
// let item18 = {num:18};

  test('should correctly create an items object', () => {
    const charItems = new Items();
    let boolCheckItems;
    if (charItems) {
      boolCheckItems = true;
    }
    expect(boolCheckItems).toEqual(true);
    // const charItems = new Items(item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18);
    // expect(charItems.item1.num).toEqual(1);
    // expect(charItems.item2.num).toEqual(2);
    // expect(charItems.item3.num).toEqual(3);
    // expect(charItems.item4.num).toEqual(4);
    // expect(charItems.item5.num).toEqual(5);
    // expect(charItems.item6.num).toEqual(6);
    // expect(charItems.item7.num).toEqual(7);
    // expect(charItems.item8.num).toEqual(8);
    // expect(charItems.item9.num).toEqual(9);
    // expect(charItems.item10.num).toEqual(10);
    // expect(charItems.item11.num).toEqual(11);
    // expect(charItems.item12.num).toEqual(12);
    // expect(charItems.item13.num).toEqual(13);
    // expect(charItems.item15.num).toEqual(15);
    // expect(charItems.item16.num).toEqual(16);
    // expect(charItems.item17.num).toEqual(17);
    // expect(charItems.item18.num).toEqual(18);
  });
});

describe('CharClass', () => {
  let opiumSmuggler = "opium smuggler";
  let spiceTrader = "spice trader";
  let missionary = "missionary";

  const charClass = new CharClass(opiumSmuggler);
  test("should see if character class object is being created properly", () => {
    expect(charClass.name).toEqual("opium smuggler");
  });
});

describe("ItemObj", () => {
  let cavalrySabre = new ItemObj("cavalry sabre", 6, 10);

  test("should see if the item is being created correctly", () => {
    expect(cavalrySabre.name).toEqual("cavalry sabre");
    expect(cavalrySabre.damage).toEqual(6);
    expect(cavalrySabre.range).toEqual(10);
  })
});
 
describe("Items", () => {
  let cavalrySabre = new ItemObj("cavalry sabre", 6, 10);
  let gunKit = new ItemObj("gunKit", null, null);
  let tradChineseMedicines = new ItemObj("traditional chinese medicine", null, null);
  let kungFuManual = new ItemObj("kung fu manual", 3, 4);
  let opium = new ItemObj("opium", null, null);
  let katana = new ItemObj("katana", 6, 10);
  let fuShensLuckyCricket = new ItemObj("fu shens lucky cricket", null, null);
  let blunderbuss = new ItemObj("blunderbuss", 30, 50);
  let handaxe = new ItemObj("handaxe", 4, 10);
  let floggingWhip = new ItemObj("flogging whip", 4, 25);
  let canteen = new ItemObj("canteen", null, null);
  let hempRope = new ItemObj("hemp rope", null, null);
  let freshBoots = new ItemObj("fresh boots", null, null);
  let purseOfGoldAndSilver = new ItemObj("purse of gold and silver", null, null);
  let porcelainPlate = new ItemObj("porcelein plate", null, null);
  let flintlock = new ItemObj("flint lock", 20, 150);
  let miwuZhiya = new ItemObj("miwu zhiya", 50, 10);
  let bowAndArrows = new ItemObj("bow and arrows", 10, 100);


  let arrayToFillItems = [cavalrySabre, gunKit, tradChineseMedicines, kungFuManual, opium, katana, fuShensLuckyCricket, blunderbuss, handaxe, floggingWhip, canteen, hempRope, freshBoots, purseOfGoldAndSilver, porcelainPlate, flintlock, miwuZhiya, bowAndArrows];


  let itemsListFilled = new Items();

  arrayToFillItems.forEach(myElement => {
    itemsListFilled[myElement.name] = myElement;
  });

  test("should see if the items are being created correctly", () => {
    expect(itemsListFilled["cavalry sabre"].name).toEqual("cavalry sabre");
  });
});

describe('FireLizard', () => {

  test('should correctly create a fire lizard object with stats as key values', () => {
    const lizard = new FireLizard("Fire Lizard", 10, 3, 40);
    expect(lizard.name).toEqual("Fire Lizard");
    expect(lizard.hp).toEqual(10);
    expect(lizard.atkDMG).toEqual(3);
    expect(lizard.atkChance).toEqual(40);
  });
});

describe('RockMonster', () => {

  test('should correctly create a Rock Monster object with stats as key values', () => {
    const rock = new RockMonster("Rock Monster", 25, 4, 10);
    expect(rock.name).toEqual("Rock Monster");
    expect(rock.hp).toEqual(25);
    expect(rock.atkDMG).toEqual(4);
    expect(rock.atkChance).toEqual(10);
  });
});

describe('Wizard', () => {

  test('should correctly create a Wizard object with stats as key values', () => {
    const wiz = new Wizard("Wizard", 12, 3, 40);
    expect(wiz.name).toEqual("Wizard");
    expect(wiz.hp).toEqual(12);
    expect(wiz.atkDMG).toEqual(3);
    expect(wiz.atkChance).toEqual(40);
  });
});

describe('Skeleton', () => {

  test('should correctly create a Wizard object with stats as key values', () => {
    const skeleton = new Skeleton("Skeleton", 12, 3, 40);
    expect(skeleton.name).toEqual("Skeleton");
    expect(skeleton.hp).toEqual(12);
    expect(skeleton.atkDMG).toEqual(3);
    expect(skeleton.atkChance).toEqual(40);
  });
});

describe('Wolves', () => {

  test('should correctly create a wolves object with stats as key values', () => {
    const wolves = new Wolves("Wolves", 12, 3, 40);
    expect(wolves.name).toEqual("Wolves");
    expect(wolves.hp).toEqual(12);
    expect(wolves.atkDMG).toEqual(3);
    expect(wolves.atkChance).toEqual(40);
  });
});

describe('Pirate', () => {

  test('should correctly create a pirate object with stats as key values', () => {
    const pirate = new Pirate("Pirate", 12, 3, 40);
    expect(pirate.name).toEqual("Pirate");
    expect(pirate.hp).toEqual(12);
    expect(pirate.atkDMG).toEqual(3);
    expect(pirate.atkChance).toEqual(40);
  });
});

describe('Bats', () => {

  test('should correctly create a pirate object with stats as key values', () => {
    const bats = new Bats("Bats", 12, 3, 40);
    expect(bats.name).toEqual("Bats");
    expect(bats.hp).toEqual(12);
    expect(bats.atkDMG).toEqual(3);
    expect(bats.atkChance).toEqual(40);
  });
});

describe('ShadowDemon', () => {

  test('should correctly create a pirate object with stats as key values', () => {
    const shadow = new ShadowDemon("ShadowDemon", 12, 3, 40);
    expect(shadow.name).toEqual("ShadowDemon");
    expect(shadow.hp).toEqual(12);
    expect(shadow.atkDMG).toEqual(3);
    expect(shadow.atkChance).toEqual(40);
  });
});

describe('SpiderSnake', () => {

  test('should correctly create a pirate object with stats as key values', () => {
    const spidersnake = new SpiderSnake("SpiderSnake", 12, 3, 40);
    expect(spidersnake.name).toEqual("SpiderSnake");
    expect(spidersnake.hp).toEqual(12);
    expect(spidersnake.atkDMG).toEqual(3);
    expect(spidersnake.atkChance).toEqual(40);
  });
});

describe("Character class", () => {

  test("should correctly update stats when class is assigned", () => {
    let characterBoi = new Character("missionary")
    expect(characterBoi.charClass).toEqual("missionary");
    characterBoi.charClassApplyStats();
    expect(characterBoi.cha).toEqual(10);
  });
  
});

describe("LvlUp", () => {
  
  test("should correctly update stats at level up point", () => {
    LvlUp(5, 0, 0, 5, 0);
    expect(str).toEqual(5);
    expect(dex).toEqual(0);
    expect(int).toEqual(0);
    expect(cha).toEqual(5);
    expect(con).toEqual(0);
  });

});

