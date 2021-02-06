
// fetch(BASE_URL+ param1, {method: methodVal}).then( response => response.text()).then(data => {console.log(data)});

async function fetchAPIData(url = '', data = {}) {
  try {
    let response = '';
    if (methodVal === 'GET') {
      response = await fetch(url);
    } else {
      // Default options are marked with *
      response = await fetch(URL+ methodValue === 'POST'? "": (param1+""),{method: methodValue, body: JSON.stringify(data), header: {
        "Content-type": "application/json; charset=UTF-8",
      },});
    }
    let result = await response.json();
    return result;// parses JSON response into native JavaScript objects
  } catch (error) {
    return error; // parses JSON response into native JavaScript objects
  }
}
let inputs = document.getElementById("gen-form").elements;
let submitButton =  inputs["submitButton"];
submitButton.addEventListener("click", function() {
  param1  = inputs["ifscField"].value.trim();
  if(param1 && param1!==""){
  fetchAPIData(BASE_URL + param1)
  .then(data => {
    console.log(data.ADDRESS); // JSON data parsed by `data.json()` call
    document.getElementById("searchResults").innerHTML = "Address: "+data.ADDRESS;
  });
}else{
  document.getElementById("searchResults").innerHTML = "Please enter valid IFSC code";
}
});


