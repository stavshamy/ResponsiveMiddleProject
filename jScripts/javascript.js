function toggleNav(){
    document.getElementById("main-nav").classList.toggle("hide-mobile");
}

function filterAnimals() {
    var dropdown = document.getElementById("filter-dropdown");
    var selectedCategory = dropdown.value;
    var animals = document.querySelectorAll('.animal');

    animals.forEach(function(animal) {
        var category = animal.classList[1]; 
        if (selectedCategory === 'all' || selectedCategory === category) {
            animal.style.display = 'block';
        } else {
            animal.style.display = 'none';
        }
    });
}



function performSearch() {
    var input, filter, ul, li, h3, i, txtValue, selectedFilter, liClass;
    var noResults = document.getElementById('noResults');
    var count = 0; 

    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('animal-list');
    li = ul.getElementsByTagName('li');
    selectedFilter = document.getElementById('filter-dropdown').value;

    for (i = 0; i < li.length; i++) {
        h3 = li[i].getElementsByTagName('h3')[0];
        txtValue = h3.textContent || h3.innerText;
        liClass = li[i].className;

        if (txtValue.toUpperCase().indexOf(filter) > -1 && (selectedFilter === "all" || liClass.includes(selectedFilter))) {
            li[i].style.display = "";
            count++; // עדכון המונה
        } else {
            li[i].style.display = "none";
        }
    }

    // הצגת הודעה אם לא נמצאו תוצאות
    noResults.style.display = count === 0 ? "" : "none";
}


// פונקציה לסינון החיות לפי הקטגוריה שנבחרה מה-Dropdown
function filterAnimals(selectedFilter) {
    var animals = document.querySelectorAll('.animal');

    animals.forEach(function(animal) {
        var category = animal.classList[1];
        if (selectedFilter === 'הכל' || selectedFilter === category) {
            animal.style.display = 'block';
        } else {
            animal.style.display = 'none';
        }
    });
}  

// פונקציה להגדרת הפילטר על פי בחירת המשתמש מה-Dropdown
function setFilter(filterValue) {
    document.getElementById("filter-dropdown").textContent = filterValue;
    filterAnimals(filterValue); // קריאה לפונקציה שמפעילה את הפילטור
}

function showModal(clickedButton) {
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    var fullText = document.getElementById('fullText');

    var title = clickedButton.parentNode.querySelector('h3').innerHTML;
    var text = clickedButton.previousElementSibling.innerHTML;

    fullText.innerHTML = '<h3>' + title + '</h3><p>' + text + '</p>';

    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}