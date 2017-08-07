import axios from 'axios'
componentDidMount() {
      axios.get('https://randomuser.me/api/')
      .then(res => this.setState({ randomcontacts: res.data }))
      .catch(err => console.log(err))
    }
    
