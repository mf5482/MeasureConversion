import React from 'react'
import Dropdown from './Dropdown'
import {useState} from 'react'
import {useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ConversionPage from './ConversionPage'

const units = ['Volume', 'Length', 'Weight']
const volume = ['Gallons', 'Liters', 'Quarts', 'Pints', 'Cups', 'Milliliters', 'Fluid Ounces']
const length = ['Miles', 'Kilometers', 'Yards', 'Meters', 'Feet', 'Inches', 'Centimeters']
const weight = ['Pounds', 'Kilograms', 'Milligrams', 'Ounces', 'Tons']
const conver = {'Gallons':1, 'Liters':3.78541, 'Quarts':4, 'Pints':8, 'Cups':16, 'Milliliters':3785.41, 'Fluid Ounces':128, 
'Pounds':1, 'Kilograms':0.453592, 'Milligrams': 453592, 'Ounces':16, 'Tons':0.0005, 
'Miles':1, 'Kilometers':1.60934, 'Yards':1760, 'Meters':1609.34, 'Feet':5280, 'Inches':63360, 'Centimeters':160934}

const MainBox = () => {

    //Define states
    const [currentUnit, setCurrentUnit] = useState(units[0])        //Volume, Length or Weight
    const [currentList, setCurrentList] = useState(volume)          
    const [currentTo, setCurrentTo] = useState(volume[0])           //Initial Unit
    const [currentFrom, setCurrentFrom] = useState(volume[0])       //Converted Unit
    const [init, setInit] = useState()                              //Initial num
    const [result, setResult] = useState()                          //Converted num

    const onUnitChange = (e) => {
        setCurrentUnit(e.target.value)   
    }

    //Unit change effect
    useEffect(() => {

        if(currentUnit === 'Volume'){
            setCurrentList(volume)
            setCurrentFrom(volume[0])
            setCurrentTo(volume[0])
        }
        else if(currentUnit === 'Length'){
            setCurrentList(length)
            setCurrentFrom(length[0])
            setCurrentTo(length[0])
        }
        else if(currentUnit === 'Weight'){
            setCurrentList(weight)
            setCurrentFrom(weight[0])
            setCurrentTo(weight[0])
        }

        setInit('')
        setResult('')

    }, [currentUnit])

    //Change state on user change
    const onFromChange = (e) => {
        setCurrentFrom(e.target.value)
    }
    
    const onToChange = (e) => {
        setCurrentTo(e.target.value)
    }

    const onInitChange = (e) => {
        setInit(e.target.value)
    }

    const onSubmit = (e) => {

        e.preventDefault()

        //Conversion
        var r = ((init/conver[currentFrom]) * conver[currentTo])
        r = Math.round(r * 1000) / 1000

        setResult(r)

        return false;

    }

    return(
        <Form>
            <Form.Group>
                <div className='mainBox'>
                    <div className='header'>
                        <h3>Measurement Conversion</h3>
                        <Dropdown id='unit' list={units} onChange = {onUnitChange}></Dropdown>
                    </div>
                    <BrowserRouter>
                        <Route path='/' exact render={()=>(
                            <>
                                <div class='conver'>
                                    <div className='sent'>
                                        <input type="number" onChange={onInitChange} value={init}></input>
                                        <Dropdown selected={currentFrom} list={currentList} onChange={onFromChange}></Dropdown>
                                    </div>
                                    <h1>=</h1>
                                    <div className='sent'>
                                        <input readonly type="number" value={result}></input>
                                        <Dropdown selected={currentTo} list = {currentList} onChange={onToChange}></Dropdown>
                                    </div>
                                </div>
                            <Button variant="primary" id='submit' type='submit' onClick={onSubmit}>Convert</Button>
                            <Link to="/common">Common Conversions</Link>
                            </>
                        )} />
                        <Route path='/common' exact render={()=>(
                            <>
                                <ConversionPage currentUnit={currentUnit}/>
                                <Link to="/">Back</Link>
                            </>
                        )} />
                    </BrowserRouter>
                </div>
            </Form.Group>
        </Form>
    )
}

export default MainBox;