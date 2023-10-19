class RefurbishedSmartphones{
  constructor(retailer){
    this.retailer = retailer;
    this.availableSmartphones = [];
    this.soldSmartphones = [];
    this.revenue = 0;
  }

  addSmartphone(model, storage, price, condition){
    if (!model || !storage || !price || !condition || storage <= 0 || price <= 0){
      throw new Error ("Invalid smartphone!");
    }

    this.availableSmartphones.push({
      model: model,
      storage: Number(storage),
      price: Number(price),
      condition: condition
    });

    return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`
  }

  sellSmartphone(model, desiredStorage){
    let existingItem = this.availableSmartphones.find(phone => phone.model === model);
    let soldPrice = existingItem.price;

    if(!existingItem){
      throw new Error (`${model} was not found!`); 
    }

    let diff = desiredStorage - existingItem.storage;
    if(existingItem.storage >= desiredStorage){
      // do nothing
    } else if (diff <= 128){
      soldPrice -= (existingItem.price * 0.1);
    } else if (diff > 128){
      soldPrice -= (existingItem.price * 0.2);
    }

    this.soldSmartphones.push({
      model: model,
      storage: existingItem.storage,
      soldPrice: Math.round(soldPrice)
    });

    this.revenue += soldPrice;
    this.availableSmartphones = this.availableSmartphones.filter((phone) => phone.model !== model);

    return `${model} was sold for ${soldPrice.toFixed(2)}$`
  }

  upgradePhones(){
    if(this.availableSmartphones.length === 0){
      throw new Error ("There are no available smartphones!")
    }
  
    let res = [`Upgraded Smartphones:`];

    let doubled = this.availableSmartphones.map(phone => {
      phone.storage = phone.storage * 2;
      res.push(`${phone.model} / ${phone.storage} GB / ${phone.condition} condition  / ${phone.price.toFixed(2)}$`);
    });

    return res.join('\n');
  }

  salesJournal(criteria){
    if (criteria !== 'model' && criteria !== 'storage'){
      throw new Error ("Invalid criteria!");  
    }
    let result = [`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`,`${this.soldSmartphones.length} smartphones sold:`];
    if (criteria === "storage"){
      let sorted = this.soldSmartphones.sort((a,b) => b.storage - a.storage);
      sorted.forEach(phone => {
        result.push(`${phone.model} / ${phone.storage} GB / ${phone.soldPrice.toFixed(2)}$`)
      });
    }else{
      let sorted = this.soldSmartphones.sort((a,b) => a.model.localeCompare(b.model));
      sorted.forEach(phone => {
        result.push(`${phone.model} / ${phone.storage} GB / ${phone.soldPrice.toFixed(2)}$`)
      });
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


// 54min