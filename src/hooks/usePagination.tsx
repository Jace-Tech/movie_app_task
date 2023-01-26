import React, { useEffect, useState } from 'react'

const usePagination = (arr: any[], count: number) => {
  arr = arr || []
  const [dataArr, setDataArr] = useState<any[]>(arr)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const totalPages = Math.floor(arr.length / count);
  const [pageData, setPageData] = useState<any[]>([])

  useEffect(() => {
    const startIndex = ((currentPage - 1) * count);
    const endIndex = currentPage === totalPages ? -1 : startIndex + count
    const data = dataArr.slice(startIndex, endIndex)
    setPageData(data)
  }, [currentPage, dataArr])
  
  return { currentPage, setDataArr, setCurrentPage, pageData, totalPages }
}

export default usePagination