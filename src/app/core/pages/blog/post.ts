export interface Tag {
  name: string;
  count: number;
}

// export interface Post {
//   id: string;
//   title: string;
//   body?: string;
//   createdAt: string;
//   updatedAt: string;
//   tags: Tag[];
// }
export class Post {
  id: string;
  createdAt: string;
  updatedAt: string;
  tags: Tag[];
  constructor(
    public title: string,
    public body?: string
  ) {  }
}
