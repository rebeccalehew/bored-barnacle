// create manager profile
const createManager = (manager) => {
    return `
    <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
        <div class="card border-primary h-100" style="width: 18rem;">
            <div class="card-header bg-primary text-white">
                <h3 class="name">${manager.name}</h3>
                <h4 class="role">Manager</h4>
                <i class="fa-solid fa-users" style="color: #ffffff;"></i> 
            </div>

            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office-number">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

// create Engineer profile
const createEngineer = (engineer) => {
    return `
    <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
        <div class="card border-primary h-100" style="width: 18rem;">
            <div class="card-header bg-primary text-white">
                <h3 class="name">${engineer.name}</h3>
                <h4 class="role">Engineer</h4>
                <i class="fa-solid fa-user-gear" style="color: #ffffff;"></i> 
            </div>

            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">GitHub: ${engineer.github}</p>
            </div>
        </div>
    </div>
    `;
}

// create Intern profile
const createIntern = (intern) => {
    return `
    <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
        <div class="card border-primary h-100" style="width: 18rem;">
            <div class="card-header bg-primary text-white">
                <h3 class="name">${intern.name}</h3>
                <h4 class="role">Intern</h4>
                <i class="fa-solid fa-user-graduate" style="color: #ffffff;"></i> 
            </div>

            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
}

// push array object to page
createHTML = (data) => {
    pageArray = [];

    for (let i=0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === "Manager") {
            const managerCard = createManager(employee);
            pageArray.push(managerCard);
        } else if (role === "Engineer") {
            const engineerCard = createEngineer(employee);
            pageArray.push(engineerCard);
        } else if (role === "Intern") {
            const internCard = createIntern(employee);
            pageArray.push(internCard);
        }
    }

    // join data
    const employeeCards = pageArray.join("");

    // return to created page
    const createTeam = createTeamPage(employeeCards);
    return createTeam;
}

// create team HTML page
const createTeamPage = (employeeCards) => {
    return `
<!DOCTYPE html>
<html lang="en" data-bs-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src='https://kit.fontawesome.com/57383aac0c.js' crossorigin='anonymous'></script>
    <title>The Dream Team</title>
</head>

<body>
    <header class="row">
        <nav class="navbar bg-primary" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center text-white" id="navbar-text"><i class="fa-solid fa-cloud-moon" style="color: #ffffff;"></i> The Dream Team!</span>
        </nav>
    </header>

    <main>
        <div class="container-fluid">
            <div class="row justify-content-center" id="employee-cards">
                
                ${employeeCards}

            </div>
        </div>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
    <script src='https://kit.fontawesome.com/57383aac0c.js' crossorigin='anonymous'></script>
</body>

</html>
`;
}

// export to team.html
module.exports = createHTML;
