const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false});
  const page = await browser.newPage();

  // Navigate to Amazon's e-commerce website
  await page.goto('https://www.amazon.com/');
  
  await page.click('#twotabsearchtextbox');
  
  // Search for a product using the search bar
  await page.fill('#twotabsearchtextbox', 'playstation 5'); // Searching for PlayStation 5 as an example
  await page.keyboard.press('Enter');

  // Click on the first product in the search results
  await page.waitForSelector('.s-search-results');
  const productLink = await page.$('.s-search-results a.a-link-normal');
  await productLink.click();

  // Wait for the product page to load
  await page.waitForSelector('#add-to-cart-button');

  // Click on the "Add to Cart" button
  const addToCartButton = await page.$('#add-to-cart-button');
  await addToCartButton.click();
  
  // Wait for the page to load after authentication
  await page.waitForNavigation();

  // Wait for the item to be added to the cart
  const added_Tocart = await page.$('#NATC_SMART_WAGON_CONF_MSG_SUCCESS > h1');
  
  // Verify that the product page has loaded successfully
  if (added_Tocart) {
    console.log('Product added to cart and test passed');
  } else {
    console.log('Add to cart Test failed!');
  }

  // Close the browser
  await browser.close();
})();
