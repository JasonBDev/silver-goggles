let tabNum = 0;
let sectionNum = 0;
let imageNum = 0;
let headNum = 0;
let subheadNum = 0;
let informationNum = 0;
let buttonNum = 0;

function increment(el) {
    if (el === 'tab') {
        tabNum += 1;
        return;
    } else if (el === 'section') {
        sectionNum += 1;
        return;
    } else if (el === 'image') {
        imageNum += 1;
        return;
    } else if (el === 'head') {
        headNum += 1;
        return;
    } else if (el === 'subhead') {
        subheadNum += 1;
        return;
    } else if (el === 'information') {
        informationNum += 1;
        return;
    } else if (el === 'button') {
        buttonNum += 1;
        return;
    };
};

function createTab() {
    increment('tab');
    sectionNum = 1;

    const div1 = document.createElement('div');
    div1.classList.add('accordion-item');
    div1.setAttribute('id', `accordion-item${tabNum}`);
    document.querySelector('#accordionExample').appendChild(div1);

    createTitle();

    const div2 = document.createElement('div');
    div2.classList.add('accordion-collapse', 'collapse');
    div2.setAttribute('id', `collapse${tabNum}`);
    div2.setAttribute('aria-labelledby', `heading${tabNum}`);
    div2.setAttribute('data-bs-parent', '#accordionExample');

    div1.appendChild(div2);

    createSectionPartOne();
}

function createTitle() {
    const h2 = document.createElement('h2');
    h2.classList.add('accordion-header');
    h2.setAttribute('id', `heading${tabNum}`);

    const div1 = document.createElement('div');
    div1.classList.add('d-flex', 'align-items-center', 'p-2');

    const labelTitle = document.createElement('label');
    labelTitle.classList.add('visually-hidden');
    labelTitle.setAttribute('for', `edit-title${tabNum}`);

    const inputTitle = document.createElement('input');
    inputTitle.classList.add('form-control', 'form-control-lg', 'me-3', 'border-0');
    inputTitle.setAttribute('id', `edit-title${tabNum}`);
    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('name', `tabs[${tabNum - 1}][title]`);
    inputTitle.setAttribute('placeholder', `Title ${tabNum}`);

    const draggableHandle = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    draggableHandle.classList.add('accordion-handle');
    draggableHandle.setAttribute('style', 'width: 20px; height: 20px; color: rgb(120,120,120); margin-left: 5px; opacity: 0.6;');
    draggableHandle.setAttribute('viewBox', '0 0 20 20');

    const draggableHandlePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    draggableHandlePath.setAttribute('fill-rule', 'evenodd');
    draggableHandlePath.setAttribute('d', 'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z');
    draggableHandlePath.setAttribute('clip-rule', 'evenodd');

    draggableHandle.appendChild(draggableHandlePath);

    // <button onclick="deleteById('<%- tab._id %>')"
    //     style="display: flex; justify-items: center; align-items:center; width: 25px; height: 25px; padding: 0; margin: 0; background-color: white; border: none">
    //     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
    //         stroke="currentColor" strokeWidth={2}>
    //         <path strokeLinecap="round" strokeLinejoin="round"
    //             d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    //     </svg>
    // </button>

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('onClick', "deleteByRawId('accordion-item" + tabNum + "')");
    deleteButton.setAttribute('style', "display: flex; justify-items: center; align-items:center; width: 25px; height: 25px; padding: 0; margin: 0; background-color: white; border: none");

    const deleteSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    deleteSVG.classList.add('h-6');
    deleteSVG.classList.add('w-6');
    deleteSVG.setAttribute('fill', 'none');
    deleteSVG.setAttribute('stroke', 'currentColor');
    deleteSVG.setAttribute('strokeWidth', '2');
    deleteSVG.setAttribute('viewBox', '0 0 24 24');

    const deletePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    deletePath.setAttribute('fill-rule', 'none');
    deletePath.setAttribute('d', 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16');

    deleteSVG.appendChild(deletePath);
    deleteButton.appendChild(deleteSVG);

    const button = document.createElement('button');
    button.classList.add('btn', 'accordion-expand-icon');
    button.setAttribute('type', 'button');
    button.setAttribute('data-bs-toggle', 'collapse');
    button.setAttribute('data-bs-target', `#collapse${tabNum}`);
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', `collapse${tabNum}`);

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '20');
    svg.setAttribute('height', '20');
    svg.setAttribute('fill', 'currentColor');
    svg.classList.add('bi', 'bi-chevron-down');
    svg.setAttribute('viewBox', '0 0 16 16');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill-rule', 'evenodd');
    path.setAttribute('d', 'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z');

    h2.appendChild(div1);
    div1.appendChild(labelTitle);
    div1.appendChild(draggableHandle);
    div1.appendChild(inputTitle);
    div1.appendChild(deleteButton);
    div1.appendChild(button);
    button.appendChild(svg);
    svg.appendChild(path);
    document.querySelector(`#accordion-item${tabNum}`).appendChild(h2);
}

function createSectionPartOne() {
    const div1 = document.createElement('div');
    div1.setAttribute('id', `sections-tab`);

    new Sortable.create(div1, {
        animation: 200,
        ghostClass: 'blue-background-class',
        handle: '.accordion-handle',
    });

    const div3 = document.createElement('div');
    div3.classList.add('row', 'mx-3', 'my-2')
    div3.setAttribute('id', `add-section-button-container-tab${tabNum}`);

    const addSectionButton = document.createElement('a');
    addSectionButton.classList.add('btn', 'btn-outline-dark', 'btn-sm', 'text-muted', 'border', 'border-light');
    addSectionButton.setAttribute('id', `add-section-button-tab${tabNum}`);
    addSectionButton.setAttribute('onclick', `addSectionToNewTab(event)`);
    addSectionButton.innerText = 'Add Section';

    div3.appendChild(addSectionButton);
    document.querySelector(`#collapse${tabNum}`).appendChild(div1);
    document.querySelector(`#collapse${tabNum}`).appendChild(div3);
}

function createSectionPartTwo(t, s) {
    increment('section');
    imageNum = 1;
    headNum = 1;
    subheadNum = 1;
    informationNum = 1;
    buttonNum = 1;
    document.querySelector(`#add-section-button-tab${t}`).setAttribute('onclick', `createSectionPartTwo(${t}, ${s + 1})`);

    const container = document.createElement('div');
    container.setAttribute('style', 'display: flex; flex-direction: row; align-items: center; padding-left: 10px;');

    const div1 = document.createElement('div');
    div1.classList.add('accordion-body', 'mb-2');
    div1.setAttribute('id', `accordion-body-tab${t}-section${s}`);
    div1.setAttribute('style', 'width: 100%;');

    const sectionDividerDiv = document.createElement('div');
    sectionDividerDiv.setAttribute('style', 'width: 100%; display: flex; align-items: center; justify-content: center; margin-bottom: 10px;');

    const sectionDivider = document.createElement('h6');
    sectionDivider.classList.add('text-muted', 'text-center');
    sectionDivider.setAttribute('style', 'margin-bottom: -8px;')
    sectionDivider.innerText = `Section ${s}`;
    
    sectionDividerDiv.append(sectionDivider);

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('onClick', "deleteNewSection(event)");
    deleteButton.setAttribute('style', "display: flex; justify-items: center; align-items:center; width: 20px; height: 20px; padding: 0; margin: 0; background-color: white; border: none; margin-top: 8px; margin-left: 8px;");

    const deleteSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    deleteSVG.classList.add('h-6');
    deleteSVG.classList.add('w-6');
    deleteSVG.setAttribute('fill', 'none');
    deleteSVG.setAttribute('stroke', 'currentColor');
    deleteSVG.setAttribute('strokeWidth', '2');
    deleteSVG.setAttribute('viewBox', '0 0 24 24');

    const deletePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    deletePath.setAttribute('fill-rule', 'none');
    deletePath.setAttribute('d', 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16');

    deleteSVG.appendChild(deletePath);
    deleteButton.appendChild(deleteSVG);

    sectionDividerDiv.appendChild(deleteButton);

    div1.appendChild(sectionDividerDiv);

    const div2 = document.createElement('div');
    div2.setAttribute('id', `content-tab${t}-section${s}`);

    new Sortable.create(div2, {
        animation: 200,
        ghostClass: 'blue-background-class',
        handle: '.accordion-handle',
    });

    const draggableHandle = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    draggableHandle.classList.add('accordion-handle');
    draggableHandle.setAttribute('style', 'width: 20px; height: 20px; color: rgb(120,120,120); margin-left: 5px; opacity: 0.6;');
    draggableHandle.setAttribute('viewBox', '0 0 20 20');

    const draggableHandlePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    draggableHandlePath.setAttribute('fill-rule', 'evenodd');
    draggableHandlePath.setAttribute('d', 'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z');
    draggableHandlePath.setAttribute('clip-rule', 'evenodd');

    draggableHandle.appendChild(draggableHandlePath);

    container.appendChild(draggableHandle);

    div1.appendChild(div2);

    container.appendChild(div1);
    document.querySelector(`#sections-tab${t}`).appendChild(container);

    createAddElementsButtons(t, s);

    createImage(t, s);
    createHead(t, s, headNum);
    createSubhead(t, s, subheadNum);
    createInformation(t, s, informationNum);
    createButton(t, s, buttonNum);
}

function createAddElementsButtons(t, s) {
    const div1 = document.createElement('div');
    div1.setAttribute('id', `#add-element-buttons-container-tab${t}-section${s}`);

    const addImageButton = document.createElement('a');
    addImageButton.classList.add('btn', 'btn-link', 'btn-sm');
    addImageButton.setAttribute('id', `add-image-button-tab${t}-section${s}`);
    addImageButton.setAttribute('onclick', `createNewNewElement(event, "#tab1-section1-image-container1")`);
    addImageButton.innerText = '+Img';

    const addHeadButton = document.createElement('a');
    addHeadButton.classList.add('btn', 'btn-link', 'btn-sm');
    addHeadButton.setAttribute('id', `add-head-button-tab${t}-section${s}`);
    addHeadButton.setAttribute('onclick', `createNewNewElement(event, "#main-heading")`);
    addHeadButton.innerText = '+Head';

    const addSubheadButton = document.createElement('a');
    addSubheadButton.classList.add('btn', 'btn-link', 'btn-sm');
    addSubheadButton.setAttribute('id', `add-subhead-button-tab${t}-section${s}`);
    addSubheadButton.setAttribute('onclick', `createNewNewElement(event, "#sub-heading")`);
    addSubheadButton.innerText = '+Subhead';

    const addInformationButton = document.createElement('a');
    addInformationButton.classList.add('btn', 'btn-link', 'btn-sm');
    addInformationButton.setAttribute('id', `add-information-button-tab${t}-section${s}`);
    addInformationButton.setAttribute('onclick', `createNewNewElement(event, "#information")`);
    addInformationButton.innerText = '+Info';

    const addButtonButton = document.createElement('a');
    addButtonButton.classList.add('btn', 'btn-link', 'btn-sm');
    addButtonButton.setAttribute('id', `add-button-button-tab${t}-section${s}`);
    addButtonButton.setAttribute('onclick', `createNewNewElement(event, "#information")`);
    addButtonButton.innerText = '+Button';


    div1.appendChild(addImageButton);
    div1.appendChild(addHeadButton);
    div1.appendChild(addSubheadButton);
    div1.appendChild(addInformationButton);
    div1.appendChild(addButtonButton);
    document.querySelector(`#accordion-body-tab${t}-section${s}`).appendChild(div1);
}

function createImage(t, s, iM = 1) {
    increment('image');
    document.querySelector(`#add-image-button-tab${t}-section${s}`).setAttribute('onclick', `createImage(${t}, ${s}, ${iM + 1})`);

    const div1 = document.createElement('div');
    div1.classList.add('d-flex', 'mb-3', 'align-items-center');
    div1.setAttribute('id', `tab${t}-section${s}-image-container${iM}`);

    const div2 = document.createElement('div');
    div2.classList.add('ratio', 'ratio-16x9');

    const labelImage = document.createElement('label');
    labelImage.classList.add('label-img');
    labelImage.setAttribute('for', `edit-tab${t}-section${s}-image${iM}`);

    const labelSpan = document.createElement('span');
    labelSpan.classList.add('text-muted');
    labelSpan.innerHTML = 'Choose Image';

    const inputImage = document.createElement('input');
    inputImage.classList.add('mb-3', 'border-0', 'input-img');
    inputImage.setAttribute('id', `edit-tab${t}-section${s}-image${iM}`);
    inputImage.setAttribute('type', 'file');
    // inputImage.setAttribute('name', `tabs[${t - 1}][sections][${s - 1}][image][${iM - 1}]`);
    inputImage.setAttribute('name', `tabs[${t - 1}][sections][${s - 1}][image]`);
    inputImage.setAttribute('placeholder', 'Choose Image');
    inputImage.setAttribute('accept', '.jpg, .png, .jpeg');

    const draggableHandle = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    draggableHandle.classList.add('accordion-handle');
    draggableHandle.setAttribute('style', 'width: 20px; height: 20px; color: rgb(120,120,120); margin-right: 10px; opacity: 0.6;');
    draggableHandle.setAttribute('viewBox', '0 0 20 20');

    const draggableHandlePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    draggableHandlePath.setAttribute('fill-rule', 'evenodd');
    draggableHandlePath.setAttribute('d', 'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z');
    draggableHandlePath.setAttribute('clip-rule', 'evenodd');

    draggableHandle.appendChild(draggableHandlePath);

    div1.appendChild(draggableHandle);
    div1.appendChild(div2);
    div2.appendChild(labelImage);
    labelImage.appendChild(labelSpan);
    div2.appendChild(inputImage);
    document.querySelector(`#content-tab${t}-section${s}`).appendChild(div1);

    createSVG('trashCan', `tab${t}-section${s}-image-container${iM}`);
}

function createHead(t, s, h = 1) {
    increment('head');
    document.querySelector(`#add-head-button-tab${t}-section${s}`).setAttribute('onclick', `createHead(${t}, ${s}, ${h + 1})`);

    const div1 = document.createElement('div');
    div1.classList.add('d-flex', 'align-items-center', 'mb-1');
    div1.setAttribute('id', `tab${t}-section${s}-head-container${h}`);

    const labelHead = document.createElement('label');
    labelHead.classList.add('visually-hidden');
    labelHead.setAttribute('for', `edit-tab${t}-section${s}-head${h}`);

    const inputHead = document.createElement('input');
    inputHead.classList.add('form-control', 'border-0', 'head-text-size');
    inputHead.setAttribute('id', `edit-tab${t}-section${s}-head${h}`);
    inputHead.setAttribute('type', 'text');
    // inputHead.setAttribute('name', `tabs[${t - 1}][sections][${s - 1}][heading][${h - 1}]`);
    inputHead.setAttribute('name', `tabs[${t - 1}][sections][${s - 1}][heading]`);
    inputHead.setAttribute('placeholder', 'Heading');
    inputHead.setAttribute('style', 'font-weight:bold');

    const draggableHandle = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    draggableHandle.classList.add('accordion-handle');
    draggableHandle.setAttribute('style', 'width: 20px; height: 20px; color: rgb(120,120,120); opacity: 0.6;');
    draggableHandle.setAttribute('viewBox', '0 0 20 20');

    const draggableHandlePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    draggableHandlePath.setAttribute('fill-rule', 'evenodd');
    draggableHandlePath.setAttribute('d', 'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z');
    draggableHandlePath.setAttribute('clip-rule', 'evenodd');

    draggableHandle.appendChild(draggableHandlePath);

    div1.appendChild(draggableHandle);
    div1.appendChild(labelHead);
    div1.appendChild(inputHead);
    document.querySelector(`#content-tab${t}-section${s}`).appendChild(div1);

    createSVG('trashCan', `tab${t}-section${s}-head-container${h}`);
}

function createSubhead(t, s, sH = 1) {
    increment('subhead');
    document.querySelector(`#add-subhead-button-tab${t}-section${s}`).setAttribute('onclick', `createSubhead(${t}, ${s}, ${sH + 1})`);

    const div1 = document.createElement('div');
    div1.classList.add('d-flex', 'align-items-center', 'mb-4');
    div1.setAttribute('id', `tab${t}-section${s}-subhead-container${sH}`);

    const labelSubhead = document.createElement('label');
    labelSubhead.classList.add('visually-hidden');
    labelSubhead.setAttribute('for', `edit-tab${t}-section${s}-subhead${sH}`);

    const inputSubhead = document.createElement('input');
    inputSubhead.classList.add('form-control', 'border-0');
    inputSubhead.setAttribute('id', `edit-tab${t}-section${s}-subhead${sH}`);
    inputSubhead.setAttribute('type', 'text');
    // inputSubhead.setAttribute('name', `tabs[${t - 1}][sections][${s - 1}][subheading][${sH - 1}]`);
    inputSubhead.setAttribute('name', `tabs[${t - 1}][sections][${s - 1}][subheading]`);
    inputSubhead.setAttribute('placeholder', 'Subheading');
    inputSubhead.setAttribute('style', 'font-weight:bold');

    const draggableHandle = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    draggableHandle.classList.add('accordion-handle');
    draggableHandle.setAttribute('style', 'width: 20px; height: 20px; color: rgb(120,120,120); opacity: 0.6;');
    draggableHandle.setAttribute('viewBox', '0 0 20 20');

    const draggableHandlePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    draggableHandlePath.setAttribute('fill-rule', 'evenodd');
    draggableHandlePath.setAttribute('d', 'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z');
    draggableHandlePath.setAttribute('clip-rule', 'evenodd');

    draggableHandle.appendChild(draggableHandlePath);

    div1.appendChild(draggableHandle);
    div1.appendChild(labelSubhead);
    div1.appendChild(inputSubhead);
    document.querySelector(`#content-tab${t}-section${s}`).appendChild(div1);

    createSVG('trashCan', `tab${t}-section${s}-subhead-container${sH}`);
}

function createInformation(t, s, iN = 1) {
    increment('information');
    document.querySelector(`#add-information-button-tab${t}-section${s}`).setAttribute('onclick', `createInformation(${t}, ${s}, ${iN + 1})`);

    const div1 = document.createElement('div');
    div1.classList.add('d-flex', 'align-items-center', 'mb-3');
    div1.setAttribute('id', `tab${t}-section${s}-information-container${iN}`);

    const labelInformation = document.createElement('label');
    labelInformation.classList.add('visually-hidden');
    labelInformation.setAttribute('for', `edit-tab${t}-section${s}-information${iN}`);

    const inputInformation = document.createElement('textarea');
    inputInformation.classList.add('form-control', 'form-control-sm', 'border-0', 'autoExpand');
    inputInformation.setAttribute('id', `edit-tab${t}-section${s}-information${iN}`);
    inputInformation.setAttribute('type', 'text');
    // inputInformation.setAttribute('name', `tabs[${t - 1}][sections][${s - 1}][information][${iN - 1}]`);
    inputInformation.setAttribute('name', `tabs[${t - 1}][sections][${s - 1}][information]`);
    inputInformation.setAttribute('placeholder', 'This would be good place to add a description.');
    inputInformation.setAttribute('rows', '5');
    inputInformation.setAttribute('data-min-rows', '5');

    const draggableHandle = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    draggableHandle.classList.add('accordion-handle');
    draggableHandle.setAttribute('style', 'width: 20px; height: 20px; color: rgb(120,120,120); opacity: 0.6;');
    draggableHandle.setAttribute('viewBox', '0 0 20 20');

    const draggableHandlePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    draggableHandlePath.setAttribute('fill-rule', 'evenodd');
    draggableHandlePath.setAttribute('d', 'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z');
    draggableHandlePath.setAttribute('clip-rule', 'evenodd');

    draggableHandle.appendChild(draggableHandlePath);

    div1.appendChild(draggableHandle);
    div1.appendChild(labelInformation);
    div1.appendChild(inputInformation);
    document.querySelector(`#content-tab${t}-section${s}`).appendChild(div1);

    createSVG('trashCan', `tab${t}-section${s}-information-container${iN}`);
}

function createButton(t, s, b = 1) {
    increment('button');
    document.querySelector(`#add-button-button-tab${t}-section${s}`).setAttribute('onclick', `createButton(${t}, ${s}, ${b + 1})`);

    const div1 = document.createElement('div');
    div1.classList.add('d-flex', 'align-items-center', 'mb-2', 'ms-3');
    div1.setAttribute('id', `tab${t}-section${s}-button-container${b}`);

    const div2 = document.createElement('div');
    div2.classList.add('flex-grow-1', 'input-group', 'border', 'border-dark', 'rounded', 'p-2');

    const div3 = document.createElement('div');
    div3.classList.add('flex-grow-0');

    const labelText = document.createElement('label');
    labelText.classList.add('visually-hidden');
    labelText.setAttribute('for', `edit-tab${t}-section${s}-buttonText${b}`);

    const inputText = document.createElement('input');
    inputText.classList.add('form-control', 'form-control-sm', 'border-0');
    inputText.setAttribute('id', `edit-tab${t}-section${s}-buttonText${b}`);
    inputText.setAttribute('type', 'text');
    inputText.setAttribute('name', `tabs[${t - 1}][sections][${s - 1}][buttons][${b - 1}][text]`);
    inputText.setAttribute('placeholder', 'Button Name');

    const div4 = document.createElement('div');
    div4.classList.add('flex-grow-1');

    const labelURL = document.createElement('label');
    labelURL.classList.add('visually-hidden');
    labelURL.setAttribute('for', `edit-tab${t}-section${s}-buttonURL${b}`);

    const inputURL = document.createElement('input');
    inputURL.classList.add('form-control', 'form-control-sm', 'border-0');
    inputURL.setAttribute('id', `edit-tab${t}-section${s}-buttonURL${b}`);
    inputURL.setAttribute('type', 'text');
    inputURL.setAttribute('name', `tabs[${t - 1}][sections][${s - 1}][buttons][${b - 1}][url]`);
    inputURL.setAttribute('placeholder', 'url');

    const draggableHandle = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    draggableHandle.classList.add('accordion-handle');
    draggableHandle.setAttribute('style', 'width: 20px; height: 20px; color: rgb(120,120,120); margin-left: -16px; margin-right: 10px; opacity: 0.6;');
    draggableHandle.setAttribute('viewBox', '0 0 20 20');

    const draggableHandlePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    draggableHandlePath.setAttribute('fill-rule', 'evenodd');
    draggableHandlePath.setAttribute('d', 'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z');
    draggableHandlePath.setAttribute('clip-rule', 'evenodd');

    draggableHandle.appendChild(draggableHandlePath);

    div1.appendChild(draggableHandle);
    div1.appendChild(div2);
    div2.appendChild(div3);
    div3.appendChild(labelText);
    div3.appendChild(inputText);
    div2.appendChild(div4);
    div4.appendChild(labelURL);
    div4.appendChild(inputURL);
    document.querySelector(`#content-tab${t}-section${s}`).appendChild(div1);

    createSVG('trashCan', `tab${t}-section${s}-button-container${b}`);
};


/* 
WHAT THE ABOVE CODE CREATES
<div class="accordion-item" id="accordion-item1">
    <h2 class="accordion-header" id="heading1"><button class="accordion-button" id="button1" type="button"
            data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1"><input
                class="form-control form-control-lg me-3 border-0" id="edit-title1" type="text" name="tab[title1]"
                placeholder="Title 1"></button></h2>
    <div class="accordion-collapse collapse show" id="collapse1" aria-labelledby="heading1"
        data-bs-parent="#accordionExample" style="">
        <div id="sections-tab1">
            <div class="accordion-body mb-2" id="accordion-body-tab1-section1">
                <div id="content-tab1-section1">
                    <h6 class="mb-3 text-muted text-center">Section 1</h6>
                    <div id="tab1-section1-image-container1">
                        <input class="form-control form-control-sm mb-3 border-0" id="edit-tab1-section1-image1" type="text" name="tab[image111]" placeholder="Choose Image">
                    </div>
                    <h2 id="tab1-section1-head-container1">
                        <input class="form-control mb-3 border-0" id="edit-tab1-section1-head1" type="text" name="tab[head111]" placeholder="Main Heading">
                    </h2>
                    <h3 id="tab1-section1-subhead-container1"><input class="form-control form-control-sm mb-3 border-0" id="edit-tab1-section1-subhead1" type="text" name="tab[subhead111]" placeholder="Sub Heading">
                    </h3>
                    <p id="tab1-section1-information-container1">
                        <textarea class="form-control form-control-sm mb-3 border-0" id="edit-tab1-section1-information1" type="text" name="tab[information111]" placeholder="This would be good place to add a description."></textarea>
                    </p>
                    <div class="row border border-dark rounded mb-2 mx-3">
                        <div class="d-flex my-2">
                            <div class="flex-grow-0">
                                <input class="form-control form-control-sm border-0" id="edit-tab1-section1-buttonText1" type="text" name="tab[buttonText111]" placeholder="Button Name">
                            </div>
                            <div class="flex-grow-1">
                                <input class="form-control form-control-sm border-0 border-start border border-1 border-dark" id="edit-tab1-section1-buttonURL1" type="text" name="tab[buttonURL111]" placeholder="url">
                            </div>
                        </div>
                    </div>
                </div>
                <div id="#add-element-buttons-container-tab1-section1">
                    <a class="btn btn-link btn-sm" id="add-image-button-tab1-section1" onclick="createImage(1, 1, 2)">+Img</a>
                    <a class="btn btn-link btn-sm" id="add-head-button-tab1-section1" onclick="createHead(1, 1, 2)">+Head</a>
                    <a class="btn btn-link btn-sm" id="add-subhead-button-tab1-section1" onclick="createSubhead(1, 1, 2)">+Subhead</a>
                    <a class="btn btn-link btn-sm" id="add-information-button-tab1-section1" onclick="createInformation(1, 1, 2)">+Info</a>
                    <a class="btn btn-link btn-sm" id="add-button-button-tab1-section1" onclick="createButton(1, 1, 2)">+Button</a>
                </div>
            </div>
        </div>
        <div class="row mx-3 my-2" id="add-section-button-container-tab1">
            <a class="btn btn-outline-dark btn-sm text-muted border border-light" id="add-section-button-tab1" onclick="createSectionPartTwo(1, 2)">Add Section</a>
        </div>
    </div>
</div>
*/


function createSVG(iconType, id) {
    if (iconType === 'trashCan') {
        const div3 = document.createElement('div');
        div3.classList.add('delete-element-icon', 'text-muted', 'ms-2');
        div3.setAttribute('onclick', `removeElement('${id}')`);

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '16');
        svg.setAttribute('height', '16');
        svg.setAttribute('fill', 'currentColor');
        svg.classList.add('bi', 'bi-trash3');
        svg.setAttribute('viewBox', '0 0 16 16');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z');

        div3.appendChild(svg);
        svg.appendChild(path);

        document.querySelector(`#${id}`).appendChild(div3);

    }
}