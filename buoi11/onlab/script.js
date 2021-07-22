// let number = 10;
// number > 0 ? console.log("Số dương") : console.log("Số âm");
// //number > 0 : điều kiện
// //nếu đk đúng thì thực hiện câu lệnh sau ?
// //nếu đk sai thì thực hiện câu lệnh sau :


//switch case

// let money = 10000;

// switch (money) {
//     case 12000:
//         console.log("Cafe sữa");
//         break;
//     case 10000:
//         console.log("Cafe đá");
//         break;
//     case 8000:
//         console.log("Sting dâu");
//         break;
//     case 2000:
//         console.log("Trà đá");
//         break;
//     default:
//         console.log("Không có đồ uống phù hợp");
//         break;
// }

// function dayCheck(day) {
//     switch (day) {
//         case 0:
//             console.log("Chủ nhật");
//             break;
//         case 1:
//             console.log("Thứ hai");
//             break;
//         case 2:
//             console.log("Thứ ba");
//             break;
//         case 3:
//             console.log("Thứ tư");
//             break;
//         case 4:
//             console.log("Thứ năm");
//             break;
//         case 5:
//             console.log("Thứ sáu");
//             break;
//         case 6:
//             console.log("Thứ bảy");
//             break;
//         default:
//             console.log("Không có giá trị tương ứng");
//             break;

//     }
// }
// dayCheck(2);

// function seasonsCheck(month) {
//     switch (month) {
//         case 1:
//         case 2:
//         case 3:
//             console.log("Mùa xuân");
//             break;
//         case 4:
//         case 5:
//         case 6:
//             console.log("Mùa hè");
//             break;
//         case 7:
//         case 8:
//         case 9:
//             console.log("Mùa thu");
//             break;
//         case 10:
//         case 11:
//         case 12:
//             console.log("Mùa đông");
//             break;
//         default:
//             console.log("Nhập lại tháng hợp lệ");
//             break;
//     }
// }
// seasonsCheck(2);



//=====VÒNG LẶP=======


// for (let day = 1; day <= 30; day++) {
//     // if (day == 20) {
//     //     console.log(`Ngày ${day} bị ốm. Không thể tiếp tục`);
//     //     break;
//     // }
//     if(day % 2 ==1){
//         continue;
//     }

//     console.log(`Ngày ${day} thức dậy lúc 7h`);
// }


// let totalMoney = 0;
// // for (let i = 1; i <= 10; i++) {
// //     totalMoney += 100000;
// // }
// // console.log(totalMoney);

// for (let day = 1; day <= 10; day++) {

// }

// console.log(totalMoney);



// function repString(string) {
//     for (let i = 1; i <= 10; i++) {
//         rsString += string;
//     }
//     console.log(rsString);

// }
// repString("v");

let rsString = "";
function repString(string) {
    for (let i = 0; i <= 10; i++) {
        if (i < 10) {
            rsString += string + "-";
        } else {
            rsString += string;
        }
    }
    console.log(rsString);
}
repString("v");

