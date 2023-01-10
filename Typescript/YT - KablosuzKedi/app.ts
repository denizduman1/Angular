import { data } from "./array";

// find() = şartı sağlayan ilk kaydı döner
// kayıt bulamazsa undefined döner
let founded = data.find(item => item.name == "Garner Rivas" );
//console.log(founded);

// findIndex() = bulduğu kaydın index numarasını getirir.
// kayıt bulamazsa -1 döner
let foundedIndex:number = data.findIndex(item =>  item._id == "5e652aa659a9911f63e6e218");
//console.log(foundedIndex);


// indexOf() = array ve string'lerde (karakter dizisi) kullanılır.
// arama yapmayı sağlar ve bulduğu itemin indexini döner.
// obje değilde verinin tamamı üzerinden kullanmamız gerekir. 
let newArr = ["John","Matt","Barney"];
foundedIndex = newArr.indexOf("Barney"); // 2
foundedIndex = newArr.indexOf("Barney",1); // 1 den sonra var mı varsa yine aynı index = 2
// console.log(foundedIndex); // 2 
//console.log(1,foundedIndex);

// filter = array'i filtrelemek için kullanırız.
let filterArr = data.filter(item => item.age > 30 && item.gender == "female");
// console.log(filterArr);

// map = diziden istediğin elemanları manipüle edebilirsin.
let emailArr = data.map(item => {
    return {email: item.email,company: item.company}
})
//console.log(emailArr);

let mapArr = data.map(item => {
    return `${item.name} [ ${item.phone} ] => Adres: ${item.address}`;
});
//console.log(mapArr);



// db istekleri.. servisin gereksinimleri..
// name email phone age lat longitude friends

let willSaveDate = data.map(item => { 
    return {
        isim: item.name,
        mail: item.email,
        phone: item.phone,
        age: item.age,
        lat: item.latitude,
        long: item.longitude,
        arkadaslar: item.friends.map(f => f.name) // foreach kullansaydık her bir index'ten işlem yapmak gerekecekti.
    }
});
//console.log(willSaveDate);


// reduce = toplayıcı akimülatör toplayarak ilerler.
let ageSum = data.reduce((totalAge,item) => totalAge + item.age , 0);
//console.log(ageSum);


// some = şartına uyan en az 1 kayıt varsa true yoksa false döner
let resultSome:boolean = data.some(item => item.gender == "female");
//console.log(result);

// every = şartına uyan kayıt varsa true bir kayıt bile şarta uymaz ise false döner
let resultEvery:boolean = data.every(item => item.gender == "female");
resultEvery = data.every(item => item.hasOwnProperty("gender")); // hepsinde gender bilgisi var mı
// console.log(resultEvery);

// startsWith = bir metnin bir kelimeyle başlayıp başlamadığını söylüyor.
let name = "Deniz Duman";
console.log(name.startsWith("Den")); // true


// endsWith = bir metnin bir kelimeyle bitip bitmediğini söylüyor.
console.log(name.endsWith("uman")); // true




