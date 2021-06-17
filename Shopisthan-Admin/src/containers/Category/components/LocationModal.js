import Input from '../../../components/UI/Input'
import Modal from '../../../components/UI/Modal';
import { Row, Col, } from 'react-bootstrap'

const LocationModal =(props) =>{

    const {
       show,
       handleclose,
       modaltitle,
       locationName,
       setLocationName,
       onSubmit
    } = props;

    return(
       <Modal
       show={show}
       handleclose={handleclose}
       onSubmit ={onSubmit}
       modaltitle={modaltitle}
   >
   <Row>
       <Col>
       <Input
           value={locationName}
           placeholder={`Location Name`}
           onChange={(e) => setLocationName(e.target.value)}
           className="form-control-sm"

       />
       </Col>
   </Row>
      

   </Modal>
    );
}

export default LocationModal