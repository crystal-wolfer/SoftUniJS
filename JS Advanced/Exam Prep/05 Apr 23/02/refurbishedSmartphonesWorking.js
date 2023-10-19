class RefurbishedSmartphones {
  constructor(retailer) {
      this.retailer = retailer;
      this.availableSmartphones = [];
      this.soldSmartphones = [];
      this.revenue = 0;
  }

  addSmartphone(model, storage, price, condition) {
      if (
          typeof model !== 'string' || !model ||
          typeof storage !== 'number' || storage <= 0 ||
          typeof price !== 'number' || price <= 0 ||
          typeof condition !== 'string' || !condition
      ) {
          throw new Error("Invalid smartphone!");
      }

      this.availableSmartphones.push({
          model,
          storage,
          price,
          condition,
      });

      return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
  }

  sellSmartphone(model, desiredStorage) {
      const smartphoneIndex = this.availableSmartphones.findIndex(smartphone => smartphone.model === model);

      if (smartphoneIndex === -1) {
          throw new Error(`${model} was not found!`);
      }

      const smartphone = this.availableSmartphones[smartphoneIndex];
      let soldPrice = smartphone.price;

      if (smartphone.storage >= desiredStorage) {
          // No change in price.
      } else if (desiredStorage - smartphone.storage <= 128) {
          soldPrice -= 0.10 * smartphone.price;
      } else {
          soldPrice -= 0.20 * smartphone.price;
      }

      this.revenue += soldPrice;
      this.soldSmartphones.push({
          model: smartphone.model,
          storage: smartphone.storage,
          soldPrice,
      });

      this.availableSmartphones.splice(smartphoneIndex, 1);

      return `${model} was sold for ${soldPrice.toFixed(2)}$`;
  }

  upgradePhones() {
      if (this.availableSmartphones.length === 0) {
          throw new Error("There are no available smartphones!");
      }

      const upgradedPhones = [];
      for (const smartphone of this.availableSmartphones) {
          smartphone.storage *= 2;
          upgradedPhones.push(`${smartphone.model} / ${smartphone.storage} GB / ${smartphone.condition} condition / ${smartphone.price.toFixed(2)}$`);
      }

      return `Upgraded Smartphones:\n${upgradedPhones.join('\n')}`;
  }

  salesJournal(criteria) {
      if (criteria !== 'storage' && criteria !== 'model') {
          throw new Error("Invalid criteria!");
      }

      const sortedSoldSmartphones = this.soldSmartphones.slice().sort((a, b) => {
          if (criteria === 'storage') {
              return b.storage - a.storage;
          } else if (criteria === 'model') {
              return a.model.localeCompare(b.model);
          }
      });

      const smartphonesCount = sortedSoldSmartphones.length;
      const totalIncome = this.revenue.toFixed(2);

      const result = [`${this.retailer} has a total income of ${totalIncome}$`, `${smartphonesCount} smartphones sold:`];

      for (const smartphone of sortedSoldSmartphones) {
          result.push(`${smartphone.model} / ${smartphone.storage} GB / ${smartphone.soldPrice.toFixed(2)}$`);
      }

      return result.join('\n');
  }
}

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));


// SecondLife Devices has a total income of 1297.00$
// 2 smartphones sold:
// Samsung S20 Ultra / 256 GB / 1000.00$
// Xiaomi Redmi Note 10 Pro / 128 GB / 297.00$

//54min