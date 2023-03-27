let buut = document.getElementById("buut");
let textNoteBody = document.getElementById("textbody");

let displayelenmeonbody = getPrevArr();

displayelenmeonbody.forEach((e) => {
  let refreele = createEle(e.id, e.textValue);
  textNoteBody.insertBefore(refreele, buut);
});

console.log(displayelenmeonbody);

function createEle(idd, valuee) {
  let newElementtexarea = document.createElement("textarea");
  newElementtexarea.placeholder = "Empty Note";
  newElementtexarea.classList.add("addnewtex", "texaree");
  newElementtexarea.value = valuee;
  // newElementtexarea.innerText = valuee;

  newElementtexarea.addEventListener("dblclick", () => {
    let confimmesag = confirm("Are You Sure?");
    if (confimmesag == true) {
      deleteeleme(idd, newElementtexarea);
    }
  });

  newElementtexarea.addEventListener("input", () => {
    updaat(idd, newElementtexarea.value);
  });

  return newElementtexarea;
}

function deleteeleme(iddnedremove, elemdel) {
  let getallaelenemtfromstorage = getPrevArr().filter(
    (e) => e.id != iddnedremove
  );

  saveInLocStor(getallaelenemtfromstorage);
  textNoteBody.removeChild(elemdel);
}

function updaat(iddupsda, content) {
  let getallaelenemtfromstorage = getPrevArr();
  let spicifiele = getallaelenemtfromstorage.filter((e) => e.id == iddupsda)[0];

  spicifiele.textValue = content;
  saveInLocStor(getallaelenemtfromstorage);
}
function addnote() {
  let arrOfNots = getPrevArr();
  let neObj = {
    id: Math.round(Math.random() * 1000),
    textValue: "",
  };

  let elemaddtolocast = createEle(neObj.id, neObj.textValue);
  textNoteBody.insertBefore(elemaddtolocast, buut);
  arrOfNots.push(neObj);

  saveInLocStor(arrOfNots);
}

function saveInLocStor(arr) {
  localStorage.setItem("NoteApp", JSON.stringify(arr));
}

function getPrevArr() {
  return JSON.parse(localStorage.getItem("NoteApp") || "[]");
}

buut.addEventListener("click", addnote);
