if(!localStorage.getItem('players'))
fetch('http://localhost:4000/players')
.then((res)=>res.json())
.then((data)=>{
  
    localStorage.setItem('players', JSON.stringify(data))
  
})
.catch((error) => console.error('problem fetch operation:', error));