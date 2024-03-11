function applyFilter() {
  // 예시 데이터 배열
  let items = [
    { name: "아이템 1", category: "option1" },
    { name: "아이템 2", category: "option2" },
    { name: "아이템 3", category: "option3" },
    { name: "아이템 4", category: "option1" },
    // 추가 아이템들...
  ];

  let filteredItems = items.filter(item => {
    // 체크박스 상태 확인
    let option1Checked = document.getElementById('filterOption1').checked;
    let option2Checked = document.getElementById('filterOption2').checked;
    let option3Checked = document.getElementById('filterOption3').checked;

    // 체크된 조건에 따라 필터링
    return (option1Checked && item.category === "option1") ||
      (option2Checked && item.category === "option2") ||
      (option3Checked && item.category === "option3");
  });

  // 결과 출력
  displayResults(filteredItems);
}

function displayResults(filteredItems) {
  let resultArea = document.getElementById('resultArea');
  resultArea.innerHTML = ''; // 이전 결과 지우기

  filteredItems.forEach(item => {
    let itemElement = document.createElement('div');
    itemElement.textContent = item.name;
    resultArea.appendChild(itemElement);
  });
}