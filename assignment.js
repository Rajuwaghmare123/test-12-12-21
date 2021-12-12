function fn(){

    let r =fetch('https://meme-api.herokuapp.com/gimme');

let s = r.then(function(response){
   return response.json();
});


 let x=   s.then(function(info) {
        console.log(info);
        let title=info.title;
        let url=info.url;
        let author=info.author;
        
        let table=document.querySelector('table');
        let tableRow=document.getElementById('tr1');
    
        tableRow.innerHTML='<td>'+ title +'</td>' + '<td>'+ author +'</td>'+ '<td>'+  "<img src='" + url + "' class='image'>" +'</td>';
        table.appendChild(tableRow);
       });
}



let btn= document.getElementById('btn');
btn.addEventListener('click', fn )