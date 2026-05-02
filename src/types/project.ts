export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl?: string;
  githubUrl?: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ProjectInput = {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};
