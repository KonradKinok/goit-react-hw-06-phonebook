import React,{ ChangeEvent, FormEvent } from "react";
import { nanoid } from 'nanoid'
import scss from "./ContactForm.module.scss"
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice"
import { useSelector } from "react-redux";
import { getContacts } from "../redux/selectors";


const ContactForm: React.FC = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    
    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const  form  = ev.target as HTMLFormElement;
        const formElements = form.elements as typeof form.elements & {
            name: HTMLInputElement;
            number: HTMLInputElement;
            };
        const newName = formElements.name.value;
        const newNumber=formElements.number.value;
        
        const contactExists = contacts.some(
            (existingContact) =>
                existingContact.name === newName ||
                existingContact.number === newNumber,
        );

        if (contactExists) {
            window.alert(`${newName} or ${newNumber} is already in contacts`);
            return;
        }

        dispatch(addContact(newName, newNumber));
        form.reset();
    };

    const nameId = nanoid();
    const numId = nanoid();
    return (
        <>
            <form className={scss.form} onSubmit={handleSubmit}>
                <label htmlFor={nameId}>Name</label>
                <input
                    id={nameId}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Z]+((['\u0020-\u002D][a-zA-Z])?[a-zA-Z]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    
                />
                <label htmlFor={numId}>Phone number</label>
                <input
                    id={numId}
                    type="tel"
                    name="number"
                    // pattern="((\+|00)?[1-9]{2}|0)[1-9]( ?[0-9]){8}"
                    placeholder="567-215-453"
                    pattern="\d\d\d-\d\d\d-\d\d\d"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with + Example: 567-216-456"
                    required
                    
                />
                <button type="submit">Add contact</button>
            </form>
        </>
    );
}

export default ContactForm;