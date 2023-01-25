import React, { useEffect, useState } from 'react'


const useFetch = (fetchAction : () => Promise<any>) => {
  const [isFetching, setIsFetching] = useState(false)
  const [data, setData] = useState<any | null>(null)

  const handleFetcing = async () => {
    // Set Feting
    setIsFetching(true)
    const result = await fetchAction()
    console.log({ result })
    setData(result)
    setIsFetching(false)
  }

  useEffect(() => {
    handleFetcing()
  }, [])

  return { isFetching, data }
}

export default useFetch