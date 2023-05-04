// create manager profile
const createManager = function (manager) {
    return `
    <div class='col-4 mt-4>
        <div class='card h-100 border-primary'>
            <div class='card-header bg-primary'>
                <h3 class='name'>${manager.name}</h3>
                <h4 class='role'><i class='fa-solid fa-users' style='color: #ffffff;'></i>Manager</h4>
            </div>

            <div class='card-body text-primary'>
                <p class='id>ID: ${manager.id}</p>
                <p class='email'>Email: <a href='mailto:${manager.email}'>${manager.email}</a></p>
                <p class='office-number'>Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

// create Engineer profile
const createEngineer = function (engineer) {
    return `
    <div class='col-4 mt-4>
        <div class='card h-100 border-primary'>
            <div class='card-header bg-primary'>
                <h3 class='name'>${engineer.name}</h3>
                <h4 class='role'><i class='fa-solid fa-user-gear' style='color: #ffffff;'></i>Engineer</h4>
            </div>

            <div class='card-body text-primary'>
                <p class='id>ID: ${engineer.id}</p>
                <p class='email'>Email: <a href='mailto:${engineer.email}'>${engineer.email}</a></p>
                <p class='github'>GitHub: ${engineer.github}</p>
            </div>
        </div>
    </div>
    `;
}

// create Intern profile
const createIntern = function (intern) {
    return `
    <div class='col-4 mt-4>
        <div class='card h-100 border-primary'>
            <div class='card-header bg-primary'>
                <h3 class='name'>${intern.name}</h3>
                <h4 class='role'><i class='fa-solid fa-user-graduate' style='color: #ffffff;'></i>Intern</h4>
            </div>

            <div class='card-body text-primary'>
                <p class='id>ID: ${intern.id}</p>
                <p class='email'>Email: <a href='mailto:${intern.email}'>${intern.email}</a></p>
                <p class='school'>School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
}

// push array object to page
generateHTML = (data) => {
    pageArray = [];

    for (let i=0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = createManager(employee);
            pageArray.push(managerCard);
        } else if (role === 'Engineer') {
            const engineerCard = createEngineer(employee);
            pageArray.push(engineerCard);
        } else if (role === 'Intern') {
            const internCard = createIntern(employee);
            pageArray.push(internCard);
        }
    }

    // join data
    const employeeCards = pageArray.join('')
    const createTeam = createTeamPage(employeeCards);
    return createTeam();
}

// create team HTML page
const createTeamPage = function (employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en" data-bs-theme="light">
    <head>
        <meta charset='UTF-8'>
        <link rel='stylesheet' href='https://cdn.jsdeliver.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'>
        <link rel='stylesheet' href='style.css' />
        <script src='https://kit.fontawesome.com/57383aac0c.js' crossorigin='anonymous'></script>
    </head>

    <body>
        <header>
            <nav class='navbar bg-primary' id='navbar'>
                <span class='navbar-brand mb-0 h1 w-100 text-center' id='navbar-text'><i class="fa-regular fa-cloud-moon" style="color: #ffffff;"></i> The Dream Team!</span>
            </nav>
        <header>

        <main>
            <div class='container'>
                <div class='row justify-content-center' id='employee-cards'>
                    
                    ${employeeCards}

                </div>
            </div>
        </main>

        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js' integrity='sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==' crossorigin='anonymous' referrerpolicy='no-referrer'></script>
    </body>

    </html>
    `;
}

// export to index.html
module.exports = generateHTML;