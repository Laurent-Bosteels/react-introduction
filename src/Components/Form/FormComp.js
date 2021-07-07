import React from 'react';

/* COMPONENT IMPORT */
import FormInput from './FormInput';
import FormBtn from './FormBtn';

function Form() {
    return ( 
            <section className="form">
            <form action="" className="todo-input">
                <FormInput/>
                <FormBtn/>
            </form>
            </section>

    );
  };

  export default Form;