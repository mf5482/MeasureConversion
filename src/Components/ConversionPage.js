import React from 'react'
import { useEffect } from 'react'

const ConversionPage = (props) => {

    

    useEffect(()=>{
        console.log(props.currentUnit)
    }, [props.currentUnit])

    return(
        <div class='conver'>
            <p>This is another page</p>
        </div>
    )
}

export default ConversionPage;