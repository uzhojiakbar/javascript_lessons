// JavaScrip 1 vaqtni o'zida faqat 1 ta amalni bajaruvchi dasturlash tili, kodlar tepadan pastga qarab qatorma-qator o'qiladi

// console.log(''); nima?
    // qavslar ichiga yozilgan malumotni console (terminal) ga chiqarib beradi.

// ============================
// O'ZGARUVCHILAR (Variables)
// O'zgaruvchilar (Variables) - bu qandaydur {data type} malumotni saqlab turvchi qutilar deb olsak boladi
    // har doim u qutini ishlatganimizda ichidagi qiymatni bizga qaytaradi
    // o'zgaruvchilar 3 xil bo'ladi
        // var - global o'zgaruvchilar
        // let - block o'zgaruvchilar (bita scope ichidadan tashqariga chiqaydi)
        // const - o'zgarmas qiymatdagi Variable

// O'garuvchilar yaratish uchun oldn uni key (let,var,const) ini yoziladi va nom berib tenglik (=) qo'yiladi va qiymati yoziladi
        // o'zaruvchi nomi hohlagan nomni yozishimiz mumkin, lekin js dagi nomlar bolmasligi kerak(let,function,for,)
    // masalan
        // let num = 8
        // let str = '18'
        // var surname = "Murodillayev"
        // const name = "Hojiakbar"

// let name = 'Hojiakbar'
// console.log(name);

// let a=b=c= 3 // uchta qiiymat ham 3 ga teng
// console.log(a,b,c);

// agar ozgaruvchi turini belgilmasdan create qiladigan bolsak uning turi avtomatik var boladi
// a = 3

// ============================
// DATA TYPE
// 1. number (primitive) - raqam (12,13,14,9007199254740991n)
// 2. BigInt (primitive) - katta raqam (9_007_199_254_740_991n, n bu BigInt)
// 3. String (primitive) - matn, ("",'',``)
// 4. Boolean (primitive) - true va false
// 5. Null (primitive) -
// 6. Undefined (primitive) -
// 7. Symbols (primitive) - Id ga asoslangan data type tur
// 8. Object (non-primitive) -

// ============================
// typeof yoki typeof() - malumotni data turini aniqlaydi
    // console.log(typeof 12);
    // console.log(typeof(12));

// ============================
// 1. Number
    // butun va o'nlik sonlar
    // -9007199254740992 dan 9007199254740992 gacha orasidan sonlar javascript da butun sonlar deyiladi, bundan katta sonni ishlatib bolmaydi 9007199254740992 sonini oziga teng bolaveradi
    // NaN (Not a Number)- qandaydur amal bajarsak va undan raqam qaytmasa NaN yani bu raqammas degan javob qaytadi
// let num1 = 12
// let num2 = 12.7
// console.log(num1,num2);

// ============================
// 2. BigInt
    // BigInt -9007199254740992 va 9007199254740992 dan katta yani meyoridan oshgan sonlar
    // n bu BigInt ni belgisi

// let KattaRaqam = 9007199254740992n + 1n
// console.log(KattaRaqam);

// ============================
// 3. String
    // Oddiy yozuvli matn
    // string ni 3 xil usulda yozsak boladi:
        // 1. '' (birtirnoq)
        // 2. "" (qo'shtirnoq)
        // 3. `` (backtick)

    // JavaScript birinchi versiasida ('') va ("") lar bo'lgan. Lekin biz agar "" ni ichida ajratish uchun yana qoshtirnoq bersak ERROR beradi
    // Agar biz "" ichida yana qoshtirnoq ishlatadigan bolsak oldin  \ shu belgini qoyishimiz kerak shunda keyingi belgini ignore qiladi
    // ishni osonlashtirish uchun ESX (JS6) versia da `` (backtick) chiqgan (backtickni yana kop avfzalliklari bor)

// console.log("Murodillayev \"Hojiiakbar\"");
    // '' va "" belgilar o'zaro bir xil
        // bular ichida yangi qatorga ota olmaymiz yani
        // let str = "
        //  Mening ismim Hojiakbar
        // "
        // ko'rinishida yozib bo'lmaydi
        // yangi qatornda yozish uchun "\n" ni yozishim kerak
            // \n - newline
    // `` - bu universal
        // backtick ichida yangi qatorga o'tsak ham bo'ladi undan tashqari birtirnoq va qo'shtirnoqniham yozsak boladi
                // let a = `
                //     Mening ismim Hojiakbar
                // `
                // console.log(a);
        // undan tashqari backtick da tashqaridan o'zagruvchi olib kirsak bo'ladi!
        // uning uchun backtick ichida ${} belgisini yozamiz va jingalik qavslar qandaydur qiymat yoki ozgaruvchi nomi yozamiz
        // masalan:

            // let a = new Date()
            // let info = `Mening yoshim ${a.getFullYear() - 2007} da`
            // console.log(info);

// ============================
// 4. Boolean
    // Boolean 2 ta qiymatda tashkil topgan malumot turi (true va false)
        // masalan chiroqni 2 xil xolati bor yoniq yoki ochiq, ochiriilayotgan xolati yoq!
            // true = 1
            // false = 0
    // console.log(true);
    // console.log(false);

    // let chiroq = true
    // console.log(chiroq);

// ============================
// 5. Null (typeof null = object)
    // Null - null ozi bor lekin hali qiymat biriktirmadik, keyinchalik qiymat biriktirsak bo'ladi

    // a = null
    // console.log(a);

// ============================
// 6. Undefined
    // Undefined - hech nima yoq, bo'm bo'sh quti desak ham boladi

    // let a;
    // console.log(a);

// Null vs undefined
    // masalan Shokoland bor, uni ichidagi yeb ketilgan bo'lsa faqat qog'ozi qoladi shu null, endi qog'ozi ham yo'q bolsa u undefined
    // null == undefined, bular teng yani == tenglik ichidagi shkaladini tekshiradi, shkalad ikkalasida ham yoq
    // null === undefined, endi bular teng emas, yani === tenglik ichidagi shkaladini va qog'ozni ham tekshiradi
        // Bu tengliklarga keyingi darslarda to'xtalamiz

// ============================
// 7. Symbols
    // Symbol - id larga asoslangan dataType turi (Unique ID)
    // yani ichidagi malumot bir xil bolsayam uni alohida id lari har xil boladi

    // let a = Symbol(8)
    // let b = Symbol(8)
    // console.log(a===b); // false
    // console.log(a== b); // false

// ============================
// 8. Object. -> array, obj, function
    // object ni ichiga array, function va object kiradi, umuman olgan butun JavaSctipt bu objectlardan tashkil topgan

    // 1. Array -> katta yuk mashinalar ichiga hohlagan turdagi malumot turdagi solsak boladi, array shunga yaqqol misol!(batafsil keyingi darslarda gaplashamiz)
        // let arr = [1,2,3,true,'hello',Symbol('Hi'),()=>{}]
    // 2. Function -> qandaydur ammalarni takrorlanishi oldini olish uchun ishlatiladi, (batafsil keyingi darslarda gaplashamiz)
        // let func = () => {
        //     return 'hi'
        // }
    // 3, Object -> Key va value dan tashkil topgan dataype turi (batafsil keyingi darslarda gaplashamiz)
        // let obj = {name: 'Hojiakbar'}
    
        // Masalan:
        // let arr = [1, 2, 3, true, 'hello', Symbol('Hi'), () => { }]
        // let func = () => {
        //     return 'hi'
        // }
        // let obj = { name: 'Hojiakbar' }

        // console.log(arr);
        // console.log(func());
        // console.log(obj);


// primitive - value pass (qiymat qaytaradi)
// non-primitive - referanse pass (link qaytaradi)

    // a = 8 
    // b = 8
    // c = [8]
    // d = [8]
    // console.log(a==b); // true
    // console.log(c==d); // false