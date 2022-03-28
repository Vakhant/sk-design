import React from "react";
import FormReduxForm from './Form';
import { connect } from 'react-redux';
import { getCitiesList, getHowFindOutList} from '../../redux/formPage-reducer';



class FormContainer extends React.Component {
  componentDidMount(){
    this.props.getCitiesList();
    this.props.getHowFindOutList();
  }
  onSubmit = (formData) => console.log(formData)
  
  render(){
    if(this.props.howFindOutList.length == 0 && this.props.citiesList.length == 0){
      return <>'прелоадер'</>
    }
    return(
    <FormReduxForm  onSubmit={this.onSubmit} howFindOutList={this.props.howFindOutList} citiesList={this.props.citiesList}/>
    )}
}

const mapStateToProps = (state) => ({
    citiesList: state.formPage.citiesList,
    howFindOutList: state.formPage.howFindOutList,
})

let FormConteinerWrap = connect(mapStateToProps, {getCitiesList, getHowFindOutList})(FormContainer)

export default FormConteinerWrap;