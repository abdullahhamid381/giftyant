import React from 'react'
import '../scss/ProductFilter.scss'
const ProductsFilter = () => {
  return (
    <div className='product-filter'>
<div>
    <h1>
        OUR <span style={{borderBottom:'2px solid #62d2a2',paddingBottom:'10px'}}>PRO</span>DUCTS
    </h1>
</div>

<div className='filter-buttons' >
<button>Perfume</button>
<button>Jewelery</button>
<button>Bags</button>
<button>Watches</button>
<button>Shoes</button>
</div>

    </div>
  )
}

export default ProductsFilter