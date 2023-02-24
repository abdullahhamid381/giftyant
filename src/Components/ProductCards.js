import React, { Fragment, useEffect, useState } from 'react'
import { ProductGalleryDetail } from './Data'
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import ProductGallery from './ProductGallery'
import '../scss/ProductsCards.scss'






const reorder = (list, startindex, endindex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startindex, 1);
    result.splice(endindex, 0, removed);
    return result;
};
const ProductCards = ({Productdata,searchTwo,SetsearchTwo}) => {
    const [Product, setProduct] = useState([]);

    useEffect(() => {
        setProduct(ProductGalleryDetail);
    }, []);


    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        const reordereditems = reorder(Product, result.source.index, result.destination.index);
        console.log(reorder);
        setProduct(reordereditems);
    }





    return (
        <Fragment>
            <div className="product-card-grid">

                <DragDropContext onDragEnd={() => onDragEnd()}>
                    <Droppable droppableId='droppable'>
                        {(provided, snapshot) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>

                                {
                                    Productdata.filter((filterItem) =>
                                    filterItem.title.toLowerCase().includes(searchTwo)
                                ).map((productcards,index) => (
                                        <Draggable key={productcards.id} draggableId={productcards.id} index={index}>
                                            {(provided, snapshot) => (
                                                <div className='cards-parent'
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}>

                                                    <div className='card-gallery'>
                                                        <img src={productcards.img} alt="" />
                                                    </div>
                                                    <div className='card-detail'>
                                                        <center>
                                                            <h3>{productcards.title}</h3>
                                                            <p className='gender'>{productcards.gender}</p>
                                                            <div className='price-parent'>
                                                                <del className='discount'> {productcards.discount} </del>
                                                                <span className='price'> {productcards.Price} </span>
                                                            </div>

                                                            <span>{productcards.stock}</span>
                                                            <br />
                                                            <div className='stars'>
                                                                <span>{productcards.star}</span>
                                                                <span>{productcards.star}</span>
                                                                <span>{productcards.star}</span>
                                                                <span>{productcards.star}</span>
                                                                <span>{productcards.star}</span>
                                                            </div>
                                                            <br />
                                                            <div className='button-flex'>
                                                                <button className='add-to-cart'>{productcards.button}</button>
                                                                <button className='heart'><AiOutlineHeart /></button>
                                                                <button className='heart'><AiOutlineEye /></button>
                                                            </div>
                                                        </center>
                                                    </div>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))
                                }

                            </div>
                        )}
                    </Droppable>
                </DragDropContext>

            </div>
        </Fragment>
    )
}

export default ProductCards