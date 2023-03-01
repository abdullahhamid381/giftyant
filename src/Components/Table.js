import React, { Fragment } from 'react'
import {BsTrash} from 'react-icons/bs';
import '../scss/Table.scss'
const Table = () => {
  return (
    <Fragment>
        <div className='table-parent'>
<table >
    <tr>
       <td>Product</td>
       <td>Price</td>
       <td>Quantity</td>
       <td><BsTrash/></td>
    </tr>
</table>

        </div>
    </Fragment>
  )
}

export default Table