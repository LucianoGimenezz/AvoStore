import React, { useEffect, useState } from 'react'
import Link from 'next/dist/client/link'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    let flag = false

    const fetchData = async () => {
      const response = await fetch('/api/avo')
      const json = await response.json()
      const { data } = json

      if (!flag) setProductList(data)
    }

    fetchData()

    return () => {
      flag = true
    }
  }, [])

  return (
    <div>
      <div>Platzi and Next.js!</div>
      <section>
        {productList.map((product) => (
          <Link href={`/product/${product.id}`}>
            <p>{product.name}</p>
          </Link>
        ))}
      </section>
    </div>
  )
}

export default HomePage
