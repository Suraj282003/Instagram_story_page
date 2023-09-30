let arr = [
    {
        dp:"https://images.unsplash.com/photo-1630568255484-af1bf760b445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
        story:"https://images.unsplash.com/photo-1630568119618-ac464296aa47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwZ2lybHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1517212160285-e9fbf358c905?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        story:"https://images.unsplash.com/photo-1579741470669-0ff17b4c0405?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1567704974944-272f7d4a7537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        story:"https://plus.unsplash.com/premium_photo-1661384426179-2a394b7815b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    },
    {
        dp:"https://images.unsplash.com/flagged/photo-1578940991997-303f19ea31ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1319&q=80",
        story:"https://plus.unsplash.com/premium_photo-1661478044484-c99d72c57e7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1352&q=80"
    }

]
let card = document.querySelector('#mobile')
let storiyan = document.querySelector('#storiyan');
let story = document.querySelector('.story');
let clutter = ""
arr.forEach(function(elem, idx){
    clutter += `<div class="story">
                    <img id="${idx}" src="${elem.dp}" alt="">
                </div>`
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", (dets)=>{
    document.querySelector('#stry').style.display = "block";
    document.querySelector('#stry').style.backgroundImage = `url('${arr[dets.target.id].story}')`
    card.style.padding = "8px"

    setTimeout(function(){
        document.querySelector('#stry').style.display = "none";
    }, 3000);
})
