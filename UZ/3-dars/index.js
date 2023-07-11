// If _ Else _ Nulish

// ============================
// If(){} - qavs ichida Contional operator boladi, agar true qaytsa if ichidagi kodlar ishlaydi
// else if(){} - agar if hato bolsa else if else ichidagi shartni bajaradi
// else{} - ifdagi va if else shart noto'g'ri bo'lsa else dan kodlar ishlaydi
// **har bir if alohida grupa
    // ==========
    // 18  dan kattamisiz
    // ==========

    // let age = 18;

    // if (age >= 18) {
    //     console.log('kirishingiz mumkin');
    // } else{
    //     console.log('kirish mumkin emas');
    // }

    // ==========
    // havo issiqmi ?
    // ==========
    // let temp = "yomgir" // issiq, sovuq, yomg'ir, qor

    // if (temp === "issiq") {
    //     console.log("Havo issiq, yengil kiyinib oling ");
    // }else if(temp==="sovuq"){
    //     console.log("Havo suvuq, qalin kiyinib oling");
    // }else if(temp=='yomgir'){
    //     console.log("Havo yomgir, soyabon olib oling");
    // }else if(temp==="qor"){
    //     console.log("Havo qor, qalin kiyining va soyabon oling");
    // }else{
    //     console.log("Nomalum ob havo");
    // }

// **1 ta grupa qilishni yaxshi tomoni, bitasi true chiqsa keyingi code ni tekshirmaydi, va code lar tez ishlaydi

// ==========
// ternary operator (? :) (esx da chiqgan)
// ternary bu if else ni sodda qisqartima shakli, true yoki false da ishlatishda tavsiya qilinadi (contional?"true xolatda shakli":"else xolatdag shakli")

    // let a = 18
    // a >= 18 ? console.log("Kirish mumkin") : console.log("Kirish mumkin emas");

// ============================
// Nullish ??
// Nullish uchun faqatgina null va undefined false ga teng holos, 

    // console.log(false || 1); // 1
    // console.log(false ?? 1); // false

// False ham data type turi, bizda null yoki undefined ni hisobga omaydi qolgan hamma malumotni hisobga oladi

    // console.log(NaN || 1); // 1
    // console.log(NaN ?? 1); // NaN

    // console.log(null || 1); // 1
    // console.log(null ?? 1); // null

    // console.log(undefined || 1); // 1
    // console.log(undefined ?? 1); // undefined

