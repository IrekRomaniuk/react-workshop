import React from 'react';
import ContactList from './Contactlist'
//import mycontacts from './contact.json'

 
function Contact () {
    const contacts = [
      {
        name: "Irek Romaniuk",
        phone: "401-405-1545",
        email: "irek@romaniuk.us"
      } ,
      {
        name: "Jan Kowalski",
        phone: "601-405-1545",
        email: "jan@kowalski.pl"
      }
    ]
    
    return (
      <section>
            <div>
                { contacts.map(contact =>
                <ContactList key={ contact.id }
                             item={ contact } />
            ) }
            </div>
      </section>
    )
}

export default Contact;