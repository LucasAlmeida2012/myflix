import React from 'react';

function FormField({label, type, name, value, onChange}) {
    if(type === 'textarea'){
        return (
        <div>
            <label> {label}
                <textarea 
                type={type} 
                value={value} 
                name={name}
                onChange={onChange}
                rows='3'
                />
            </label>
        </div>);
    }
    else return (
        <div>
            <label> {label}
                <input 
                type={type} 
                value={value} 
                name={name}
                onChange={onChange}
                />
            </label>
        </div>
    );
}
export default FormField;