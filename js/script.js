const row=document.querySelector(".row")
const list=document.querySelectorAll("li");
const search=document.querySelector("#search")
fetch("https://fakestoreapi.com/products")
.then(res=>{
    return res.json()
})
.then(data=>{
    console.log(data);
    let selectCategory=""
    const myArray=["all","men's clothing","women's clothing","jewelery","electronics"];
    for(let i=0;i<myArray.length;i++){
        list[i].onclick=()=>{
            selectCategory=myArray[i]
            myFilter()
        }
    }
    search.addEventListener("input",()=>{
        myFilter()
    })
const myFilter=()=>{
    const searchTerm=search.value
    let add=""
    data.filter(item=>(item.category===selectCategory || selectCategory==="all" || selectCategory==="") &&(item.category.toLowerCase().includes(searchTerm.toLowerCase()))).map((item)=>{
    add+=` <div class="col-lg-3">
           <div class="cards">
               <div class="card-top">
                   <img src=${item.image} alt="">
               </div>
               <div class="card-bottom">
                   <h4>${item.category}</h4>
                   <p>Price:$${item.price}</p>
               </div>
           </div>
       </div>`
    })
    row.innerHTML=add
}
myFilter()
})
