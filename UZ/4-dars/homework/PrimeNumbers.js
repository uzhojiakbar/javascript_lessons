var primeNums_count = 0
start = 2
end = 10
for (let i = start; i <= end; i++) {
    boluvchilar_soni = 2
    for (let j = 2; j < i; j++) {
        if (i % j === 0 && i !== 1) {
            boluvchilar_soni++
        }
        if (boluvchilar_soni < 2) break;
    }
    if (boluvchilar_soni === 2) {
        primeNums_count++
    }
}
console.log(`${start} dan ${end} gacha bo'lgan sonlar orasida ${primeNums_count} ta tub son bor`);