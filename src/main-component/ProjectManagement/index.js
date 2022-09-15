import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import ProjectManagementList from '../../components/ProjectManagementList'
import Footer from '../../components/footer'
import projectmanagement_bg from "../../img/projectmanagement_bg.jpeg";



const ProjectManagement =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle bg={projectmanagement_bg} pageTitle={'PROJECT MANAGEMENT'} pagesub={'Project Management'}/>
            <ProjectManagementList/>
            <Footer/>
        </Fragment>
    )
};
export default ProjectManagement;

