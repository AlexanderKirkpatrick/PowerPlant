import { changeState, feed, blueFood, hydrate, superWater, storeState } from './../src/plant.js';

describe('hydrate', () => {

  test('should increment a plant water level by 1', () => {
    const plant = {};
    const newPlant = hydrate(1)(plant);
    expect(newPlant.water).toEqual(1);
  });
});

describe('blueFood', () => {

  test('should increment a plant soil level by 1', () => {
    let test = storeState();
    let plantTest = test(blueFood);
    expect(plantTest).toEqual({ soil : 5 });
  });
});

describe('feed', () => {

  test('should increment a plant soil level by 1', () => {
    const plant = {};
    const newPlant = feed(1)(plant);
    expect(newPlant.soil).toEqual(1);
  });
});

describe('superWater', () => {

  test('should decrement a plant soil level by 5', () => {
    const plant = {};
    const newPlant = superWater(plant);
    expect(newPlant.soil).toEqual(-5);
  });
});

describe('changeState', () => {

  test('should change state by a specified function', () => {
    const fedPlant = changeState(blueFood);
    expect(fedPlant.soil).toBe(5);
  });
});