import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const epicsAndTasks = [
  {
    id: 1,
    type: 'epic',
    title: 'User Authentication and Profile Management',
    tasks: [
      { id: 11, title: 'Implement login functionality' },
      { id: 12, title: 'Implement registration functionality' },
      { id: 13, title: 'Implement logout functionality' },
      { id: 14, title: 'Create user profile viewing functionality' },
      { id: 15, title: 'Implement user profile editing functionality' },
    ]
  },
  {
    id: 2,
    type: 'epic',
    title: 'Role Management',
    tasks: [
      { id: 21, title: 'Implement backend API for creating new roles' },
      { id: 22, title: 'Develop frontend for role creation' },
      { id: 23, title: 'Implement API for retrieving all roles' },
      { id: 24, title: 'Create frontend for displaying roles' },
      { id: 25, title: 'Implement role editing functionality' },
      { id: 26, title: 'Add role deletion feature' },
    ]
  },
  {
    id: 3,
    type: 'epic',
    title: 'Data Governance',
    tasks: [
      { id: 31, title: 'Implement data domain creation' },
      { id: 32, title: 'Develop functionality to view and list data domains' },
      { id: 33, title: 'Add ability to edit data domain details' },
      { id: 34, title: 'Implement data domain deletion' },
      { id: 35, title: 'Create and manage policies within data domains' },
    ]
  },
  {
    id: 4,
    type: 'epic',
    title: 'Task Automation',
    tasks: [
      { id: 41, title: 'Implement creation of automated workflows' },
      { id: 42, title: 'Develop editing functionality for existing workflows' },
      { id: 43, title: 'Add workflow deletion feature' },
      { id: 44, title: 'Implement approval process management within workflows' },
      { id: 45, title: 'Create monitoring system for tracking workflow progress' },
    ]
  },
  {
    id: 5,
    type: 'epic',
    title: 'Compliance Management',
    tasks: [
      { id: 51, title: 'Implement automated compliance documentation generation' },
      { id: 52, title: 'Create compliance dashboard with key metrics and alerts' },
      { id: 53, title: 'Develop compliance audit log feature' },
      { id: 54, title: 'Add compliance policy management functionality' },
    ]
  },
];

export default function Progress() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Project Progress</h1>
      <div className="space-y-6">
        {epicsAndTasks.map((epic) => (
          <Card key={epic.id}>
            <CardHeader>
              <CardTitle>{epic.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                {epic.tasks.map((task) => (
                  <li key={task.id}>{task.title}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}