import React from "react"
import Container from "../models/Container";
import ContainerView from "./ContainerView"

class MainForm extends React.Component {
    constructor(props) {
        super(props);
        this.container = Container.create({type: "container", items: []});
    }

    render() {
        return (
            <div>
                <div className="padding_top_block">
                    <ContainerView container={this.container}></ContainerView>
                </div>
                <div className="div_center_w800_style padding_topleft_block">
                    <form>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary" type="button"
                                        onClick={this.toJsonClicked}>Create JSON = >
                                </button>
                            </div>
                            <textarea id="outJSON" className="form-control min-height_100px" readOnly></textarea>
                        </div>

                        <div className="input-group">
                            <textarea id="inJSON" className="form-control min-height_100px"></textarea>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button"
                                        onClick={this.fromJsonClicked}> = > Build
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    toJsonClicked = () => {
        document.getElementById("outJSON").value = JSON.stringify(this.container);
    }

    fromJsonClicked = () => {
        const inJSON = document.getElementById("inJSON").value;
        let inObject;
        try {
            inObject = JSON.parse(inJSON);
        } catch (e) {
            alert("Unable to parse JSON document: " + e.message);
        }
        this.container = Container.create(inObject);
        this.forceUpdate();
    }
}

export default MainForm