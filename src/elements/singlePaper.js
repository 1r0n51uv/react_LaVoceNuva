import React, {Component} from 'react';
import paper from "../assets/reading-the-newspaper_23-2147552265.jpg";

class SinglePaper extends Component {
    render() {
        return (
            <div className="col-md-4 col-sm-6" style={{marginTop: '2%'}}>
                <div className="card text-center">
                    <div className="card-header">
                        {this.props.title}
                    </div>
                    <img className="card-img-top" src={paper}/>

                    <div className="card-body">
                        <a style={{textDecoration: 'none', color: '#CB6B6B'}} href={this.props.body}>Leggi tutto.. <i className="fas fa-arrow-right"/></a>
                    </div>
                </div>

            </div>
        );
    }
}

export default SinglePaper;