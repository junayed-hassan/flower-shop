$(document).ready(function () {
  
    $('.slideToggle').click(() => {
    
      $('.item').fadeToggle();
  
     takeApi()
  
   function myCard(item) {
     return `<div class="col-span-1 mt-3">
            <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden ">
            <img class="w-full h-48 object-cover" src="assets/images/pngwing 5.png" alt="Profile Cover">
  
            <div class="p-6">
              <h2 class="text-2xl font-bold text-gray-800">${item.name}</h2>
              <p class="text-gray-600">Username: ${item.username}</p>
  
              <div class="mt-4">
                <p class="text-gray-600"><strong>Location:</strong>${item.address.street}</p>
                <p class="text-gray-600"><strong>Suite   :</strong>${item.address.suite}</p>
                <p class="text-gray-600"><strong>city    :</strong>${item.address.city}</p>
                <p class="text-gray-600"><strong>zipcode :</strong>${item.address.zipcode}</p>
              </div>
  
              <button class="mt-6 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 w-full">
                Contact
              </button>
            </div>
          </div></div>`;
  }
  async function takeApi() {
    let Data = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await Data.json();
  
    document.querySelector('.item').innerHTML = '';
    
      data.map(function (item) {
     
      $('.item').append(myCard(item))
   })
  }
  })
  })

