import React from "react"
import {observer} from "mobx-react";
import DevTools from 'mobx-react-devtools'

class BoxView extends React.Component {
    render() {
        const box = this.props.box;
        return (
            <div className="box_style" style={{color: box.color, backgroundColor: box.color}}
                 onClick={box.generateColor} onDoubleClick={this.onDoubleClick}>
                <DevTools/>
            </div>
        );
    }
    onDoubleClick = (event) => {
        event.stopPropagation();
        if (this.props.onDblClickCallBack){
            this.props.onDblClickCallBack(this.props.index);
        }
    }
}
export default observer(BoxView)