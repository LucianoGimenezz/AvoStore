import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const [product, setProduct] = useState<TProduct>()
  const { query } = useRouter()
  const id = query.id

  useEffect(() => {
    if (id) {
      window
        .fetch(`/api/avo/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
    }
  }, [id])

  return (
    <section>
      <img width="240px" src={product?.image} />
      <h1>{product?.name}</h1>
    </section>
  )
}

export default ProductPage
