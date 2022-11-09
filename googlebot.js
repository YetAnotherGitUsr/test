// ==UserScript==
// @name         Google bot
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  just a simple Google bot doing something
// @author       You
// @match        https://www.google.com/*
// @icon         
// @grant        none
// ==/UserScript==
let links = document.links;
let btnK = document.getElementsByName("btnK")[0];
let keywords = ["10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress", "Вывод произвольных типов записей и полей в WordPress"];
let keyword = keywords[getRandom(0, keywords.length)];
if (btnK !== undefined) {
    btnK.click();
} else {
    for(let i = 0; i < links.length; i++) {
        if (links[i].href.indexOf("napli.ru") !== -1) {
            let link = links[i];
            console.log("Нашел строку " + link);
            link.click();
            break;
        }
    }
}
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
