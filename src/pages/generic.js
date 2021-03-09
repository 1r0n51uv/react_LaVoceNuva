import React, {Component} from 'react';
import {FirestoreCollection} from 'react-firestore'
import Loader from 'react-loader-spinner'

class Generic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: ""
        };
    }

    componentDidMount(){
        this.setPage(this.props.location.pathname);
    }

    setPage(val) {
        switch (val) {

            case '/home':
                this.setState({page: 'Home'});
                break;
            case '/associazioni':
                this.setState({page: 'Associazioni'});
                break;
            case '/leggi':
                this.setState({page: 'Leggi'});
                break;
            case '/scienzamedicina':
                this.setState({page: 'Scienza e Medicina'});
                break;
            case '/cultura':
                this.setState({page: 'Cultura'});
                break;
            case '/fede':
                this.setState({page: 'Fede'});
                break;
            case '/curiosita':
                this.setState({page: 'Curiosita'});
                break;
            case '/giornale':
                this.setState({page: 'Giornale Completo'});
                break;
            default:
                this.setState({page: 'Home'});

        }

    }


    render() {
        return (
            <div className="container" style={{marginTop: "2%"}}>
                <h1>{this.state.page}</h1>

                <div className="row justify-content-center" style={{marginTop: "2%"}}>

                    <FirestoreCollection
                        path="blog"
                        filter={['category', '==', this.state.page]}
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
                                                <div key={post.id} className="col-md-4 col-sm-6" style={{marginTop: '2%'}}>
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
        );
    }
}

export default Generic;
