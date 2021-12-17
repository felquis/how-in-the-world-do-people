import "./style.css";

const checkboxes = [a1, a2, a3, a4, a5];

function onFormCheckboxChange(event: any) {
  console.log(event);
  const checkedItens = checkboxes.filter((element) => element.checked);

  if (checkedItens.length >= 3) {
    let unchecked = false;

    checkedItens.forEach((element) => {
      if (event.target === element) {
      } else if (!unchecked) {
        unchecked = true;
        element.checked = false;
      }
    });
  }
}

declare global {
  var onFormCheckboxChange: any;
  var a1: any;
  var a2: any;
  var a3: any;
  var a4: any;
  var a5: any;
}

window.onFormCheckboxChange = onFormCheckboxChange;
