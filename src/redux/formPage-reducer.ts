import axios from 'axios';

const SET_SITIES_LIST = 'SET_SITIES_LIST';
const SET_HOW_FIND_OUT_LIST = 'SET_HOW_FIND_OUT_LIST';

type ListType = {
    id: string,
    name: string
}


let formState = {
    citiesList: [] as Array<ListType>,
    howFindOutList: [] as Array<ListType>
}


  
type FormStateType = typeof formState;

export const formPageReducer = (state = formState, action: any):FormStateType => {
    switch(action.type){
        case SET_HOW_FIND_OUT_LIST:
            return {
                ...state,
                howFindOutList: action.payload.howFindOutList
            }
        case SET_SITIES_LIST:
            return {
                ...state,
                citiesList: action.payload.citiesList
            }
        default:
            return state;
        }
}

type SetCitiesListType = {type: typeof SET_SITIES_LIST, payload: {citiesList:Array<ListType>}}
export const setCitiesList = (citiesList:Array<ListType>):SetCitiesListType => ({type: SET_SITIES_LIST, payload: {citiesList}})

type SetHowFindOutListType = {type: typeof SET_HOW_FIND_OUT_LIST, payload: {howFindOutList:Array<ListType>}}
export const setHowFindOutList = (howFindOutList:Array<ListType>):SetHowFindOutListType => ({type: SET_HOW_FIND_OUT_LIST, payload: {howFindOutList}})

export const getCitiesList = () => (dispatch: any) => {
  axios.get(`./cities.json`).then(response => {
      dispatch(setCitiesList(response.data))
  })
}

export const getHowFindOutList = () => (dispatch: any) => {
  axios.get(`./sources.json`).then(response => {
      let CitiesListRebuild:any = []
      response.data.forEach((item:string, index:number) => {
          CitiesListRebuild.push({id: index.toString(), name: item})
      });
      dispatch(setHowFindOutList(CitiesListRebuild))
  })
}


export default formPageReducer;