import { Form } from "react-bootstrap"

const Dropdown = (props) =>{

    var list = <Form.Control as='select' onChange={props.onChange}>{props.list.map((item) => {
        return(<option selected={props.selected===item?'selected':''}>{item}</option>)
    })}</Form.Control>

    return(list)
}

export default Dropdown