export interface DashboardIncident {
  id: string;
  sequenceId: string;
  order: number;

  title: string;
  description: string;

  priority: string;
  status: string;
  approval: boolean;

  type: {
    id: string;
    key: string;
    name: string;
    name_en: string;
  };

  project: {
    id: string;
    name: string;
  };

  owner: {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
  };

  coordinates: {
    lat: number;
    lng: number;
  };

  locationDescription: string;

  dueDate: string | null;
  closingDate: string | null;

  createdAt: string;
  updatedAt: string;
}