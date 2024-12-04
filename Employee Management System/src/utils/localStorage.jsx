const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "12345678",
    tasks: [
      {
        title: "Fix login bug",
        description: "Resolve the issue preventing users from logging in.",
        date: "2024-12-05",
        category: "Development",
        active: true,
        new: true,
        completed: false,
        failed: false,
      },
      {
        title: "Write meeting notes",
        description: "Summarize key points from the team meeting.",
        date: "2024-12-04",
        category: "Documentation",
        active: false,
        new: false,
        completed: true,
        failed: false,
      },
      {
        title: "Prepare sales report",
        description: "Create a report on last quarter's sales figures.",
        date: "2024-12-03",
        category: "Analytics",
        active: false,
        new: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "12345678",
    tasks: [
      {
        title: "Design homepage",
        description: "Create a wireframe for the new homepage.",
        date: "2024-12-06",
        category: "Design",
        active: true,
        new: true,
        completed: false,
        failed: false,
      },
      {
        title: "Organize workshop",
        description: "Plan the upcoming product workshop.",
        date: "2024-12-04",
        category: "Event Planning",
        active: false,
        new: false,
        completed: true,
        failed: false,
      },
      {
        title: "Optimize database",
        description: "Improve query performance for the user database.",
        date: "2024-12-02",
        category: "Database",
        active: false,
        new: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "12345678",
    tasks: [
      {
        title: "Test payment gateway",
        description: "Verify the payment gateway integration.",
        date: "2024-12-07",
        category: "QA",
        active: true,
        new: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update user manual",
        description: "Add instructions for the new feature.",
        date: "2024-12-05",
        category: "Documentation",
        active: false,
        new: false,
        completed: false,
        failed: true,
      },
      {
        title: "Check server logs",
        description: "Analyze logs for unusual activity.",
        date: "2024-12-04",
        category: "IT Support",
        active: false,
        new: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "12345678",
    tasks: [
      {
        title: "Conduct team survey",
        description: "Gather feedback on the current project.",
        date: "2024-12-08",
        category: "HR",
        active: true,
        new: true,
        completed: false,
        failed: false,
      },
      {
        title: "Debug mobile app",
        description: "Fix crashing issues on Android devices.",
        date: "2024-12-06",
        category: "Development",
        active: false,
        new: false,
        completed: false,
        failed: true,
      },
      {
        title: "Compile training material",
        description: "Prepare slides for the onboarding session.",
        date: "2024-12-03",
        category: "Training",
        active: false,
        new: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "12345678",
    tasks: [
      {
        title: "Revamp social media strategy",
        description: "Propose a new posting schedule and strategy.",
        date: "2024-12-09",
        category: "Marketing",
        active: true,
        new: true,
        completed: false,
        failed: false,
      },
      {
        title: "Check code quality",
        description: "Perform a code review for the recent changes.",
        date: "2024-12-07",
        category: "QA",
        active: false,
        new: false,
        completed: true,
        failed: false,
      },
      {
        title: "Document API endpoints",
        description: "Ensure all endpoints have proper documentation.",
        date: "2024-12-04",
        category: "Development",
        active: false,
        new: false,
        completed: false,
        failed: true,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "12345678",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = localStorage.getItem("employees");
  const admin = localStorage.getItem("admin");
  console.log(employees, admin);
};
