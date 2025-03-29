// Define an array of projects (you can add more later)
const projects = [
    {
        title: "Simple To-Do List",
        description: "A basic to-do list app using JavaScript and local storage.",
        link: "https://github.com/DrewnoskiDev/todo-app" // Replace with your actual GitHub link
    },
    {
        title: "Unit Converter",
        description: "A simple tool to convert miles to kilometers.",
        link: "https://github.com/drewnoskidev/unit-converter" // Replace with your actual GitHub link
    }
];

// Function to display projects
function displayProjects() {
    const projectContainer = document.getElementById("projects-container");
    const noProjectsMessage = document.getElementById("no-projects-message"); // Get the message

    if (projects.length > 0) {
        noProjectsMessage.style.display = "none"; // Hide if projects exist
    } else {
        noProjectsMessage.style.display = "block"; // Show if no projects exist
    }

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View on GitHub</a>
        `;

        projectContainer.appendChild(projectDiv);
    });
}

// Call the function to display projects
displayProjects();


