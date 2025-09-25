[English](README.md) | [Русский](README.ru.md)
# Usage of 2captcha-solver extension in puppeteer

## Description

This demo project shows how to use the [2captcha-solver](https://chrome.google.com/webstore/detail/2captcha-solver-auto-reco/ifibfemgeogfhoebkmokieepdoobkbpo) extension with [Puppeteer](https://pptr.dev/) to solve captchas at https://2captcha.com/demo/recaptcha-v2.
The example uses [Puppeteer](https://pptr.dev/), [puppeteer-extra](https://www.npmjs.com/package/puppeteer-extra) and [puppeteer-extra-plugin-stealth](https://www.npmjs.com/package/puppeteer-extra-plugin-stealth). [puppeteer-extra](https://www.npmjs.com/package/puppeteer-extra) is a lightweight wrapper around Puppeteer and [puppeteer-extra-plugin-stealth](https://www.npmjs.com/package/puppeteer-extra-plugin-stealth) is an add-on to [puppeteer-extra](https://www.npmjs.com/package/puppeteer-extra) designed to hide the traces of automation.

A detailed described of how this example works is described in our article [How to use the 2Captcha solver extension in Puppeteer for bypass reCAPTCHA, and others captchas](https://2captcha.com/blog/how-to-use-2captcha-solver-extension-in-puppeteer).

## Download the extension

Download the [latest extension release](https://github.com/rucaptcha/2captcha-solver/releases/latest) and extract it to `2captcha-solver` folder

## Install the dependencies

`npm i`

## Setting
Write your api key in the file `'./2captcha-solver/common/config.js '`. You can view your API key on the page https://2captcha.com/setting.

Example:

`apiKey: "7894561d1234ddd00b7894561dd0d00d"`

## Usage

`npm run start`
