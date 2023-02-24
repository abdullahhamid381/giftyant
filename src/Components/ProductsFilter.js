import { Fragment, React, useState } from 'react'
import '../scss/ProductFilter.scss'
import { ProductGalleryDetail } from './Data'
import ProductCards from './ProductCards'

import { AiOutlineSearch } from 'react-icons/ai'

/*------------THIS MAP IS FOR THE CATAGEORY FILTER BUTTON ---------------------  */
const uniqueList = [
  ...new Set(ProductGalleryDetail.map((Productdatamap) => {
    return Productdatamap.cata
  }))]


const ProductsFilter = () => {
  const [search, setSearch] = useState(false)



   
  /*------------------- FOR STORING THE UNIQUE CATAGEORY OF FILTER BUUTON ---------------------*/
  const [Uniquedata, setUniquedata] = useState(uniqueList);

  // 

  /*---------------- FOR FILTER THE PRODUCTS---------------------- */
  const filter = (cat) => {
    const updatelist = ProductGalleryDetail.filter((Productdatamap) => {
      return Productdatamap.cata == cat
    });
    setProductdata(updatelist)
    console.log(updatelist)
  }

   /* FOR SEARCHING THE PRODUCt */

   const [searchTwo, setSearchTwo] = useState('');


  /*--------------------- FOR STORING THE PRODUCT DETAILS -------------------------- */
  const [Productdata, setProductdata] = useState(ProductGalleryDetail);



  //------------ OUR PRODUCTS TITLE------------------------
  return (
    <div className='product-filter'>
      <div>
        <h1>
          OUR <span style={{ borderBottom: '2px solid #62d2a2', paddingBottom: '10px' }}>PRO</span>DUCTS
        </h1>
      </div>





      {/* ---------------START HERE FILTER BUTTON SECTION----------------------------- */}
      <div className='filter-buttons' >
        <button onClick={() => setProductdata(ProductGalleryDetail)}>All Products</button>
        {
          uniqueList.map((Productdatamap) => {
            return (
              <Fragment>

                <button onClick={() => filter(Productdatamap)}>{Productdatamap}</button>
              </Fragment>

            )
          })
        }
        <br />
       <div className='search'>
      
          {
            search ? <input type="text" placeholder='Search Here' value={searchTwo} onChange={(e) => setSearchTwo(e.target.value)} /> : true
          }

        
        <AiOutlineSearch onClick={() => setSearch(!search)} className='search-icon' />
      </div>
       </div>
      <div>

        <ProductCards Productdata={Productdata} searchTwo={searchTwo} SetsearchTwo={setSearchTwo} />
      </div>
    </div>
  )
}

export default ProductsFilter