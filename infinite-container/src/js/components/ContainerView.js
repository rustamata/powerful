import React from "react"
import {observer} from "mobx-react";
import DevTools from "mobx-react-devtools"
import HoverButton from "./HoverButton"
import Box from "../models/Box"
import BoxView from "./BoxView"
import Container from "../models/Container"

export class ContainerView extends React.Component {
    render() {
        const container = this.props.container;
        return (
            <div className="container_style" onDoubleClick={this.onDoubleClick}>
                {container.items.map(this.eachElement)}
                <HoverButton onClickBtnContainerCallBack={this.addContainer}
                             onClickBtnBoxCallBack={this.addBox}>Add</HoverButton>
                <DevTools/>
            </div>
        );
    }

    eachElement = (element, i) => {
        if (element.type === "container")
            return (<ContainerView className="containerElement" container={element} onDblClickCallBack={this.removeItem}
                                   key={i} index={i}/>);
        else if (element.type === "box")
            return (<BoxView className="containerElement" box={element} onDblClickCallBack={this.removeItem} key={i}
                             index={i}/>);
    }

    onDoubleClick = (event) => {
        event.stopPropagation();
        if (this.props.onDblClickCallBack){
            this.props.onDblClickCallBack(this.props.index);
        }
    }

    removeItem = (i) => {
        this.props.container.remove(i);
    }

    addContainer = () => {
        this.props.container.add(
            Container.create({type: "container", items: []})
        );
    }

    addBox = () => {
        this.props.container.add(
            Box.create({type: "box", color: "Orange"})
        );
    }
}

export default observer(ContainerView)