import React from 'react';

function BoxSelect() {

  const [selected, setSelected] = React.useState(0)
  
  return (
      <>
        {
            ["Daily","Weekly","Monthly"].map((item,i) => (
                <div style={{width:'33.3%'}} onClick={() => setSelected(i)} className={selected == i ? `box-item text-center box-item-active` : 'box-item text-center'}>
                    <h4>{item}</h4>
                </div>
            ))
        } 
      </>
  )
}

export default BoxSelect;
