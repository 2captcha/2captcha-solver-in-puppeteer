[English](README.md) | [Русский](README.ru.md)
# Использование расширения 2captcha-solver в puppeteer

## Описание

В этом демонстрационном проекте показано, как использовать расширение [2captcha-solver](https://chrome.google.com/webstore/detail/2captcha-solver-auto-reco/ifibfemgeogfhoebkmokieepdoobkbpo) вместе с [Puppeteer](https://pptr.dev/), для решения капчи на странице https://2captcha.com/demo/recaptcha-v2.

В примере используется [Puppeteer](https://pptr.dev/), [puppeteer-extra](https://www.npmjs.com/package/puppeteer-extra) и [puppeteer-extra-plugin-stealth](https://www.npmjs.com/package/puppeteer-extra-plugin-stealth). [puppeteer-extra](https://www.npmjs.com/package/puppeteer-extra) это легкая оболочка вокруг [Puppeteer](https://pptr.dev/), а [puppeteer-extra-plugin-stealth](https://www.npmjs.com/package/puppeteer-extra-plugin-stealth) это дополнение к  [puppeteer-extra](https://www.npmjs.com/package/puppeteer-extra), предназначенное для скрытия следов автоматизации.

Подробное описание работы этого примера, описано в нашей статье [Использование расширения 2captcha-solver в Puppeteer](https://2captcha.com/ru/blog/puppeteer-captcha-solver).

## Загрузка расширения

Скачайте [последний релиз расширения](https://github.com/rucaptcha/2captcha-solver/releases/latest) и распакуйте его в папку `2captcha-solver`

## Установка зависимостей

`npm i`

## Настройка
Укажите свой `apiKey` в файле `'./2captcha-solver/common/config.js'`. Свой API key вы можете посмотреть на странице https://2captcha.com/setting. 

Пример:

`apiKey: "7894561d1234ddd00b7894561dd0d00d"`

## Запуск

`npm run start`