
const { test, expect, chromium } = require('@playwright/test');

test.describe('Cart Management Suite', () => {
    let page;
	let browser;

    // Open the website before each test
    test.beforeEach(async () => {
		browser = await chromium.launch({ headless: false});// 1 second delay 
        page = await browser.newPage();
        await page.goto('https://www.amazon.com/', {timeout: 50000});
    },  { timeout: 30000 });

    // Test adding items to the cart
    test('Test adding items to the cart', async () => {
		
        await page.click('#twotabsearchtextbox', { timeout: 50000 });
  
		// Search for a product using the search bar
		await page.fill('#twotabsearchtextbox', 'playstation 5'); // Searching for PlayStation 5 as an example
		await page.click('#nav-search-submit-button');
         
		// Wait for the page to load after authentication
		await page.waitForNavigation(); 
		 
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
			console.log('Product added to cart');
		} else {
			console.log('Add to cart Test failed!');
		}
        
		// Close the browser
		await browser.close();
	
		},  { timeout: 30000 });

    // Test updating the quantity of items in the cart
    test('Test updating the quantity of items in the cart', async () => {
        
		await page.click('#twotabsearchtextbox', { timeout: 50000 });
  
		// Search for a product using the search bar
		await page.fill('#twotabsearchtextbox', 'playstation 5'); // Searching for PlayStation 5 as an example
		await page.click('#nav-search-submit-button');
        
		// Wait for the page to load after authentication
		await page.waitForNavigation();
		
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
			console.log('Product added to cart');
		} else {
			console.log('Add to cart Test failed!');
			throw new Error('Quitting as Add to cart Test failed!');
		}
        
		// Click on the "Go to Cart" button
		const goToCartButton = await page.$('#sw-gtc > span > a');
		await goToCartButton.click();
		
		// Wait for the page to load after authentication
		await page.waitForNavigation();
		
		await page.click('#quantity');
		await page.click('#quantity > option:nth-child(3)');
		
		const quantity = await page.textContent('#sc-active-C18c38978-e812-4268-abc7-50f588763014 > div.sc-list-item-content > div > div:nth-child(2) > div.a-row.sc-action-links > span.sc-action-quantity > span > span:nth-child(1) > span > span > span > span > span.a-dropdown-prompt');
		if (quantity === '2')
		{ 
			console.log('Test Case 2: Quantity has been updated and test case passed')
		}
		else{
			console.log('Test Case 2: Quantity update test case failed')
		}
		
		// Close the browser
		await browser.close();
	},  { timeout: 30000 });
	
    
    // Test removing items from the cart
    test('Test removing items from the cart', async () => {
        
		await page.click('#twotabsearchtextbox', { timeout: 50000 });
  
		// Search for a product using the search bar
		await page.fill('#twotabsearchtextbox', 'playstation 5'); // Searching for PlayStation 5 as an example
		await page.click('#nav-search-submit-button');

        // Wait for the page to load after authentication
		await page.waitForNavigation();

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
			console.log('Product added to cart');
		} else {
			console.log('Add to cart Test failed!');
			throw new Error('Quitting as Add to cart Test failed!');
		}
		
		await page.click('#nav-cart');
		await page.click('#sc-active-18c38978-e812-4268-abc7-50f588763014 > div.sc-list-item-content > div > div:nth-child(2) > div.a-row.sc-action-links > span.a-size-small.sc-action-delete');
		
		await page.waitForSelector('#sc-active-cart > div > div > div > h1', {timeout: 10000});
		
		// Close the browser
		await browser.close();
	},  { timeout: 30000 });
});
