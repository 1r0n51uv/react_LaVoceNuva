import React, {Component} from 'react';
import firebase from 'firebase';
import { FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon} from 'react-share'

class Single extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: this.props.location.pathname.substring(1, this.props.location.pathname.length),
            title: "",
            author: "",
            img: "",
            body: "",
            category: ""
        }

    }

    componentDidMount(){
        firebase.firestore().collection('blog').doc(this.state.key).get().then(value => {
            this.setState({
                title: value.data()['title'],
                author: value.data()['author'],
                img: value.data()['img'],
                body: value.data()['body'],
                category: value.data()['category']
            });
        }).catch(err => {
            console.log(err);
        });

    }


    render() {
        return (

            <div className="container" style={{marginTop: "5%", marginBottom: "5%"}}>

                {
                    this.state.title !== "" && <div className="row justify-content-center">

                        <div className="col-md-9 col-sm-12">
                            <div className="card text-center">
                                <div className="card-header">
                                    {this.state.title}
                                </div>
                                <img className="card-img-top" src={this.state.img} alt="Card image cap"/>

                                <div className="card-body" style={{textAlign: "left"}}>
                                    <p className="card-text">{this.state.body}</p>
                                    <h5>{this.state.author}</h5>
                                    <div className="row justify-content-center">

                                        <div className="col-md-1">
                                            <FacebookShareButton
                                                url={window.location.href}
                                                quote={this.state.title}s>
                                                <FacebookIcon
                                                    size={52}
                                                    round />
                                            </FacebookShareButton>
                                        </div>

                                        <div className="col-md-1">
                                            <WhatsappShareButton
                                                url={window.location.href}
                                                title={this.state.title}
                                                separator=":: ">
                                                <WhatsappIcon size={52} round />
                                            </WhatsappShareButton>
                                        </div>




                                    </div>


                                </div>
                            </div>

                        </div>



                    </div>
                }



            </div>
        );
    }
}

export default Single;