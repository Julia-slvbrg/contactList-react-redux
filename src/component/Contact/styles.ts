import styled from 'styled-components'

export const ContactCard = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 0.4fr 2fr 2fr 1fr 1fr;
  gap: 2px;
  align-items: center;
  text-align: center;
  background-color: #cad3c8;
  width: 85%;
  height: 88px;
  border-radius: 13px;
  border-bottom: 2px solid #2c3a47;

  span {
    position: relative;
    display: inline-block;
  }
`
export const FavIcon = styled.img`
  justify-self: center;
`
export const InfoField = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 8px;

  img,
  input {
    display: block;
    text-align: center;
    justify-self: center;
  }
`
export const Input = styled.input`
  padding: 2px;
  font-weight: bold;
  font-size: 16px;
  width: 200px;
  background-color: #cad3c8;
  border: none;
`
export const Btn = styled.button`
  margin: 0 16px;
  width: 56px;
  height: 40px;
  background-color: #2c3a47;
  border-radius: 13px;
  border: none;
  cursor: pointer;

  :active {
    transform: scale(1.8);
    transition: all ease 0.2s;
  }

  &:hover::after {
    content: attr(data-tooltip); /* Use the data-tooltip attribute */
    position: absolute;
    top: -30px; /* Position above the button */
    left: 50%;
    transform: translateX(-50%);
    background-color: #555;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    white-space: nowrap;
    z-index: 10;
    font-size: 12px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`
export const FavBtn = styled(Btn)`
  background-color: transparent;
  scale: 1.3;
`
