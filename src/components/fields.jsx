import React, { useState } from 'react';


export const FieldText = ({name, children, text})=>{
  
  const [value, setValue] = useState('');

  const handleChange = function (e) {
    setValue(e.target.value);
  };
  
  return (
      
    <div className='input-group'>
      <div>
        <label htmlFor={name}>{children}</label>
      </div>
      <div>
        <input 
          type='text' 
          value={value} 
          placeholder={text} 
          onChange={handleChange } 
          id={name} 
          name={name} 
          className='input'
          />
      </div>
      {/* {JSON.stringify({value})} */}
    </div>
    )
}
export const FieldPassword = ({name, children})=>{
  
  const [value, setValue] = useState('');

  const handleChange = function (e) {
    setValue(e.target.value);
  };
  
  return (
      
    <div className='input-group'>
      <div>
        <label htmlFor={name}>{children}</label>
      </div>
      <div>
        <input 
          type='password' 
          value={value} 
          onChange={handleChange } 
          id={name} 
          name={name} 
          className='input'
          />
      </div>
      {/* {JSON.stringify({value})} */}
    </div>
    )
}


export const FieldEmail = ({name, children})=>{
  
  const [value, setValue] = useState('');

  const handleChange = function (e) {
    setValue(e.target.value);
  };
  
  return (
      
    <div className='input-group'>
      <div>
        <label htmlFor={name}>{children}</label>
      </div>
      <div>
        <input 
          type='email' 
          value={value} 
          onChange={handleChange} 
          id={name} 
          name={name} 
          className='input'
          />
      </div>
      {/* {JSON.stringify({value})} */}
    </div>
    )
}

export const RadioBox = ({name, children})=>{
  
  const [value, setValue] = useState('');

  const handleChange = function (e) {
      setValue(e.target.checked);

  };
  
  return (
    <span >
      <input 
        type='radio' 
        value={value} 
        checked={value} 
        onChange={handleChange} 
        id={name} 
        name={name} 
        className='input'
      />
      <label htmlFor={name} >{children}</label>  
       {JSON.stringify({value})}
    </span>)
}




// export const FieldSubmit = ({name, children, text})=>{
  
//   const [value, setValue] = useState('');

//   const handleSubmit = function (e) {
//     e.preventDefault();
//     const data = JSON.stringify(value)
//     console.log(data)
//     setValue(e.target.value);
//   };
  
//   return (
      
//     <div className='input-group'>
//       <div>
//         <label htmlFor={name}>{children}</label>
//       </div>
//       <div>
//         <input 
//           type='submit' 
//           value={value} 
//           placeholder={text} 
//           onSubmit={handleSubmit} 
//           id={name} 
//           name={name} 
//           className='input'
//           />
//       </div>
//       {/* {JSON.stringify({value})} */}
//     </div>
//     )
// }