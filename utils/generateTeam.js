// need to ask the user to input details for a team member
// need to loop until they are done inputting team members
// for each team member a new team member card would need to be created

function individualCardGenerator(data) {
  let card = ``;
  console.log(data);
  data.forEach((employee) => {
    card += `<div class="card shadow rounded">
    <div class="card-body bg-info text-white">
    <h5 class="card-title">${employee.getName()}</h5>
    <p class="card-text">${getEmployeeIcon(employee)}${employee.getRole()}</p>
    </div>
    <div class="details bg-light rounded">
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${employee.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
    ${individualDataGenerator(employee)}
    </ul>
    </div>
    </div>`;
  });
  return card;
}

function getEmployeeIcon(employee) {
  if (employee.getRole() === "Engineer") {
    return `<i class="fas fa-glasses mr-2"></i>`;
  } else if (employee.getRole() === "Intern") {
    return `<i class="fas fa-user-graduate mr-2"></i>`;
  } else {
    return `<i class="fas fa-mug-hot mr-2"></i>`;
  }
}

function individualDataGenerator(employee) {
  if (employee.getRole() === "Engineer") {
    return `<li class="list-group-item">GitHub: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></li>`;
  } else if (employee.getRole() === "Intern") {
    return `<li class="list-group-item">School: ${employee.getSchool()}</li>`;
  }
  return `<li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>`;
}

function generateTeam(data) {
  const overallHtml = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="style.css" />
      <title>Team Generated</title>
    </head>
    <body>
      <header>
        <nav class="navbar navbar-light bg-secondary text-white d-flex justify-content-center">
          <h1>My Team</h1>
        </nav>
      </header>
  
      <main class="container-fluid container">
        <div class="row d-flex justify-content-around">
          ${individualCardGenerator(data)}
        </div>
      </main>
      <footer></footer>
    </body>
    
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js"
      integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"
      integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
      crossorigin="anonymous"
    ></script>
  </html>`;

  return overallHtml;
}

module.exports = generateTeam;
