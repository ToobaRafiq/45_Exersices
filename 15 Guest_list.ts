let Guest_list : string[] = ['Imran khan','Nawaz shareef', 'Asif ali zardari'];

for(let i=0; i<Guest_list.length ;i++){
  
  console.log('Dear Mr. ' + Guest_list[i]  + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

}

let Absent_guest : string ='Imran khan';

let New_guest : string = 'Kamran Tessori';

Guest_list [0] = New_guest ;
for(let i=0; i<Guest_list.length ;i++){
  
  console.log('Dear Mr. ' + Guest_list[i]  + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}

console.log(`Mr.${Absent_guest} is not coming to the party.`)