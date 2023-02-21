import React, { Fragment, useEffect, useState } from 'react'
import { ProductGalleryDetail } from './Data'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import ProductGallery from './ProductGallery'
import '../scss/ProductsCards.scss'






const reorder = (list, startindex, endindex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startindex, 1);
    result.splice(endindex, 0, removed);
    return result;
};
const ProductCards = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(ProductGalleryDetail);
    }, []);


    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        const reordereditems = reorder(items, result.source.index, result.destination.index);
        console.log(reorder);
        setItems(reordereditems);
    }





    return (
        <Fragment>
            <div className="product-card-grid">

                <DragDropContext onDragEnd={() => onDragEnd()}>
                    <Droppable droppableId='droppable'>
                        {(provided, snapshot) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>

                                {
                                    items.map((productcards, index) => (
                                        <Draggable key={productcards.id} draggableId={productcards.id} index={index}>
                                            {(provided, snapshot) => (
                                                <div className='cards-parent'
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}>

                                                    <div className='card-gallery'>
                                                        <img src="./images/Products/1.jpg" alt="" />
                                                    </div>
                                                    <div className='card-detail'>
                                                        <h3>{productcards.title}</h3>
                                                        <h3>{productcards.gender}</h3>
                                                        <p>{productcards.Price}</p>
                                                        <del>{productcards.discount}</del>
                                                        <span>{productcards.stock}</span>
                                                        <span>{productcards.star}</span>
                                                        <button>{productcards.button}</button>
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