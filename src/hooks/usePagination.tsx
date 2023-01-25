import React, { useEffect, useState } from 'react'

const usePagination = (arr: any[], count: number) => {
  const [dataArr, setDataArr] = useState<any[]>(arr)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const totalPages = arr.length % count;
  const [pageData, setPageData] = useState<any[]>([])

  useEffect(() => {
    const startIndex = ((currentPage - 1) * count);
    const data = dataArr.slice(startIndex, startIndex + count)
    console.log({ dataItem: data })
    setPageData(data)
  }, [currentPage, dataArr])
  
  return { currentPage, setDataArr, setCurrentPage, pageData, totalPages }
}

export default usePagination