import React from "react";
import FormReduxForm from './Form';
import { connect } from 'react-redux';
import { getCitiesList, getHowFindOutList } from '../../redux/form-reducer';



class FormContainer extends React.Component {
  componentDidMount(){
    // this.props.getCitiesList();
  }
  onSubmit = () => console.log('sdfsd')
  
  render(){return(<FormReduxForm  onSubmit={this.onSubmit} howFindOutList={this.props.howFindOutList} citiesList={this.props.citiesList}/>)}
}

const mapStateToProps = (state) => ({
    citiesList: state.formPage.citiesList,
    howFindOutList: state.formPage.howFindOutList,
})

let FormConteinerWrap = connect(mapStateToProps, {getCitiesList, getHowFindOutList})(FormContainer)

export default FormConteinerWrap;