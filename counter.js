/* Counter */

var startTime = new Date().getTime(); // Get the current time when the page is loaded

setInterval(function() {
    var currentTime = new Date().getTime(); // Get the current time
    var timeSpent = (currentTime - startTime) / 1000; // Calculate the time spent in seconds
    if ((timeSpent % 60).toFixed(0) == 60) {
        document.getElementById("timeSpent").innerText = Math.ceil(timeSpent / 60).toFixed(0) + "m " + 0 + "s"; // Display the time spent
    } else {
        document.getElementById("timeSpent").innerText = Math.floor(timeSpent / 60).toFixed(0) + "m " + (timeSpent % 60).toFixed(0) + "s"; // Display the time spent in min + sec
    }
}, 1000); // Update the displayed time every 1 second

/* Search */

function search() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var articles = [
        { title: "Home", content: "Welcome to my portfolio website. This website contains my portfolio work across the years, starting at high school to the present.", icon: "images/icon-home-black.png" },
        { title: "Education", content: "This section showcases my achievements and projects during my college and high school years. It includes academic achievements, extracurricular activities, and more.", icon: "images/icon-school-black.png" },
        { title: "Resume", content: "This section contains my resume. It includes my contact information, education, study abroad experience, professional experiences, volunteering service, projects, skills, awards, and a downloadable version of the content.", icon: "images/icon-work-black.png" },
        { title: "Projects", content: "In this section, you can explore my passion projects and personal projects. It includes descriptions, technologies used, and outcomes of each project.", icon: "images/icon-project-black.png" },
        { title: "Spotlight", content: "In this section, you can see my most important project work, which is typically the most recent work that I've done.", icon: "images/icon-project-black.png" },
        { title: "Contact", content: "For more information on how to contact me, please see the Contact tab. You can reach out to me via email or phone for inquiries, collaborations, or any other questions.", icon: "images/icon-contact-black.png" }
    // Add more articles as needed
    ];
    var searchResults = [];

    articles.forEach(function(article) {
        if (article.title.toLowerCase().includes(input) || article.content.toLowerCase().includes(input)) {
        searchResults.push(article);
        }
    });

    displayResults(searchResults);
}

function displayResults(results) {
    var resultsContainer = document.getElementById("search-results-container");
    var existingResults = document.querySelector(".search-results");
    if (existingResults) {
        existingResults.remove();
    }

    var resultsDiv = document.createElement("div");
    resultsDiv.className = "search-results";

    var heading = document.createElement("h2");
    heading.textContent = "Search Results";
    resultsDiv.appendChild(heading);

    if (results.length === 0) {
        var noResults = document.createElement("p");
        noResults.textContent = "No results found.";
        resultsDiv.appendChild(noResults);
    } else {
        var ul = document.createElement("ul");
        results.forEach(function(result) {
            var li = document.createElement("li");
            var icon = document.createElement("img");
            icon.src = result.icon;
            icon.alt = result.title + " icon";
            icon.className = "result-icon";
            li.appendChild(icon);
            var title = document.createElement("h3");
            title.textContent = result.title;
            var content = document.createElement("p");
            content.textContent = result.content;
            li.appendChild(title);
            li.appendChild(content);
            ul.appendChild(li);
        });
        resultsDiv.appendChild(ul);
    }

    var clearButton = document.createElement("button");
    clearButton.textContent = "Close";
    clearButton.className = "search-button clear-button";
    clearButton.addEventListener("click", function() {
        resultsDiv.remove();
    });
    resultsDiv.appendChild(clearButton);

    resultsContainer.appendChild(resultsDiv);
}

document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        search(); // Call the search function when "Enter" key is pressed
    }
});

/* Socials */

document.getElementById("linkedin-icon").onclick = function() {
    window.open("https://www.linkedin.com/in/ani-t", "_blank");
};

document.getElementById("github-icon").onclick = function() {
    window.open("https://github.com/anitatikonda", "_blank");
};

document.getElementById("email-icon").onclick = function() {
    window.location.href = "mailto:anitatikonda@gmail.com";
};

/* Active nav bar section */

document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname === '/' ? '/index.html' : window.location.pathname;
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPage) {
            link.classList.add("active");
        }
    });
});