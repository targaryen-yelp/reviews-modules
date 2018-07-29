import styled from 'styled-components';

export const EntireSection = styled.div`
font-family: Arial, "Helvetica Neue", Helvetica, sans-serif
`

export const Header = styled.h2 `
  vertical-align: baseline;
  font-weight: bold;
  color: #d32323;
  `
export const Divider = styled.hr `
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
`

export const Questions = styled.div`
  font-size: 85%;
`

export const Button = styled.button`
  backface-visibility: hidden;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  background: #f5f5f5;
  border-radius: 2px;
  border: 1px solid #e6e6e6;
  border-width: 1px 1px 1px 1px;
  padding: 10px 20px 10px 20px;
  box-shadow: inset 0px 1px 0px #ffffff,0px 1px 3px rgba(0%,0%,0%,0.3);
  color: #666666;
  font-size: 14px;
  font-family: arial;
  font-weight: 600;
  font-style: normal;
  text-shadow: 0px 0px 0px rgba(0%,0%,0%,0.4)
`