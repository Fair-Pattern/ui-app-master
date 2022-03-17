import React, {Component} from 'react';
import Slider from 'react-slick';
import '../../index.scss';
import Breadcrumb from "../common/breadcrumb";
import Root from "../layouts/Root";
import ReactDom from "react-dom";

class PageNotFound extends Component {

    constructor (props) {
        super (props)

    }

    render (){

        return (
            <div>
                <Breadcrumb title={'404 Page'}/>

                <section className="p-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="error-section">
                                    <h1>404</h1>
                                    <h2>page not found</h2>
                                    <a href="/" className="btn btn-solid">back to home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


const NotFoundPage = (<Root>
    <PageNotFound />
</Root>)
if(typeof document !== "undefined" && document.getElementById('notFoundPage')){
    ReactDom.render(NotFoundPage, document.getElementById('notFoundPage'));
}