import { Form, Label } from 'components/styled-comp/styled'
import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
  
class PBForm extends Component {
  state = {
    name: '',
    number:''
  }
  
  static propTypes = {
    pushC: PropTypes.func,
    isExist: PropTypes.func
  }

  onChangeInp = (e) => {
      const {name, value} =  e.currentTarget
      this.setState({ [name]: value })
    }

  reset = () => {
    this.setState({
      name: '',
      number:''})
  }

  onAddContact = (e, callback, isExist) => {
    e.preventDefault()
    const { name, number } = this.state
    if(name === '' && number === '') return alert("enter fields")
    const newContact = {
      name: name,
      number: number,
      id: nanoid()
    }
    isExist(newContact)
    callback(newContact)
    this.reset()
  }
  


  render() {
    const {pushC, isExist} = this.props
    return (
      <Form onSubmit={(e) => {this.onAddContact(e, pushC, isExist)}}>
          <Label>Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
              onChange={this.onChangeInp} />
          </Label>
          <Label>Number
            <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.onChangeInp}/>
          </Label>
          <button type="submit" >Add contact</button>
        </Form>
    );
  }
}

export default PBForm;
