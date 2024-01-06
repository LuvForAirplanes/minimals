export interface PageInfo {
  readonly __typename: 'PageInfo';
  readonly hasNextPage: boolean;
  readonly endCursor: string | null;
}

export interface Connection<TNode = {}> {
  readonly pageInfo: PageInfo;
  readonly nodes: readonly TNode[] | null;
}
