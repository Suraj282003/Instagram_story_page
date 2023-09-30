let Pdiv = document.querySelector('#posts');
let post = document.querySelector('.post');

let postArr = [
    {
        Post:"https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        name:"Sunny"
    },
    {
        Post:"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        name:"beauty"
    },
    {
        Post:"https://assets3.thrillist.com/v1/image/2817441/792x528/scale;webp=auto;jpeg_quality=60;progressive.jpg",
        name:"Natasha Romanof"
    },
    {
        Post:"https://assets.popbuzz.com/2021/02/who-plays-wanda-in-wandavision--elizabeth-olsen-1610698774-view-1.jpg",
        name:"Wanda"
    }
];

postArr.forEach(function(elem){
    Pdiv.innerHTML += `<div class="post">
                    <img src="${elem.Post}">
                    <h1>${elem.name}</h1>
                    <h5>Stranger</h5>
                    <button class="add">Add Friend</button>
                    </div>`
});

let addfriend = document.querySelectorAll('.add');
let istatus = document.querySelectorAll('h5');
let flag = 0;

addfriend.forEach(function(elem){
    elem.addEventListener("click",function(){
        if (flag === 0){
            istatus.innerHTML = "Friends";
            istatus.style.color = "#35ea35";
            addfriend.textContent = "Remove Friend";
            flag = 1;
        }
        else{
            istatus.innerHTML = "Stranger";
            istatus.style.color = "red";
            addfriend.textContent = "Add Friend";
            flag = 0;
        }
    });
});
