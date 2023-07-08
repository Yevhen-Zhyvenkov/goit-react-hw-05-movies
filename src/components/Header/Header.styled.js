import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const ItemNav = styled(NavLink)`
    margin-top: 15px;
    margin-bottom: 15px;
    display: inline-block;
    text-align: center;
    width: 50px;
    padding: 12px;
    border-radius: 10px;
    color: azure;
    background-color: black;

  &.active {
    background-color: red;
    color:black
  }
`;

export { ItemNav };

