// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality
const puppeteer = require('puppeteer-extra');

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

(async () => {
  const pathToExtension = require('path').join(__dirname, '2captcha-solver');
  puppeteer.use(StealthPlugin())
  const browser = await puppeteer.launch({
    headless: false,
    // headless: false,
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`,
    ],
  });
  
  const [page] = await browser.pages()

  // переходим по указанному адресу
  await page.goto('https://2captcha.com/demo/recaptcha-v2') 

  // ждем пока появится элемент с CSS селектором ".captcha-solver"
  await page.waitForSelector('.captcha-solver')
  // кликаем по элементу с указанным селектором
  await page.click('.captcha-solver')

  // По умолчанию waitForSelector ожидает в течении 30 секунд, так как этого времени зачастую не достаточно, то указываем значение timeout вручную вторым параметром.
  // Значение timeout указывается в "ms".
  await page.waitForSelector(`.captcha-solver[data-state="solved"]`, {timeout: 150000})
  
  // После решения капчи выполняем необходимые действия, в нашем случае нажимаем на кнопку  "check".
  await page.click("button[type='submit']")
  
  // await browser.close();

})();
