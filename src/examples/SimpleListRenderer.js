import React from 'react'

const SimpleListRenderer = ({ items }) => (
    <>
        { `# of loaded items: ${ items.length }` }
        <ol>
            { items.map((item, idx) => <li key={idx}>item #{item}</li>) }
        </ol>
    </>
)

export default SimpleListRenderer
