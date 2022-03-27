import { FC } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import styled from 'styled-components';
import { requiredField } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/Input';
import { PhoneNumber } from '../common/FormsControls/PhoneNumber';
import { Select } from '../common/FormsControls/Select/Select';
import Button from '../common/Button/Button';


  const Form: FC<InjectedFormProps> = (props: any) => {
    return (
      <FormBox>
        <form onSubmit={props.handleSubmit}>
          <FieldWrapBox>
          <Field component={Input} validate={[requiredField]} isValidate={true} label='Ваше имя *' id={'fName'} name={'fName'} type="text" placeholder="Иван"/>
          <Field component={PhoneNumber} validate={[requiredField]} isValidate={true} label='Номер телефона *' id={'Phone'} name={'phoneNumber'} type="tel" placeholder="+7 (000) 000-00-00"/>
          </FieldWrapBox>
          <FieldWrapBox>
          <Field component={Input} validate={[requiredField]} isValidate={true} label='E-mail *' id={'email'} name={'email'} type="email" placeholder=""/>
          <Field component={Input} validate={[requiredField]} isValidate={true} label='Ссылка на профиль *' id={'profileAddress'} name={'profileAddress'} type="url" placeholder=""/>
          </FieldWrapBox>
          <Field component={Select} validate={[requiredField]} isValidate={true} label='Выберите город *' id={'Cities'} name={'Cities'}  optionList={props.citiesList}/>
          <Field component={Input} isValidate={false} label='Название организации/студии' id={'unionName'} name={'unionName'} type="text" placeholder="SK Design"/>
          
          <Field component={Input} isValidate={false} label='Получатель' id={'reciverFullName'} name={'reciverFullName'} type="text" placeholder="ФИО"/>
          <Field component={Select} isValidate={false} id={'HowFindOut'} name={'HowFindOut'}  optionList={props.howFindOutList}/>
          <Button
            text={'Отправить заявку'}
            disabled={true}
            loading={false}/>
        </form>
      </FormBox>
    )
  }

const FormReduxForm = reduxForm<{}, {}>({form: 'callback'})(Form)

const FieldWrapBox = styled.div`
  display: flex;
  justify-content: space-between;
  >*{
    width: 48%;
  }
`

const FormBox = styled.div`
  width: 380px;
  box-shadow: 0 2px 20px rgba(0,0,0,.1);
  padding: 40px 30px;
  border-radius: 8px;
  form>*{
    width: 100%;
  }
`

  export default FormReduxForm