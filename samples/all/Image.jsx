/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from "prop-types"
import React from "react"

function Image({ alt, ...rest }) {
    return <img alt={alt} {...rest} />
}

Image.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
}

export default Image
