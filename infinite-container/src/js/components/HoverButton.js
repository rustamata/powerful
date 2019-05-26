import React from "react"

export class HoverButton extends React.Component {
    onBtnBoxClicked = () => {
        if (this.props.onClickBtnBoxCallBack) {
            this.props.onClickBtnBoxCallBack();
        }
    }

    onBtnContainerClicked = () => {
        if (this.props.onClickBtnContainerCallBack) {
            this.props.onClickBtnContainerCallBack();
        }
    }

    render = () => {
        return (
            <div className="tooltip_style containerElement popupbtncontainer">
                <span className="popupbtntext">{this.props.children}</span>
                <span className="tooltiptext popupleft" onClick={this.onBtnBoxClicked}
                      id="boxPopup">Box</span>
                <span className="tooltiptext popupright" onClick={this.onBtnContainerClicked}
                      id="containerPopup">Container</span>
            </div>
        );
    }
}

export default HoverButton