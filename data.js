export const dogs = [
    {
        uuid:0,
        name: "Rex",
        avatar: "images/dog-rex.jpg",
        age: 25,
        gender:"♀",
        bio: "Art. Literature. Natural wine. Yoga.",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },{
        uuid:1,
        name: "Bella",
        avatar: "images/dog-bella.jpg",
        age: 43,
        gender:"♂",
        bio: "Yup, that's my owner. U can meet him if you want",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },
    {
        uuid:2,
        name: "Teddy",
        avatar: "images/dog-teddy.jpg",
        age: 30,
        gender:"♀",
        bio: "How you doin?",
        hasBeenSwiped: false,
        hasBeenLiked: false
    }
]

/*
const arr=new Array(dogs.length)
for(let i=0;i<dogs.length;i++){
   arr[i]=dogs[i]
}
let newarr=arr.shift(); 
let obj =new dogy(newarr)
container.innerHTML=obj.render()


document.getElementById("container").addEventListener('click',function(e){

    if(e.target.dataset.like){
      
        handleLikeClicked(id)     
    }
    if(e.target.dataset.cross){
      
        handleDisLikeClicked(id)
    }
   
})
function handleLikeClicked(id){  
  const target = dogs.filter(function(objs){
        return objs.uuid==id
    })
    target.hasBeenLiked = true ; 
    
    document.getElementById(`badge1`).style.display="block"
    setTimeout(function(){   
    },3000)
    newarr=arr.shift();
    obj=new dogy(newarr)
    container.innerHTML=obj.render()
}
function handleDisLikeClicked(id){  
   const target = dogs.filter(function(objs){
        return objs.uuid==id
    })
    target.hasBeenSwiped=true;
   
    document.getElementById(`badge2`).style.display="block"
    
}

*/