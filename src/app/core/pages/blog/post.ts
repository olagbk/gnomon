export interface Tag {
  name: string;
  count: number;
}

export class Post {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  tags: Tag[];
  constructor(
    public title: string,
    public body?: string
  ) {}
}
