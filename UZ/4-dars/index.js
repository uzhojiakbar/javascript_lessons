// Switch Case _ For loop

// ============================
// Switch Case
// Switch case - if elsa oxshashga, faqatgina bu contional operator masmi variable qabul qiladi, va case larda aynan osha variable ga qattiq tengligini (===) tekshiradi
// break - toxtatish, agar break qoyilmasa true bolganida keyingi hammma case ishlaydi
// case ga tenglash kerak bolgan data yoziladi. Default da hech qaysi case ga togri kelmagan holatdagi case yoziladi

// let temp = '123123'
// switch (temp) {
//     case "yomgir":
//         console.log("Bugun yomgir");
//         break;
//     case "qor":
//         console.log("Bugun qor");
//         break;
//     case "bulut":
//         console.log("Bugun bulut");
//         break;
//     default: console.log("def");
// }


// ============================
// For Loop - takrorlanuvchi operator
// For - dasturni nachadur marotaba qayta-qayta ishlatish uchun ishlatiladi. Masalan dastur 3 marta ishlansin deymiz console.log(); ga 1 qiymatini yozamiz, va 3 marta 1 chiqadi
// for loop da 3 ta parametr qoyiladi,

// for(boshlanish;manzil;qadamlar_soni){}
// for(let i=0;i<=10;i++){} (shu code da dastur 10 marta ishlaydi)

    // for(let i=1;i<=10;i++){
    //     console.log("Dastur 10 marotaba ishladi!");
    // }

// Ushbu code da ekranga 10 marta dastur 10 marotaba ishladi sozi chiqadi,

// For loop 3 ta shartni tekshiradi, birinchi shart nechi sonidan boshlanishi, ikkinchi shart necha songa borishi, uchni shart necha qadamdan yurishi
// har bir for loop ishlaganda i ni qiymati qadamlar soniga oshadi, ikkinchi shartga moslab tekshiradi, true qaytsa loop ishlaydi, false qayta loop toxtaydi

// ========
// Bu xolatda 1 dan 10 gacha raqamlar chiqadi
    // for(let i=1;i<=10;i++){
    //     console.log(i);
    // }

// ========
// Bu xolatda 1 dan o'ngacha 2 qadamdan sonlar chiqadi
    // for (let i = 1; i <= 10; i += 2) {
    //     console.log(i);
    // }

// ========
// Agar shart orniga true yozib qoysak cheksiz sikl hosil boladi, yani to'xtamaydi:
    // for (let i = 1; true; i++) {
    //     console.log(i);
    // }

// ========
// agar step orniga true qoyadigan bolsak, cheksiz 1 raqami chiqadi:
    // for (let i = 1; i<=10; true) {
    //     console.log(i);
    // }

// ========
// Masalan 1 dan o'ngacha sonlar yig'indisini yasamoqchimiz, bunda qanday qilamiz ?
// bita ozgaruvchi ochamiz va osha ozgaruvchi i ni qiymatini yigib boradi

    // var sum = 0 // yigib boruvchi
    // for(i=0;i<=10;i++){
    //     sum+=i // i ni har bir qiymatini sum ga qoshib ketamiz
    // }
    // console.log(sum); // natijani console chiqaramiz

// ======== Break
// Endi keyingisi, huddi tepadaginga oxshab raqamlarni yig'ib boramiz va malumot bir qiymatga (masalan 10) yetgandan so'ng siklni to'xtashi kerak
// bunign uchun break; ni ishlatamiz
// break; - siklni qaysidur xolatda toxtatish

    // var sum = 0; // yigib boruvchi
    // for(i=0;i<=10;i++){
    //     sum+=i // har bir sonni sum ga qoshish
    //     if(sum===10) break; // agar sum ni qiymati o'nga yetib boradigan bo'lsa uni toxtatish
    // }
    // console.log(sum);

// ========
// Endi chuqurroq o'rganishda davom etamiz, endigi masalani shartni:
// 1 dan 20 gacha bolgan raqamlarni juft yoki toq ekanligini aytb bersin, va 17 ga yetkanda toxtasin
    // Masalan:
    // 1 - toq son
    // 2 - juft son
    // 3 - toq son
    // 4 - juft son
    // 5 - toq son

// Masala shartida sonnni toq yoki juftligini aniqlashimiz kerak, buni qanday qilamiz ?
// agar biror bir son 2 ga qoldiqsiz bolinsa u juft son, boshqa xolatda toq son, shu shartdan foydalanib masalan tuzishni boshalymiz

    // for(i=0;i<=20;i++){
    //     i % 2 == 0 ? // agar son 2 ga qoldiqisiz bolinsa
    //     console.log(`${i} - juft son`)  // uni ekranga chiroyli xolatda chiqarisin juft son deb chiqarsin
    //     : // aks xolda
    //     console.log(`${i} - toq son`) // toq son deb chiqarsin
    //     if(i===17){break;}
    // }

// ======== Ichma ich for loop ishlatish
// agar sikl ichiga sikl yozsak nima boladi?
// masalan 1 ta siklimiz 3 marta ishlaydi, ichidagi sikl esa 5 marta
// bunda xolatda asosiy sik 1marta ishlaguncha, ichidagi sikl 5 marotaba ishlaydi, masalan:

    // for (let i = 0; i <= 3; i++) {
    //     for (let j = 0; j <= 5; j++) {
    //         console.log(i,j);
    //     }
    // }
// ekrandagi natija:
// 0 0
// 0 1
// 0 2
// 0 3
// 0 4
// 0 5
// 1 0
// 1 1
// 1 2
// ...... huddis hu korinishda boradi va oxirgi natija 3 5 boladi

// ======== Continue
// Hop, Masalan 0 dan 10 gacha son chiqadigan sikl yurayapdi va bizga faqatgina 7 raqamini chiqarish kerakmas, otkazib yuborish kerak
// Continue - siklni aynan osha aylanishini skip qilib qivoradi
// Masalan
    // for (let i = 0; i <= 10; i++) {
    //     if (i===7) continue; // 7 ga teng bolsa o'tkazib yuborish
    //     console.log(i); // i ni qiymatini chop etish
    // }
