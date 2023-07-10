import styled from 'styled-components';

export const WrapperBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Button = styled.button`
border-radius: 10px;
border: none;
box-shadow: 10px 10px 10px rgba(46, 47, 66, 0.08),
0px 1px 4px rgba(46, 47, 66, 0.16), 2px 2px 3px rgba(46, 47, 66, 0.08);;
text-align: center;
margin-bottom: 20px;
font-size: 24px;
padding: 15px;
color: black;
cursor: pointer;
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1);
background-color: #edf3fb;
outline: none;
&:hover {
  background-color: #879cb7;
  color: #edf3fb;
}
`;
