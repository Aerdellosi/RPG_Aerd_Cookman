import {Character, Items, CharClass, ItemObj} from './../src/section5RPG.js';

describe('Character', () => {

  test('should correctly create a character object with 8 key values', () => {
    const character = new Character("Opium Smuggler", 10, 5, 5, 5, 10, [], 10);
    expect(character.charClass).toEqual("Opium Smuggler");
    expect(character.str).toEqual(10);
    expect(character.dex).toEqual(5);
    expect(character.int).toEqual(5);
    expect(character.cha).toEqual(5);
    expect(character.con).toEqual(10);
    expect(character.inventory).toEqual([]);
    expect(character.hp).toEqual(10);
  });
});

describe('Items', () => {
let item1 = {num:1};
let item2 = {num:2};
let item3 = {num:3};
let item4 = {num:4};
let item5 = {num:5};
let item6 = {num:6};
let item7 = {num:7};
let item8 = {num:8};
let item9 = {num:9};
let item10 = {num:10};
let item11 = {num:11};
let item12 = {num:12};
let item13 = {num:13};
let item14 = {num:14};
let item15 = {num:15};
let item16 = {num:16};
let item17 = {num:17};
let item18 = {num:18};

  test('should correctly create a items object with 18 key values', () => {
    const charItems = new Items(item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18);
    expect(charItems.item1.num).toEqual(1);
    expect(charItems.item2.num).toEqual(2);
    expect(charItems.item3.num).toEqual(3);
    expect(charItems.item4.num).toEqual(4);
    expect(charItems.item5.num).toEqual(5);
    expect(charItems.item6.num).toEqual(6);
    expect(charItems.item7.num).toEqual(7);
    expect(charItems.item8.num).toEqual(8);
    expect(charItems.item9.num).toEqual(9);
    expect(charItems.item10.num).toEqual(10);
    expect(charItems.item11.num).toEqual(11);
    expect(charItems.item12.num).toEqual(12);
    expect(charItems.item13.num).toEqual(13);
    expect(charItems.item15.num).toEqual(15);
    expect(charItems.item16.num).toEqual(16);
    expect(charItems.item17.num).toEqual(17);
    expect(charItems.item18.num).toEqual(18);
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