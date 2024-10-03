const Datas = "./json/main.json"


fetch(Datas)
.then(response =>{
    if(!response.ok){
        throw new Error('error' + response.status);
    }
    return response.json();
})


.then(Data =>{
    const container = document.getElementById('info')
    
    Data.forEach(item => {
        const div = document.createElement('div')
        div.classList.add('container');

        div.innerHTML =`
        <h1> ${item.name}</h1>
        <br>
        <img src="${item.img}" width="55%">
        <br>
        <strong>habilidades: <br>

         ${item.hability}</strong>
        
        `;
        container.appendChild(div)
        
    });
    
});
