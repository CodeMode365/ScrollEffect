let progress =document.querySelector('#progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll =function(){
    
    //  let Section = document.querySelector('#section');
     let progressHeight = (window.pageYOffset/totalHeight)*150;
    progress.style.height = progressHeight + '%';
    // console.log(progressHeight)
    
}