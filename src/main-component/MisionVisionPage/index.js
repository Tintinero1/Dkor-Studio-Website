import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import MisionVision from '../../components/misionvision'
import Footer from '../../components/footer'



const MisionVisionPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'ACERCA DE'} pagesub={'Acerca De'}/>
            <MisionVision/>
            <Footer/>
        </Fragment>
    )
};
export default MisionVisionPage;

