

  import {dogs} from "./data.js"
const container=document.getElementById("container")

class dogy{
constructor(data){
    Object.assign(this,data)
}
render(){
    let str=``

    
    str+= `
    <header>
            <div  class="icon">
                <img class="profile" src="images/icon-profile.png">
            </div>
            <div class="icon"> 
                <img class="logo" src="images/logo.png">
            </div>
            <div class="icon">
                <img class="chat" src="images/icon-chat.png">
            </div>
        </header>
        <section>
            <div class="dog1">
                <img class="dog" src="${this.avatar}"> 
                <div class="name"><h2>${this.name}, ${this.age}  ${this.gender}</h2><h5>${this.bio}</h5></div> 
                <div ><img src="images/badge-like.png " id="badge1"  style="display:none;" ></div>
                <div> <img src="images/badge-nope.png" id="badge2" style="display:none;"> </div>
            </div>
           <div class="react">
            <div class="cross1"}><img  data-cross=${this.uuid} src="images/icon-cross.png" class="cross" ></div>
            <div class="like1" ><img data-like=${this.uuid} src="images/icon-heart.png" class="like"></div>
           </div>
        </section> 
    `
return str
}
}

let i=0;
let obj=new dogy(dogs[i])

i++;
container.innerHTML=obj.render()
document.addEventListener('click',function(e){
    if(e.target.dataset.like){
        document.getElementById(`badge1`).style.display="block";
      const target= liked(e.target.dataset.like)
       target.hasBeenLiked=true
     
       setTimeout(function(){
        if(i<dogs.length){
                obj=new dogy(dogs[i]);
                i++
                container.innerHTML=obj.render()
            }
            else{
                container.innerHTML=thanks()
            }
     },2000)
    }
   else  if(e.target.dataset.cross){  
        document.getElementById(`badge2`).style.display="block";
       const targetCross= swiped(e.target.dataset.cross)
      targetCross.hasBeenSwiped=true
        setTimeout(function(){
            if(i<dogs.length){
    obj=new dogy(dogs[i]);
    i++
    container.innerHTML=obj.render()
            }
            else{
                container.innerHTML=thanks()
            }
        },2000)
    }

    


})



 function liked(id){
   return   dogs.filter(function(dogId){
    return dogId.uuid == id
   })[0]
  
 }
 function swiped(id){
   return    dogs.filter(function(dogId){
     return dogId.uuid == id
    })[0]
    
  }
  function thanks(){
    return `
<div class="greet">
<div class="message">There are more doggies for you..</div>
<button>Premium @ 299/month</button>
</div>

    `
  }