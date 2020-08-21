import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    display: flex;
    align-items: center;
    > span { padding-right: 16px; white-space: nowrap; }
    > input { width: 100%; height: 44px; border: none; background: none; }
`;

type Props = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>
const Input: React.FC<Props> = (props) => {
  const {label, children, ...rest} = props
  return (<Label>
    <span>{props.label}</span>
    <input {...rest}/>
  </Label>);
};

export {Input}