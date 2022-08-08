import React from 'react'
import { SectionDiv } from 'components/styled-comp/styled'
import PropTypes from 'prop-types'

function Section({title, children}) {
    return (
        <SectionDiv>
            <h1>{title}</h1>
            {children}
        </SectionDiv>
  )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ])
}


export default Section