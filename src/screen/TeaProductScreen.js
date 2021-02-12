import React from 'react'
import TeaProducts from '../TeaProducts'



const TeaProductScreen = ({ match }) => {

    const item = TeaProducts.find((p) => p.id === match.params.id);
    

    return (

        <div>
            {item.name}
        </div>
    )
}

export default TeaProductScreen

