import React from 'react'
// import styled from 'styled-components'
import Navigation from './Navigation';


export const Logo = () => {

//   const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
//   `;

//   // Create a Wrapper component that'll render a <section> tag with some styles
//   const Wrapper = styled.section`
//   padding: 1em;
//   background: papayawhip;
//   `;

  return (
    <div>

    {/* // <Wrapper>
    //   <Title> */}
        <img src="img/logo192.png" alt="pic"></img>
    {/* //   </Title> */}
      <Navigation />
    {/* // </Wrapper> */}
    </div>
  )


}
export default Logo