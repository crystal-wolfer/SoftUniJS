const {chromium} = require("playwright-chromium");
const {assert} = require("chai");

describe("MoviesApp", function (){
  before (async function(){
    browser = await chromium.launch({headless: false, slowMo: 1000});
  } );

  // after (async function(){
  //   await browser.close();
  // });

  beforeEach(async function(){
    page = await browser.newPage();
  });

  // afterEach(async function(){
  //   page.close();
  // });

  describe("Load Login Page", function(){
    it ( "should load login page after clicking home page", async function(){
      this.timeout(10000);
      await page.goto("http://127.0.0.1:5500/JS%20Applications/04%20Single%20Page%20Applications/Excercises/02.Movies/index.html");
      await page.click('a[href="/"]');

      //check if login section is visible in the DOM
      assert.equal(await page.isVisible("#form-login"), false);

      await page.click('a[href="/login"]');
      assert.equal(await page.isVisible("#form-login"), true);


    })
  })
})