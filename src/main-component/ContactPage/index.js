import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Contactpage from '../../components/Contactpage'
import Footer from '../../components/footer'


const ContactPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'CONTACTO'} pagesub={'CONTACTO'}/> 
            <Contactpage/>
            <Footer/>
        </Fragment>
    )
};
export default ContactPage;

