// Employee and Admin Data

localStorage.clear();
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    password: "123",
    email: "employee1@example.com",
    taskCount: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Complete report",
        taskDescription: "Finish the quarterly financial report.",
        category: "Finance",
        taskDate: "2025-05-12",
        active: true,
        new: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Attend meeting",
        taskDescription: "Join the team meeting at 10 AM.",
        category: "Management",
        taskDate: "2025-05-12",
        active: false,
        new: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Review code",
        taskDescription: "Check the new codebase for errors.",
        category: "Development",
        taskDate: "2025-05-13",
        active: true,
        new: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    password: "123",
    email: "employee2@example.com",
    taskCount: {
      active: 2,
      new: 2,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Prepare presentation",
        taskDescription: "Draft slides for the upcoming client meeting.",
        category: "Marketing",
        taskDate: "2025-05-14",
        active: true,
        new: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Update software",
        taskDescription: "Install the latest updates on the system.",
        category: "IT",
        taskDate: "2025-05-12",
        active: false,
        new: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Organize files",
        taskDescription: "Sort all client documents into folders.",
        category: "Administration",
        taskDate: "2025-05-13",
        active: true,
        new: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Send emails",
        taskDescription: "Follow up with potential clients.",
        category: "Sales",
        taskDate: "2025-05-15",
        active: false,
        new: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Rohit",
    password: "123",
    email: "employee3@example.com",
    taskCount: {
      active: 3,
      new: 2,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Design logo",
        taskDescription: "Create a new logo for the rebranding project.",
        category: "Design",
        taskDate: "2025-05-16",
        active: true,
        new: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Test application",
        taskDescription: "Perform QA testing on the new app release.",
        category: "Quality Assurance",
        taskDate: "2025-05-12",
        active: false,
        new: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Write documentation",
        taskDescription: "Document the API usage and integration details.",
        category: "Technical Writing",
        taskDate: "2025-05-14",
        active: true,
        new: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix bugs",
        taskDescription: "Resolve critical issues reported in production.",
        category: "Development",
        taskDate: "2025-05-13",
        active: false,
        new: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Update database",
        taskDescription: "Implement schema changes for the new module.",
        category: "Database Administration",
        taskDate: "2025-05-12",
        active: true,
        new: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Meera",
    password: "123",
    email: "employee4@example.com",
    taskCount: {
      active: 2,
      new: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Plan event",
        taskDescription: "Organize the annual company retreat.",
        category: "Event Management",
        taskDate: "2025-05-20",
        active: true,
        new: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Review budget",
        taskDescription: "Analyze the budget for Q3 expenses.",
        category: "Finance",
        taskDate: "2025-05-12",
        active: false,
        new: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Coordinate with team",
        taskDescription: "Ensure all project members are aligned.",
        category: "Project Management",
        taskDate: "2025-05-13",
        active: true,
        new: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Sanjay",
    password: "123",
    email: "employee5@example.com",
    taskCount: {
      active: 4,
      new: 3,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Analyze data",
        taskDescription: "Run analytics on the customer behavior data.",
        category: "Data Science",
        taskDate: "2025-05-18",
        active: true,
        new: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Write report",
        taskDescription: "Summarize findings from the latest survey.",
        category: "Research",
        taskDate: "2025-05-12",
        active: false,
        new: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Prepare summary",
        taskDescription: "Create a summary for the stakeholders.",
        category: "Management",
        taskDate: "2025-05-14",
        active: true,
        new: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Schedule meetings",
        taskDescription: "Set up appointments with the board.",
        category: "Administration",
        taskDate: "2025-05-15",
        active: false,
        new: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Create diagrams",
        taskDescription: "Design flowcharts for the new process.",
        category: "Design",
        taskDate: "2025-05-17",
        active: true,
        new: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Backup files",
        taskDescription: "Ensure all documents are safely stored.",
        category: "IT",
        taskDate: "2025-05-12",
        active: false,
        new: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Clean workspace",
        taskDescription: "Organize desk and digital workspace.",
        category: "Maintenance",
        taskDate: "2025-05-13",
        active: true,
        new: true,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    password: "123",
    email: "admin@example.com"
  }
];

// Function to set data in localStorage
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

// Function to get and log employee data from localStorage
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
const admin=JSON.parse(localStorage.getItem("admin"));
// console.log("Employees:", employees);
// console.log("Admin:", admin);

  // const data =localStorage.getItem('employees')
  // console.log(JSON.parse(data));
  return{employees, admin}
};
