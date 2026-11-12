export interface Project {
  id: string;
  title: string;
  titleKa: string;
  description: string;
  descriptionKa: string;
  /** Real screenshot of the app. Projects without one get a generated cover. */
  image?: string;
  /** Cover gradient + label used when there is no screenshot. */
  cover?: { gradient: string; label: string };
  tags: string[];
  team?: boolean;
  liveUrl?: string;
  githubUrl?: string;
}
