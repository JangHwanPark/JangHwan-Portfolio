type ProjectStatus = 'PLANNED' | 'INPROGRESS' | 'MVP' | 'COMPLETED' | 'MAINTENANCE' | 'CANCELLED' | 'ARCHIVED';
type ProjectType = 'TEAM' | 'PERSONAL';
type RoleType = 'Frontend Developer' | 'Backend Developer' | 'Fullstack Developer' | string;
type CollaborationTool = 'Jira' | 'Notion' | 'Slack' | 'Figma' | 'GitHub' | string;

interface ProjectsType {
  id: number;
  status: ProjectStatus;
  name: string;
  dateRange: string;
  description: string;
  projectType: ProjectType;
  role: readonly RoleType[];
  teamSize?: number;
  github: string;
  demo?: string;
  stack: readonly string[];
  features: readonly string[];
  challenges?: readonly string[];
  collaborationTools?: readonly CollaborationTool[];
  thumbnail?: string;
  paperLink?: string;
  awards?: readonly string[];
}
