export interface Incident {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  category: string;
  priority: string;

  tags: string;
  assignees: string;
  observers: string;

  location: {
    latitude: string;
    longitude: string;
    detail: string;
  };
}