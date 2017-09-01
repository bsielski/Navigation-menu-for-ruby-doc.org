// ==UserScript==
// @name         Navigation menu for ruby-doc.org
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  It adds a menu with links to the popular classes and modules.
// @author       Bartłomiej Sielski
// @match        http*://ruby-doc.org/core-*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var generateElement = function generateElement(tagName) {
      var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var element = document.createElement(tagName);
      if (Object.keys(attributes).length > 0) {
        var keys = Object.keys(attributes);
        keys.forEach(function (item) {
          if (item != "textNode") {
            var attr = document.createAttribute(item);
            attr.value = attributes[item];
            element.setAttributeNode(attr);
          }
        });
        if (attributes.textNode) {
          var textNode = document.createTextNode(attributes.textNode);
          element.appendChild(textNode);
        }
      }
      return element;
    };

    var anchor = document.getElementById("actionbar");
    var links = [];

    links.push(generateElement("a", { href: "Array.html", textNode: "Array" }));
    links.push(generateElement("a", { href: "Data.html", textNode: "Data" }));
    links.push(generateElement("a", { href: "Dir.html", textNode: "Dir" }));
    links.push(generateElement("a", { href: "Enumerable.html", textNode: "Enumerable" }));
    links.push(generateElement("a", { href: "File.html", textNode: "File" }));
    links.push(generateElement("a", { href: "Hash.html", textNode: "Hash" }));
    links.push(generateElement("a", { href: "Kernel.html", textNode: "Kernel" }));
    links.push(generateElement("a", { href: "Random.html", textNode: "Random" }));
    links.push(generateElement("a", { href: "Regexp.html", textNode: "Regexp" }));
    links.push(generateElement("a", { href: "String.html", textNode: "String" }));
    links.push(generateElement("a", { href: "Symbol.html", textNode: "Symbol" }));
    links.push(generateElement("a", { href: "Time.html", textNode: "Time" }));

    var newWrapper = generateElement("div", { "class": "wrapper" });
    var newList = newWrapper.appendChild(generateElement("ul", { "class": "grids g0" }));
    links.forEach(function (link) {
      newList.appendChild(generateElement("li", { "class": "" })).appendChild(link);
    });
    anchor.appendChild(newWrapper);

})();