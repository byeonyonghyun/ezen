import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'

const ContactForm = () => {
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  
  const getName = (e) => {
    setName(e.target.value) ;
  };

  const getNumber = (e) => {
    setPhoneNumber(e.target.value);
  }
  return (
    <Form>
    <Form.Group className="mb-3" controlId="formName">
      <Form.Label>이름</Form.Label>
      <Form.Control onChange={getName} type="text" placeholder="이름을 입력해주세요" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formNumber">
      <Form.Label>전화번호</Form.Label>
      <Form.Control onChange={getNumber} type="text" placeholder="전화번호를 입력해주세요" />
    </Form.Group>
    <Button variant="primary" type="submit">
      추가
    </Button>
  </Form>
  )
}

export default ContactForm