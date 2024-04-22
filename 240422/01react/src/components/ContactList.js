import React, {useEffect, useState} from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  const [filterList, setFilterList] = useState([]);
  return (
    <div>
      <SearchBox />
      {contactList.map((item, idx)=>(
      <ContactItem key={idx} item={item}/>
      ))}
    </div>
  )
}

export default ContactList