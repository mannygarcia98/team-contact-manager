const generatePage = (name, role, id, email, office, github, school) => {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
    <title>Team Contact Manager</title>
  </head>
  <body>
    <header class="bg-danger py-4 mb-4">
      <h1 class="text-center text-white">Team Contact Manager</h1>
    </header>
    <main class="container">
      <div class="row justify-content-center gy-3 my-auto">
        <div class="card col-lg-4 col-md-6 border-0 h-100 mt-4">
          <div class="card-header bg-primary text-white">
            <p class="h4">${name}</p>
            <p class="h5"><i class="fa-solid fa-mug-hot pe-1"></i>${role}</p>
          </div>
          <div class="card-body bg-light">
            <ul class="list-group w-90 mx-auto">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
              <li class="list-group-item">Office number: ${office}</li>
            </ul>
          </div>
        </div>
        <div class="card col-lg-4 col-md-6 border-0 h-100 mt-4">
          <div class="card-header bg-primary text-white">
            <p class="h4">${name}</p>
            <p class="h5"><i class="fa-solid fa-glasses pe-1"></i>${role}</p>
          </div>
          <div class="card-body bg-light">
            <ul class="list-group w-90 mx-auto">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
              <li class="list-group-item">Github: <a href="github.com/${github}">${github}</a></li>
            </ul>
          </div>
        </div>
        <div class="card col-lg-4 col-md-6 border-0 h-100 mt-4">
          <div class="card-header bg-primary text-white">
            <p class="h4">${name}</p>
            <p class="h5"><i class="fa-solid fa-user-graduate pe-1"></i>${role}</p>
          </div>
          <div class="card-body bg-light">
            <ul class="list-group w-90 mx-auto">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
              <li class="list-group-item">School: ${school}</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </body>
</html>
`;
};

const generateManager = (name, id, email, office) => {
  return `
  <div class="card col-lg-4 col-md-6 border-0 h-100 mt-4">
    <div class="card-header bg-primary text-white">
      <p class="h4">${name}</p>
      <p class="h5"><i class="fa-solid fa-mug-hot pe-1"></i>Manager</p>
    </div>
    <div class="card-body bg-light">
      <ul class="list-group w-90 mx-auto">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
        <li class="list-group-item">Office number: ${office}</li>
      </ul>
    </div>
  </div>
  `;
};

const generateEngineer = (name, id, email, github) => {
  return `
  <div class="card col-lg-4 col-md-6 border-0 h-100 mt-4">
    <div class="card-header bg-primary text-white">
      <p class="h4">${name}</p>
      <p class="h5"><i class="fa-solid fa-glasses pe-1"></i>Engineer</p>
    </div>
    <div class="card-body bg-light">
      <ul class="list-group w-90 mx-auto">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
        <li class="list-group-item">Github: <a href="github.com/${github}">${github}</a></li>
      </ul>
    </div>
  </div>
  `;
};

const generateIntern = (name, id, email, school) => {
  return `
  <div class="card col-lg-4 col-md-6 border-0 h-100 mt-4">
    <div class="card-header bg-primary text-white">
      <p class="h4">${name}</p>
      <p class="h5"><i class="fa-solid fa-user-graduate pe-1"></i>Intern</p>
    </div>
    <div class="card-body bg-light">
      <ul class="list-group w-90 mx-auto">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
        <li class="list-group-item">School: ${school}</li>
      </ul>
    </div>
  </div>
  `;
};

// generateEmployees = (name, id, email, github, school) => {
//   employees = employeeArray.shift();

//   employees.forEach() {
//     this.employees.getRole();
//     if (role === 'Engineer') {
//       const engineerProfile = generateEngineer(employees)
//     } else {
//       const internProfile = generateIntern(employees)
//     }
//   }
// }

// export function to generate entire page
module.exports = (templateData) => {
  // destructure page data by section
  const { projects, about, ...header } = templateData;

  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
    <title>Team Contact Manager</title>
  </head>
  <body>
    <header class="bg-danger py-4 mb-4">
      <h1 class="text-center text-white">Team Contact Manager</h1>
    </header>
    <main class="container">
      <div class="row justify-content-center gy-3 my-auto">

        ${generateManager(manager)}

      </div>
    </main>
  </body>
</html>
`;
};
