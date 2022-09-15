import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import ArchitectureList from '../../components/ArchitectureList'
import Footer from '../../components/footer'
import architecture_bg from "../../img/architecture_bg.jpeg";



const Architecture =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle bg={architecture_bg} pageTitle={'Arquitectura'} pagesub={'Arquitectura'}/>
            <ArchitectureList/>
            <Footer/>
        </Fragment>
    )
};
export default Architecture;

