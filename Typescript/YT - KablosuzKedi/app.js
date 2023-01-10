"use strict";
exports.__esModule = true;
var array_1 = require("./array");
// find() = şartı sağlayan ilk kaydı döner
// kayıt bulamazsa undefined döner
var founded = array_1.data.find(function (item) { return item.name == "Garner Rivas"; });
//console.log(founded);
// findIndex() = bulduğu kaydın index numarasını getirir.
// kayıt bulamazsa -1 döner
var foundedIndex = array_1.data.findIndex(function (item) { return item._id == "5e652aa659a9911f63e6e218"; });
//console.log(foundedIndex);
// indexOf() = array ve string'lerde (karakter dizisi) kullanılır.
// arama yapmayı sağlar ve bulduğu itemin indexini döner.
// obje değilde verinin tamamı üzerinden kullanmamız gerekir. 
var newArr = ["John", "Matt", "Barney"];
foundedIndex = newArr.indexOf("Barney"); // 2
foundedIndex = newArr.indexOf("Barney", 1); // 1 den sonra var mı varsa yine aynı index = 2
// console.log(foundedIndex); // 2 
//console.log(1,foundedIndex);
// filter = array'i filtrelemek için kullanırız.
var filterArr = array_1.data.filter(function (item) { return item.age > 30 && item.gender == "female"; });
// console.log(filterArr);
// map = diziden istediğin elemanları manipüle edebilirsin.
var emailArr = array_1.data.map(function (item) {
    return { email: item.email, company: item.company };
});
//console.log(emailArr);
var mapArr = array_1.data.map(function (item) {
    return "".concat(item.name, " [ ").concat(item.phone, " ] => Adres: ").concat(item.address);
});
//console.log(mapArr);
// db istekleri.. servisin gereksinimleri..
// name email phone age lat longitude friends
var willSaveDate = array_1.data.map(function (item) {
    return {
        isim: item.name,
        mail: item.email,
        phone: item.phone,
        age: item.age,
        lat: item.latitude,
        long: item.longitude,
        arkadaslar: item.friends.map(function (f) { return f.name; }) // foreach kullansaydık her bir index'ten işlem yapmak gerekecekti.
    };
});
//console.log(willSaveDate);
// reduce = toplayıcı akimülatör toplayarak ilerler.
var ageSum = array_1.data.reduce(function (totalAge, item) { return totalAge + item.age; }, 0);
//console.log(ageSum);
// some = şartına uyan en az 1 kayıt varsa true yoksa false döner
var resultSome = array_1.data.some(function (item) { return item.gender == "female"; });
//console.log(result);
// every = şartına uyan kayıt varsa true bir kayıt bile şarta uymaz ise false döner
var resultEvery = array_1.data.every(function (item) { return item.gender == "female"; });
resultEvery = array_1.data.every(function (item) { return item.hasOwnProperty("gender"); }); // hepsinde gender bilgisi var mı
// console.log(resultEvery);
// startsWith = bir metnin bir kelimeyle başlayıp başlamadığını söylüyor.
var name = "Deniz Duman";
console.log(name.startsWith("Den")); // true
// endsWith = bir metnin bir kelimeyle bitip bitmediğini söylüyor.
console.log(name.endsWith("uman")); // true
