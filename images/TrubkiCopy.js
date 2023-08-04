//==========================СОЗДАНИЕ БЛОКОВ==========================

// ПЕРВЫЙ блок(автоматически).
const arr_pr01 = [ // Массив со всеми марками проводов
    {prId_1:1, name: 'МГТФ'},
    {prId_1:2, name: 'МГТФЭ'},
    {prId_1:3, name: 'МГШВ'},
    {prId_1:4, name: 'МГШВЭ'},
    {prId_1:5, name: 'МПО'},
    {prId_1:6, name: 'МПОЭ'},
    {prId_1:7, name: 'ПВ3'},
    {prId_1:8, name: 'МС 16-13'},
    {prId_1:9, name: 'МСЭ 16-13'}];

const arr_sech01 = [ // Массив со всеми сечениями проводов
    {prId_1:1, sechId_1:0.56, name: '0,03'},
    {prId_1:1, sechId_1:0.62, name: '0,05'},
    {prId_1:1, sechId_1:0.75, name: '0,07'},
    {prId_1:1, sechId_1:0.85, name: '0,10'},
    {prId_1:1, sechId_1:0.87, name: '0,12'},
    {prId_1:1, sechId_1:0.9, name: '0,14'},
    {prId_1:1, sechId_1:1.04, name: '0,20'},
    {prId_1:1, sechId_1:1.19, name: '0,35'},
    {prId_1:1, sechId_1:1.5, name: '0,50'},
    {prId_1:1, sechId_1:1.8, name: '0,75'},
    {prId_1:1, sechId_1:1.9, name: '1,0'},
    {prId_1:1, sechId_1:2.2, name: '1,5'},
    {prId_1:1, sechId_1:2.6, name: '2,5'}, // Закончился МГТФ
    {prId_1:2, sechId_1:1.3, name: '1x0,07'},
    {prId_1:2, sechId_1:1.4, name: '1x0,10'},
    {prId_1:2, sechId_1:1.6, name: '1x0,12'},
    {prId_1:2, sechId_1:1.6, name: '1x0,14'},
    {prId_1:2, sechId_1:2.1, name: '2x0,07'},
    {prId_1:2, sechId_1:2.3, name: '2x0,10'},
    {prId_1:2, sechId_1:2.5, name: '2x0,12'},
    {prId_1:2, sechId_1:2.5, name: '2x0,14'},
    {prId_1:2, sechId_1:2.5, name: '3x0,07'},
    {prId_1:2, sechId_1:2.8, name: '3x0,10'},
    {prId_1:2, sechId_1:3.0, name: '3x0,12'},
    {prId_1:2, sechId_1:3.0, name: '3x0,14'}, // Закончился МГТФ-Э
    {prId_1:3, sechId_1:1.3, name: '0,12'},
    {prId_1:3, sechId_1:1.4, name: '0,14'},
    {prId_1:3, sechId_1:1.6, name: '0,20'},
    {prId_1:3, sechId_1:1.9, name: '0,35'},
    {prId_1:3, sechId_1:2.2, name: '0,50'},
    {prId_1:3, sechId_1:2.5, name: '0,75'},
    {prId_1:3, sechId_1:2.8, name: '1,00'},
    {prId_1:3, sechId_1:3.0, name: '1,50'}, // Закончился МГШВ
    {prId_1:4, sechId_1:1.9, name: '1х0,12'},
    {prId_1:4, sechId_1:2.0, name: '1х0,14'},
    {prId_1:4, sechId_1:2.2, name: '1х0,20'},
    {prId_1:4, sechId_1:2.5, name: '1х0,35'},
    {prId_1:4, sechId_1:2.8, name: '1х0,50'},
    {prId_1:4, sechId_1:3.3, name: '1х0,75'},
    {prId_1:4, sechId_1:4.6, name: '2х0,35'},
    {prId_1:4, sechId_1:5.2, name: '2х0,50'},
    {prId_1:4, sechId_1:5.8, name: '2х0,75'},
    {prId_1:4, sechId_1:4.9, name: '3х0,35'},
    {prId_1:4, sechId_1:5.4, name: '3х0,50'},
    {prId_1:4, sechId_1:6.8, name: '3х0,75'}, // Закончился МГШВ-Э
    {prId_1:5, sechId_1:1.1, name: '0,12'},
    {prId_1:5, sechId_1:1.3, name: '0,20'},
    {prId_1:5, sechId_1:1.6, name: '0,35'},
    {prId_1:5, sechId_1:1.8, name: '0,50'},
    {prId_1:5, sechId_1:2.0, name: '0,75'},
    {prId_1:5, sechId_1:2.1, name: '1,00'},
    {prId_1:5, sechId_1:2.5, name: '1,50'},
    {prId_1:5, sechId_1:3.1, name: '2,50'},
    {prId_1:5, sechId_1:3.8, name: '4,00'},
    {prId_1:5, sechId_1:4.4, name: '6,00'}, // Закончился МПО https://optochip.org/vniikp/4/1/2/%D0%A2%D0%A316-505.339-79
    {prId_1:6, sechId_1:1.7, name: '1x0,12'},
    {prId_1:6, sechId_1:1.9, name: '1x0,20'},
    {prId_1:6, sechId_1:2.2, name: '1x0,35'},
    {prId_1:6, sechId_1:2.4, name: '1x0,50'},
    {prId_1:6, sechId_1:2.6, name: '1x0,75'},
    {prId_1:6, sechId_1:2.7, name: '1x1,00'},
    {prId_1:6, sechId_1:3.1, name: '1x1,50'},
    {prId_1:6, sechId_1:3.7, name: '1x2,50'},
    {prId_1:6, sechId_1:4.4, name: '1x4,00'},
    {prId_1:6, sechId_1:5.0, name: '1x6,00'},
    {prId_1:6, sechId_1:2.8, name: '2x0,12'},
    {prId_1:6, sechId_1:3.2, name: '2x0,20'},
    {prId_1:6, sechId_1:3.8, name: '2x0,35'},
    {prId_1:6, sechId_1:4.2, name: '2x0,50'},
    {prId_1:6, sechId_1:3.0, name: '3x0,12'},
    {prId_1:6, sechId_1:3.4, name: '3x0,20'},
    {prId_1:6, sechId_1:3.8, name: '3x0,35'},
    {prId_1:6, sechId_1:4.5, name: '3x0,50'},// Закончился МПОЭ https://optochip.org/vniikp/4/1/2/%D0%A2%D0%A316-505.339-79
    {prId_1:7, sechId_1:2.6, name: '0,50'},
    {prId_1:7, sechId_1:2.8, name: '0,75'},
    {prId_1:7, sechId_1:3.0, name: '1,00'},
    {prId_1:7, sechId_1:3.3, name: '1,20'},
    {prId_1:7, sechId_1:3.4, name: '1,50'},
    {prId_1:7, sechId_1:3.7, name: '2,00'},
    {prId_1:7, sechId_1:4.2, name: '2,50'},
    {prId_1:7, sechId_1:4.4, name: '3,00'},
    {prId_1:7, sechId_1:4.8, name: '4,00'},
    {prId_1:7, sechId_1:5.2, name: '5,00'},
    {prId_1:7, sechId_1:6.3, name: '6,00'}, // Закончился ПВ3 https://files.stroyinf.ru/Data/239/23943.pdf
    {prId_1:8, sechId_1:0.6, name: '0,02'},
    {prId_1:8, sechId_1:0.6, name: '0,03'},
    {prId_1:8, sechId_1:0.7, name: '0,05'},
    {prId_1:8, sechId_1:0.7, name: '0,08'},
    {prId_1:8, sechId_1:0.8, name: '0,12'},
    {prId_1:8, sechId_1:1.0, name: '0,20'},
    {prId_1:8, sechId_1:1.3, name: '0,35'},
    {prId_1:8, sechId_1:1.4, name: '0,50'}, // Закончился МС 16-13 https://optochip.org/vniikp/4/1/2/%D0%A2%D0%A316-505.083-78
    {prId_1:9, sechId_1:1.1, name: '0,08'},
    {prId_1:9, sechId_1:1.2, name: '0,12'},
    {prId_1:9, sechId_1:1.4, name: '0,20'},
    {prId_1:9, sechId_1:1.7, name: '0,35'},
    {prId_1:9, sechId_1:1.9, name: '0,50'}, // Закончился МСЭ 16-13 https://optochip.org/vniikp/4/1/2/%D0%A2%D0%A316-505.083-78

    ];

const choice_L = document.querySelector('.choice_L');
const btnAdd = document.querySelector('#btnAdd'); // addEventListener('click', init); // кнопка добавить
const block_add = document.querySelector('#block_add');
const menuBlock = document.querySelector('#menu');
const leng = document.querySelector('#leng');

let countInit = 0;

opentInit(); // прорисовываем стартовое меню.
function opentInit () {
    initBlock();
    btnAdd.disabled = true; // выключили кнопку добавления сразу после создания блока.
    const selType0 = document.querySelector('#prId_0');
          selSech0 = document.querySelector('#sechId_0');
    selType0.onchange = addSechZero;
    selSech0.disabled = true;
    addTypeZero();
    function addTypeZero () {
        let s = `<option value = '0'>-Тип-</option>`
        for (let item of arr_pr01) {
            s += `<option value='${item.prId_1}'>${item.name}</option>`
            selType0.innerHTML = s;
        };
    };

    function addSechZero() { //добавляем во второй select.
        let id = +selType0.value, //в перем. id записываем значение option value="1" МГТФ
        s = `<option value="0">- Сечение -</option>`;
        if (id) { // Если id имеется(true), то
            for (let item of arr_sech01.filter(e => e.prId_1 === id)) { //проходимся по массиву sech1 с фильтром
                s += `<option value="${item.sechId_1}"> ${item.name}</option>`; // в s присваиваем option value="0,56" и тд все сечения
                }
                    selSech0.disabled = false; //делаем селект с сечениями второго столбца активным.
                }
                else
                    selSech0.disabled = true; //иначе селект заблокирован
                    selSech0.innerHTML = s; //в селект сечений второго столбца записываем значения 0,56 в все
    };
};

btnAdd.addEventListener('click', init); // повесили обработчик клина на кнопку.
//========================INIT_1=============================
function init() { //запускается при нажатии кнопки и добавляет новые блоки. Первый блок выполн.всегда.
    const selType0 = document.querySelector('#prId_0');
          selSech0 = document.querySelector('#sechId_0');
          selType1 = document.querySelector('#prId_1');
          selSech1 = document.querySelector('#sechId_1');
          selType2 = document.querySelector('#prId_2');
          selSech2 = document.querySelector('#sechId_2');
          selType3 = document.querySelector('#prId_3');
          selSech3 = document.querySelector('#sechId_3');
          selType4 = document.querySelector('#prId_4');
          selSech4 = document.querySelector('#sechId_4');
          selType5 = document.querySelector('#prId_5');
          selSech5 = document.querySelector('#sechId_5');

    btnAdd.disabled = true;

    if (selType0 && !selType1) { // если select типов в первом блоке создан, а во втором нет, то..
        initBlock(); // создаёт блок
        errRefresh(); // верификация 0-50 и блокировка ввода.
        selType1 = document.querySelector('#prId_1');
        selSech1 = document.querySelector('#sechId_1');
        addTypeOne();
        function addTypeOne () {
            let s = `<option value = '0'>-Тип-</option>`
            selSech1.disabled = true;
            selType1.onchange = addSechOne;
            for (let item of arr_pr01) {
                s += `<option value='${item.prId_1}'>${item.name}</option>`
                selType1.innerHTML = s;
            };
        };

        function addSechOne() { //добавляем во второй select.
            let id = +selType1.value, //в перем. id записываем значение option value="1" МГТФ
            s = `<option value="0">- Сечение -</option>`;
            if (id) { // Если id имеется(true), то
                for (let item of arr_sech01.filter(e => e.prId_1 === id)) { //проходимся по массиву sech1 с фильтром
                    s += `<option value="${item.sechId_1}"> ${item.name}</option>`; // в s присваиваем option value="0,56" и тд все сечения
                    }
                        selSech1.disabled = false; //делаем селект с сечениями второго столбца активным.
                    }
                    else
                        selSech1.disabled = true; //иначе селект заблокирован
                        selSech1.innerHTML = s; //в селект сечений второго столбца записываем значения 0,56 в все
        };
        return; // останавливаем выполнение функции, иначе создаёт сразу два столбца
    };

//========================INIT_2=============================

    if (selType1 && !selType2) { // если select типов в первом блоке создан, а во втором нет, то..
        initBlock();
        errRefresh();
        selType2 = document.querySelector('#prId_2');
        selSech2 = document.querySelector('#sechId_2');

        addTypeTwo();
        function addTypeTwo () {
            let s = `<option value = '0'>-Тип-</option>`
            selType2.onchange = addSechTwo;
            selSech2.disabled = true;
            for (let item of arr_pr01) {
                s += `<option value='${item.prId_1}'>${item.name}</option>`
                selType2.innerHTML = s;
            };
        };

        function addSechTwo() { //добавляем во второй select.
            let id = +selType2.value, //в перем. id записываем значение option value="1" МГТФ
            s = `<option value="0">- Сечение -</option>`;
            if (id) { // Если id имеется(true), то
                for (let item of arr_sech01.filter(e => e.prId_1 === id)) { //проходимся по массиву sech1 с фильтром
                    s += `<option value="${item.sechId_1}"> ${item.name}</option>`; // в s присваиваем option value="0,56" и тд все сечения
                    }
                        selSech2.disabled = false; //делаем селект с сечениями второго столбца активным.
                    }
                    else
                        selSech2.disabled = true; //иначе селект заблокирован
                        selSech2.innerHTML = s; //в селект сечений второго столбца записываем значения 0,56 в все
        };
            return; // останавливаем выполнение функции.
    };
//========================INIT_3=============================

    if(selType2 && !selType3) { // если select типов в первом блоке создан, а во втором нет, то..
        initBlock();
        errRefresh();
        selType3 = document.querySelector('#prId_3');
        selSech3 = document.querySelector('#sechId_3');

        addTypeThree();
        function addTypeThree () {
            let s = `<option value = '0'>-Тип-</option>`
            selType3.onchange = addSechThree;
            selSech3.disabled = true;
            for (let item of arr_pr01) {
                s += `<option value='${item.prId_1}'>${item.name}</option>`
                selType3.innerHTML = s;
            };
        };

        function addSechThree() { //добавляем во второй select.
            let id = +selType3.value, //в перем. id записываем значение option value="1" МГТФ
            s = `<option value="0">- Сечение -</option>`;
            if (id) { // Если id имеется(true), то
                for (let item of arr_sech01.filter(e => e.prId_1 === id)) { //проходимся по массиву sech1 с фильтром
                    s += `<option value="${item.sechId_1}"> ${item.name}</option>`; // в s присваиваем option value="0,56" и тд все сечения
                    }
                        selSech3.disabled = false; //делаем селект с сечениями второго столбца активным.
                    }
                    else
                        selSech3.disabled = true; //иначе селект заблокирован
                        selSech3.innerHTML = s; //в селект сечений второго столбца записываем значения 0,56 в все
        };
            return; // останавливаем выполнение функции.
    }; // if end

//========================INIT_3=============================

    if (selType1 && !selType2) { // если select типов в первом блоке создан, а во втором нет, то..
        initBlock();
        errRefresh();
        selType2 = document.querySelector('#prId_2');
        selSech2 = document.querySelector('#sechId_2');

        addTypeTwo();
        function addTypeTwo () {
            let s = `<option value = '0'>-Тип-</option>`
            selType2.onchange = addSechTwo;
            selSech2.disabled = true;
            for (let item of arr_pr01) {
                s += `<option value='${item.prId_1}'>${item.name}</option>`
                selType2.innerHTML = s;
            };
        };

        function addSechTwo() { //добавляем во второй select.
            let id = +selType2.value, //в перем. id записываем значение option value="1" МГТФ
            s = `<option value="0">- Сечение -</option>`;
            if (id) { // Если id имеется(true), то
                for (let item of arr_sech01.filter(e => e.prId_1 === id)) { //проходимся по массиву sech1 с фильтром
                    s += `<option value="${item.sechId_1}"> ${item.name}</option>`; // в s присваиваем option value="0,56" и тд все сечения
                    }
                        selSech2.disabled = false; //делаем селект с сечениями второго столбца активным.
                    }
                    else
                        selSech2.disabled = true; //иначе селект заблокирован
                        selSech2.innerHTML = s; //в селект сечений второго столбца записываем значения 0,56 в все
        };
            return; // останавливаем выполнение функции.
    };
//========================INIT_4=============================

    if(selType3 && !selType4) { // если select типов в первом блоке создан, а во втором нет, то..
        initBlock();
        errRefresh();
        selType4 = document.querySelector('#prId_4');
        selSech4 = document.querySelector('#sechId_4');

        addTypeFour();

        function addTypeFour () {
            let s = `<option value = '0'>-Тип-</option>`
            selType4.onchange = addSechFour;
            selSech4.disabled = true;
            for (let item of arr_pr01) {
                s += `<option value='${item.prId_1}'>${item.name}</option>`
                selType4.innerHTML = s;
            };
        };

        function addSechFour() { //добавляем во второй select.
            let id = +selType4.value, //в перем. id записываем значение option value="1" МГТФ
            s = `<option value="0">- Сечение -</option>`;
            if (id) { // Если id имеется(true), то
                for (let item of arr_sech01.filter(e => e.prId_1 === id)) { //проходимся по массиву sech1 с фильтром
                    s += `<option value="${item.sechId_1}"> ${item.name}</option>`; // в s присваиваем option value="0,56" и тд все сечения
                    }
                        selSech4.disabled = false; //делаем селект с сечениями второго столбца активным.
                    }
                    else
                        selSech4.disabled = true; //иначе селект заблокирован
                        selSech4.innerHTML = s; //в селект сечений второго столбца записываем значения 0,56 в все
        };
            return; // останавливаем выполнение функции.
    }; // if end

//========================INIT_5=============================

    if(selType4 && !selType5) { // если select типов в первом блоке создан, а во втором нет, то..
        hideAddDiv();// удаляем кнопку add после создания шестого провода
        initBlock();
        errRefresh();
        selType5 = document.querySelector('#prId_5');
        selSech5 = document.querySelector('#sechId_5');

        addTypeFive();
                function addTypeFive () {
            let s = `<option value = '0'>-Тип-</option>`
            selType5.onchange = addSechFive;
            selSech5.disabled = true;
            for (let item of arr_pr01) {
                s += `<option value='${item.prId_1}'>${item.name}</option>`
                selType5.innerHTML = s;
            };
        };

        function addSechFive() { //добавляем во второй select.
            let id = +selType5.value, //в перем. id записываем значение option value="1" МГТФ
            s = `<option value="0">- Сечение -</option>`;
            if (id) { // Если id имеется(true), то
                for (let item of arr_sech01.filter(e => e.prId_1 === id)) { //проходимся по массиву sech1 с фильтром
                    s += `<option value="${item.sechId_1}"> ${item.name}</option>`; // в s присваиваем option value="0,56" и тд все сечения
                    }
                        selSech5.disabled = false; //делаем селект с сечениями второго столбца активным.
                    }
                    else
                        selSech5.disabled = true; //иначе селект заблокирован
                        selSech5.innerHTML = s; //в селект сечений второго столбца записываем значения 0,56 в все
        };
            return; // останавливаем выполнение функции.
    }; // if end


}; // main func end

//---------------------------ВЫЗЫВАЕМЫЕ ФУНКЦИИ---------------------------

// Создание блока провода(столбца):
function initBlock () {
    const div_block = document.createElement('div'); // создаём div который является блоком для селектов и тд.
          div_block.className = 'div_block';
          div_block.setAttribute('id', 'div_block_' + countInit);
    const title_block = document.createElement('p'); // создаём title типа 'Провод 1'..
          title_block.innerHTML = 'Провод №' + (1 + countInit);
          title_block.className = 'title_block';
    const select_pr = document.createElement('select'); // создаём select типа проводов.
          select_pr.className = 'select_pr_sech';
          select_pr.setAttribute('id', 'prId_' + countInit);
          select_pr.classList.add('prF'+ countInit)
    const select_sech = document.createElement('select'); // создаём select типа сечений проводов.
          select_sech.className = 'select_pr_sech';
          select_sech.setAttribute('id', 'sechId_' + countInit)
          select_sech.classList.add('sechF'+ countInit)
    const input_num = document.createElement('input'); // создаём input для ввода кол-ва проводов.
          input_num.className = 'input_num';
          input_num.setAttribute('id', 'amount_' + countInit);
          input_num.type = 'number'; // ввод только цифр.
          input_num.setAttribute('min', 1);
          input_num.setAttribute('max', 50);
          input_num.setAttribute('disabled', true); // пробуем отключить кнопку при создании.
          input_num.placeholder = 'Кол-во.'
          input_num.setAttribute('title', "Максимальнное кол-во проводов - 50");
    div_block.after(menuBlock); // блок провода вставляем в div меню.
          block_add.before(div_block); // вставляем div_block(блок проводов) перед block_add(блоков довавления).
          div_block.appendChild(title_block); // добавляем в div блока <p> с названием.
          div_block.appendChild(select_pr); // добаляем в div блока select типа проводов.
          div_block.appendChild(select_sech); // добаляем в div блока select типа сечений.
          div_block.appendChild(input_num); // добаляем в div блока input кол-ва проводов.

    countInit++;
};

//При любом клике в какое-либо поле обнуляется поле результата.
menuBlock.addEventListener('click', (e) => {
    if(e.target.classList.contains('select_pr_sech')) {
        out.innerHTML = '';
    } else if(e.target.classList.contains('input_num')) {
        out.innerHTML = '';
    } else if(e.target.classList.contains('btnBigAdd')) {
        out.innerHTML = '';
    };
});
// При любом клике на div где кнопки расчёта и результ будет обнулён результат(выше к нему же относится).
choice_L.addEventListener('click', (e) => {
    if(e.target.classList.contains('leng')) {
        out.innerHTML = '';
    };
});

// Проверка всех полей и разблокировка Добавить.
let selectAllCheck; // возвращает true/false всех селектов.(глобальная, чтобы видели друг.функции))
let inputAllCheck; // возвращает true/false всех инпутов.(глобальная, чтобы видели друг.функции))
checkSel();
function checkSel() {
    let temp1; // если все селекты заполнены вернёт true.(внутреняя переменная)
    let temp2; // если все инпуты заполнены вернёт true.(внутреняя переменная)
    menuBlock.addEventListener('change', (e) => {
        if (e.target.classList.contains('select_pr_sech')) {
            let box_sech = Array.from(document.querySelectorAll('.select_pr_sech')); // получили все select и пров и сечений
            let arrBlock = []; // сюда копим все значения после цикла for.
            for (let i = 0; i < box_sech.length; i++) {
                arrBlock.push(box_sech[i].value); // выводит значения, 0-не выбрано, 1,2,3..-выбрано.
            }
            let findArr = arrBlock.find(item => item == 0); // если есть 0 записываем в эту переменную.
            if (findArr == undefined) { // если 0 нет, то...
                temp1 = true;
            } else { // если какой-то select не заполнет, то...
                temp1 = false;
            };
        };
        selectAllCheck = temp1; // поднимаем значение в глобальную область видимости.
    });

    menuBlock.addEventListener('input', (e) => { // то же что и выше только с input.
        if (e.target.classList.contains('input_num')) {
            let box_inp = Array.from(document.querySelectorAll('.input_num'));
            let arrBlock1 = [];
            for (let j = 0; j < box_inp.length; j++) {
                arrBlock1.push(box_inp[j].value);
            };
            console.log(arrBlock1);
            let findArr1 = arrBlock1.find(item => item == '');
            console.log(findArr1);
             if (findArr1 == undefined) {
                temp2 = true;
             } else {
                temp2 = false;
             };
        };
        inputAllCheck = temp2;
    })
}

// Финальная проверка двух переменных в которых true/false в зависимости от заполненности полей.
// На изменение полей select (типов и сечений).
menuBlock.addEventListener('change', (e) => {
    resultCheck(selectAllCheck, inputAllCheck);
    function resultCheck (funcSe, funcIn) {
        if (funcSe == true && funcIn == true) {
            btnAdd.disabled = false;
        } else {
            btnAdd.disabled = true;
        };
    }
});
// На изменение полей input.
menuBlock.addEventListener('input', (e) => {
    resultCheck(selectAllCheck, inputAllCheck);
    function resultCheck (funcSe, funcIn) {
        if (funcSe == true && funcIn == true) {
            btnAdd.disabled = false;
        } else {
            btnAdd.disabled = true;
            inputAllCheck = false; // обнуляем перем, тк если отжать сечение кнопка Добавить актив. без кол-ва пров.
        };
    }
});

//-Скрывает блок Добавить при создании 6го провода.
function hideAddDiv () {
    if (selType4) { // если 5тый столбец создан, то при создании 6го скрываем блок с кнопкой 'Добавить'.
        block_add.style.display = 'none'; // переменная взята ранее.
    };
};

//Верификация кол-ва проводов от 1 до 50 и блокировка ввода ненужных символов.
function errRefresh() {
    let inputs = document.querySelectorAll('.input_num'); //('input[type=number]')
    Array.from(inputs).forEach(input => {
        const min = +input.min;
        const max = +input.max;
        input.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '') // *Блокирует ввод точек(десятых) в числах поля
            const value = +input.value; // второй блок на проверку 1-50.
            if (value > max) {
                input.value = '';
            } else if (value < min) {
                input.value = '';
            };
        });
    });
};
errRefresh();

// блокирование input-ов в зависимости от селектов.
// первый блок:
menuBlock.addEventListener('change', (e) => {
    const valInp0 = document.querySelector('#amount_0');
    const sechF0 = document.querySelector('.sechF0');
    const prF0 = document.querySelector('.prF0');
    if (e.target.classList.contains('sechF0')) { // Первый блок проводов.
        if (sechF0.value !== '0' && prF0.value !== '0') {
            valInp0.disabled = false;
        } else {
            valInp0.value = '';
            valInp0.disabled = true;
        }
    } else if (e.target.classList.contains('prF0')) {
        if (sechF0.value !== '0' && prF0.value !== '0') {
            valInp0.disabled = false;
        } else {
            valInp0.value = '';
            valInp0.disabled = true;
        }
    }
});
// второй блок:
menuBlock.addEventListener('change', (e) => { // на первом блоке слушатели.
    const sechF1 = document.querySelector('.sechF1');
    const prF1 = document.querySelector('.prF1');
    const valInp1 = document.querySelector('#amount_1');
    if (e.target.classList.contains('sechF1')) { // Первый блок проводов.
        if (sechF1.value !== '0' && prF1.value !== '0') {
            valInp1.disabled = false;
        } else {
            valInp1.value = '';
            valInp1.disabled = true;
        }
    } else if (e.target.classList.contains('prF1')) {
        if (sechF1.value !== '0' && prF1.value !== '0') {
            valInp1.disabled = false;
        } else {
            valInp1.value = '';
            valInp1.disabled = true;
        }
    }
});
// третий блок:
menuBlock.addEventListener('change', (e) => { // на первом блоке слушатели.
    const sechF2 = document.querySelector('.sechF2');
    const prF2 = document.querySelector('.prF2');
    const valInp2 = document.querySelector('#amount_2');
    if (e.target.classList.contains('sechF2')) { // Первый блок проводов.
        if (sechF2.value !== '0' && prF2.value !== '0') {
            valInp2.disabled = false;
        } else {
            valInp2.value = '';
            valInp2.disabled = true;
        }
    } else if (e.target.classList.contains('prF2')) {
        if (sechF2.value !== '0' && prF2.value !== '0') {
            valInp2.disabled = false;
        } else {
            valInp2.value = '';
            valInp2.disabled = true;
        }
    }
});
// четвертый блок:
menuBlock.addEventListener('change', (e) => { // на первом блоке слушатели.
    const sechF3 = document.querySelector('.sechF3');
    const prF3 = document.querySelector('.prF3');
    const valInp3 = document.querySelector('#amount_3');
    if (e.target.classList.contains('sechF3')) { // Первый блок проводов.
        if (sechF3.value !== '0' && prF3.value !== '0') {
            valInp3.disabled = false;
        } else {
            valInp3.value = '';
            valInp3.disabled = true;
        }
    } else if (e.target.classList.contains('prF3')) {
        if (sechF3.value !== '0' && prF3.value !== '0') {
            valInp3.disabled = false;
        } else {
            valInp3.value = '';
            valInp3.disabled = true;
        }
    }
});
// пятый блок:
menuBlock.addEventListener('change', (e) => { // на первом блоке слушатели.
    const sechF4 = document.querySelector('.sechF4');
    const prF4 = document.querySelector('.prF4');
    const valInp4 = document.querySelector('#amount_4');
    if (e.target.classList.contains('sechF4')) { // Первый блок проводов.
        if (sechF4.value !== '0' && prF4.value !== '0') {
            valInp4.disabled = false;
        } else {
            valInp4.value = '';
            valInp4.disabled = true;
        }
    } else if (e.target.classList.contains('prF4')) {
        if (sechF4.value !== '0' && prF4.value !== '0') {
            valInp4.disabled = false;
        } else {
            valInp4.value = '';
            valInp4.disabled = true;
        }
    }
});
// шестой блок:
menuBlock.addEventListener('change', (e) => { // на первом блоке слушатели.
    const sechF5 = document.querySelector('.sechF5');
    const prF5 = document.querySelector('.prF5');
    const valInp5 = document.querySelector('#amount_5');
    if (e.target.classList.contains('sechF5')) { // Первый блок проводов.
        if (sechF5.value !== '0' && prF5.value !== '0') {
            valInp5.disabled = false;
        } else {
            valInp5.value = '';
            valInp5.disabled = true;
        }
    } else if (e.target.classList.contains('prF5')) {
        if (sechF5.value !== '0' && prF5.value !== '0') {
            valInp5.disabled = false;
        } else {
            valInp5.value = '';
            valInp5.disabled = true;
        }
    }
});

// Кнопка расчёта.
const btnCalc = document.querySelector('#btnCalc').addEventListener('click', calc);

function calc() {
    let arr = [];
    let arrSum = [];
    const allInpArr = Array.from(document.querySelectorAll('.input_num'));
    const leng = document.querySelector('#leng').value;
    const choiceTube = document.querySelector('#choiceTube').value;
    const out = document.querySelector('#out');
    out.innerHTML = '';

    allInpArr.forEach(item => {
        arr.push(item.value); // закинули значение в массив.
    }); //перевели все значиния всех input в новый массив arr.
    let findItem = arr.find(item => item == ''); // если в Input пусто '', если число то undefined
    if (findItem == undefined && leng.value !== '0' && choiceTube.value !== '0') { // если все input заполнены, то будет undefined
        //выполняем расчёт
        const valSech0 = document.querySelector('#sechId_0');
        const valSech1 = document.querySelector('#sechId_1');
        const valSech2 = document.querySelector('#sechId_2');
        const valSech3 = document.querySelector('#sechId_3');
        const valSech4 = document.querySelector('#sechId_4');
        const valSech5 = document.querySelector('#sechId_5');

        const valInp0 = document.querySelector('#amount_0');
        const valInp1 = document.querySelector('#amount_1');
        const valInp2 = document.querySelector('#amount_2');
        const valInp3 = document.querySelector('#amount_3');
        const valInp4 = document.querySelector('#amount_4');
        const valInp5 = document.querySelector('#amount_5');

        let arrFnl = []; // массив под финальное сложение всех проводов.
//-----первый блок проводов-----
    function summBlock0() {
        let inpVal0 = valInp0.value; // значение введёное в input(кол-во проводов)
        let arrNew0 = []; // массив под for, если в input 5 то в массиве пять значений.
        for (let i = 0; i < inpVal0; i++) { // прошлись столько раз сколько указано проводов.
            arrNew0.push(+valSech0.value); // каждый проход закидываем в массив.
        };
        console.log(arrNew0); // пример: [0.62, 0.62, 0.62];
        for (let i = 0; i < arrNew0.length; i++) {
            const k0 = ((((arrNew0[i]**2)*3.14)/4) * leng); // получаем S(площать) каждого провода c коэф.
            const fixK0 = +k0.toFixed(2);
            arrFnl.push(fixK0);
            if (k0 =='0') return 0;
        };
    }
    summBlock0();
//-----второй блок проводов-----
    function summBlock1() {
        if (valInp1) {
            let inpVal1 = valInp1.value; // значение введёное в input(кол-во проводов)
            let arrNew1 = []; // массив под for, если в input 5 то в массиве пять значений.
            for (let i = 0; i < inpVal1; i++) { // прошлись столько раз сколько указано проводов.
                arrNew1.push(+valSech1.value); // каждый проход закидываем в массив.
            };
            console.log(arrNew1); // пример: [0.62, 0.62, 0.62];
            for (let i = 0; i < arrNew1.length; i++) {
                const k1 = ((((arrNew1[i]**2)*3.14)/4) * leng); // получаем S(площать) каждого провода c коэф.
                const fixK1 = +k1.toFixed(2);
                arrFnl.push(fixK1);
                if (k1 =='0') return 0;
            };
        };
    }
    summBlock1();
//-----третий блок проводов-----
    function summBlock2() {
        if (valInp2) {
            let inpVal2 = valInp2.value; // значение введёное в input(кол-во проводов)
            let arrNew2 = []; // массив под for, если в input 5 то в массиве пять значений.
            for (let i = 0; i < inpVal2; i++) { // прошлись столько раз сколько указано проводов.
                arrNew2.push(+valSech2.value); // каждый проход закидываем в массив.
            };
            console.log(arrNew2); // пример: [0.62, 0.62, 0.62];
            for (let i = 0; i < arrNew2.length; i++) {
                const k2 = ((((arrNew2[i]**2)*3.14)/4) * leng); // получаем S(площать) каждого провода c коэф.
                const fixK2 = +k2.toFixed(2);
                arrFnl.push(fixK2);
            };
        };
    }
    summBlock2();
//-----четвертый блок проводов-----
    function summBlock3() {
        if (valInp3) {
            let inpVal3 = valInp3.value; // значение введёное в input(кол-во проводов)
            let arrNew3 = []; // массив под for, если в input 5 то в массиве пять значений.
            for (let i = 0; i < inpVal3; i++) { // прошлись столько раз сколько указано проводов.
                arrNew3.push(+valSech3.value); // каждый проход закидываем в массив.
            };
            console.log(arrNew3); // пример: [0.62, 0.62, 0.62];
            for (let i = 0; i < arrNew3.length; i++) {
                const k3 = ((((arrNew3[i]**2)*3.14)/4) * leng); // получаем S(площать) каждого провода c коэф.
                const fixK3 = +k3.toFixed(2);
                arrFnl.push(fixK3);
            };
        };
    }
    summBlock3();
//-----пятый блок проводов-----
    function summBlock4() {
        if (valInp4) {
            let inpVal4 = valInp4.value; // значение введёное в input(кол-во проводов)
            let arrNew4 = []; // массив под for, если в input 5 то в массиве пять значений.
            for (let i = 0; i < inpVal4; i++) { // прошлись столько раз сколько указано проводов.
                arrNew4.push(+valSech4.value); // каждый проход закидываем в массив.
            };
            console.log(arrNew4); // пример: [0.62, 0.62, 0.62];
            for (let i = 0; i < arrNew4.length; i++) {
                const k4 = ((((arrNew4[i]**2)*3.14)/4) * leng); // получаем S(площать) каждого провода c коэф.
                const fixK4 = +k4.toFixed(2);
                arrFnl.push(fixK4);
            };
        };
    }
    summBlock4();
//-----шестой блок проводов-----
    function summBlock5() {
        if (valInp5) {
            let inpVal5 = valInp5.value; // значение введёное в input(кол-во проводов)
            let arrNew5 = []; // массив под for, если в input 5 то в массиве пять значений.
            for (let i = 0; i < inpVal5; i++) { // прошлись столько раз сколько указано проводов.
                arrNew5.push(+valSech5.value); // каждый проход закидываем в массив.
            };
            console.log(arrNew5); // пример: [0.62, 0.62, 0.62];
            for (let i = 0; i < arrNew5.length; i++) {
                const k5 = ((((arrNew5[i]**2)*3.14)/4) * leng); // получаем S(площать) каждого провода c коэф.
                const fixK5 = +k5.toFixed(2);
                arrFnl.push(fixK5);
            };
        };
    }
    summBlock5();
//-----все блоки просчитаны и добавлены в шесть массивов.


// Расчёт по формуле.
    const summFnl = arrFnl.reduce((acc, elem) => acc + elem); // тут получили общую S со всех столбцов.
    const backDiam = 2*Math.sqrt(summFnl/3.14); // формула переводим умноженную на коэфф. площадь обратно в диаметр.
    const fixSummFnl = +backDiam.toFixed(2); // округляем до двух значений после запятой.
    console.log(fixSummFnl);

//Сверяем финальное значение с массивом трубок и ближайшим диаметром.
    //1) В переменную fixSummFnl приходит финальное округлённое до сотых число.
    //2) Перебирем массив в ЗАВИСИМОСТИ от выбранной трубки choiceTube.
    const tubeGost = 'ГОСТ 19034-82';
    function R1() {
        let num;
        if (choiceTube == "ТВ-40"
        || choiceTube == "ТВ-40Т"
        || choiceTube == "ТВ-40А"
        || choiceTube == "ТВ-50"
        || choiceTube == "ТВ-50-14"
        || choiceTube == "ТВ-60") { // если выбрана трубка ТВ40...ТВ60, то...
            for (let i = 0; i < arrTube.length; i++) { // arr.Tube - массив с трубками ТВ.
                if (fixSummFnl < arrTube[i]) { // докустив рез=4,78 след массив = 5,1
                    num = arrTube[i]; //если фин.диам меньше диаметра в массиве, то заносив диам. массива в перем. num.
                    break;
                };
            };
        } else if (fixSummFnl !== 0 && choiceTube == "Deray IAKT 3:1") {
            for (let i = 0; i < arrDerayIAKT3.length; i++) {
                if (fixSummFnl < arrDerayIAKT3[i].id) { // докустив рез=4,78 след массив = 5,1
                    num = arrDerayIAKT3[i].name; //если фин.диам меньше диаметра в массиве, то заносив диам. массива в перем. num.
                    break;
                };
            };
        } else if (fixSummFnl !== 0 && choiceTube == "Deray IAKT 4:1") {
            for (let i = 0; i < arrDerayIAKT4.length; i++) {
                if (fixSummFnl < arrDerayIAKT4[i].id) { // докустив рез=4,78 след массив = 5,1
                    num = arrDerayIAKT4[i].name; //если фин.диам меньше диаметра в массиве, то заносив диам. массива в перем. num.
                    break;
                };
            };
        } else if (fixSummFnl !== 0 && choiceTube == "Deray HB") {
            for (let i = 0; i < arrDerayHB.length; i++) {
                if (fixSummFnl < arrDerayHB[i].id) { // докустив рез=4,78 след массив = 5,1
                    num = arrDerayHB[i].name; //если фин.диам меньше диаметра в массиве, то заносив диам. массива в перем. num.
                    break;
                };
            };
        };
// вывод в поле out в зависимости от выбранной трубки и учёт макс. диаметра.
        if (fixSummFnl < 50 && leng !== '0' && choiceTube == "ТВ-40"
        || choiceTube == "ТВ-40Т"
        || choiceTube == "ТВ-40А"
        || choiceTube == "ТВ-50"
        || choiceTube == "ТВ-50-14"
        || choiceTube == "ТВ-60") {
            out.innerHTML = `Трубка ${choiceTube}, ` + num + ' ' + tubeGost;
        } else if (fixSummFnl < 40 && choiceTube == "Deray IAKT 3:1") {
            out.innerHTML = `Трубка ` + num;
        } else if (fixSummFnl < 52 && choiceTube == "Deray IAKT 4:1") {
            out.innerHTML = `Трубка ` + num;
        } else if (fixSummFnl < 102 && choiceTube == "Deray HB") { // если выбрана трубка Deray HB.
            out.innerHTML = `Трубка ` + num;
        } else if (choiceTube == '0') {
            out.innerHTML = '';
        }  else {
            out.innerHTML = 'В макс. диаметр трубки 999 не поместится!'
        };
        if (leng == 0) {
            console.log('123');
            out.innerHTML = '';
        };
        console.log(num); // выводит диам. из массива финальный.
        console.log(leng)
    }
    R1();
    }; // главный If закрывается

//проверка на заполнение алерты.
    if (leng == '0') alert('Выберите длину провода.'); // длина не выбрана.
    if (findItem !== undefined) alert('Введите кол-во проводов'); // кол-во не выбрано.
    if (choiceTube == '0') alert('Выберите тип трубки'); // тип трубки не выбран.
} //  Функция Cacl закрывается.

// ниже массив с диаметрами трубок ТВ-40...ТВ-60 ГОСТ 19034-82.
const arrTube = [0.50,0.75,1.00,1.50,1.75,2.00,2.50,3.00,3.50,4.00,4.50,5.00,6.00,7.00,8.00,9.00,10.00,12.00,14.00,16.00,18.00,20.00,22.00,25.00,30.00,35.00,40.00,50.00];

// ниже массив с трубками Deray IAKT. https://tmark.ru/tovar/deray-iakt/
const arrDerayIAKT3 = [
    {id: 3.0, name: 'Deray-IAKT-3,0/1,0'},
    {id: 4.5, name: 'Deray-IAKT-4,5/1,5'},
    {id: 6.0, name: 'Deray-IAKT-6,0/2,0'},
    {id: 9.0, name: 'Deray-IAKT-9,0/3,0'},
    {id: 12.0, name: 'Deray-IAKT-12,0/4,0'},
    {id: 19.0, name: 'Deray-IAKT-19,0/6,0'},
    {id: 24.0, name: 'Deray-IAKT-24,0/8,0'},
    {id: 40.0, name: 'Deray-IAKT-40,0/13,0'}
];

const arrDerayIAKT4 = [
    {id: 4.0, name: 'Deray-IAKT-4,0/1,0'},
    {id: 8.0, name: 'Deray-IAKT-8,0/2,0'},
    {id: 12.0, name: 'Deray-IAKT-12,0/3,0'},
    {id: 16.0, name: 'Deray-IAKT-16,0/4,0'},
    {id: 24.0, name: 'Deray-IAKT-24,0/6,0'},
    {id: 32.0, name: 'Deray-IAKT-32,0/8,0'},
    {id: 52.0, name: 'Deray-IAKT-52,0/13,0'}
]; // усадка 4 к 1.

const arrDerayHB = [
    {id: 1.2, name: 'Deray-HB-1,2/0,6'},
    {id: 1.6, name: 'Deray-HB-1,6/0,8'},
    {id: 2.4, name: 'Deray-HB-2,4/1,2'},
    {id: 3.2, name: 'Deray-HB-3,2/1,6'},
    {id: 4.0, name: 'Deray-HB-4,0/1,0'},
    {id: 4.8, name: 'Deray-HB-4,8/2,4'},
    {id: 6.4, name: 'Deray-HB-6,4/3,2'},
    {id: 8.0, name: 'Deray-HB-8,0/2,0'},
    {id: 9.5, name: 'Deray-HB-9,5/4,8'},
    {id: 12.7, name: 'Deray-HB-12,7/6,4'},
    {id: 19.0, name: 'Deray-HB-19,0/9,5'},
    {id: 25.4, name: 'Deray-HB-25,4/12,7'},
    {id: 31.8, name: 'Deray-HB-31,8/15,9'},
    {id: 38.0, name: 'Deray-HB-38,1/19,0'},
    {id: 51.0, name: 'Deray-HB-50,8/25,4'},
    {id: 76.0, name: 'Deray-HB-76,0/38,0'},
    {id: 102.0, name: 'Deray-HB-102,0/51,0'}
];



//---------------------------КОНЕЦ ВЫЗЫВАЕМЫХ ФУНКЦИЙ---------------------------

//---Список проверок и функций---
// - Проверка всех выпадающих меню на заполнение, если хоть одно поле не выбрано, то кнопка 'Добавить'(новый провод) заблокирована.
// - Проверка: После просчёта и вывода результата на экран действует проверка на изменение всех полей,
//т.е. если была нажата кнопка на какое либы поле результат астоматически скидывается.
