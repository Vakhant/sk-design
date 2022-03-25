import { FC } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { requiredField } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/Input';
import { Select } from '../common/FormsControls/Select/Select';

interface ReduxFormBaseProps{
  handleSubmit: any
}

  const Form: FC<InjectedFormProps> = (props: any) => {
    let citiesList = [
      {
        "id": "MOW",
        "name": "Москва"
      },
      {
        "id": "SPB",
        "name": "Санкт-Петербург"
      },
      {
        "id": "KZN",
        "name": "Казань"
      },
      {
        "id": "KDA",
        "name": "Краснодар"
      }
    ]
    return (
    <form onSubmit={props.handleSubmit}>
      <Field validate={[requiredField]} id={'fullName'} component={Input} name={'fullName'} type="text" placeholder=""/>
      <Field validate={[requiredField]} component={Select} name={'Cities'}  citieslist={citiesList}/>
      <button>sdf</button>
    </form>
    )
  }
  
const FormReduxForm = reduxForm<{}, {}>({form: 'edit-profile'})(Form)

  export default FormReduxForm