//  create the manager role card
const generateManager = function (manager) {
    // builds and returns card/ second half is card body
    return `
    <div className="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                    <h4>Manager</h4><i class-"material-icons">content_paste</i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>

        </div>
    </div>
    `;
}

// creates the engineer role card
const generateEngineer = function (engineer) {
    // builds and returns card for engineer/ second half is card body
    return `
    
    `
}

