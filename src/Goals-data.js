const goals = [
  {
    id: 1,
    title: "Learn React",
    steps: [
      {
        id: 1,
        title: "Complete React tutorial",
        done: true,
      },
      {
        id: 2,
        title: "Build a simple React app",
        done: true,
      },
      {
        id: 3,
        title: "Create reusable React components",
        done: true,
      },
      {
        id: 4,
        title: "Integrate React with an API",
        done: true,
      },
      {
        id: 5,
        title: "Implement React Router",
        done: true,
      },
    ],
    date: new Date("2023-01-01"),
  },
  {
    id: 2,
    title: "Learn TypeScript",
    steps: [
      {
        id: 1,
        title: "Read TypeScript documentation",
        done: true,
      },
      {
        id: 2,
        title: "Convert a JavaScript project to TypeScript",
        done: true,
      },
      {
        id: 3,
        title: "Define custom types and interfaces",
        done: true,
      },
      {
        id: 4,
        title: "Explore TypeScript decorators",
        done: false,
      },
    ],
    date: new Date("2023-02-15"),
  },
  {
    id: 3,
    title: "Learn GraphQL",
    steps: [
      {
        id: 1,
        title: "Study GraphQL fundamentals",
        done: true,
      },
      {
        id: 2,
        title: "Create a GraphQL server",
        done: false,
      },
      {
        id: 3,
        title: "Implement GraphQL subscriptions",
        done: false,
      },
      {
        id: 4,
        title: "Integrate GraphQL with a database",
        done: false,
      },
      {
        id: 5,
        title: "Optimize GraphQL queries",
        done: false,
      },
      {
        id: 6,
        title: "Explore GraphQL federation",
        done: false,
      },
    ],
    date: new Date("2023-03-10"),
  },
  {
    id: 4,
    title: "Learn AWS",
    steps: [
      {
        id: 1,
        title: "Set up an EC2 instance",
        done: true,
      },
      {
        id: 2,
        title: "Create an S3 bucket",
        done: true,
      },
      {
        id: 3,
        title: "Configure a Lambda function",
        done: false,
      },
      {
        id: 4,
        title: "Deploy a serverless application with API Gateway",
        done: false,
      },
      {
        id: 5,
        title: "Explore AWS DynamoDB",
        done: false,
      },
    ],
    date: new Date("2023-04-20"),
  },
];

export default goals;
