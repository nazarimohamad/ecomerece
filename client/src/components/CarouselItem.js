import React from 'react';
import { Button, Paper } from '@material-ui/core'

const Item = (props) => {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <Button className='checkButton'>
        check it out
      </Button>
    </Paper>
    
  )
}

export default Item;