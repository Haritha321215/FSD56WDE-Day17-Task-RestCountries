let divContainer = document.createElement("div");
divContainer.className = "container";
divContainer.style = "background-color:rgb(61, 62, 63); color:white";

let divheader = document.createElement("h1");
divheader.className = "text-center";
divheader.id = "title";
divheader.innerText = "Rest Countries";
divContainer.append(divheader);

let divRow = document.createElement("div");
divRow.className = "row";
divContainer.append(divRow);

let divCol;

getCol = () => {
  divCol = document.createElement("div");
  divCol.className = "col-sm-6 col-md-4 col-lg-4 col-xl-4";
  divRow.append(divCol);
};

getCard = (country) => {
  let divCard = document.createElement("div");
  divCard.className = "card h-100";
  divCol.append(divCard);

  let divCardHeader = document.createElement("div");
  divCardHeader.className = "card-header text-center bg-dark";
  let cardTitle = document.createElement("h5");
  cardTitle.className = "card-title text-light";
  cardTitle.innerText = country.name;
  cardTitle.style = "height:50px";
  divCardHeader.append(cardTitle);
  let divCardBody = document.createElement("div");
  divCardBody.style =
    "background-image: linear-gradient(to right, rgba(23, 23, 17, 0), rgb(80, 65, 34));";
  divCardBody.className = "card-body text-center text-light";

  let cardImg = document.createElement("img");
  cardImg.src = `${country.flag}`;
  cardImg.alt = `${country.name}'s flag`;
  cardImg.className = "card-img-top";
  cardImg.style = "height:150px";

  let caerdText = document.createElement("div");
  caerdText.className = "card-text";

  let cardItem1 = document.createElement("h5");
  let cardItem2 = document.createElement("h5");
  let cardItem3 = document.createElement("h5");

  cardItem1.innerText = `Capital: ${country.capital}`;
  cardItem2.innerText = `Region: ${country.region}`;
  cardItem3.innerText = `Country Code: ${country.alpha3Code}`;

  let cardButton = document.createElement("a");
  if (country.latlng === undefined) {
    cardButton.href = "#";
  } else {
    let apikey = "c10a5c05767b12a9bf7524f61848ba44";
    cardButton.href = `https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${apikey}`;
    cardButton.target = "_blank";
  }
  cardButton.className = "btn btn-outline-light";
  cardButton.innerText = "Click for Weather";
  caerdText.append(cardItem1, cardItem2, cardItem3);
  divCardBody.append(cardImg, caerdText, cardButton);

  divCard.append(divCardHeader, divCardBody);
};

document.body.append(divContainer);

let url = "https://restcountries.com/v2/all";
async function getCountryNames() {
  let data = await fetch(url);
  let result = await data.json();
  for (const iterator of result) {
    getCol();
    getCard(iterator);
  }
}
getCountryNames();
