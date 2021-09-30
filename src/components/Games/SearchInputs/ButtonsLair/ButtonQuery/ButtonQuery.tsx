import { Button } from '@mui/material'
import React from 'react'
import { FC } from 'react-router/node_modules/@types/react'
import { IQueryObj } from '../../SearchInputs'
import CloseIcon from '@mui/icons-material/Close';

interface IButtonQueryProps {
  onClick: (query:IQueryObj) => void;
  queryItem: IQueryObj;
}

const ButtonQuery:FC<IButtonQueryProps> = ({onClick, queryItem}) => {
  const handleOnClick = () => {
    onClick({key:queryItem.key, value: 'any'})
  }
  
  return (
    <Button onClick={handleOnClick} variant="outlined">
      {queryItem.key.split('_').join(' ')}
      {' '}
      {queryItem.value.toString().split('_').join(' ')}
      <CloseIcon />
    </Button>
  )
}

export default ButtonQuery
