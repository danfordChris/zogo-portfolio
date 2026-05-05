import { create } from 'zustand';

export interface ProjectImage {
  id: string;
  url: string;
  title?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  images: ProjectImage[];
  link?: string;
  category?: 'mobile' | 'web' | 'game' | ('mobile' | 'web' | 'game')[];
  tags?: string[];
  tech?: string[];
}

interface ProjectStore {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
  addProjectImage: (projectId: string, image: ProjectImage) => void;
  removeProjectImage: (projectId: string, imageId: string) => void;
  updateProjectImage: (projectId: string, imageId: string, image: Partial<ProjectImage>) => void;
  getProject: (projectId: string) => Project | undefined;
}

export const useProjectStore = create<ProjectStore>((set, get) => ({
  projects: [],

  setProjects: (projects) => set({ projects }),

  addProjectImage: (projectId, image) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === projectId
          ? { ...p, images: [...p.images, image] }
          : p
      ),
    })),

  removeProjectImage: (projectId, imageId) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === projectId
          ? { ...p, images: p.images.filter((img) => img.id !== imageId) }
          : p
      ),
    })),

  updateProjectImage: (projectId, imageId, updates) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === projectId
          ? {
              ...p,
              images: p.images.map((img) =>
                img.id === imageId ? { ...img, ...updates } : img
              ),
            }
          : p
      ),
    })),

  getProject: (projectId) => get().projects.find((p) => p.id === projectId),
}));
