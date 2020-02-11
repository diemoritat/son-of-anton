## Basic usage

- Run `npm i` to install the dependencies (`puppeteer` and `dotenv`);
- Create a `.env` file with the [path to the User Data Dir](https://chromium.googlesource.com/chromium/src/+/master/docs/user_data_dir.md), and the name of the profile you want to use. You can use the sample `.env` file to figure out how to do it.
- Run `node actions/zap-efron.js 'Contact Name' 'Your message here'` and that's it.
