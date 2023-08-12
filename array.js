
//ganito ang pad dedeclare ng array
const fruits = ["Manga", "Saging", "Mansanas"];

//sa isang array pwede din iba iba ang value nito pwde string and numbers

const fruits1 = ["Water Melon", 99, "Dragon Fruit", 30];


//kapag gusto natin ipakita ang singular value sa isang array
//hanapin lang kung ano ang specific index
// console.log(fruits1[0])

//pwede din mag dagdag tayo ng value sa isang array 

// fruits1[4] = "Banana"; 
// disadvantage nito dapat alam natin ilan ang laman ng isang array

//kaya ginagamit ang push para makapag add ng value
//fruits1.push('Orange')

// fruits1.push('orange')ito laging sa hulihan

//kapag naman gusto ilagay sa unahan
// fruits1.unshift('Santol')

//and pag dedelete naman 
fruits1.pop()

//ang pagchecheck kung isang variable ay array
console.log(Array.isArray(fruits1));

//ito naman ang pag alam sa index ng value sa loob ng array
console.log(fruits1.indexOf("Water Melon"));

// ang splice nag dedelete din ito pero may 2 parameters siya
//(0, 1) ex. ang una kung ano ang index. ang 1 bilang ng tatangalin

fruits1.splice(0,1)

console.log(fruits1);




