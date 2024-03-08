const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false});
  const page = await browser.newPage();

  // Navigate to the Amazon website
  await page.goto('https://www.amazon.com/ref=nav_logo');

  // Click on a specific selection (e.g., Amazon Basics)
  await page.click('#nav-xshop > a:nth-child(6)'); // Replace with appropriate selector

  // Wait for the element to be visible 
  await page.waitForSelector('#nav-area > div > div.Header__rightColumn__KDRfQ > div > div.Header__menuArea__ejLNf > div.Header__searchArea__yVqw6 > div > input', { timeout: 60000 });

  // Click on search bar for typing in product name
  await page.click('#nav-area > div > div.Header__rightColumn__KDRfQ > div > div.Header__menuArea__ejLNf > div.Header__searchArea__yVqw6 > div > input'); // Replace with appropriate selector

  // Wait for the product page to load
  //await page.waitForNavigation();
  
  // Fill in the email field
  await page.type('#nav-area > div > div.Header__rightColumn__KDRfQ > div > div.Header__menuArea__ejLNf > div.Header__searchArea__yVqw6 > div > input', 'Amazon Basics FSC Certified Solid Wood Kitchen Rectangular Dining Table, Natural Wood, 29.5"D x 47.2"W x 29.5"H'); 
  
  // Press the Enter key to submit the form
  await page.press('#nav-area > div > div.Header__rightColumn__KDRfQ > div > div.Header__menuArea__ejLNf > div.Header__searchArea__yVqw6 > div > input', 'Enter');

  // Verify that the product page has loaded successfully
  const productTitle = await page.textContent('#ProductGrid-Search > div > div > div.SearchHeaderDesktop__search-header__LXGU0 > div:nth-child(1) > p'); // Replace with appropriate selector
  if (!productTitle.includes('0')) {
    console.log('Product browsing found and test passed!');
  } else {
    console.log('Product browsing test failed!');
  }

  // Close the browser
  await browser.close();
})();
