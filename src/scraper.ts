import puppeteer from "puppeteer";
import { askPassword, getUserByUsername } from "./functions";

(async () => {
    const usernameFromDb = 'aydinmate';
    const user = await getUserByUsername(usernameFromDb);
    if (!user) {
      console.error("User not found in the database.");
      return;
    }
    const { username, url } = user;
  
    const password = await askPassword();


  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto(url);

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  await page.waitForSelector("#pt-login-2");
  await page.click("#pt-login-2");

  await page.waitForSelector("#wpName1")
  await page.type('input[id="wpName1"]', username);

  await page.waitForSelector("#wpName1")
  await page.type('input[id="wpPassword1"]', password);

  await page.waitForSelector("#wpLoginAttempt")
  await page.click("#wpLoginAttempt")

  // const data = await page.evaluate(() => {
  //     const titleElement = document.querySelector("#Welcome_to_Wikipedia");
  //     const title = titleElement ? titleElement.textContent?.trim() : null;
  //     return {
  //       title,
  //     };
  //   });

  // console.log('The title of this blog post is "%s".', data.title);

  // await browser.close();
})();
