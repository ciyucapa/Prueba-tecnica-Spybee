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
  } | null;

  assignees: {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
  }[];

  observers: {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
  }[];

  coordinates: {
    lat: number;
    lng: number;
  };

  locationDescription: string;

  dueDate: string | null;
  closingDate: string | null;

  media: {
    id: string;
    name: string;
    type: string;
    format: string;
    size: number;
    status: string;
    url: string;
  }[];

  tags: {
    id: string;
    name: string;
    color: string;
  }[];

  whatsappOwner: unknown | null;

  deleted: unknown | null;

  createdAt: string;
  updatedAt: string;
}