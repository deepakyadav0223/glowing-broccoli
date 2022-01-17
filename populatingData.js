let productContainer = document.getElementById("data-addition");

async function postData() {
   
    const response = await fetch("https://minor-projects.herokuapp.com/data", {
      method: 'GET', 
      
     // mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        
      },
     
    });
    return response.json(); 
  }

postData()
    .then(data => {
      
  console.log(data);

Object.values(data).map((item , index) => {
        productContainer.innerHTML += `
        <tr>
        <th scope="row">${index}</th>
        <td>${item.name}</td>
        <td>${item.value}</td>
        <td>${item.time}</td>
        <td><img src="https://img.icons8.com/emoji/22/000000/${item.status === true? "green" : "red"}-circle-emoji.png"/>${item.status === true? "Running" : "Stopped"}</td>
      </tr>
            `
        
    })
   
});