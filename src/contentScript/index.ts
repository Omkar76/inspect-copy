const makeGrid = () => {
  const grid = document.createElement("div");
  grid.id = "pick-grid";
  grid.style.position = "fixed";
  grid.style.display = "block";
  grid.style.border = "1px solid blue";
  grid.style.backgroundColor = "rgba(0, 0, 255, 0.2)";
  grid.style.pointerEvents = "none";
  grid.style.zIndex = "2147483647"
  return grid;
}

const grid = makeGrid();

let elem: Element;
let isPickerOn = false;

const onMouseMove = (e: MouseEvent) => {
  const target = e.target as Element;
  elem = target;
  const rect = target.getBoundingClientRect();
  grid.style.top = `${rect.top}px`;
  grid.style.left = `${rect.left}px`;
  grid.style.width = `${rect.width}px`;
  grid.style.height = `${rect.height}px`;
}

const enablePicker = () => {
  isPickerOn = true;
  document.body.appendChild(grid);
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener('click', elementClicked);
}

const disablePicker = () => {
  isPickerOn = false;
  document.body.removeChild(grid);
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener('click', elementClicked);
}

let previousKeyRecord = {key: "", time: 0};
const keyTimeout = 500;

document.addEventListener('keydown', (e) => {
  console.log(e.key)
  if(isPickerOn && e.key == 'Escape') {
    disablePicker();
  }
});

document.addEventListener('keypress', (e) => {
  console.log(e.key, previousKeyRecord.key)

  if(isPickerOn){
    return;
  }

  const now = Date.now();
  if(e.key == 'i') {
    if(previousKeyRecord.key === 'i' && now - previousKeyRecord.time < keyTimeout) {
      enablePicker();
    }
  }
  previousKeyRecord = {key: e.key, time: now};
});

const elementClicked = (e: MouseEvent) => {
  console.log("click", e.target);
  if(!isPickerOn) {
    return;
  }

  disablePicker();
  navigator.clipboard.writeText(elem.textContent!).then(() => {
    console.log("copied");
  });
  document.removeEventListener('click', elementClicked);
}