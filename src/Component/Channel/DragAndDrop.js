import React, { Component } from 'react'

class DragAndDrop extends Component {
    constructor(){
        super();
        this.state = {
            drag: false
        }
    }
    dropRef = React.createRef();
 //   enableTruth = false;
    handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
    handleDragIn = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.dragCounter++;
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            this.setState({drag: true})
        }
    };
    handleDragOut = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.dragCounter--;
        if (this.dragCounter === 0) {
            this.setState({drag: false})
        }
    };
    handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({drag: false});
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            this.props.handleDrop(e.dataTransfer.files);
         //   e.dataTransfer.clearData();
            this.dragCounter = 0;
        }
    };
    componentDidMount() {
        if (this.props.enable){
            let div = this.dropRef.current;
            div.addEventListener('dragenter', this.handleDragIn);
            div.addEventListener('dragleave', this.handleDragOut);
            div.addEventListener('dragover', this.handleDrag);
            div.addEventListener('drop', this.handleDrop);
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log("DidUpdate");
        // console.log(prevProps);
        // if (this.props.enable !== prevProps.enable && this.props.enable === false){
        //     let div = this.dropRef.current;
        //     div.removeEventListener('dragenter', this.handleDragIn);
        //     div.removeEventListener('dragleave', this.handleDragOut);
        //     div.removeEventListener('dragover', this.handleDrag);
        //     div.removeEventListener('drop', this.handleDrop);
        // }
    }

    componentWillUnmount() {
        if (this.props.enable){
            let div = this.dropRef.current;
            div.removeEventListener('dragenter', this.handleDragIn);
            div.removeEventListener('dragleave', this.handleDragOut);
            div.removeEventListener('dragover', this.handleDrag);
            div.removeEventListener('drop', this.handleDrop);
        }
    }
    componentWillReceiveProps(nextProps, nextContext) {
        //console.log("RecieveProp");
        //console.log(nextProps);
        if (this.props.enable !== nextProps.enable){
            console.info("here");
            if (nextProps.enable === true){
                let div = this.dropRef.current;
                div.addEventListener('dragenter', this.handleDragIn);
                div.addEventListener('dragleave', this.handleDragOut);
                div.addEventListener('dragover', this.handleDrag);
                div.addEventListener('drop', this.handleDrop);
            }
        }
    }
    render() {
        return(
            <div
                style={{display: 'block', position: 'relative'}}
                ref={this.dropRef}
            >
                {this.state.dragging ?
                <div
                    style={{
                  //      border: 'dashed grey 4px',
                        backgroundColor: 'rgba(255,255,255,.8)',
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: 9999
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: 0,
                            left: 0,
                            textAlign: 'center',
                            color: 'grey',
                            fontSize: 36
                        }}
                    >
                        <div style={{fontFamily:"IRANSansWeb"}}>فایل را آپلود کنید</div>
                    </div>
                </div> : null
                }
                {this.props.children}
            </div>
        )
    }
}
export default DragAndDrop