browser = 'firefox'

switch (browser) {
        case 'edge':
                console.log('Edge!'); break;
        case 'safari':
        case 'chrome':
        case 'firefox':
        case 'Opera':
                console.log('opera');
                break;
        default:
                console.log('We hope that this page looks ok!');
}

// agar case edge dan boshqasi boladigan bolsa keyingisiga otib ketayapdi
// yani case safari, unda break ham hech nima yoq va u chrome ga otadi, huddi shunday ketaveradi
// va oxirida Opera sozi chiqadi