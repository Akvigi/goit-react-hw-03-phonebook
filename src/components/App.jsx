import React, {Component} from "react";
import PhoneBookForm from "./PhoneBook/PBForm";
import List from "./PhoneBook/PBList";
import PBSearch from "./PhoneBook/PBSearch";
import Section from "./Section/Section";
import { ContentContainer, PageContainer } from "./styled-comp/styled";


class App extends Component {
  state = {
    contacts: null,
    filter:'',
  }
  
  componentDidMount() {
    const parsed = JSON.parse(localStorage.getItem("contactlist"))
    if (parsed) this.setState({contacts: parsed})  
  }

  componentDidUpdate(prevProps) {
    if (prevProps.contacts !== this.state.contacts) {
      const string = JSON.stringify(this.state.contacts)
      localStorage.setItem("contactlist", string)
    }
  }

  renderContacts = (newContact) => {
    if (this.state.contacts) {
      this.setState(prevState => (
        {contacts: [...prevState.contacts, newContact]
      }))
    } else {
      this.setState({contacts: [newContact]})
    }
    
    setTimeout(() => console.log(this.state.contacts), 500 )
  }

  handleChangeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value })
  }

  onFilter = () => {
    if (this.state.filter) {
      const filterredArray = this.state.contacts.filter(({ name }) => name.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1)
      return filterredArray
    } 
    return this.state.contacts
  }

  isExist = (item) => {
    const {contacts} = this.state
    if (contacts) {
      contacts.forEach(cont => {
        if (cont.name === item.name) {
          return alert("Please enter new contact")
        }
      })
    }
  }

  onDelete = (id) => {
    const toUpdate = this.state.contacts.filter(elem => elem.id !== id)
    localStorage.setItem("contactlist", toUpdate)
    this.setState({contacts: toUpdate})
  }

  render() {
    const array = this.onFilter()
    return (
    <PageContainer>
      <ContentContainer>
          <Section title="Phonebook">
            <PhoneBookForm pushC={this.renderContacts} isExist = {this.isExist} />
          </Section>
          <Section title="Contacts">
            <PBSearch array={array} onChange = {this.handleChangeFilter}/>
            <List array={array} onDelete = {this.onDelete} />
          </Section>
        </ContentContainer>
      </PageContainer>
  );
  }
}

export default App;
