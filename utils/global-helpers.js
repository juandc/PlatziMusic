export const isPerformantListLoading = list =>
  !(list._dataBlob && list._dataBlob.s1 && list._dataBlob.s1.length);

export const isListLoading = list => !list.length;
