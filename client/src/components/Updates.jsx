import React from 'react'

const h2Styles = {
    fontFamily: 'Raleway, sans-serif',
    fontSize: '2.938em',
    fontWeight: 400,
    fontStyle: 'normal',
    lineHeight: '1.021em',
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '4.7px',
    marginTop: '0.67em',
    marginBottom: '0.56em',
    textAlign: 'center'
  };

  const pStyles = {
    textAlign: 'center',
    display: 'block',
  marginBlockStart: '1em',
  marginBlockEnd: '1em',
  marginInlineStart: '0px',
  marginInlineEnd: '0px',
  }

const Updates = () => {
  return (
    <div>
        <h2 style={h2Styles}>WANT TO GET UPDATES?</h2>
        <p style = {pStyles}>
        <p>If you feel tired and stressed after a working day, we are happy to provide</p>
        <p>a wide range of relaxation massage therapy.</p>
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ marginRight: '10px', marginTop: '20px' }}>
          <input type="text" placeholder="Enter email address" />
        </div>
        <button style={{ backgroundColor: 'pink', color: 'white', border: 'none', marginTop: '20px' }}>Subscribe</button>
        </div>
        <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
          <input type="radio" id="privacyPolicy" name="privacyPolicy" />
          <label htmlFor="privacyPolicy" style={{ color: 'red' }}>I agree to the privacy policy</label>
        </div>
    </div>
  )
}

export default Updates