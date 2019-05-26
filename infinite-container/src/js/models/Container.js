import {types} from "mobx-state-tree";
import Box from "./Box";

const Container = types
    .model("Container", {
        type: types.literal("container"),
        items: types.maybe(
            types.array(
                types.union(
                    types.late(() => types.union(Container, Box))
                )
            )
        )
    })
    .actions(self => ({
        add(item) {
            self.items.push(item);
        },
        remove(i) {
            self.items.splice(i, 1);
        }
    }))
    .views(self => ({
        getItems() {
            return self.items;
        }
    }));

export default Container;