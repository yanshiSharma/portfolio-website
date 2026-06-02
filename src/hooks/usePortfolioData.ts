
import { useState } from 'react';
import { PROJECTS, SKILLS, SKILLS_CATEGORIES, TIMELINE, ROADMAP, PHILOSOPHY, BLOG_POSTS, PROFILE } from '../data/portfolio';

interface UseCollectionDataResult<T> {
  data: T[];
  loading: boolean;
  isFallback: boolean;
}

function useCollectionData<T>(fallbackData: T[]): UseCollectionDataResult<T> {
  const [data] = useState<T[]>(fallbackData);
  return { data, loading: false, isFallback: false };
}

export const useProjects = () => useCollectionData(PROJECTS);
export const useSkills = () => useCollectionData(SKILLS);
export const useSkillCategories = () => useCollectionData(SKILLS_CATEGORIES);
export const useTimeline = () => useCollectionData(TIMELINE);
export const useRoadmap = () => useCollectionData(ROADMAP);
export const usePhilosophy = () => useCollectionData(PHILOSOPHY);
export const useBlogPosts = () => useCollectionData(BLOG_POSTS);

export const useProfile = () => {
  const [profile] = useState(PROFILE);
  return { profile, loading: false };
};
