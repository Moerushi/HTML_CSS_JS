fetch("https://api.nbrb.by/exrates/rates?periodicity=0")
.then((response) => response.json())
.then((result)=>{
  result.forEach(element => {
    const newDivElem = document.createElement('div');
    newDivElem.classList.add('img-container');
    mainDiv.appendChild(newDivElem);

    const textData = document.createElement('p');
    textData.innerHTML = element.Date;
    newDivElem.appendChild(textData);

    const textCur = document.createElement('p');
    textCur.innerHTML = element.Cur_Abbreviation;
    newDivElem.appendChild(textCur);

  });
});