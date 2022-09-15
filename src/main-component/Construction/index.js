import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import ConstructionList from '../../components/ConstructionList'
import Footer from '../../components/footer'
import construction_bg from "../../img/construction_bg.jpeg";



const Construction =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle bg={construction_bg} pageTitle={'Construcción'} pagesub={'Construcción'}/>
            <ConstructionList/>
            <Footer/>
        </Fragment>
    )
};
export default Construction;

