// Define an array of projects (you can add more later)
const projects = [
  {
    title: "Simple To-Do List",
    description: "A basic to-do list app using JavaScript and local storage.",
    link: "https://github.com/DrewnoskiDev/todo-app",
  },
  {
    title: "Unit Converter",
    description: "A simple tool to convert miles to kilometers.",
    link: "https://github.com/DrewnoskiDev/unit-converter",
  },
];

// Function to display projects (optional - projects are now in HTML)
// This can be used to add additional projects dynamically if needed
function displayProjects() {
  const projectContainer = document.getElementById("projects-container");
  const noProjectsMessage = document.getElementById("no-projects-message");

  // Only run if no-projects-message exists (for backwards compatibility)
  if (noProjectsMessage) {
    if (projects.length > 0) {
      noProjectsMessage.style.display = "none";
    } else {
      noProjectsMessage.style.display = "block";
    }
  }

  // Only add projects if container is empty (projects are now in HTML)
  if (projectContainer && projectContainer.children.length === 0) {
    projects.forEach((project) => {
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
}

// Call the function (won't interfere with existing HTML projects)
displayProjects();
