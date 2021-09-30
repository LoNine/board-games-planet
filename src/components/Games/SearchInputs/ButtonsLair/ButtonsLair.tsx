import React from 'react'
import { FC } from 'react-router/node_modules/@types/react'
import { IQueryObj } from '../SearchInputs'
import ButtonQuery from './ButtonQuery'

interface IButtonLairProps {
  onClick: (query:IQueryObj) => void;
  query:IQueryObj[];
}

const ButtonsLair:FC<IButtonLairProps> = ({onClick, query}) => {
  return (
    <div>
      {query.map((queryItem) => <ButtonQuery onClick={onClick} queryItem={queryItem} />)}
    </div>
  )
}

export default ButtonsLair
