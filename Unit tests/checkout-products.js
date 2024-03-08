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
  
  // Click on the "Proceed to checkout" button
  await page.click('[name="proceedToRetailCheckout"]');

  // Wait for the login form to appear
  await page.waitForSelector('#ap_email');

  // Fill in the email field
  await page.fill('#ap_email', 'akhileshkeerthi@gmail.com');

  // Click on the "Continue" button
  await page.click('#continue');

  // Wait for the password field to appear
  await page.waitForSelector('#ap_password');

  // Fill in the password field
  await page.fill('#ap_password', 'Shiva_786');
   
  // Click on the "Sign-In" button
  await page.click('#signInSubmit');
  
  // Wait for the checkout page to load
  await page.waitForSelector('#submitOrderButtonId > span > input');

  // Close the browser
  await browser.close();
})();
