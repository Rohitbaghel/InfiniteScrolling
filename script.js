
let container = document.getElementById("container");
let limit = 25
let page = 1
let getPhotos = async () =>{
    try {
let res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}$_page=${page}`)
let data = await res.json()
AppendData(data)
    }catch(e){
      console.log(e)
      
    }

}

function AppendData (data){
data.forEach(({id,title,url,thumbnailUrl})=>{
    
    let div1  = document.createElement('div')
div1.setAttribute('class', 'div1')
    let id_p = document.createElement('h2')
    id_p.innerText =id
    

    let title1 = document.createElement('p')
    title1.innerText = title
    let image = document.createElement('img')
    image.src =url
    // let thumbnail = document.createElement('img')
    // thumbnail.src = thumbnailUrl
    // console.log(image)
   div1.append(id_p,title1,image)
   container.append(div1)
  
})
}
getPhotos()

function ScrollingView() {
let interval =setTimeout(() =>{
    page++
    getPhotos()
},300)
if(page==10){
    clearTimeout(interval)
}

}
window.addEventListener('scroll', ()=>{
   const {scrollHeight,clientHeight,scrollTop}= document.documentElement
   if(scrollTop+clientHeight ==scrollHeight){
       console.log('bottom');
  ScrollingView()
   }
})

