let updateTable = () => {
    let timeNow = getTime();
    document.getElementById('hoursCell').innerText = timeNow.hours;
    document.getElementById('minutesCell').innerText = timeNow.minutes;
    document.getElementById('secondsCell').innerText = timeNow.seconds;
}

// Функція для форматування часу
let formatTime = (timeObj) => {
    if (timeObj.hours < 10) { 
        timeObj.hours = `0${timeObj.hours}`;
    }
    if (timeObj.minutes < 10) { 
        timeObj.minutes = `0${timeObj.minutes}`;
    }
    if (timeObj.seconds < 10) { 
        timeObj.seconds = `0${timeObj.seconds}`;
    }
    return timeObj;
}

// Функція для отримання поточного часу
let getTime = () => {
    let timeNow = new Date();
    timeNow = {
        hours: timeNow.getHours(),
        minutes: timeNow.getMinutes(),
        seconds: timeNow.getSeconds()
    };
    return formatTime(timeNow);
}

// Оновлення таблиці з інтервалом 1 секунда
setInterval(updateTable, 1000);

// =========================================

const changeTheme = () => {
    let timeElement = document.getElementById("myTime");
    if (timeElement.style.color == "grey") {
      timeElement.style.color = "white";
      timeElement.style.backgroundColor = "grey";
    } else {
      timeElement.style.color = "grey";
      timeElement.style.backgroundColor = "black";
    }
  }
// =========================================

document.getElementById('note-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const noteInput = document.getElementById('note-input');
    const colorInput = document.getElementById('color-input');

    const noteText = noteInput.value;
    const noteColor = colorInput.value;

    if (noteText !== '') {
        createNoteElement(noteText, noteColor);
        noteInput.value = '';
        colorInput.value = '';
        noteInput.focus();
    }
});

function createNoteElement(text, color) {
    const noteList = document.getElementById('note-list');

    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    noteDiv.style.backgroundColor = color;

    const noteText = document.createElement('p');
    noteText.textContent = text;
    noteDiv.appendChild(noteText);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Видалити';
    deleteBtn.addEventListener('click', function() {
        noteDiv.remove();
    });
    noteDiv.appendChild(deleteBtn);

    noteList.appendChild(noteDiv);
}
