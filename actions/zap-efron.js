const puppeteer = require('puppeteer')
require('dotenv/config')

const args = [
  `--user-data-dir=${process.env.USER_DATA_DIR}`,
  `--profile-directory=${
    process.env.PROFILE_DIR ? process.env.PROFILE_DIR : 'Default'
  }`
]

const person = process.argv.slice(2, 3)
const message = process.argv.slice(3)

async function run() {
  const browser = await puppeteer.launch({ args })
  const page = await browser.newPage()

  await page.goto('https://web.whatsapp.com/', { waitUntil: 'networkidle2' })
  await page.waitForNavigation()
  await page.click(`span[title="${person}"]`)
  await page.type('div.copyable-text.selectable-text', `${message}`, {
    delay: 100
  })
  await page.keyboard.press('Enter')

  await browser.close()
}

run()
