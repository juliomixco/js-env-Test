webpackJsonp([0],[function(t,n,e){(function(t){"use strict";var n=e(1);(0,n.getUsers)().then(function(n){var e="";n.forEach(function(t){e+='<tr>\n        <td><a href="#" data-id="'+t.id+'" class="deleteUser">Delete</a></td>\n                <td>'+t.id+"</td>\n                <td>"+t.firstName+"</td>\n                <td>"+t.lastName+"</td>                \n                <td>"+t.email+"</td>\n                </tr>"}),t.document.getElementById("users").innerHTML=e})["catch"](function(t){console.log(t)})}).call(n,function(){return this}())},function(t,n,e){"use strict";function r(){return c("users")}function c(t){return fetch(t).then(o,s)}function o(t){return t.json()}function s(t){return console.log(t)}Object.defineProperty(n,"__esModule",{value:!0}),n.getUsers=r,n.get=c,n.onSuccess=o,n.onError=s,e(2)}]);
//# sourceMappingURL=main.d1bc82300285f06bcf36.js.map