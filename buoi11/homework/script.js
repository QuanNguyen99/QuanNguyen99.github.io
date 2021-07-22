//===== Bài 1

// function baiMot(month, year) {
//     if (year % 4 == 0 || year % 400 == 0) {
//         switch (month) {
//             case 1:
//             case 3:
//             case 5:
//             case 7:
//             case 8:
//             case 10:
//             case 12:
//                 console.log(`Tháng ${month} năm ${year} có 31 ngày`);
//                 break;
//             case 4:
//             case 6:
//             case 9:
//             case 11:
//                 console.log(`Tháng ${month} năm ${year} có 30 ngày`);
//                 break;
//             case 2:
//                 console.log(`Tháng ${month} năm ${year} có 29 ngày`);
//                 break;
//             default:
//                 console.log("Nhập lại tháng hợp lệ");
//                 break;

//         }
//     } else {
//         switch (month) {
//             case 1:
//             case 3:
//             case 5:
//             case 7:
//             case 8:
//             case 10:
//             case 12:
//                 console.log(`Tháng ${month} năm ${year} có 31 ngày`);
//                 break;
//             case 4:
//             case 6:
//             case 9:
//             case 11:
//                 console.log(`Tháng ${month} năm ${year} có 30 ngày`);
//                 break;
//             case 2:
//                 console.log(`Tháng ${month} năm ${year} có 28 ngày`);
//                 break;
//             default:
//                 console.log("Nhập lại tháng hợp lệ");
//                 break;

//         }
//     }
// }
// console.log(baiMot(13, 2021));




//===== Bài 2

// function baiHai() {
//     for (i = 1; i <= 100; i++) {
//         if (i % 5 == 0 && i % 3 == 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 == 0) {
//             console.log("Fizz");

//         } else if (i % 5 == 0) {
//             console.log("Buzz");

//         } else {
//             console.log(i)
//         }
//     }
// }
// console.log(baiHai());



//===== Bài 3

// function baiBa(r) {
//     if (r <= 0) {
//         console.log("Nhập lại bán kính");

//     } else {
//         let v = 4 / 3 * Math.PI * Math.pow(r, 3);
//         return v;
//     }
// }
// console.log(baiBa(5));



//===== Bài 4

// let sum = 0;
// function baiBon(a, b) {
//     if (a == b) {
//         console.log("Nhập lại 2 số a, b");
//         return;
//     }
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             sum += i;
//         }
//     } else if (a > b) {
//         for (let i = b; i <= a; i++) {
//             sum += i;
//         }
//     }
//     return sum;

// }
// console.log(baiBon(10, 5));



//===== Bài 5

// let count = 0;
// function baiNam(numb) {
//     if (numb == 0 || numb == 1) {
//         console.log("Nhập lại số");
//         return;
//     }
//     for (let i = 1; i <= numb; i++) {
//         if (numb % i == 0) {
//             count++;
//         }
//     }
//     if (count >= 3) {
//         // console.log(`Số ${numb} không phải số nguyên tố`)
//         return false
//     } else {
//         // console.log(`Số ${numb} là số nguyên tố`)
//         return true
//     }
// }
// console.log(baiNam(32));



// ===== Bài 6

// let sum = 0;
// let count = 0;
// function baiSau(numb) {
//     if (numb <= 0) {
//         console.log("Nhập lại số");
//         return;
//     }
//     for (i = numb; i > 0; i--) {
//         tmpCount = count;
//         for (n = i; n > 0; n--) {
//             if (i % n == 0) {
//                 tmpCount++;
//             }
//         }
//         if (tmpCount < 3) {
//             sum += i;
//         }

//     }
//     return sum;
// }


// console.log(baiSau(10));


// ===== Bài 7

sum = 0;
function baiBay(numb) {
    for (i = 1; i <= numb; i++) {
        if (numb % i == 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(baiBay(20));