const getUlRef = document.querySelector("#categories")
const totalLI = getUlRef.children.length
console.log('Number of categories: ',totalLI);

// const titleTegH2 = [...getUlRef.querySelectorAll("h2")].map(el => el.textContent)


// const getTotalInsertUl = getUlRef.querySelectorAll(".item ul")
// const getTotalInsertli = [...getTotalInsertUl].map(el=>el.children.length)


// for (let i = 0; i < titleTegH2.length; i += 1) {
//     console.log("");
//     console.log("Category:", titleTegH2[i]);
//     console.log("Elements: ", getTotalInsertli[i]);
    
// }
// console.log("");    
// console.log(getTotalInsertli);
// console.log(titleTegH2);






function fn({ children, children: [h2,ul  ] }) {
 
    
    const b = [...children].map(el => { 
        console.log("");
        console.log("Category: ",el.children[0].textContent);
        console.log("Elements: ",el.children[1].children.length);
   
    }
)
   



    // console.log(h2.textContent);
    // console.log(ul.textContent);
    




}

const b = fn(getUlRef)
console.dir(b);

