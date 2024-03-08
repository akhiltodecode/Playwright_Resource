const { test, expect, chromium } = require('@playwright/test');

test.describe('Product Browsing Suite', () => {
    let page;
	let browser;

    // Open the website before each test
    test.beforeEach(async () => {
		browser = await chromium.launch({ headless: false});// 1 second delay 
        page = await browser.newPage();
        await page.goto('https://www.amazon.com/');
    },  { timeout: 30000});
	
    // Test to search / browser a product
    test('Test to search / browser a product', async () => {
		
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
	
		},  { timeout: 30000 });

    // Test navigating to different product categories
    test('Test navigating to different product categories', async () => {
        
		await page.click('#searchDropdownBox', { timeout: 50000 });
        await page.click('#searchDropdownBox > option:nth-child(8)'); 
		
		await page.waitForTimeout(1000);
		
		// Search for a product using the search bar
		await page.click('#twotabsearchtextbox');
		await page.fill('#twotabsearchtextbox', 'Foldable TV');
		await page.waitForTimeout(1000);		// Searching for PlayStation 5 as an example
		await page.click('#nav-search-submit-button');
        
		await page.waitForNavigation();
		
		// Click on the first product in the search results
		await page.waitForSelector('.s-search-results');
		const productLink = await page.$('.s-search-results a.a-link-normal');
		await productLink.click();
		
        await page.waitForNavigation();
		await page.waitForTimeout(3000);
		
		await page.click('#searchDropdownBox', { timeout: 50000 });
        await page.click('#searchDropdownBox > option:nth-child(5)'); 
		
		await page.waitForTimeout(1000);
		
		// Search for a product using the search bar
		await page.click('#twotabsearchtextbox');
		await page.fill('#twotabsearchtextbox', 'aspirin');
		await page.waitForTimeout(1000);		// Searching for PlayStation 5 as an example
		await page.click('#nav-search-submit-button');
        
		// Wait for the page to load after authentication
		await page.waitForNavigation();
		
		// Click on the first product in the search results
		await page.waitForSelector('.s-search-results');
		const productLink_nav = await page.$('.s-search-results a.a-link-normal');
		await productLink_nav.click();
		  
		// Verify that the product page has loaded successfully
		if (productLink_nav) {
			console.log('A Product is found from a different department after navigating and test case passed!');
		} else {
			console.log(' Navigating to different department Test case failed!');
			throw new Error('Quitting as Add to cart Test failed!');
		}
        
		await browser.close();
	},  { timeout: 30000 });
});
