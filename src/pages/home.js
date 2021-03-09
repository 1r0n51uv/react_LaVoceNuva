import React, {Component} from 'react';
import {FirestoreCollection} from "react-firestore";
import Loader from "react-loader-spinner";

class Home extends Component {
    render() {
        return (
            <div>
                <div className="container" style={{marginTop: "2%"}}>
                    <h1>Home</h1>


                    <div className="row justify-content-center" style={{marginTop: "2%"}}>

                        <FirestoreCollection
                            path="blog"
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

                                    <div className="container">
                                        <div className="row justify-content-center">
                                            {
                                                data.map(post => (

                                                    post.category !== 'Giornale Completo' && <div key={post.id} className="col-md-4 col-sm-6" style={{marginTop: '2%'}}>
                                                        <div className="card text-center">
                                                            <div className="card-header">
                                                                {post.title}
                                                            </div>
                                                            <img className="card-img-top" src={post.img} alt="Card image cap"/>

                                                            <div className="card-body">
                                                                <p className="card-text">{post.body.substring(0, 200)}...</p>
                                                                <a style={{textDecoration: 'none', color: '#CB6B6B'}} href={post.id}>Leggi tutto.. <i className="fas fa-arrow-right"/></a>
                                                            </div>
                                                            <div className="card-footer" style={{color: '#343A40'}}>
                                                                <i className="far fa-clock"/> Gennaio-Febbraio 2021
                                                            </div>
                                                        </div>
                                                    </div>


                                                ))
                                            }
                                        </div>
                                    </div>


                                )


                            }}
                        />






                    </div>


                </div>

            </div>
        );
    }
}

export default Home;
