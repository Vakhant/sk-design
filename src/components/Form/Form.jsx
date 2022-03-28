import { Field, formValueSelector, reduxForm } from 'redux-form';
import styled from 'styled-components';
import { requiredField } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/Input';
import { PhoneNumber } from '../common/FormsControls/PhoneNumber';
import { Select } from '../common/FormsControls/Select/Select';
import Button from '../common/Button/Button';
import { connect } from 'react-redux';
import { useState } from 'react';
import { SVGSelectArrow } from '../../assets/img/SVGSelectArrow';


  let Form = (props) => {
    
    let [addFields, toggleAddFields] = useState(false)
    let formNotValid = !props.firstNameValue || !props.phoneNumberValue || !props.emailValue || !props.profileAddressValue || !props.CitiesValue ? true : false
    
    return (
      <FormBox>
        <form onSubmit={props.handleSubmit}>
          <FieldWrapBox>
          <Field component={Input} validate={[requiredField]} isValidate={true} label='Ваше имя *' id={'fName'} name={'fName'} type="text" placeholder="Иван"/>
          <Field component={PhoneNumber} validate={[requiredField]} isValidate={true} label='Номер телефона *' id={'phoneNumber'} name={'phoneNumber'} type="tel" placeholder="+7 (000) 000-00-00"/>
          </FieldWrapBox>
          <FieldWrapBox>
          <Field component={Input} validate={[requiredField]} isValidate={true} label='E-mail *' id={'email'} name={'email'} type="text" placeholder=""/>
          <Field component={Input} validate={[requiredField]} isValidate={true} label='Ссылка на профиль *' id={'profileAddress'} name={'profileAddress'} type="text" placeholder=""/>
          </FieldWrapBox>
          <Field component={Select} validate={[requiredField]} isValidate={true} label='Выберите город *' id={'Cities'} name={'Cities'}  optionList={props.citiesList}/>
          <Field component={Input} isValidate={false} label='Название организации/студии' id={'unionName'} name={'unionName'} type="text" placeholder="SK Design"/>
          <AddFieldsToggler onClick={() => toggleAddFields(!addFields)}>{addFields?'Скрыть':'Показать'} дополнительные поля <SVGSelectArrow active={addFields}/></AddFieldsToggler>
          
          <AddFieldsBox addFields={addFields}>
            <div>
            <Field component={Input} isValidate={false} label='Получатель' id={'reciverFullName'} name={'reciverFullName'} type="text" placeholder="ФИО"/>
            <Field component={Select} isValidate={false} id={'HowFindOut'} name={'HowFindOut'}  optionList={props.howFindOutList}/>
            </div>
          </AddFieldsBox>
          <Button
            text={'Отправить заявку'}
            disabled={formNotValid}
            reset={props.reset}
          />
        </form>
      </FormBox>
    )
  }


let FormReduxForm = reduxForm({form: 'callBackForm'})(Form)

const selector = formValueSelector('callBackForm')
FormReduxForm = connect(state => {
  const firstNameValue = selector(state, 'fName')
  const phoneNumberValue = selector(state, 'phoneNumber')
  const emailValue = selector(state, 'email')
  const profileAddressValue = selector(state, 'profileAddress')
  const CitiesValue = selector(state, 'Cities')
  return {
      firstNameValue,
      phoneNumberValue,
      emailValue,
      profileAddressValue,
      CitiesValue,
  }
})(FormReduxForm)


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
const AddFieldsToggler = styled.div`
  display: block;
  display: flex;
  font-size: 14px;
  color: #353238;
  cursor: pointer;
  margin-bottom: 10px;
`

const AddFieldsBox = styled.div`
  transition: .3s;
  ${({addFields}) => addFields ? `
    height: 153px;
    overflow: visible;` : `
    overflow: hidden;
    height: 0px;`
  }
  >div{
    ${({addFields}) => addFields ? `
        opacity: 1;
        transition: opacity .3s 0s, visibility 0s 0s;
    ` : `
        opacity: 0;
        transition: opacity .3s 0s, visibility 0s .3s;
    `}
  }
    >*>*{
      width: 100%;
    }
`

  export default FormReduxForm