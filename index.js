const intEl=document.querySelector("#input");
const wordEl=document.querySelector("#word");
const audioEl=document.querySelector("#audio");
wordEl.innerText=`Enter any word and press Enter key`
async function fetchAPI(word){
    try {
        wordEl.innerText=`searching for meaning of ${word}`;
        const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result= await fetch(url).then((res)=>res.json());
       console.log(result);
       wordEl.innerText=`word:${word}\n meaning:${result[0].meanings[0].definitions[0].definition}`;
       audioEl.src=result[0].phonetics[0].audio;
    } catch (error) {
        console.log(error);
    }
  
}
intEl.addEventListener("keyup",(e)=>{
   // console.log(e.key);
    if(e.target.value && e.key === 'Enter'){
        fetchAPI(e.target.value);
        e.target.value=" ";
    }
})

function cricle(radius){
    return {
    radius,
    fun:function(){
        console.log("circle",radius);
    }
}
}

const result=cricle(10);
result.fun();
function circle1(radius){
    this.radius=radius,
    this.draw=function(){
        console.log("hello",this.radius)
    }

}
const res=new circle1(10)
res.draw();
