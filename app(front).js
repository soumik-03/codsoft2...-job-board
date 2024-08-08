const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "ABC Corporation",
    location: "New York, NY",
    description: "Develop and maintain software applications"
  },
  {
    id: 2,
    title: "Marketing Manager",
    company: "XYZ Inc.",
    location: "Los Angeles, CA",
    description: "Lead marketing campaigns and teams"
  },
  {
    id: 3,
    title: "Data Analyst",
    company: " DEF Startups",
    location: "Chicago, IL",
    description: "Analyze and interpret data to inform business decisions"
  },
  {
    id: 4,
    title: "Web Development Engineer",
    company: "WebDev Inc.",
    location: "San Francisco, CA",
    description: "Design and develop scalable web applications"
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudOps Inc.",
    location: "Seattle, WA",
    description: "Develop and implement automated deployment scripts"
  },
  {
    id: 6,
    title: "UX/UI Designer",
    company: "DesignHub Inc.",
    location: "Boston, MA",
    description: "Create user-centered design solutions for web and mobile applications"
  },
  {
    id: 7,
    title: "Cybersecurity Specialist",
    company: "SecureNet Inc.",
    location: "Washington, D.C.",
    description: "Develop and implement security protocols to protect against cyber threats"
  },
  {
    id: 8,
    title: "Full Stack Developer",
    company: "FullStack Inc.",
    location: "Denver, CO",
    description: "Develop and maintain full-stack web applications using JavaScript and React"
  }
];

function renderJobs(jobs) {
  const jobList = document.querySelector("#search-results");
  jobList.innerHTML = "";
  jobs.forEach((job) => {
    const jobHTML = `
      <div class="job">
        <h3>${job.title}</h3>
        <p>${job.company} - ${job.location}</p>
        <p>${job.description}</p>
      </div>
    `;
    jobList.insertAdjacentHTML("beforeend", jobHTML);
  });
}

function handleSearch() {
  const searchInput = document.querySelector("#search-input");
  const searchButton = document.querySelector("#search-button");
  const searchResults = document.querySelector("#search-results");

  searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredJobs = jobs.filter((job) => {
      return (
        job.title.toLowerCase().includes(searchTerm) ||
        job.company.toLowerCase().includes(searchTerm) ||
        job.location.toLowerCase().includes(searchTerm) ||
        job.description.toLowerCase().includes(searchTerm)
      );
    });

    if (filteredJobs.length > 0) {
      renderJobs(filteredJobs);
    } else {
      searchResults.innerHTML = "No jobs found matching your search term.";
    }
  });
}

handleSearch();