import React, {Component} from 'react';
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';
import firebase from "firebase"



class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: "",
            isUploading: false,
            progress: 0,
            avatarURL: "",
            title: "",
            author: "",
            body: "",
            category: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.createPost();
    }

    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
        this.setState({ isUploading: false });
    };

    handleUploadSuccess = filename => {
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        firebase
            .storage()
            .ref("blog")
            .child(filename)
            .getDownloadURL()
            .then(url => {
                this.setState({avatarURL: url});
            });
    };


    createPost(){
        firebase.firestore().collection('blog').add({
            title: this.state.title,
            author: this.state.author,
            body: this.state.body,
            img: this.state.avatarURL,
            category: this.state.category,
        });
        this.setState({
            avatar: "",
            isUploading: false,
            progress: 0,
            avatarURL: "",
            title: "",
            author: "",
            body: "",
            category: ""
        });
    }

    render() {
        return (
            <div className="container" style={{marginTop: "5%"}}>
                <div className="row justify-content-center">

                    <div className="col-md-6">

                        <form onSubmit={this.handleSubmit}>


                            <div className="form-group">

                                <label>Titolo</label>

                                <input
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter title"/>
                            </div>

                            <div className="form-group">

                                <label>Autore</label>

                                <input
                                    name="author"
                                    value={this.state.author}
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Author"/>

                            </div>

                            <div className="form-group">
                                <label>Categoria</label>
                                <select
                                    name="category"
                                    value={this.state.category}
                                    onChange={this.handleChange}
                                    className="form-control" id="exampleFormControlSelect1">
                                    <option> </option>
                                    <option>Associazioni</option>
                                    <option>Leggi</option>
                                    <option>Scienza e Medicina</option>
                                    <option>Cultura</option>
                                    <option>Fede</option>
                                    <option>Curiosita</option>
                                    <option>Giornale Completo</option>
                                </select>
                            </div>

                            <div className="form-group">

                                <label>Articolo</label>

                                <textarea name="body"
                                          value={this.state.body}
                                          onChange={this.handleChange}
                                          className="form-control"
                                          rows="3"/>
                            </div>

                            <div className="form-group">
                                {this.state.isUploading && <p>Progress: {this.state.progress} %</p>}
                                <CustomUploadButton
                                    accept="image/*"
                                    name="avatar"
                                    storageRef={firebase.storage().ref("blog")}
                                    onUploadStart={this.handleUploadStart}
                                    onUploadError={this.handleUploadError}
                                    onUploadSuccess={this.handleUploadSuccess}
                                    onProgress={this.handleProgress}
                                    style={{backgroundColor: 'green', color: 'white', padding: 10, borderRadius: 4}}
                                >
                                    Carica Foto
                                </CustomUploadButton>
                            </div>




                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>

                </div>
            </div>
        );
    }
}

export default Admin;