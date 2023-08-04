const arr_pr01 = [
  { prId_1: 1, name: "МГТФ" },
  { prId_1: 2, name: "МГТФЭ" },
  { prId_1: 3, name: "МГШВ" },
  { prId_1: 4, name: "МГШВЭ" },
  { prId_1: 5, name: "МПО" },
  { prId_1: 6, name: "МПОЭ" },
  { prId_1: 7, name: "ПВ3" },
  { prId_1: 8, name: "МС 16-13" },
  { prId_1: 9, name: "МСЭ 16-13" }
];

const arr_sech01 = [
  { prId_1: 1, sechId_1: 0.56, name: "0,03" },
  { prId_1: 1, sechId_1: 0.62, name: "0,05" },
  { prId_1: 1, sechId_1: 0.75, name: "0,07" },
  { prId_1: 1, sechId_1: 0.85, name: "0,10" },
  { prId_1: 1, sechId_1: 0.87, name: "0,12" },
  { prId_1: 1, sechId_1: 0.9, name: "0,14" },
  { prId_1: 1, sechId_1: 1.04, name: "0,20" },
  { prId_1: 1, sechId_1: 1.19, name: "0,35" },
  { prId_1: 1, sechId_1: 1.5, name: "0,50" },
  { prId_1: 1, sechId_1: 1.8, name: "0,75" },
  { prId_1: 1, sechId_1: 1.9, name: "1,0" },
  { prId_1: 1, sechId_1: 2.2, name: "1,5" },
  { prId_1: 1, sechId_1: 2.6, name: "2,5" },
  { prId_1: 2, sechId_1: 1.3, name: "1x0,07" },
  { prId_1: 2, sechId_1: 1.4, name: "1x0,10" },
  { prId_1: 2, sechId_1: 1.6, name: "1x0,12" },
  { prId_1: 2, sechId_1: 1.6, name: "1x0,14" },
  { prId_1: 2, sechId_1: 2.1, name: "2x0,07" },
  { prId_1: 2, sechId_1: 2.3, name: "2x0,10" },
  { prId_1: 2, sechId_1: 2.5, name: "2x0,12" },
  { prId_1: 2, sechId_1: 2.5, name: "2x0,14" },
  { prId_1: 2, sechId_1: 2.5, name: "3x0,07" },
  { prId_1: 2, sechId_1: 2.8, name: "3x0,10" },
  { prId_1: 2, sechId_1: 3.0, name: "3x0,12" },
  { prId_1: 2, sechId_1: 3.0, name: "3x0,14" },
  { prId_1: 3, sechId_1: 1.3, name: "0,12" },
  { prId_1: 3, sechId_1: 1.4, name: "0,14" },
  { prId_1: 3, sechId_1: 1.6, name: "0,20" },
  { prId_1: 3, sechId_1: 1.9, name: "0,35" },
  { prId_1: 3, sechId_1: 2.2, name: "0,50" },
  { prId_1: 3, sechId_1: 2.5, name: "0,75" },
  { prId_1: 3, sechId_1: 2.8, name: "1,00" },
  { prId_1: 3, sechId_1: 3.0, name: "1,50" },
  { prId_1: 4, sechId_1: 1.9, name: "1х0,12" },
  { prId_1: 4, sechId_1: 2.0, name: "1х0,14" },
  { prId_1: 4, sechId_1: 2.2, name: "1х0,20" },
  { prId_1: 4, sechId_1: 2.5, name: "1х0,35" },
  { prId_1: 4, sechId_1: 2.8, name: "1х0,50" },
  { prId_1: 4, sechId_1: 3.3, name: "1х0,75" },
  { prId_1: 4, sechId_1: 4.6, name: "2х0,35" },
  { prId_1: 4, sechId_1: 5.2, name: "2х0,50" },
  { prId_1: 4, sechId_1: 5.8, name: "2х0,75" },
  { prId_1: 4, sechId_1: 4.9, name: "3х0,35" },
  { prId_1: 4, sechId_1: 5.4, name: "3х0,50" },
  { prId_1: 4, sechId_1: 6.8, name: "3х0,75" },
  { prId_1: 5, sechId_1: 1.1, name: "0,12" },
  { prId_1: 5, sechId_1: 1.3, name: "0,20" },
  { prId_1: 5, sechId_1: 1.6, name: "0,35" },
  { prId_1: 5, sechId_1: 1.8, name: "0,50" },
  { prId_1: 5, sechId_1: 2.0, name: "0,75" },
  { prId_1: 5, sechId_1: 2.1, name: "1,00" },
  { prId_1: 5, sechId_1: 2.5, name: "1,50" },
  { prId_1: 5, sechId_1: 3.1, name: "2,50" },
  { prId_1: 5, sechId_1: 3.8, name: "4,00" },
  { prId_1: 5, sechId_1: 4.4, name: "6,00" },
  { prId_1: 6, sechId_1: 1.7, name: "1x0,12" },
  { prId_1: 6, sechId_1: 1.9, name: "1x0,20" },
  { prId_1: 6, sechId_1: 2.2, name: "1x0,35" },
  { prId_1: 6, sechId_1: 2.4, name: "1x0,50" },
  { prId_1: 6, sechId_1: 2.6, name: "1x0,75" },
  { prId_1: 6, sechId_1: 2.7, name: "1x1,00" },
  { prId_1: 6, sechId_1: 3.1, name: "1x1,50" },
  { prId_1: 6, sechId_1: 3.7, name: "1x2,50" },
  { prId_1: 6, sechId_1: 4.4, name: "1x4,00" },
  { prId_1: 6, sechId_1: 5.0, name: "1x6,00" },
  { prId_1: 6, sechId_1: 2.8, name: "2x0,12" },
  { prId_1: 6, sechId_1: 3.2, name: "2x0,20" },
  { prId_1: 6, sechId_1: 3.8, name: "2x0,35" },
  { prId_1: 6, sechId_1: 4.2, name: "2x0,50" },
  { prId_1: 6, sechId_1: 3.0, name: "3x0,12" },
  { prId_1: 6, sechId_1: 3.4, name: "3x0,20" },
  { prId_1: 6, sechId_1: 3.8, name: "3x0,35" },
  { prId_1: 6, sechId_1: 4.5, name: "3x0,50" },
  { prId_1: 7, sechId_1: 2.6, name: "0,50" },
  { prId_1: 7, sechId_1: 2.8, name: "0,75" },
  { prId_1: 7, sechId_1: 3.0, name: "1,00" },
  { prId_1: 7, sechId_1: 3.3, name: "1,20" },
  { prId_1: 7, sechId_1: 3.4, name: "1,50" },
  { prId_1: 7, sechId_1: 3.7, name: "2,00" },
  { prId_1: 7, sechId_1: 4.2, name: "2,50" },
  { prId_1: 7, sechId_1: 4.4, name: "3,00" },
  { prId_1: 7, sechId_1: 4.8, name: "4,00" },
  { prId_1: 7, sechId_1: 5.2, name: "5,00" },
  { prId_1: 7, sechId_1: 6.3, name: "6,00" },
  { prId_1: 8, sechId_1: 0.6, name: "0,02" },
  { prId_1: 8, sechId_1: 0.6, name: "0,03" },
  { prId_1: 8, sechId_1: 0.7, name: "0,05" },
  { prId_1: 8, sechId_1: 0.7, name: "0,08" },
  { prId_1: 8, sechId_1: 0.8, name: "0,12" },
  { prId_1: 8, sechId_1: 1.0, name: "0,20" },
  { prId_1: 8, sechId_1: 1.3, name: "0,35" },
  { prId_1: 8, sechId_1: 1.4, name: "0,50" },
  { prId_1: 9, sechId_1: 1.1, name: "0,08" },
  { prId_1: 9, sechId_1: 1.2, name: "0,12" },
  { prId_1: 9, sechId_1: 1.4, name: "0,20" },
  { prId_1: 9, sechId_1: 1.7, name: "0,35" },
  { prId_1: 9, sechId_1: 1.9, name: "0,50" }
];

const choice_L = document.querySelector(".choice_L");
const btnAdd = document.querySelector("#btnAdd");
const block_add = document.querySelector("#block_add");
const menuBlock = document.querySelector("#menu");
const leng = document.querySelector("#leng");

let countInit = 0;

opentInit();
function opentInit() {
  initBlock();
  btnAdd.disabled = true;
  const selType0 = document.querySelector("#prId_0");
  selSech0 = document.querySelector("#sechId_0");
  selType0.onchange = addSechZero;
  selSech0.disabled = true;
  addTypeZero();
  function addTypeZero() {
    let s = `<option value = '0'>-Тип-</option>`;
    for (let item of arr_pr01) {
      s += `<option value='${item.prId_1}'>${item.name}</option>`;
      selType0.innerHTML = s;
    }
  }

  function addSechZero() {
    let id = +selType0.value,
      s = `<option value="0">- Сечение -</option>`;
    if (id) {
      for (let item of arr_sech01.filter((e) => e.prId_1 === id)) {
        s += `<option value="${item.sechId_1}"> ${item.name}</option>`;
      }
      selSech0.disabled = false;
    } else selSech0.disabled = true;
    selSech0.innerHTML = s;
  }
}

btnAdd.addEventListener("click", init);

function init() {
  const selType0 = document.querySelector("#prId_0");
  selSech0 = document.querySelector("#sechId_0");
  selType1 = document.querySelector("#prId_1");
  selSech1 = document.querySelector("#sechId_1");
  selType2 = document.querySelector("#prId_2");
  selSech2 = document.querySelector("#sechId_2");
  selType3 = document.querySelector("#prId_3");
  selSech3 = document.querySelector("#sechId_3");
  selType4 = document.querySelector("#prId_4");
  selSech4 = document.querySelector("#sechId_4");
  selType5 = document.querySelector("#prId_5");
  selSech5 = document.querySelector("#sechId_5");

  btnAdd.disabled = true;

  if (selType0 && !selType1) {
    initBlock();
    errRefresh();
    selType1 = document.querySelector("#prId_1");
    selSech1 = document.querySelector("#sechId_1");
    addTypeOne();
    function addTypeOne() {
      let s = `<option value = '0'>-Тип-</option>`;
      selSech1.disabled = true;
      selType1.onchange = addSechOne;
      for (let item of arr_pr01) {
        s += `<option value='${item.prId_1}'>${item.name}</option>`;
        selType1.innerHTML = s;
      }
    }

    function addSechOne() {
      let id = +selType1.value;
      s = `<option value="0">- Сечение -</option>`;
      if (id) {
        for (let item of arr_sech01.filter((e) => e.prId_1 === id)) {
          s += `<option value="${item.sechId_1}"> ${item.name}</option>`;
        }
        selSech1.disabled = false;
      } else selSech1.disabled = true;
      selSech1.innerHTML = s;
    }
    return;
  }

  if (selType1 && !selType2) {
    initBlock();
    errRefresh();
    selType2 = document.querySelector("#prId_2");
    selSech2 = document.querySelector("#sechId_2");

    addTypeTwo();
    function addTypeTwo() {
      let s = `<option value = '0'>-Тип-</option>`;
      selType2.onchange = addSechTwo;
      selSech2.disabled = true;
      for (let item of arr_pr01) {
        s += `<option value='${item.prId_1}'>${item.name}</option>`;
        selType2.innerHTML = s;
      }
    }

    function addSechTwo() {
      let id = +selType2.value;
      s = `<option value="0">- Сечение -</option>`;
      if (id) {
        for (let item of arr_sech01.filter((e) => e.prId_1 === id)) {
          s += `<option value="${item.sechId_1}"> ${item.name}</option>`;
        }
        selSech2.disabled = false;
      } else selSech2.disabled = true;
      selSech2.innerHTML = s;
    }
    return;
  }

  if (selType2 && !selType3) {
    initBlock();
    errRefresh();
    selType3 = document.querySelector("#prId_3");
    selSech3 = document.querySelector("#sechId_3");

    addTypeThree();
    function addTypeThree() {
      let s = `<option value = '0'>-Тип-</option>`;
      selType3.onchange = addSechThree;
      selSech3.disabled = true;
      for (let item of arr_pr01) {
        s += `<option value='${item.prId_1}'>${item.name}</option>`;
        selType3.innerHTML = s;
      }
    }

    function addSechThree() {
      let id = +selType3.value;
      s = `<option value="0">- Сечение -</option>`;
      if (id) {
        for (let item of arr_sech01.filter((e) => e.prId_1 === id)) {
          s += `<option value="${item.sechId_1}"> ${item.name}</option>`;
        }
        selSech3.disabled = false;
      } else selSech3.disabled = true;
      selSech3.innerHTML = s;
    }
    return;
  }

  if (selType1 && !selType2) {
    initBlock();
    errRefresh();
    selType2 = document.querySelector("#prId_2");
    selSech2 = document.querySelector("#sechId_2");

    addTypeTwo();
    function addTypeTwo() {
      let s = `<option value = '0'>-Тип-</option>`;
      selType2.onchange = addSechTwo;
      selSech2.disabled = true;
      for (let item of arr_pr01) {
        s += `<option value='${item.prId_1}'>${item.name}</option>`;
        selType2.innerHTML = s;
      }
    }

    function addSechTwo() {
      let id = +selType2.value;
      s = `<option value="0">- Сечение -</option>`;
      if (id) {
        for (let item of arr_sech01.filter((e) => e.prId_1 === id)) {
          s += `<option value="${item.sechId_1}"> ${item.name}</option>`;
        }
        selSech2.disabled = false;
      } else selSech2.disabled = true;
      selSech2.innerHTML = s;
    }
    return;
  }

  if (selType3 && !selType4) {
    initBlock();
    errRefresh();
    selType4 = document.querySelector("#prId_4");
    selSech4 = document.querySelector("#sechId_4");

    addTypeFour();

    function addTypeFour() {
      let s = `<option value = '0'>-Тип-</option>`;
      selType4.onchange = addSechFour;
      selSech4.disabled = true;
      for (let item of arr_pr01) {
        s += `<option value='${item.prId_1}'>${item.name}</option>`;
        selType4.innerHTML = s;
      }
    }

    function addSechFour() {
      let id = +selType4.value;
      s = `<option value="0">- Сечение -</option>`;
      if (id) {
        for (let item of arr_sech01.filter((e) => e.prId_1 === id)) {
          s += `<option value="${item.sechId_1}"> ${item.name}</option>`;
        }
        selSech4.disabled = false;
      } else selSech4.disabled = true;
      selSech4.innerHTML = s;
    }
    return;
  }

  if (selType4 && !selType5) {
    hideAddDiv();
    initBlock();
    errRefresh();
    selType5 = document.querySelector("#prId_5");
    selSech5 = document.querySelector("#sechId_5");

    addTypeFive();
    function addTypeFive() {
      let s = `<option value = '0'>-Тип-</option>`;
      selType5.onchange = addSechFive;
      selSech5.disabled = true;
      for (let item of arr_pr01) {
        s += `<option value='${item.prId_1}'>${item.name}</option>`;
        selType5.innerHTML = s;
      }
    }

    function addSechFive() {
      let id = +selType5.value;
      s = `<option value="0">- Сечение -</option>`;
      if (id) {
        for (let item of arr_sech01.filter((e) => e.prId_1 === id)) {
          s += `<option value="${item.sechId_1}"> ${item.name}</option>`;
        }
        selSech5.disabled = false;
      } else selSech5.disabled = true;
      selSech5.innerHTML = s;
    }
    return;
  }
}

function initBlock() {
  const div_block = document.createElement("div");
  div_block.className = "div_block";
  div_block.setAttribute("id", "div_block_" + countInit);
  const title_block = document.createElement("p");
  title_block.innerHTML = "Провод №" + (1 + countInit);
  title_block.className = "title_block";
  const select_pr = document.createElement("select");
  select_pr.className = "select_pr_sech";
  select_pr.setAttribute("id", "prId_" + countInit);
  select_pr.classList.add("prF" + countInit);
  const select_sech = document.createElement("select");
  select_sech.className = "select_pr_sech";
  select_sech.setAttribute("id", "sechId_" + countInit);
  select_sech.classList.add("sechF" + countInit);
  const input_num = document.createElement("input");
  input_num.className = "input_num";
  input_num.setAttribute("id", "amount_" + countInit);
  input_num.type = "number";
  input_num.setAttribute("min", 1);
  input_num.setAttribute("max", 50);
  input_num.setAttribute("disabled", true);
  input_num.placeholder = "Кол-во.";
  input_num.setAttribute("title", "Максимальнное кол-во проводов - 50");

  const imgCreate = document.createElement("img");
  imgCreate.className = "img2";
  imgCreate.src = "images/treug1.png";
  const imgCreate1 = document.createElement("img");
  imgCreate1.className = "img3";
  imgCreate1.src = "images/treug1.png";

  div_block.after(menuBlock);
  block_add.before(div_block);
  div_block.appendChild(title_block);
  div_block.appendChild(select_pr);
  div_block.appendChild(select_sech);
  div_block.appendChild(input_num);
  div_block.appendChild(imgCreate);
  div_block.appendChild(imgCreate1);

  countInit++;
}

menuBlock.addEventListener("click", (e) => {
  if (e.target.classList.contains("select_pr_sech")) {
    out.innerHTML = "";
  } else if (e.target.classList.contains("input_num")) {
    out.innerHTML = "";
  } else if (e.target.classList.contains("btnBigAdd")) {
    out.innerHTML = "";
  }
});

choice_L.addEventListener("click", (e) => {
  if (e.target.classList.contains("leng")) {
    out.innerHTML = "";
  }
});

let selectAllCheck;
let inputAllCheck;
checkSel();
function checkSel() {
  let temp1;
  let temp2;
  menuBlock.addEventListener("change", (e) => {
    if (e.target.classList.contains("select_pr_sech")) {
      let box_sech = Array.from(document.querySelectorAll(".select_pr_sech"));
      let arrBlock = [];
      for (let i = 0; i < box_sech.length; i++) {
        arrBlock.push(box_sech[i].value);
      }
      let findArr = arrBlock.find((item) => item == 0);
      if (findArr == undefined) {
        temp1 = true;
      } else {
        temp1 = false;
      }
    }
    selectAllCheck = temp1;
  });

  menuBlock.addEventListener("input", (e) => {
    if (e.target.classList.contains("input_num")) {
      let box_inp = Array.from(document.querySelectorAll(".input_num"));
      let arrBlock1 = [];
      for (let j = 0; j < box_inp.length; j++) {
        arrBlock1.push(box_inp[j].value);
      }
      console.log(arrBlock1);
      let findArr1 = arrBlock1.find((item) => item == "");
      console.log(findArr1);
      if (findArr1 == undefined) {
        temp2 = true;
      } else {
        temp2 = false;
      }
    }
    inputAllCheck = temp2;
  });
}

menuBlock.addEventListener("change", (e) => {
  resultCheck(selectAllCheck, inputAllCheck);
  function resultCheck(funcSe, funcIn) {
    if (funcSe == true && funcIn == true) {
      btnAdd.disabled = false;
    } else {
      btnAdd.disabled = true;
    }
  }
});

menuBlock.addEventListener("input", (e) => {
  resultCheck(selectAllCheck, inputAllCheck);
  function resultCheck(funcSe, funcIn) {
    if (funcSe == true && funcIn == true) {
      btnAdd.disabled = false;
    } else {
      btnAdd.disabled = true;
      inputAllCheck = false;
    }
  }
});

function hideAddDiv() {
  if (selType4) {
    block_add.style.display = "none";
  }
}

function errRefresh() {
  let inputs = document.querySelectorAll(".input_num");
  Array.from(inputs).forEach((input) => {
    const min = +input.min;
    const max = +input.max;
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
      const value = +input.value;
      if (value > max) {
        input.value = "";
      } else if (value < min) {
        input.value = "";
      }
    });
  });
}
errRefresh();

menuBlock.addEventListener("change", (e) => {
  const valInp0 = document.querySelector("#amount_0");
  const sechF0 = document.querySelector(".sechF0");
  const prF0 = document.querySelector(".prF0");
  if (e.target.classList.contains("sechF0")) {
    if (sechF0.value !== "0" && prF0.value !== "0") {
      valInp0.disabled = false;
    } else {
      valInp0.value = "";
      valInp0.disabled = true;
    }
  } else if (e.target.classList.contains("prF0")) {
    if (sechF0.value !== "0" && prF0.value !== "0") {
      valInp0.disabled = false;
    } else {
      valInp0.value = "";
      valInp0.disabled = true;
    }
  }
});

menuBlock.addEventListener("change", (e) => {
  const sechF1 = document.querySelector(".sechF1");
  const prF1 = document.querySelector(".prF1");
  const valInp1 = document.querySelector("#amount_1");
  if (e.target.classList.contains("sechF1")) {
    if (sechF1.value !== "0" && prF1.value !== "0") {
      valInp1.disabled = false;
    } else {
      valInp1.value = "";
      valInp1.disabled = true;
    }
  } else if (e.target.classList.contains("prF1")) {
    if (sechF1.value !== "0" && prF1.value !== "0") {
      valInp1.disabled = false;
    } else {
      valInp1.value = "";
      valInp1.disabled = true;
    }
  }
});

menuBlock.addEventListener("change", (e) => {
  const sechF2 = document.querySelector(".sechF2");
  const prF2 = document.querySelector(".prF2");
  const valInp2 = document.querySelector("#amount_2");
  if (e.target.classList.contains("sechF2")) {
    if (sechF2.value !== "0" && prF2.value !== "0") {
      valInp2.disabled = false;
    } else {
      valInp2.value = "";
      valInp2.disabled = true;
    }
  } else if (e.target.classList.contains("prF2")) {
    if (sechF2.value !== "0" && prF2.value !== "0") {
      valInp2.disabled = false;
    } else {
      valInp2.value = "";
      valInp2.disabled = true;
    }
  }
});

menuBlock.addEventListener("change", (e) => {
  const sechF3 = document.querySelector(".sechF3");
  const prF3 = document.querySelector(".prF3");
  const valInp3 = document.querySelector("#amount_3");
  if (e.target.classList.contains("sechF3")) {
    if (sechF3.value !== "0" && prF3.value !== "0") {
      valInp3.disabled = false;
    } else {
      valInp3.value = "";
      valInp3.disabled = true;
    }
  } else if (e.target.classList.contains("prF3")) {
    if (sechF3.value !== "0" && prF3.value !== "0") {
      valInp3.disabled = false;
    } else {
      valInp3.value = "";
      valInp3.disabled = true;
    }
  }
});

menuBlock.addEventListener("change", (e) => {
  const sechF4 = document.querySelector(".sechF4");
  const prF4 = document.querySelector(".prF4");
  const valInp4 = document.querySelector("#amount_4");
  if (e.target.classList.contains("sechF4")) {
    if (sechF4.value !== "0" && prF4.value !== "0") {
      valInp4.disabled = false;
    } else {
      valInp4.value = "";
      valInp4.disabled = true;
    }
  } else if (e.target.classList.contains("prF4")) {
    if (sechF4.value !== "0" && prF4.value !== "0") {
      valInp4.disabled = false;
    } else {
      valInp4.value = "";
      valInp4.disabled = true;
    }
  }
});

menuBlock.addEventListener("change", (e) => {
  const sechF5 = document.querySelector(".sechF5");
  const prF5 = document.querySelector(".prF5");
  const valInp5 = document.querySelector("#amount_5");
  if (e.target.classList.contains("sechF5")) {
    if (sechF5.value !== "0" && prF5.value !== "0") {
      valInp5.disabled = false;
    } else {
      valInp5.value = "";
      valInp5.disabled = true;
    }
  } else if (e.target.classList.contains("prF5")) {
    if (sechF5.value !== "0" && prF5.value !== "0") {
      valInp5.disabled = false;
    } else {
      valInp5.value = "";
      valInp5.disabled = true;
    }
  }
});

const btnCalc = document
  .querySelector("#btnCalc")
  .addEventListener("click", calc);

function calc() {
  let arr = [];
  let arrSum = [];
  const allInpArr = Array.from(document.querySelectorAll(".input_num"));
  const leng = document.querySelector("#leng").value;
  const choiceTube = document.querySelector("#choiceTube").value;
  const out = document.querySelector("#out");
  out.innerHTML = "";

  allInpArr.forEach((item) => {
    arr.push(item.value);
  });
  let findItem = arr.find((item) => item == "");
  if (findItem == undefined && leng.value !== "0" && choiceTube.value !== "0") {
    const valSech0 = document.querySelector("#sechId_0");
    const valSech1 = document.querySelector("#sechId_1");
    const valSech2 = document.querySelector("#sechId_2");
    const valSech3 = document.querySelector("#sechId_3");
    const valSech4 = document.querySelector("#sechId_4");
    const valSech5 = document.querySelector("#sechId_5");

    const valInp0 = document.querySelector("#amount_0");
    const valInp1 = document.querySelector("#amount_1");
    const valInp2 = document.querySelector("#amount_2");
    const valInp3 = document.querySelector("#amount_3");
    const valInp4 = document.querySelector("#amount_4");
    const valInp5 = document.querySelector("#amount_5");

    let arrFnl = [];

    function summBlock0() {
      let inpVal0 = valInp0.value;
      let arrNew0 = [];
      for (let i = 0; i < inpVal0; i++) {
        arrNew0.push(+valSech0.value);
      }
      console.log(arrNew0);
      for (let i = 0; i < arrNew0.length; i++) {
        const k0 = ((arrNew0[i] ** 2 * 3.14) / 4) * leng;
        const fixK0 = +k0.toFixed(2);
        arrFnl.push(fixK0);
        if (k0 == "0") return 0;
      }
    }
    summBlock0();

    function summBlock1() {
      if (valInp1) {
        let inpVal1 = valInp1.value;
        let arrNew1 = [];
        for (let i = 0; i < inpVal1; i++) {
          arrNew1.push(+valSech1.value);
        }
        console.log(arrNew1);
        for (let i = 0; i < arrNew1.length; i++) {
          const k1 = ((arrNew1[i] ** 2 * 3.14) / 4) * leng;
          const fixK1 = +k1.toFixed(2);
          arrFnl.push(fixK1);
          if (k1 == "0") return 0;
        }
      }
    }
    summBlock1();

    function summBlock2() {
      if (valInp2) {
        let inpVal2 = valInp2.value;
        let arrNew2 = [];
        for (let i = 0; i < inpVal2; i++) {
          arrNew2.push(+valSech2.value);
        }
        console.log(arrNew2);
        for (let i = 0; i < arrNew2.length; i++) {
          const k2 = ((arrNew2[i] ** 2 * 3.14) / 4) * leng;
          const fixK2 = +k2.toFixed(2);
          arrFnl.push(fixK2);
        }
      }
    }
    summBlock2();

    function summBlock3() {
      if (valInp3) {
        let inpVal3 = valInp3.value;
        let arrNew3 = [];
        for (let i = 0; i < inpVal3; i++) {
          arrNew3.push(+valSech3.value);
        }
        console.log(arrNew3);
        for (let i = 0; i < arrNew3.length; i++) {
          const k3 = ((arrNew3[i] ** 2 * 3.14) / 4) * leng;
          const fixK3 = +k3.toFixed(2);
          arrFnl.push(fixK3);
        }
      }
    }
    summBlock3();

    function summBlock4() {
      if (valInp4) {
        let inpVal4 = valInp4.value;
        let arrNew4 = [];
        for (let i = 0; i < inpVal4; i++) {
          arrNew4.push(+valSech4.value);
        }
        console.log(arrNew4);
        for (let i = 0; i < arrNew4.length; i++) {
          const k4 = ((arrNew4[i] ** 2 * 3.14) / 4) * leng;
          const fixK4 = +k4.toFixed(2);
          arrFnl.push(fixK4);
        }
      }
    }
    summBlock4();

    function summBlock5() {
      if (valInp5) {
        let inpVal5 = valInp5.value;
        let arrNew5 = [];
        for (let i = 0; i < inpVal5; i++) {
          arrNew5.push(+valSech5.value);
        }
        console.log(arrNew5);
        for (let i = 0; i < arrNew5.length; i++) {
          const k5 = ((arrNew5[i] ** 2 * 3.14) / 4) * leng;
          const fixK5 = +k5.toFixed(2);
          arrFnl.push(fixK5);
        }
      }
    }
    summBlock5();

    const summFnl = arrFnl.reduce((acc, elem) => acc + elem);
    console.log(summFnl);
    const backDiam = 2 * Math.sqrt(summFnl / 3.14);
    console.log(backDiam);
    const fixSummFnl = +backDiam.toFixed(2);
    console.log(fixSummFnl);

    const tubeGost = "ГОСТ 19034-82";
    function R1() {
      let num;
      if (
        choiceTube == "ТВ-40" ||
        choiceTube == "ТВ-40Т" ||
        choiceTube == "ТВ-40А" ||
        choiceTube == "ТВ-50" ||
        choiceTube == "ТВ-50-14" ||
        choiceTube == "ТВ-60"
      ) {
        for (let i = 0; i < arrTube.length; i++) {
          if (fixSummFnl < arrTube[i]) {
            num = arrTube[i];
            break;
          }
        }
      } else if (fixSummFnl !== 0 && choiceTube == "Deray IAKT 3:1") {
        for (let i = 0; i < arrDerayIAKT3.length; i++) {
          if (fixSummFnl < arrDerayIAKT3[i].id) {
            num = arrDerayIAKT3[i].name;
            break;
          }
        }
      } else if (fixSummFnl !== 0 && choiceTube == "Deray IAKT 4:1") {
        for (let i = 0; i < arrDerayIAKT4.length; i++) {
          if (fixSummFnl < arrDerayIAKT4[i].id) {
            num = arrDerayIAKT4[i].name;
            break;
          }
        }
      } else if (fixSummFnl !== 0 && choiceTube == "Deray HB") {
        for (let i = 0; i < arrDerayHB.length; i++) {
          if (fixSummFnl < arrDerayHB[i].id) {
            num = arrDerayHB[i].name;
            break;
          }
        }
      }

      if (
        (fixSummFnl < 50 && leng !== "0" && choiceTube == "ТВ-40") ||
        choiceTube == "ТВ-40Т" ||
        choiceTube == "ТВ-40А" ||
        choiceTube == "ТВ-50" ||
        choiceTube == "ТВ-50-14" ||
        choiceTube == "ТВ-60"
      ) {
        out.innerHTML = `Трубка 305 ${choiceTube}, ` + num + " " + tubeGost;
      } else if (fixSummFnl < 40 && choiceTube == "Deray IAKT 3:1") {
        out.innerHTML = `Трубка ` + num;
      } else if (fixSummFnl < 52 && choiceTube == "Deray IAKT 4:1") {
        out.innerHTML = `Трубка ` + num;
      } else if (fixSummFnl < 102 && choiceTube == "Deray HB") {
        out.innerHTML = `Трубка ` + num;
      } else if (choiceTube == "0") {
        out.innerHTML = "";
      } else {
        out.innerHTML = "В макс. диаметр трубки 999 не поместится!";
      }
      if (leng == 0) {
        console.log("123");
        out.innerHTML = "";
      }
      console.log(num);
      console.log(leng);
    }
    R1();
  }

  const modalAlert = document.querySelector(".modal_alert_black");
  let parWarning1 = document.querySelector(".par_modal_warning1");
  let parWarning2 = document.querySelector(".par_modal_warning2");
  let parWarning3 = document.querySelector(".par_modal_warning3");

  parWarning1.innerHTML = "";
  parWarning2.innerHTML = "";
  parWarning3.innerHTML = "";

  const arrWarning = [];

  alertLengFunc();
  function alertLengFunc() {
    if (leng == "0") {
      modalAlert.classList.add("open");
      const param1 = "Выберите длину провода.";
      arrWarning.push(param1);
    } else {
      param1 = "";
    }
  }

  alertValFunc();
  function alertValFunc() {
    if (findItem !== undefined) {
      modalAlert.classList.add("open");
      const param1 = "Введите кол-во проводов.";
      arrWarning.push(param1);
    } else {
      param1 = "";
    }
  }

  alertTypeFunc();
  function alertTypeFunc() {
    if (choiceTube == "0") {
      modalAlert.classList.add("open");
      const param1 = "Выберите тип трубки.";
      arrWarning.push(param1);
    } else {
      param1 = "";
    }
  }

  parWarning1.textContent = arrWarning[0];
  parWarning2.textContent = arrWarning[1];
  parWarning3.textContent = arrWarning[2];

  document
    .querySelector(".btnModalCloseAlert")
    .addEventListener("click", () => {
      modalAlert.classList.remove("open");
    });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modalAlert.classList.remove("open");
    }
  });
  modalAlert.addEventListener("click", (e) => {
    if (e._isClickWithModal) return;
    e.currentTarget.classList.remove("open");
  });
}

const arrTube = [
  0.5,
  0.75,
  1.0,
  1.5,
  1.75,
  2.0,
  2.5,
  3.0,
  3.5,
  4.0,
  4.5,
  5.0,
  6.0,
  7.0,
  8.0,
  9.0,
  10.0,
  12.0,
  14.0,
  16.0,
  18.0,
  20.0,
  22.0,
  25.0,
  30.0,
  35.0,
  40.0,
  50.0
];

const arrDerayIAKT3 = [
  { id: 3.0, name: "Deray-IAKT-3,0/1,0" },
  { id: 4.5, name: "Deray-IAKT-4,5/1,5" },
  { id: 6.0, name: "Deray-IAKT-6,0/2,0" },
  { id: 9.0, name: "Deray-IAKT-9,0/3,0" },
  { id: 12.0, name: "Deray-IAKT-12,0/4,0" },
  { id: 19.0, name: "Deray-IAKT-19,0/6,0" },
  { id: 24.0, name: "Deray-IAKT-24,0/8,0" },
  { id: 40.0, name: "Deray-IAKT-40,0/13,0" }
];

const arrDerayIAKT4 = [
  { id: 4.0, name: "Deray-IAKT-4,0/1,0" },
  { id: 8.0, name: "Deray-IAKT-8,0/2,0" },
  { id: 12.0, name: "Deray-IAKT-12,0/3,0" },
  { id: 16.0, name: "Deray-IAKT-16,0/4,0" },
  { id: 24.0, name: "Deray-IAKT-24,0/6,0" },
  { id: 32.0, name: "Deray-IAKT-32,0/8,0" },
  { id: 52.0, name: "Deray-IAKT-52,0/13,0" }
];

const arrDerayHB = [
  { id: 1.2, name: "Deray-HB-1,2/0,6" },
  { id: 1.6, name: "Deray-HB-1,6/0,8" },
  { id: 2.4, name: "Deray-HB-2,4/1,2" },
  { id: 3.2, name: "Deray-HB-3,2/1,6" },
  { id: 4.0, name: "Deray-HB-4,0/1,0" },
  { id: 4.8, name: "Deray-HB-4,8/2,4" },
  { id: 6.4, name: "Deray-HB-6,4/3,2" },
  { id: 8.0, name: "Deray-HB-8,0/2,0" },
  { id: 9.5, name: "Deray-HB-9,5/4,8" },
  { id: 12.7, name: "Deray-HB-12,7/6,4" },
  { id: 19.0, name: "Deray-HB-19,0/9,5" },
  { id: 25.4, name: "Deray-HB-25,4/12,7" },
  { id: 31.8, name: "Deray-HB-31,8/15,9" },
  { id: 38.0, name: "Deray-HB-38,1/19,0" },
  { id: 51.0, name: "Deray-HB-50,8/25,4" },
  { id: 76.0, name: "Deray-HB-76,0/38,0" },
  { id: 102.0, name: "Deray-HB-102,0/51,0" }
];

document.querySelector(".btn_info").addEventListener("click", () => {
  document.querySelector("#myModal").classList.add("open");
});
document.querySelector(".btnModalClose").addEventListener("click", () => {
  document.querySelector("#myModal").classList.remove("open");
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelector(".myModal").classList.remove("open");
  }
});
document.querySelector(".myModal .modal_box").addEventListener("click", (e) => {
  e._isClickWithModal = true;
});
document.querySelector(".myModal").addEventListener("click", (e) => {
  if (e._isClickWithModal) return;
  e.currentTarget.classList.remove("open");
});
