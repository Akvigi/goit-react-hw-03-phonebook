import { Label } from 'components/styled-comp/styled'
import React from 'react'
import PropTypes from 'prop-types' 
const PBSearch = ({ array, onChange }) => {
   console.log(array)
  return (
    <>
        {array.length > 0 && array !== null && <Label>Find contacts by name
            <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onChange} 
            />
        </Label>}
    </>
  )
}

PBSearch.propTypes = {
  array: PropTypes.array,
  onChange: PropTypes.func  
}

export default PBSearch