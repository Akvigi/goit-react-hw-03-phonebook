import React from 'react'
import PropTypes from 'prop-types'

const List = ({ array, onDelete }) => {
  return (
      <ul>
        {array[0] ? array.map(item => <li key={item.id}>{item.name}: {item.number} <button onClick={() => onDelete(item.id)} type='click'>delete</button></li>) : <li>Havent contacts to show</li>}
      </ul>
  )
}

List.propTypes = {
  array: PropTypes.array,
  onDelete: PropTypes.func
}

export default List