// Generate a unique four-digit employee ID
function generateEmployeeId() {
    return Math.floor(1000 + Math.random() * 9000); 
}

// Employee Constructor
function Employee(employeeId, fullName, department, level, imageUrl) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = 0;
}

// Prototype method to calculate salary based on level
Employee.prototype.calculateSalary = function() {
    let minSalary, maxSalary;

    switch (this.level) {
        case 'Senior':
            minSalary = 1500;
            maxSalary = 2000;
            break;
        case 'Mid-Senior':
            minSalary = 1000;
            maxSalary = 1500;
            break;
        case 'Junior':
            minSalary = 500;
            maxSalary = 1000;
            break;
        default:
            minSalary = 0;
            maxSalary = 0;
    }

    const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
    this.salary = randomSalary - (randomSalary * 0.075); // Calculate net salary with 7.5% tax
}

Employee.prototype.render = function() {
    const employeeCards = document.getElementById("employee-cards") || document.getElementById("employee-list");

    const employeeCard = document.createElement("div");
    employeeCard.className = "employee-card"; 

    const employeeInfo = `
        <img src="${this.imageUrl}" alt="${this.fullName}" class="employee-photo">
        <h3>${this.fullName}</h3>
        <p>Department: ${this.department}</p>
        <p>Level: ${this.level}</p>
        <p>Salary: $${this.salary.toFixed(2)}</p>
    `;

    employeeCard.innerHTML = employeeInfo;
    employeeCards.appendChild(employeeCard);
};

const employees = [
    new Employee(1000, "Ghazi Samer", "Administration", "Senior"),
    new Employee(1001, "Lana Ali", "Finance", "Senior"),
    new Employee(1002, "Tamara Ayoub", "Marketing", "Senior"),
    new Employee(1003, "Safi Walid", "Administration", "Mid-Senior"),
    new Employee(1004, "Omar Zaid", "Development", "Senior"),
    new Employee(1005, "Rana Saleh", "Development", "Junior"),
    new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior")
];


employees.forEach((employee) => {
    employee.calculateSalary();
    employee.render();
});


const employeeForm = document.getElementById("add-employee");
employeeForm.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const fullName = document.getElementById("full-name").value;
    const department = document.getElementById("department").value;
    const level = document.getElementById("level").value;
    const imageUrl = document.getElementById("image-url").value;

    
    const newEmployee = new Employee(generateEmployeeId(), fullName, department, level, imageUrl);

    
    newEmployee.calculateSalary();
    newEmployee.render();
});
