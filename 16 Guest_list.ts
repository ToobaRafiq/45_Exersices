let Guest_list : string[] = ['Imran khan','Nawaz shareef', 'Asif ali zardari'];

// for(let i=0; i<Guest_list.length ;i++){
  
//   console.log('Dear Mr. ' + Guest_list[i]  + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

// }

let Absent_guest : string ='Imran khan';

let New_guest : string = 'Kamran Tessori';

Guest_list [0] = New_guest ;

for(let i=0; i<Guest_list.length ;i++){
  
  console.log('Dear Mr. ' + Guest_list[i]  + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}

console.log(`Mr.${Absent_guest} is not coming to the party.`) ;

console.log('Good News! we find big table so we are initived a 3 more guests.');

Guest_list.unshift('Sir zia khan');
Guest_list.splice(2 ,0 ,'Maryam Nawaz');
Guest_list.push('Bilawal bhutto zardari');

for(let i=0; i<Guest_list.length ;i++){
  
  console.log('Dear Mr. ' + Guest_list[i]  + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}