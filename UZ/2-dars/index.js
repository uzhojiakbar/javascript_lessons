
// Type Convirsions _ Operators _ Comparisions _ Logical Operators

// ============================
// 1. Type Convirsions
// ikkita Strinni bir biriga qoshadigan bolsak, sozlarni qoshib qoyadi, masalan:
    // let str1 = 'Murodillayev'
    // let str2 = 'Hojiakbar'
    // console.log(str1 + " " + str2); //Murodillayev Hojiakbar


// Stringa numberni qoshadigan bo'lsak ularni matn sifatida qoshib qoyadi, masalan "1" + 1 = "11"
    // let a = 1
    // let b = "1"
    // console.log(a+b); // 11

// agar stringni oldiga + belgisini qoysak uni raqamga aylantirib beradi, agar raqamga aylantirishni iloji bo'lmasa NaN javobini qaytaradi
    // let a = '1'
    // console.log(+a); // 1

    // let a = 1
    // let b = '1'
    // console.log(a + +b); //2

    // let b = '1s'
    // console.log(+b); // NaN


// IsNan() - bu funsiyani ichida NaN bormi degani,yani ichidagi qiymat NaN mi? degani, agar NaN bo'lsa true, boshqa holatda false
    // let num = 12
    // console.log(isNaN(num)); // false

    // let notnum = `hojiakbar`
    // console.log(isNaN(notnum)); // true

// Number() - ichidagi malumotni Numberga otkazib beradii, agar otkazishni iloji bolmasa NaN qaytadi
// Number.parseInt() - faqat intager songa otkazadi
// Number.parseFloat() -  o'nli kasr ga o'tkazadi (Number() bilan bir hil)

    // let a = '123'
    // console.log(Number(a)); // 123

    // let b = '12sa'
    // console.log(Number(b)); // NaN


    // let int = 12
    // let float = 12.7

    // console.log(Number(int)); // 12
    // console.log(Number.parseInt(int)); // 12
    // console.log(Number.parseFloat(int)); // 12

    // console.log(Number(float)); // 12.7
    // console.log(Number.parseInt(float)); // 12
    // console.log(Number.parseFloat(float)); // 12.7

// ============
// true = 0,undefined va null dan tashqari hammasiga teng
// false = 0 ga teng

    // console.log(true == 1); // true
    // console.log(false == 0); // true

    // console.log(null == 0); // false
    // console.log(undefined == 0); // false
    // console.log(null == 1); // false
    // console.log(undefined == 1); // false
    // console.log(undefined == null); // true
    // console.log(false == null); // false
    // console.log(false == undefined); // false

    // console.log(true == "1"); // true
    // console.log(true == "0"); // false

    // console.log(true=='a'); // false
    // console.log(true=='2'); // false


// ============================
// Basic Operators, Math

// + = Qo'shish
// - = Ayrish
// / = Bo'lish
// * = Ko'paytirish
// % = a ni b ga bolgandagi qoldiq
// ** = a ni b darajasi
// () -> arifmetikada qanday amal bajarsa huddi shunday (2+2)*2 = 8

// a-- -> oldin a va qiymat 1 ga kamayadi
// a++ -> oldin a va qiymat 1 ga oshadi  // a = a + 1

// ++a -> qiymat 1 ga oshadi va  va a
// --a -> qiymat 1 ga kamayadi va a

    // let a = 1
    // a++
    // console.log(a); // 2

    // let a = 1
    // console.log(a++); // 1

// ============================
// Obrivations
// a+=50 = a ni oldingi qiymatiga 50 ni qoshadi (a = a + 50 bn bir xil)
// a-=50 = a ni oldingi qiymatiga 50 ni ayradi
// a/=50 = a ni oldingi qiymatiga 50 ni bo'ladi
// a*=50 = a ni oldingi qiymatiga 50 ni ko'paytiradi

    // let a = 500
    // a+=50
    // a*=50
    // console.log(a); // 27500

// ============================
// Comparision (taqqoslash)

// taqqoslashdan javob har doim boolean type da qaytadi yani true, yoki false
// a < b = a, b dan kattami
// > - kichikmi ?

    // let a = 10
    // let b = 11
    // let f = 11
    // let g = 11
    // console.log(a > b); // false
    // console.log(a < b); // true
    // console.log(f < g); // false
// <= - katta yoki tengmi ?
// >= - kichik yoki tengmi ?
    // console.log(f <= g); // true
    // console.log(f >= g); // true

// == - tengmi ?
// === - data type lari bilan bir tengmi ? (qattiy tenglik)
    // let a = 11
    // let b = "11"
    // console.log(a==b); // true
    // console.log(a===b); // false

// ! - inkor
// != - teng emasmi ?
// !== - data type lari bn teng emasmi ?
    // console.log(!true); // false
    // console.log(!1); // false
    // console.log(!40); // false
    // console.log(!0); // true

    // let a = 11
    // let b = "11"
    // console.log(a!=b); // false
    // console.log(a!==b); // true

// ============================
// Logical Operatos

// || -> or (yoki) operatori.  tomonlardan 1 tasi true bolsa ham true, boshqa holatda false
                        // true || true => true
                        // true || false => true
                        // false || true => true
                        // false || false => false
    // let ceo = true
    // let admin = true

    // console.log(admin || ceo ); // true
    // console.log(admin || ceo ); // true

// && -> and (va) operatori.  tomonlardan 1 tasi false bolsa ham false, boshqa holatda true
                        // true || true => true
                        // true || false => false
                        // false || true => false
                        // false || false => false
    // CHET ELDA

    // let id = true
    // let face = true
    // console.log(id && face); // true


    // OZBEKISTONDA 
    // let galustik = false
    // let soqol = false
    // let pul = false
    // let forma = false

    // console.log(galustik && soqol && pul && forma); // false
