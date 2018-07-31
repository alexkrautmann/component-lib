import React from "react";

import { storiesOf } from "@storybook/react";

storiesOf("Welcome", module).add(
    "to your new Storybook🎊",
    () => <div>This is an example component</div>,
    {
        info: {
            text: `
                ### Notes
                
                Hello world!:
                
                ### Usage
                
                ~~~js
                <div>This is an example component</div>
                ~~~
                
                ### To use this Storybook
                
                Explore the panels on the left.
            `
        }
    }
);
