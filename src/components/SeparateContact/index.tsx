import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";
import scss from "./SeparateContact.module.scss";

interface Contact {
  id: string;
  name: string;
  number: string;
  date: string;
}

interface SeparateContactProps {
  contact: Contact;
}

const SeparateContact: React.FC<SeparateContactProps> =  ({ contact })=> {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

    return (
      <li className={scss.containerContact} key={contact.id} >
        <span > {contact.name}: {contact.number}</span>
        <button
          type="button"
          onClick={handleDelete}>
          Delete
        </button>
      </li>
    );
};

export default SeparateContact;