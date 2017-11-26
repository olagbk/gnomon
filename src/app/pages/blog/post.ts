export interface Tag {
  name: string;
  count: number;
}

export interface Post {
  id: string;
  title: string;
  body?: string;
  cutoff?: boolean;
  createdAt: string;
  updatedAt: string;
  tags: Tag[];
}
