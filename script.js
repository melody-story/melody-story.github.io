// document.addEventListener("DOMContentLoaded", function() {
//     const calendar = document.getElementById('calendar');
//     const modal = document.getElementById('modal');
//     const modalDateElement = document.getElementById('modal-date');
//     const modalContentElement = document.getElementById('modal-content');
//     const span = document.getElementsByClassName("close")[0];
//     const currentMonthElement = document.getElementById('current-month');

//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth();
//     const date = today.getDate();
    
//     const monthNames = [
//          "01", "02", "03", "04", "05", "06", 
//         "07", "08", "09", "10", "11", "12"
//     ];

//     // Set the current month name
//     currentMonthElement.textContent = `${year}년 ${monthNames[month]}월`;
//     const directory = 'http://github.com/melody-story/TIL/blob/main/daily_log';
//     // Get the first day of the month
//     const firstDay = new Date(year, month, 1).getDay();
//     // Get the number of days in the month
//     const daysInMonth = new Date(year, month + 1, 0).getDate();

//     // Fill in the days
//     for (let i = 0; i < firstDay; i++) {
//         const emptyDay = document.createElement('div');
//         emptyDay.classList.add('day');
//         calendar.appendChild(emptyDay);
//     }

//     for (let i = 1; i <= daysInMonth; i++) {
//         const dayElement = document.createElement('div');
//         dayElement.classList.add('day');
//         if (i === date) {
//             dayElement.classList.add('today');
//         }
//         dayElement.textContent = i;
//         dayElement.addEventListener('click', function() {
//             modalDateElement.textContent = `Selected Date: ${year}-${month + 1}-${i}`;   
//             loadHTML(`${directory}/Y${year}${monthNames[month]}/${year}${monthNames[month]}${i<10 ?`0${i}` : i}.md`, modalContentElement);
//             modal.style.display = "block";
//         });
//         calendar.appendChild(dayElement);
//     }

//     // When the user clicks on <span> (x), close the modal
//     span.onclick = function() {
//         modal.style.display = "none";
//     }

//     // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }

//     function loadHTML(url, element) {
//         const xhr = new XMLHttpRequest();
//         xhr.onreadystatechange = function() {
//             if (xhr.readyState === XMLHttpRequest.DONE) {
//                 if (xhr.status === 200) {
//                     element.innerHTML = xhr.responseText;
//                 } else {
//                     element.innerHTML = "내용이 존재하지 않습니다";
//                 }
//             }
//         };
//         // xhr.onerror = function() {
//         //     element.innerHTML = "내용이 존재하지 않습니다.";
//         // };
//         xhr.open("GET", url, true);
//         xhr.send();
//     }
// });


document.addEventListener("DOMContentLoaded", function() {
    const calendar = document.getElementById('calendar');
    const modal = document.getElementById('modal');
    const modalDateElement = document.getElementById('modal-date');
    const modalContentElement = document.getElementById('modal-content');
    const span = document.getElementsByClassName("close")[0];
    const currentMonthElement = document.getElementById('current-month');

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();

    const monthNames = [
         "01", "02", "03", "04", "05", "06", 
        "07", "08", "09", "10", "11", "12"
    ];

    // Set the current month name
    currentMonthElement.textContent = `${year}년 ${monthNames[month]}월`;

    // Get the first day of the month
    const firstDay = new Date(year, month, 1).getDay();
    // Get the number of days in the month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Fill in the days
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('day');
        calendar.appendChild(emptyDay);
    }
    const directory = 'http://github.com/melody-story/TIL/blob/main/daily_log';
    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        if (i === date) {
            dayElement.classList.add('today');
        }
        dayElement.textContent = i;
        dayElement.addEventListener('click', function() {
            window.open(`${directory}/Y${year}${monthNames[month]}/${year}${monthNames[month]}${i<10 ?`0${i}` : i}.md`, '_blank');
        });
        calendar.appendChild(dayElement);
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
