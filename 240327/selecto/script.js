const cityOption = document.querySelector("#city");
const stateOption = document.querySelector("#state");
const searchButton = document.querySelector(".shopsearch_filter span");
const searchBar = document.querySelector(".shopsearch_filter input[type='text']");
const searchform = document.querySelector(".shopsearch_filter form")
const checkBoxs = document.querySelectorAll(".shopsearch_filter input[type='checkbox']");
const tableBody = document.querySelector(".shopinfo_table tbody");
const pageNationContainer = document.querySelector(".shopinfo_pager ul");
// table Data Making
const createRow = (data) => {
const row = document.createElement("tr");
row.i = data.store;
row.innerHTML = `
<td>${data.store}</td>
<td>${data.main_area}</td>
<td>${data.address}</td>
<td>${data.tel}</td>
<td>${data.service.map((service) =>
 `<i class="${service}"></i>`).join("")}</td>
`
return row;
}

// data rendering
const itemPerPage = 5 ;
let currentPage = 1;

const renderData = (data) => {
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentPageData = data.slice(startIndex, endIndex);
  tableBody.innerHTML = "";
  currentPageData.forEach((item)=> {
    const row = createRow(item);
    tableBody.appendChild(row);
  })
}

//page nation
const renderPagenation = (data) => {
  pageNationContainer.innerHTML = "";
  const totalDataLength = data.length;
  if(totalDataLength <= itemPerPage) {
    return;
  }
  const totalPages = Math.ceil(totalDataLength / itemPerPage);
  const currentPageGroup = Math.ceil(currentPage / itemPerPage);

  if(currentPageGroup > 1) {
    const prevGroupButton =document.createElement("li");
    prevGroupButton.innerText = "<"
    prevGroupButton.addEventListener("click", () => {
      currentPage = (currentPageGroup - 1) * 5;
      renderData(data);
      renderPagenation(data);
    });
    pageNationContainer.appendChild(prevGroupButton);
  }

  for (let i =  (currentPageGroup-1) *5 +1; i <= Math.min(currentPageGroup * 5, totalPages);i++){
    const pageLink = document.createElement("li");
    pageLink.innerText = i;
    pageLink.addEventListener("click", () => {
      currentPage = i;
      renderData(data);
    });
    if(i === currentPage) {
      pageLink.classList.add("active");
    }
    pageNationContainer.appendChild(pageLink);
  }

  if(currentPageGroup < Math.ceil(totalPages / 5)){
    const nextGroupButton = document.createElement("li");
    nextGroupButton.innerText = ">";
    nextGroupButton.addEventListener("click", () => {
      currentPage = currentPageGroup * 5 +1;
      renderData(data);
      renderPagenation(data);
    });
    pageNationContainer.appendChild(nextGroupButton);
  }

  const li = document.querySelectorAll("li");
  li.forEach((item) => {
    item.addEventListener("click", () => {
      li.forEach((item)=> item.classList.remove("active"));
      item.classList.add("active");
    });
  });

  const lastPageButton = document.createElement("li");
  lastPageButton.innerText = ""
  lastPageButton.addEventListener("click", () => {
    currentPage = totalPages;
    renderData(data);
    renderPagenation(data);
  });
  pageNationContainer.appendChild(lastPageButton);
};


// jsonData
const cityList = "./cityInfo.json";
const storeList = "./storeInfo.json";

let cityInfo;
let storeInfo;

fetch(cityList)
  .then((response) => response.json())
  .then((data) => {
    cityInfo = data;
    for (let city in cityInfo) {
      const option = document.createElement("option");
      option.value = city;
      option.id = city;
      option.innerText = city;
      cityOption.appendChild(option);
    }
  });

fetch(storeList)
  .then((response) => response.json())
  .then((data) => {
    storeInfo = data;
    renderData(storeInfo);
    renderPagenation(storeInfo);
  });

// cursor move
const cursor = document.querySelector("#cursor");

// cursor pageX, Y
let x = 0;
let y = 0;

// cursor original & speed
let targetX = 0;
let targetY = 0;
let speed = 0.1;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;
  cursor.style.top = targetY + "px";
  cursor.style.left = targetX + "px";
  window.requestAnimationFrame(loop);
};
loop();

const showCursorRotate = () => {
  cursor.classList.add("active");
};
const hideCursorRotate = () => {
  cursor.classList.remove("active");
};

// load spinner
const spinner = document.querySelector(".spinner");
const showSpinner = () => {
  spinner.classList.remove("hiddenspinner");
};
const hiddenSpinner = () => {
  spinner.classList.add("hiddenspinner");
}
showSpinner();
setTimeout(() => {
  hiddenSpinner();
}, 1000);


// map click event
const mapAreas = document.querySelectorAll(".shopsearch_map > div");
mapAreas.forEach((area) => {
  area.addEventListener("click", (e) => {
    showCursorRotate();
    setTimeout(() => {
      hideCursorRotate();
    }, 1000);

    showSpinner();
setTimeout(() => {
  hiddenSpinner();
}, 1000);

    mapAreas.forEach((area) => area.classList.remove("active"));
    area.classList.add("active");

    const clickedCity = e.target.id;
    const matchedCityIfo = storeInfo.filter(
      (city) => city.main_area === clickedCity 
    );

    if(matchedCityIfo.length > 0) {
      renderData(matchedCityIfo);
      if(matchedCityIfo.length >= 5) {
        renderPagenation(matchedCityIfo);
      }else {
        pageNationContainer.innerHTML="";
      }
    }


    cityOption.value = clickedCity;
    cityOption.dispatchEvent(new Event("change"));
  });
});


//city option change event

cityOption.addEventListener("change", () => {
  showCursorRotate();
  setTimeout(() => {
    hideCursorRotate();
  }, 1000);

  showSpinner();
setTimeout(() => {
  hiddenSpinner();
}, 1000);

  const selectedCity = cityOption.value;
  if(selectedCity !== "none") {
    stateOption.innerHTML = "<option>구/군 선택</option>"
    if(cityInfo[selectedCity]) {
      cityInfo[selectedCity].forEach((cityItem)=>{
        const option = document.createElement("option");
        option.innerText = cityItem;
        stateOption.appendChild(option);
      });
    }
  }

  mapAreas.forEach((area)=>{
    if(area.id === selectedCity) {
      area.classList.add("active");
    } else {
      area.classList.remove("active");
    }
  });

  const matchedCityInfo = storeInfo.filter((city) => city.main_area === selectedCity);
  tableBody.innerHTML="";
  if (matchedCityInfo.length > 0) {
    renderData(matchedCityInfo);
    if (matchedCityInfo.length >=5) {
      renderPagenation(matchedCityInfo);
    }else {
      pageNationContainer.innerHTML="";
    }
  }else {
    renderData(storeInfo);
    renderPagenation(storeInfo);
  }
});

//checkbox option

const filterData= (data) => {
  const selectedCategories = [...document.querySelectorAll(".filter-checkbox:checked"),
].map((checkbox) => checkbox.value);

const filteredData = data.filter(
  (item) => selectedCategories.every((service) => 
  item.service.includes(service))
  );
  renderData(filteredData);
  renderPagenation(filteredData);
}


const optionMode = () => {
  showCursorRotate();
  setTimeout(() => {
    hideCursorRotate();
  }, 1000);

  showSpinner();
setTimeout(() => {
  hiddenSpinner();
}, 1000);

  filterData(storeInfo);
};

checkBoxs.forEach((checkbox) => {
  checkbox.addEventListener("change", optionMode);
})

//search event
searchButton.addEventListener("click", () => {
  showCursorRotate();
  setTimeout(() => {
    hideCursorRotate();
  }, 1000);

  showSpinner();
setTimeout(() => {
  hiddenSpinner();
}, 1000);

  tableBody.innerHTML="";

  const cityValue = cityOption.value;
  const stateValue = stateOption.value;
  const searchValue =  searchBar.value;

  let searchResults = storeInfo.filter((data) => data.store === searchValue);
  let alertShown = false;
  if(!searchValue) {
    storeInfo.forEach((data) => {
      const mainAreaMatched = data.main_area === cityValue;
      const subAreaMatched = data.sub_area === stateValue
    

      if(cityValue === "도/시 선택") {
        searchResults.push(data);
      }else if (mainAreaMatched && subAreaMatched) {
        searchResults.push(data);
      }
      if (stateValue === "구/군 선택" && !alertShown) {
        alert("구/군을 선택해주세요!");
        alertShown = true;
      }
    });
  };
  renderData(searchResults);

  if(searchResults.length >= 5) {
    renderPagenation(searchResults);
  }else {
    pageNationContainer.innerHTML = "";
  }
  searchBar.value = "";
});

//search event 02
searchform.addEventListener("submit", (e) => {

  e.preventDefault();

  showCursorRotate();
  setTimeout(() => {
    hideCursorRotate();
  }, 1000);

  showSpinner();
setTimeout(() => {
  hiddenSpinner();
}, 1000);

  tableBody.innerHTML="";

  const cityValue = cityOption.value;
  const stateValue = stateOption.value;
  const searchValue =  searchBar.value;

  let searchResults = storeInfo.filter((data) => data.store === searchValue);
  let alertShown = false;
  if(!searchValue) {
    storeInfo.forEach((data) => {
      const mainAreaMatched = data.main_area === cityValue;
      const subAreaMatched = data.sub_area === stateValue
    

      if(cityValue === "도/시 선택") {
        searchResults.push(data);
      }else if (mainAreaMatched && subAreaMatched) {
        searchResults.push(data);
      }
      if (stateValue === "구/군 선택" && !alertShown) {
        alert("구/군을 선택해주세요!");
        alertShown = true;
      }
    });
  };
  renderData(searchResults);

  if(searchResults.length >= 5) {
    renderPagenation(searchResults);
  }else {
    pageNationContainer.innerHTML = "";
  }
  searchBar.value = "";
});


