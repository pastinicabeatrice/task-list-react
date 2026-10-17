import React from 'react'

function SelectedTasks (props) {
  const { items, onDeselect } = props

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Selected Tasks:</h2>
      {items && items.map((item) => (
        <div key={item.id} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
          {item.description} - Priority: {item.priority}
          <button 
            onClick={() => onDeselect(item)}
            style={{ marginLeft: '10px' }}
          >
            deselect
          </button>
        </div>
      ))}
    </div>
  )
}

export default SelectedTasks