// import { DocumentNode } from 'graphql';
// import { useQuery, ApolloError, ObservableQuery } from '@apollo/client';
// import { useRef, useState, ReactNode, useCallback, ReactElement, createElement } from 'react';

// import { GridRowProps } from '@mui/x-data-grid';
// import { styled, LinearProgress } from '@mui/material';

// import { QueryContext } from 'src/graphql/config';

// import { Connection } from '../../graphql/types/queryTypes';

// const LoadingTR = styled('tr')`
//   &:hover {
//     background-color: inherit !important;
//   }
// `;

// interface ConnectionDataInterface<T> {
//   // CountData is a child data
//   readonly data?:
//     | (Connection<T> & {
//         readonly count: number;
//       })
//     | null;
// }
// interface RawDataInterface<T> {
//   readonly data?: any;
//   /** Only a temp property to use the unused T to prevent copiler warnings. data should be using T, but isn't due to type issues. */
//   readonly showData?: T;
// }
// type DataInterface<T> = ConnectionDataInterface<T> | RawDataInterface<T>;

// type ShowSampleData = boolean | { always: boolean; whenNoData?: boolean };

// interface Options<TDataNode> {
//   /**
//    * Filter the data client side. DO NOT USE with paging! If you are using paging, you'll want the filtering done
//    * server side.
//    */
//   dataFilter?: (data: readonly TDataNode[]) => readonly TDataNode[];
//   queryContext?: QueryContext;
//   /**
//    * Allows generation of a composite id for each data item.
//    */
//   dataItemKey?: {
//     key: string;
//     idFactory: (data: TDataNode) => string;
//   };
//   rowRender?: (row: ReactElement<HTMLTableRowElement>, props: GridRowProps) => ReactNode;
// }

// function shouldSkipQuery(showSampleData: ShowSampleData): boolean {
//   if (showSampleData === true || showSampleData === false) {
//     return showSampleData;
//   }

//   return showSampleData.always;
// }

// function shouldShowSampleData(showSampleData: ShowSampleData, qtyData?: number): boolean {
//   if (showSampleData === true || showSampleData === false) {
//     return showSampleData;
//   }

//   if (showSampleData.always) {
//     return true;
//   }

//   if (!qtyData || qtyData === 0) {
//     return !!showSampleData.whenNoData;
//   }

//   return false;
// }

// function isConnection<TDataNode>(
//   data?: DataInterface<TDataNode>
// ): data is ConnectionDataInterface<TDataNode> {
//   return !!data?.data && 'nodes' in data.data;
// }
// function isConnectionData<TDataNode>(
//   data?: Connection<TDataNode> | readonly TDataNode[]
// ): data is Connection<TDataNode> {
//   return !!data && 'pageInfo' in data;
// }

// const MAX_PER_PAGE = 100;

// export function useInfiniteScrolling<
//   TData extends DataInterface<TDataNode>,
//   TDataNode,
//   TQueryVariables extends {
//     order?: any | null;
//     where?: any | null;
//     first?: number | null;
//     after?: string | null;
//   },
// >(
//   query: DocumentNode,
//   order: TQueryVariables['order'],
//   where: TQueryVariables['where'],
//   containerSize: { height: number; width: number },
//   rowHeight: number = 36,
//   queryVariables: TQueryVariables | null = null,
//   options?: Options<TDataNode>,
//   showSampleData: ShowSampleData = false,
//   sampleData: TDataNode[] = []
// ): Scrolling<TDataNode> {
//   // Base page size on the height of the UI, but with a max so that we don't die at the server.
//   const qtyPerPage = Math.min(Math.round((containerSize.height / rowHeight) * 4), MAX_PER_PAGE);

//   const skipQuery = shouldSkipQuery(showSampleData);

//   const { data, loading, fetchMore, subscribeToMore, refetch, error } = useQuery<
//     TData,
//     TQueryVariables
//   >(query, {
//     context: { hideErrors: true } as QueryContext,
//     variables: {
//       order,
//       where,
//       first: qtyPerPage,
//       ...queryVariables,
//     } as TQueryVariables,
//     skip: skipQuery,
//   });
//   const isCon = isConnection(data);

//   if (options?.dataFilter && isCon) {
//     throw new Error('You can not use the client side filter with paging!');
//   }

//   const queryData =
//     // eslint-disable-next-line no-nested-ternary
//     isCon && data?.data ? data.data.nodes ?? [] : !isCon && data?.data ? data.data : [];
//   const cursor =
//     isCon && data?.data
//       ? data.data.pageInfo
//       : {
//           endCursor: null,
//           hasNextPage: false,
//         };
//   const fetchMoreInProgress = useRef(false);
//   const fetchMoreThrough = useRef<number>(0);

//   const [skip, setSkip] = useState<number>(0);

//   const onPageChange = useCallback(
//     async (event: GridPageChangeEvent) => {
//       setSkip(event.page.skip);

//       // Update the qty of results we want to fetch through. We want this to be updated on every scroll so that
//       // scrolling back to top would cancel a load request.
//       fetchMoreThrough.current = event.page.skip + qtyPerPage * 0.5;

//       if (fetchMoreThrough.current <= queryData.length) {
//         // already loaded.
//         return;
//       }

//       if (!cursor.hasNextPage) {
//         // No more pages to load!
//         return;
//       }

//       // Stop here if a fetch loop is already in progress.
//       if (fetchMoreInProgress.current) return;

//       fetchMoreInProgress.current = true;
//       let qty = queryData.length;
//       let after = cursor.endCursor;
//       // If we're going to load more than one page, load the max at a time instead of the optimized qty.
//       const first = qty + qtyPerPage < fetchMoreThrough.current ? MAX_PER_PAGE : qtyPerPage;

//       // We loop until the desired number of pages are loaded. The `fetchMoreThrough` ref can be updated by additional
//       // page loads while a request is in progress as it isn't a state variable which will be captured in the callback.
//       // It isn't possible to jump ahead and load just the page required because once it is merged into the original
//       // query result, we will have lost track of which page it was and won't be able to insert new pages in the correct
//       // location as we scroll.
//       while (qty < fetchMoreThrough.current) {
//         // eslint-disable-next-line no-await-in-loop
//         const result = await fetchMore({
//           variables: { after, first },
//           context: options?.queryContext,
//         });
//         const { data: resultData } = result.data as TData;
//         if (!resultData || !isConnectionData(resultData) || !resultData.pageInfo.hasNextPage) {
//           break;
//         }

//         after = resultData.pageInfo.endCursor;
//         qty += resultData.nodes!.length;
//       }
//       fetchMoreInProgress.current = false;
//     },
//     [
//       cursor.endCursor,
//       cursor.hasNextPage,
//       fetchMore,
//       qtyPerPage,
//       queryData.length,
//       options?.queryContext,
//     ]
//   );

//   const scrollbarWidth = useScrollbarWidth();

//   const isSampleData =
//     !!error ||
//     shouldShowSampleData(
//       showSampleData,
//       isConnection(data) ? data?.data?.nodes?.length : data?.data?.length
//     );

//   const rowRender = useCallback(
//     (row: ReactElement<HTMLTableRowElement> | null, props: GridRowProps): ReactNode => {
//       // We're not loading and not waiting for a batch load.
//       if ((!loading && skip < queryData.length) || isSampleData) {
//         if (options?.rowRender && row) return options.rowRender(row, props);
//         return row;
//       }

//       const qtyCols = (props as unknown as { children: unknown[] }).children.length;
//       let width = '50%';

//       if (containerSize.width) {
//         // The "24" is for the cell padding.
//         width = `${containerSize.width - scrollbarWidth - 24}px`;
//       }

//       // Using "createElement" because I don't feel like making this a tsx file so that I can use JSX.
//       return createElement(
//         LoadingTR,
//         {},
//         createElement(
//           'td',
//           { colSpan: qtyCols },
//           createElement(LinearProgress, { style: { width, marginTop: 5 } })
//         )
//       );
//     },
//     [loading, queryData.length, skip, containerSize.width, scrollbarWidth, isSampleData, options]
//   );

//   const unfilteredData = isSampleData ? sampleData : queryData;
//   const displayData = options?.dataFilter ? options.dataFilter(unfilteredData) : unfilteredData;

//   const qtyData =
//     !showSampleData && isCon && data?.data?.count ? data.data.count : displayData.length;

//   const last = Math.min(skip + Math.round(containerSize.height / rowHeight) + 1, qtyData);

//   let returnData: TDataNode[];
//   if (loading || skip > queryData.length) {
//     returnData = [{} as TDataNode];
//   } else {
//     returnData = !options?.dataItemKey
//       ? displayData.slice(skip, last)
//       : displayData.slice(skip, last).map((i: TDataNode) => ({
//           ...i,
//           [options.dataItemKey!.key]: options.dataItemKey!.idFactory(i),
//         }));
//   }

//   return {
//     isSampleData,
//     data: displayData,
//     loading,
//     subscribeToMore,
//     refetch,
//     pagingDetails: {
//       firstShown: skip,
//       lastShown: last,
//     },
//     error,
//     gridArgs: {
//       skip,
//       pageSize: qtyPerPage,
//       rowHeight,
//       total: loading ? 1 : qtyData,
//       data: returnData,
//       scrollable: 'virtual',
//       onPageChange,
//       rowRender,
//       dataItemKey: options?.dataItemKey?.key,
//     },
//   };
// }

// export interface PagingDetails {
//   firstShown: number;
//   lastShown: number;
// }

// export interface Scrolling<TData> {
//   loading: boolean;
//   isSampleData: boolean;
//   data: readonly TData[];
//   subscribeToMore: ObservableQuery['subscribeToMore'];
//   refetch: ObservableQuery['refetch'];
//   pagingDetails: PagingDetails;
//   error?: ApolloError;
//   gridArgs: {
//     pageSize: number;
//     rowHeight: number;
//     data: TData[];
//     skip: number;
//     scrollable: ScrollMode;
//     onPageChange: (event: GridPageChangeEvent) => void;
//     total: number;
//     rowRender: (row: ReactElement<HTMLTableRowElement> | null, props: GridRowProps) => ReactNode;
//     dataItemKey?: string;
//   };
// }
