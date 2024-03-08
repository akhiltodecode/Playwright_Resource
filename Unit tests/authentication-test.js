// importing playwright from npm returning object chromium
// here we use braces to collect particular key from a collection of values
const { chromium } = require('playwright');

(async () => {
	
  // Headless execution of testcase
  // const browser = chromium.launch({ headless: true });  
	
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate to the Amazon login page
  await page.goto('https://www.amazon.com/');
 
  await page.waitForSelector('#nav-link-accountList', { timeout: 20000 });
  
  // Hover over a tab (replace '#your-tab-selector' with the appropriate selector for the tab)
  await page.hover('#nav-link-accountList');
  
  // Click on the sign-in button
  await page.click('#nav-flyout-ya-signin > a > span');

  // Wait for the login form to appear
  await page.waitForSelector('#ap_email');

  // Fill in the email field
  await page.fill('#ap_email', 'akhileshkeerthi@gmail.com');

  // Click on the "Continue" button
  await page.click('#continue');

  // Wait for the password field to appear
  await page.waitForSelector('#ap_password');

  // Fill in the password field - place your own password
  await page.fill('#ap_password', 'your_password');

  // Click on the "Sign-In" button
  await page.click('#signInSubmit');

  // Wait for the page to load after authentication
  await page.waitForNavigation();

  await page.waitForSelector('#nav-link-accountList-nav-line-1', { timeout: 20000 }); // Wait for 10 seconds
 
  // Verify that the user is logged in
  const userName = await page.textContent('#nav-link-accountList-nav-line-1');
  if (userName.includes('Akhileshkeerthi')) {
    console.log('User authentication test passed!');
  } else {
    console.log('User authentication test failed!');
  }

  // Close the browser
  await browser.close();
})();
