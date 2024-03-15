
describe('Автотесты для формы логина и пароля', function () {
    
    it('Проверка на позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');// Зайти на сайт
        cy.get('#mail').type('german@dolnikov.ru')// Ввести правильный логин
        cy.get('#loginButton').should('be.disabled')// Кнопка некликабельна
        cy.get('#pass').type('iLoveqastudio1')// Ввести правильный пароль
        cy.get('#loginButton').should('be.enabled')// Кнопка кликабельна
        cy.get('#loginButton').click();// Нажать войти
        cy.get('#messageHeader').should('be.visible')// Текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно');// Проверить нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')// Есть крестик
})
    it('Напиши автотест на проверку логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');// Зайти на сайт
        cy.get('#forgotEmailButton').click();// Нажать на кнопку "Забыли пароль"
        cy.get('#forgotEmailButton').should('be.enabled')// Кнопка кликабельна
        cy.get('#mailForgot').type('german@dolnikov.ru')// Ввести правильный логин
        cy.get('#restoreEmailButton').click();// Нажать на кнопку "Отправить код"
        cy.get('#restoreEmailButton').should('be.enabled')// Кнопка кликабельна
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');// Проверить нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')// Есть крестик
})
    it('Напиши проверку на негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');// Зайти на сайт
        cy.get('#mail').type('german@dolnikov.ru')// Ввести правильный логин
        cy.get('#loginButton').should('be.disabled')// Кнопка некликабельна
        cy.get('#pass').type('iLoveqastudio12')// Ввести не правильный пароль
        cy.get('#loginButton').should('be.enabled')// Кнопка кликабельна
        cy.get('#loginButton').click();// Нажать войти
        cy.get('#messageHeader').should('be.visible')// Текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет');// Проверить нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')// Есть крестик
})
    it('Напиши проверку на негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');// Зайти на сайт
        cy.get('#mail').type('german@dolnikov.ru1')// Ввести не правильный логин
        cy.get('#loginButton').should('be.disabled')// Кнопка некликабельна
        cy.get('#pass').type('iLoveqastudio1')// Ввести правильный пароль
        cy.get('#loginButton').should('be.enabled')// Кнопка кликабельна
        cy.get('#loginButton').click();// Нажать войти
        cy.get('#messageHeader').should('be.visible')// Текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет');// Проверить нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')// Есть крестик
})
    it('Напиши проверку на негативный кейс валидации', function () {
    	cy.visit('https://login.qa.studio/');// Зайти на сайт
        cy.get('#mail').type('germandolnikov.ru1')// Ввести логин без @
        cy.get('#loginButton').should('be.disabled')// Кнопка некликабельна
        cy.get('#pass').type('iLoveqastudio1')// Ввести правильный пароль
        cy.get('#loginButton').should('be.enabled')// Кнопка кликабельна
        cy.get('#loginButton').click();// Нажать войти
        cy.get('#messageHeader').should('be.visible')// Текст виден пользователю
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');// Проверить нужный текст
        cy.get('#exitMessageButton').should('be.visible')// Есть крестик
})
    it('Напиши проверку на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');// Зайти на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru')// Ввести логин GerMan@Dolnikov.ru
        cy.get('#loginButton').should('be.disabled')// Кнопка некликабельна
        cy.get('#pass').type('iLoveqastudio1')// Ввести правильный пароль
        cy.get('#loginButton').should('be.enabled')// Кнопка кликабельна
        cy.get('#loginButton').click();// Нажать войти
        cy.get('#messageHeader').should('be.visible')// Текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина и пароля нет');// Проверить нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')// Есть крестик
})
})
