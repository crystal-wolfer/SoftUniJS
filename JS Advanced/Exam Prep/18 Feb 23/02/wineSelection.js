class WineSelection {
  constructor(space) {
    this.space = Number(space);
    this.wines = [];
    this.bill = 0;
  }

  reserveABottle(wineName, wineType, price) {
    if (this.wines.length >= this.space) {
      throw new Error("Not enough space in the cellar.");
    }

    this.wines.push(
      {
        wineName,
        wineType,
        price,
        paid: false,
      }
    );

    return `You reserved a bottle of ${wineName} ${wineType} wine.`
  }

  payWineBottle(wineName, price) {
    let existigWine = this.wines.find(wine => wine.wineName === wineName);

    if (!existigWine) {
      throw new Error(`${wineName} is not in the cellar.`);
    }

    if (existigWine.paid === true) {
      throw new Error(`${wineName} has already been paid.`)
    }

    existigWine.paid = true;
    this.bill += price;
    return `You bought a ${wineName} for a ${price}$.`
  }

  openBottle(wineName) {
    let existigWine = this.wines.find(wine => wine.wineName === wineName);

    if (!existigWine) {
      throw new Error("The wine, you're looking for, is not found.");
    }

    if (existigWine.paid === false) {
      throw new Error(`${wineName} need to be paid before open the bottle.`);
    }

    this.wines = this.wines.filter((wine) => wine.wineName !== wineName);
    return `You drank a bottle of ${wineName}.`
  }

  cellarRevision(wineType) {
    if (typeof wineType !== 'undefined') {
      let existigWine = this.wines.find(wine => wine.wineType === wineType);

      if (!existigWine) {
        throw new Error(`There is no ${wineType} in the cellar.`);
      }

      const hasPaid = existigWine.paid === true ? 'Has Paid' : 'Not Paid';
      return `${existigWine.wineName} > ${existigWine.wineType} - ${hasPaid}.`
    } else {
      let emptySlots = this.space - this.wines.length;
      let result = [`You have space for ${emptySlots} bottles more.`, `You paid ${this.bill}$ for the wine.`];

      let sorted = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
      sorted.forEach(wine => {
        const hasPaid = wine.paid === true ? 'Has Paid' : 'Not Paid';
        result.push(`${wine.wineName} > ${wine.wineType} - ${hasPaid}.`);
      });
      return result.join('\n');
    }
  }

}

const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());

//37min