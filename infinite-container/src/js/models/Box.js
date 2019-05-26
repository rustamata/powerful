import {types} from "mobx-state-tree"
import Color from "./Color"

const Box = types
    .model("Box", {
        type: types.literal("box"),
        color: types.optional(types.string, "Orange")
    })
    .actions(self => ({
        set(value) {
            self.color = value;
        },
        generateColor() {
            self.color = Color.generateColor();
        }
    }))
    .views(self => ({
        getColor() {
            return self.color;
        }
    }));

export default Box;