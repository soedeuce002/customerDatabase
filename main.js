console.log(customers);
let directory;


let container = document.getElementById('container');

console.log(container);



for (let i = 0; i < customers.results.length; i++) {

  let firstName = customers.results[i].name.first;
  let lastName = customers.results[i].name.last;
  let image = customers.results[i].picture.large;
  let email = customers.results[i].email;
  let street = customers.results[i].location.street;
  let cityStateZip = customers.results[i].location.city + ", " + customers.results[i].location.state +
    " " + customers.results[i].location.postcode;
  let phoneNum = customers.results[i].cell;
  let social = customers.results[i].id.value;
  console.log(firstName);
  console.log(lastName);
  console.log(image);
  console.log(email);
  console.log(street);
  console.log(cityStateZip);
  console.log(phoneNum);
  console.log(social);

  directory +=
    // <=============need to make a for loop to create all the divs in one step ===>


    `<section>
     <div id='image'>
     <img src=${image}>
     </div>
     <div id='name'>
     <h4>${firstName.toUpperCase()} ${lastName.toUpperCase()}</h4>
     <p>${email.toUpperCase()}</p>
     </div>
     <div id='address'>
     <p>${street.toUpperCase()}</p>
     <p>${cityStateZip.toUpperCase()}</p>
     <p>${phoneNum}</p>
     </div>
     <div id='social'>
     <p>${social}</p>
     </div>
     </section>`



}

container.innerHTML = directory;
