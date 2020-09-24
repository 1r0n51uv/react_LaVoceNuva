import React, {Component} from 'react';
import Loader from 'react-loader-spinner';
import {FirestoreCollection} from "react-firestore";
import SinglePaper from "../elements/singlePaper";

class Newspaper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "Giornale completo"
        }
    }


    render() {
        return (
            <div className="container" style={{marginTop: "2%"}}>
                <h1>{this.state.page}</h1>



                <FirestoreCollection
                    path="blog"
                    filter={['category', '==', 'Giornale Completo']}
                    render={({isLoading, data}) => {
                        return isLoading ? (
                            <div className="col-md-12 text-center">
                                <Loader
                                    type="RevolvingDot"
                                    color="black"
                                    height="100"
                                    width="100"
                                />
                            </div>
                        ) : (

                            <div className="row justify-content-center" style={{marginTop: "2%"}}>
                                {
                                    data.map(post => (
                                        <SinglePaper
                                            title={post.title}
                                            body={post.body}
                                        />

                                    ))
                                }

                            </div>
                        )


                    }}
                />




            </div>




        );
    }
}

export default Newspaper;