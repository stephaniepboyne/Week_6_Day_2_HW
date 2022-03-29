const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Jurassic Park', 50);
  })

  it('should have a name', function () {
    park = new Park('Jurassic Park', 50);
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    park = new Park('Jurassic Park', 50);
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function () {
    park = new Park('Jurassic Park', 50);
    const expected = [];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park = new Park('Jurassic Park', 50);
    dinosaur = new Dinosaur('Triceratops', 'carnivore', 80);
    park.addDinosaur(dinosaur);
    const expected = [dinosaur];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park = new Park('Jurassic Park', 50);
    dinosaur1 = new Dinosaur('Triceratops', 'carnivore', 80);
    dinosaur2 = new Dinosaur('Brontosaurus', 'omnivore', 65);
    park.dinosaurs = [dinosaur1, dinosaur2];
    park.removeDinosaur(dinosaur1);
    const expected = [dinosaur2];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park = new Park('Jurassic Park', 50);
    dinosaur1 = new Dinosaur('Triceratops', 'carnivore', 80);
    dinosaur2 = new Dinosaur('Brontosaurus', 'omnivore', 65);
    dinosaur3 = new Dinosaur('Pterodactyl', 'omnivore', 30);
    park.dinosaurs = [dinosaur, dinosaur2, dinosaur3];
    const expected = 'Triceratops';
    const actual = park.findMostPopularDinosaur();
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park = new Park('Jurassic Park', 50);
    dinosaur1 = new Dinosaur('Triceratops', 'carnivore', 80);
    dinosaur2 = new Dinosaur('Brontosaurus', 'omnivore', 65);
    dinosaur3 = new Dinosaur('Pterodactyl', 'omnivore', 30);
    dinosaur4 = new Dinosaur('Pterodactyl', 'omnivore', 30);
    park.dinosaurs = [dinosaur1, dinosaur2, dinosaur3, dinosaur4];
    const expected = [dinosaur3, dinosaur4];
    const actual = park.findDinosaursBySpecies('Pterodactyl');
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to calculate the total number of visitors per day', function () {
    park = new Park('Jurassic Park', 50);
    dinosaur1 = new Dinosaur('Triceratops', 'carnivore', 80);
    dinosaur2 = new Dinosaur('Brontosaurus', 'omnivore', 65);
    dinosaur3 = new Dinosaur('Pterodactyl', 'omnivore', 30);
    dinosaur4 = new Dinosaur('Pterodactyl', 'omnivore', 30);
    park.dinosaurs = [dinosaur1, dinosaur2, dinosaur3, dinosaur4];
    const expected = 205;
    const actual = park.totalNumberOfVisitorsPerDay();
    assert.deepStrictEqual(actual, expected);
  });


  it('should be able to calculate the total number of visitors per year', function () {
    park == new Park('Jurassic Park', 50);
    dinosaur1 = new Dinosaur('Triceratops', 'carnivore', 80);
    dinosaur2 = new Dinosaur('Brontosaurus', 'omnivore', 65);
    dinosaur3 = new Dinosaur('Pterodactyl', 'omnivore', 30);
    dinosaur4 = new Dinosaur('Pterodactyl', 'omnivore', 30);
    park.dinosaurs = [dinosaur1, dinosaur2, dinosaur3, dinosaur4];
    const expected = 74825;
    const actual = park.totalNumberOfVisitorsPerYear();
    assert.deepStrictEqual(actual, expected);
  });
  

  it('should be able to calculate total revenue for one year', function () {
    park == new Park('Jurassic Park', 50);
    dinosaur1 = new Dinosaur('Triceratops', 'carnivore', 80);
    dinosaur2 = new Dinosaur('Brontosaurus', 'omnivore', 65);
    dinosaur3 = new Dinosaur('Pterodactyl', 'omnivore', 30);
    dinosaur4 = new Dinosaur('Pterodactyl', 'omnivore', 30);
    park.dinosaurs = [dinosaur1, dinosaur2, dinosaur3, dinosaur4];
    const expected = 3741250;
    const actual = park.totalAnnualRevenue();
    assert.deepStrictEqual(actual, expected);
  });

});
