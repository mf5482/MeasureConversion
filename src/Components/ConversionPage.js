import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Table from 'react-bootstrap/table'

const vol = ['1 Gallon = 4 Quarts', '1 Gallon = 3.785 Liters', '1 Quart = 4 cups', '1 cup = 8 Fluid Ounces']
const len = ['1 Mile = 1.609 Kilometers', '1 mile = 1760 Yards', '1 Yard = 3 Feet', '1 Foot = 12 Inches']
const wei = ['1 Pound = 16 Ounces', '1 Kilometer = 2.205 Pounds', '1 Ton = 2000 Pounds']

const ConversionPage = (props) => {

    const [currentList, setCurrentList] = useState(wei) 

    useEffect(()=>{
        if(props.currentUnit === 'Volume'){
            setCurrentList(vol)
        }
        else if(props.currentUnit === 'Length'){
            setCurrentList(len)
        }
        else if(props.currentUnit === 'Weight'){
            setCurrentList(wei)
        }
    }, [props.currentUnit])

    return(
        <div class='conver'>
            <Table striped>
                <tbody>
                        
                        {currentList.map((item) =>{
                            return(
                                <tr>
                                    <td align='center'>{item}</td>
                                </tr>
                        )})}  
                </tbody>
            </Table>
        </div>
    )
}

export default ConversionPage;