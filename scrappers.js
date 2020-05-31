const puppeteer=require('puppeteer');

async function scrapeProduct(url){
    const browser=await puppeteer.launch();
    const page=await browser.newPage();
    await page.goto(url);
    
    const [el]=await page.$x('//*[@id="landingImage"]');
    const src=await el.getProperty('src');
    const srcTxt=await src.jsonValue();

    const [el2]=await page.$x('//*[@id="title"]');
    const txt=await el2.getProperty('textContent');
    const rawTxt=await txt.jsonValue();

    const [el3]=await page.$x('//*[@id="priceblock_ourprice"]');
    const txt2=await el3.getProperty('textContent');
    const rawTxt2=await txt2.jsonValue();

    console.log({srcTxt,rawTxt,rawTxt2});

    browser.close();
}

scrapeProduct('https://www.amazon.com/Zephyrus-Gaming-GeForce-Windows-GA502IU-ES76/dp/B0863S8HJ3/ref=sr_1_1?crid=3UUKQG74HAVMG&dchild=1&keywords=rog+zephyrus+g14&qid=1589639742&sprefix=rog+zep%2Caps%2C412&sr=8-1')