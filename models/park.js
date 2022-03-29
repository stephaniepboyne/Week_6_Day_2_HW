const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = []
  }
  
  Park.prototype.addDinosaur = function (dinosaur) {
      this.dinosaurs.push(dinosaur);
  }

  Park.prototype.removeDinosaur = function (dinosaur) {
      const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
      this.dinosaurs.splice(indexOfDinosaur, 1);
  }

  Park.prototype.findMostPopularDinosaur = function () {
        let largest = 0;
        const lenOfArray = this.dinosaurs.length;
        for (counter=0; counter<lenOfArray; counter++)
        {
            if (this.dinosaurs[counter].guestsAttractedPerDay > largest)
            {
                largest = this.dinosaurs[counter];
            }
        }
        return largest.species;
    }

    Park.prototype.findDinosaursBySpecies = function (species) {
        let foundDinosaurs = []
        for (dinosaur of this.dinosaurs) {
            if (dinosaur.species === species) {
                foundDinosaurs.push(dinosaur);
            }
        }
        return foundDinosaurs;
    }

    Park.prototype.totalNumberOfVisitorsPerDay = function () {
        let sum = 0 
        for (var i = 0; i < this.dinosaurs.length; i++) {  
            sum += this.dinosaurs[i].guestsAttractedPerDay;
        }
        return sum;
    }

    Park.prototype.totalNumberOfVisitorsPerYear = function () {
        let sum = 0 
        for (var i = 0; i < this.dinosaurs.length; i++) {  
            sum += this.dinosaurs[i].guestsAttractedPerDay;
        }
        sum = sum * 365
        return sum 
    }

    Park.prototype.totalAnnualRevenue = function () {
        sum = this.totalNumberOfVisitorsPerYear();
        return sum * 50
    }
    
  

  module.exports = Park;