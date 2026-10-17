import React, { useState } from 'react'
import store from '../stores/TaskStore'

function Task (props) {
  const { item, onSelect } = props
  
  return (
    <div style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
      <div>
        {item.description} - Priority: {item.priority}
        <button 
          onClick={() => onSelect(item)}
          style={{ marginLeft: '10px' }}
        >
          select
        </button>
      </div>
    </div>
  )
}

export default Task
