interface Author {
  name: string;
  emailAddress: string;
  active: boolean;
  displayName: string;
  id: number;
  slug: string;
  type: string;
}

interface Parent {
  id: string;
  displayId: string;
}

interface Commit {
  id: string;
  displayId: string;
  author: Author;
  authorTimestamp: number;
  committer: Author;
  committerTimestamp: number;
  message: string;
  parents: Parent[];
}

interface ApiResponse {
  values: Commit[];
  size: number;
  isLastPage: boolean;
  start: number;
  limit: number;
  nextPageStart: number | null;
}

export { Author, Parent, Commit, ApiResponse };