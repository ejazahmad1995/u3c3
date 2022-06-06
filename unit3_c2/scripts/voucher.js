// const  card =async() =>{
//     try{
//         const url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`;
//         const api = await fetch(url);
//         const vouchers_data = await api.json();
//         // display(vouchers_data.vouchers.data);

//         console.log(vouchers_data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// card();

// const display = (data) =>{
//     document.getElementById("voucher_list").innerHTML = "";
//     data.forEach(ele => {
//         const name =document.createElement("h2");
//         name.innerText=ele.name;

//         const image =document.createElement("img");
//         image.src=ele.image;

//         const price =document.createElement("p");
//         price.innerText=ele.price;

//         const button = document.createElement("button");
//         button.textContent="Buy";

//         // button.onclick = () >{
//         //     addTopurchase(ele);
//         // }

//         const div =document.createElement("div");
//         div.setAttribute("class","buy_voucher");
        
//         div.append(name,image,price);

//         document.querySelector("#voucher_list").append(div);
        
//     });
// };

// const addTopurchase = (obj) =>{

// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// async function card(){
//     let url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`;

//     try{
//         let res = await fetch(url);

//     let data =await res.json();
//     data.forEach(ele){
//         display(data.vouchers);



//     console.log(data);

//     })

    

//     }catch(error){
//         console.log(error);
//     }

    
// }
// card();

// function display(data){
//     data.forEach(ele=> {
//         let div = document.createElement("div").innerHTML="";
//         div.class = "voucher";

//         const name =document.createElement("h2");
//         name.innerText=ele.name;

//         let img = document.createElement("img");
//         img.src = ele.image;


//         const price =document.createElement("p");
//         price.innerText=ele.price;


//         const button = document.createElement("button");
//         button.textContent="buy";
//         button.class="buy_voucher";
//         button.addEventListener("click",function(){
//             check(ele)
//         })
//         div.append(name,img,price,button)
//         document.querySelector("#voucher_list").append(div);



        
        
//     });
// }

let getData = async() =>{
    try {
        let url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`;
        let res = await fetch(url);
        let data = await res.json();
        append(data[0].vouchers)
    } catch (error) {
        console.log(error);
    }
}

getData();

let append = (data) =>{
    let container = document.getElementById("voucher_list");
    data.forEach((el) => {
        let div = document.createElement('div');
        div.classList = "voucher";

        let image = document.createElement('img')
        image.src = el.image;

        let h3 = document.createElement('h3');
        h3.innerText = el.name;

        let p = document.createElement('p');
        p.innerText = el.price;

        let button = document.createElement('button');
        button.innerText = "Buy"
        button.classList = "buy_voucher";
        button.addEventListener("click", function(){
            buyVoucher(el);
        })


        div.append(image, h3, p, button);
        container.append(div);
    });
}