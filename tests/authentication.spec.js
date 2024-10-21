// importing playwright from npm returning object chromium
// here we use braces to collect particular key from a collection of values

// authentication.spec.js

const { test, expect, chromium } = require('@playwright/test');

test.describe('Authentication Suite', () => {
    let page;
	let browser;

    // Open the website before each test
    test.beforeEach(async () => {
		browser = await chromium.launch({ headless: false });
        page = await browser.newPage();
        await page.goto('https://www.amazon.com/');
		
    },  { timeout: 30000 });

    // Test logging in with valid credentials
    test('Logging in with valid credentials', async () => {
        // Implement login with invalid credentials
	
		await page.waitForSelector('#nav-link-accountList', { timeout: 20000 });
		
		// Hover over a tab (replace '#your-tab-selector' with the appropriate selector for the tab)
		await page.hover('#nav-link-accountList');
		
		// Click on the sign-in button
		await page.click('#nav-flyout-ya-signin > a > span');
		
		// Wait for the login form to appear
		await page.waitForSelector('#ap_email', { timeout: 20000 });

		// Fill in the email field
		await page.fill('#ap_email', 'akhilesh@g.m');

		// Click on the "Continue" button
		await page.click('#continue');

		// Wait for the password field to appear
	    await page.waitForSelector('#ap_password');

		// Fill in the password field - place your own password
	    await page.fill('#ap_password', 'yourpwd');

		// Click on the "Sign-In" button
		await page.click('#signInSubmit');

		// Wait for the page to load after authentication
		await page.waitForNavigation();

		await page.waitForSelector('#nav-link-accountList-nav-line-1', { timeout: 20000 }); // Wait for 10 seconds
		 
		// Verify that the user is logged in
		const userName = await page.textContent('#nav-link-accountList-nav-line-1');
		if (userName.includes('Akhileshkeerthi')) {
		console.log('User Login test passed!');
		} else {
		console.log('User authentication test failed!');
		}

		// Close the browser
		await browser.close();
	
		},  { timeout: 30000 });

    // Test logging in with invalid credentials
    test('Logging in with invalid credentials', async () => {
        // Implement login with invalid credentials
	
		await page.waitForSelector('#nav-link-accountList', { timeout: 20000 });
		
		// Hover over a tab (replace '#your-tab-selector' with the appropriate selector for the tab)
		await page.hover('#nav-link-accountList');
		
		// Click on the sign-in button
		await page.click('#nav-flyout-ya-signin > a > span');
		
		// Wait for the login form to appear
		await page.waitForSelector('#ap_email', { timeout: 20000 });

		// Fill in the email field
		await page.fill('#ap_email', 'akhileshk@g.m');

		// Click on the "Continue" button
		await page.click('#continue');
		
        const wrong_un = await page.waitForSelector('#auth-error-message-box');
		if (wrong_un){
			console.log('User Invalid Credentails displays Alert!');
		}
		else{
		console.log('User Invalid credentials, dosent display Alert!');
		}
		// Close the browser
		await browser.close();
    },  { timeout: 30000 });

    // Test logging out
    test('Logging out', async () => {	
		
        // Implement logout
		await page.waitForSelector('#nav-link-accountList', { timeout: 20000 });
  
	    // Hover over a tab (replace '#your-tab-selector' with the appropriate selector for the tab)
		await page.hover('#nav-link-accountList');
		  
		// Click on the sign-in button
		await page.click('#nav-flyout-ya-signin > a > span');
        
		
		// Wait for the login form to appear
		await page.waitForSelector('#ap_email', { timeout: 20000 });

		// Fill in the email field
		await page.fill('#ap_email', 'akhileshk@g.m');

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

		await page.hover('#nav-link-accountList', { timeout: 30000 });
        
		await page.click('#nav-item-signout > span');
		
		// Wait for the page to load after authentication
		await page.waitForNavigation();
 
        // Hover over a tab (replace '#your-tab-selector' with the appropriate selector for the tab)
		await page.hover('#nav-link-accountList');
		  
		// Click on the sign-in button
		const sign_in = await page.waitForSelector('#nav-flyout-ya-signin > a > span');
        if (sign_in){
			console.log('Test Passed user is logged out')
		}
		else{
			console.log('Test failed user is not logged out!')
		}
		// Close the browser
		await browser.close();
	},  { timeout: 30000 });
});

