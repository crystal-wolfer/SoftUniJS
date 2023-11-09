const { chromium } = require("playwright-chromium");
const { assert } = require("chai");
const { expect } = require("chai");

describe("MoviesApp", function () {
  before(async function () {
    browser = await chromium.launch({ headless: false, slowMo: 1000 });
  });

  // after (async function(){
  //   await browser.close();
  // });

  beforeEach(async function () {
    page = await browser.newPage();
  });

  // afterEach(async function(){
  //   page.close();
  // });

  describe("Load Login Page", function () {
    // it ( "should load login page after clicking home page", async function(){
    //   this.timeout(10000);
    //   await page.goto("http://127.0.0.1:5500/JS%20Applications/04%20Single%20Page%20Applications/Excercises/02.Movies/index.html");
    //   await page.click('a[href="/"]');

    //   //check if login section is visible in the DOM, at this point it shouldnt 
    //   assert.equal(await page.isVisible("#form-login"), false);

    //   await page.click('a[href="/login"]');
    //   assert.equal(await page.isVisible("#form-login"), true);

    // })

    it("should execute login", async function () {
      this.timeout(10000);
      await page.goto("http://127.0.0.1:5500/JS%20Applications/04%20Single%20Page%20Applications/Excercises/02.Movies/index.html");
      await page.click('a[href="/"]');
      await page.click('a[href="/login"]');
      assert.equal(await page.isVisible("#form-login"), true);

      await page.fill("#form-login input[name='email']", "peter@abv.bg");
      await page.fill("#form-login input[name='password']", "123456");

      const [response, click] = await Promise.all([
        page.waitForResponse("http://localhost:3030/users/login"),
        await page.click('button[type="submit"]')
      ]);
      jsonRes = await response.json()
      expect(jsonRes).to.have.property("accessToken");

    })

  })
})