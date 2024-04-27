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
    this.salary = randomSalary - (randomSalary * 0.075); 
};


Employee.prototype.render = function() {
    const employeeList = document.getElementById("employee-list");

    const employeeDiv = document.createElement("div");
    employeeDiv.className = "employee"; 

    const employeeInfo = `
        <img src="${this.imageUrl}" alt="${this.fullName}" class="employee-photo">
        <h3>${this.fullName}</h3>
        <p>Department: ${this.department}</p>
        <p>Level: ${this.level}</p>
        <p>Salary: $${this.salary.toFixed(2)}</p>
    `;

    employeeDiv.innerHTML = employeeInfo;
    employeeList.appendChild(employeeDiv);
};

const employees = [
    new Employee(1000, "Ghazi Samer", "Administration", "Senior"),
    new Employee(1001, "Lana Ali", "Finance", "Senior", ),
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
