import React from 'react';
import ContactList from './Contactlist'
//import Searchbar from './Searchbar'
import contacts from './mycontacts.js'
import _ from 'lodash'
//import axios from 'axios'
 
class Contact extends React.Component {
    
    state = {
        contacts: contacts, 
        search: "",
        sortdir: ''
    }
       
    /*componentDidMount() {
      axios.get('https://randomuser.me/api/')
      .then(res => this.setState({ randomcontacts: res.data }))
      .catch(err => console.log(err))
    }*/
    handleSearch (e) {
        this.setState({ search: e.target.value })
        //console.log(this.state.search)
    }
    handleClick () {
        //console.log(this.state.sortdir)
        this.state.sortdir === 'asc' ? 
            this.setState({sortdir: 'desc'}):
            this.setState({sortdir: 'asc'})
            this.setState({ 
                contacts: _.sortBy(this.state.contacts, 'name', this.state.sortdir ),
            });
    }
    render() {
        return (
        <section>
                <div>
                    <form onSubmit={e => e.preventDefault()}>
                        <input
                            type='text'
                            size='45'
                            placeholder='Search...'
                            onChange={this.handleSearch.bind(this)}
                            value={this.state.search} />
                        <button
                            type='submit'
                            onClick={this.handleClick.bind(this)}>
                            Sort
                        </button>
                    </form>
                        { 
                            this.state.contacts
                            .filter(contact => !contact.name.indexOf(this.state.search,0))
                            .map(contact =>
                                <ContactList   key={ contact.phone }
                                             item={ contact } />) 
                }
                </div>
        </section>
        )
    }
}

export default Contact;