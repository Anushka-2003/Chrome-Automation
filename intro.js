const puppeteer = require("puppeteer");
let page;
console.log("Before");
// opens browser
const browserOpenPromise = puppeteer.launch({
    headless: false,
    slowMo: true,
    defaultViewport: null,
    args:["--start-maximized"] 
});  
browserOpenPromise.then(function(browser){
     // currently opened tab
     const pageArrPromise = browser.pages();      // gives an array of open pages inside the browser
     return pageArrPromise; 
}).then(function(browserPages){
    page = browserPages[0];
    let gotoPromise = page.goto("https://www.google.com/");
    return gotoPromise;
}).then(function(){
    let elementWaitPromise = page.waitForSelector("input[type = 'text']",{visible: true});
    return elementWaitPromise;
})
.then(function(){
    //console.log("Reached Google Home page");
    let keysWillSendPromise = page.type("input[type = 'text']", "pepcoding");
    return keysWillSendPromise;
}).then(function(){
    let pressEnter = page.keyboard.press("Enter");
    return pressEnter;
}).then(function(){
    let elementWaitPage = page.waitForSelector("h3.LC20lb.DKV0Md",{visible: true});
    return elementWaitPage;
}).then(function(){
    let keysWillSendPromise = page.click("h3.LC20lb.DKV0Md");
    return keysWillSendPromise;
}).catch(function(err){
    console.log("Error: " + err);
})

console.log("After");
