import styles from './formsControls.module.css'
import {Field} from "react-final-form";
export const Textarea = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (<>
            <textarea {...input} {...props} placeholder={touched ? "It's empty here" : 'New text'}/>
            {hasError && <span>{error}</span>}
        </>)
}
export const Input = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (<div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <input {...input} {...props} />
            {hasError && <span>{error}</span>}
        </div>)
}

export const createField = (placeHolder, name, component, validators, props = {}, text = "") =>(
    <div>
    <Field placeholder={placeHolder} name={name}
           component={component} validate={validators} {...props}/>{text}
    </div>
)