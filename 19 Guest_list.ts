let Guest_list : string[] = ['Imran khan','Nawaz shareef', 'Asif ali zardari'];
// for(let i=0; i<Guest_list.length ;i++){
//   console.log('Dear Mr. ' + Guest_list[i]  + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

let Absent_guest : string ='Imran khan';
let New_guest : string = 'Kamran Tessori';

Guest_list [0] = New_guest ;
// for(let i=0; i<Guest_list.length ;i++){
//   console.log('Dear Mr. ' + Guest_list[i]  + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

// console.log(`Mr.${Absent_guest} is not coming to the party.`) ;
// console.log('Good News! we find big table so we are initived a 3 more guests.');

Guest_list.unshift('Sir zia khan');
Guest_list.splice(2 ,0 ,'Maryam Nawaz');
Guest_list.push('Bilawal bhutto zardari');
//yaha per mene 6 guest k array ko print karwya hain.
// for(let i=0; i<Guest_list.length ;i++){
//   console.log('Dear Mr. ' + Guest_list[i]  + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
//Sorry massage to guest for not invited.
// console.log('\nSorry we can not arrang big table , only two people will be invited.')
//yaha per mene guest removed kiye hain.
while(Guest_list.length >2){
  let removed_Guest = Guest_list.pop();
  // console.log(`Sorry Mr . ${removed_Guest}, you are not invited a dinner.`)
}
//Humare bache howe 2 initivied guest.
// for(let i=0; i<Guest_list.length ;i++){
  // console.log('Dear Mr. ' + Guest_list[i]  + ',\n\nYou are still invited.\n\nThank You!\n\n')
// }
//mene sare guest array se removed kar diye.
Guest_list.splice(0 ,2);
console.log(Guest_list);

//Exercise 19
//print a massage indicating a number of people you are inviting to a people.

console.log(`Total number of guest Are ${Guest_list.length}`);