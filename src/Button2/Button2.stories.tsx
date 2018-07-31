import * as React from "react";

import { storiesOf } from "@storybook/react";
import { Button2 } from "./Button2";
import { text, boolean } from "@storybook/addon-knobs/react";

(storiesOf("Components/Button2", module) as any).add(
    "basic Button 2",
    () => (
        <Button2
            label={text("label", "Enroll")}
            disabled={boolean("disabled", false)}
            onClick={() => alert("hello there")}
        />
    ),
    {
        info: {
            text: `
                ### Notes
              
                This is a button
              
                ### Usage
                ~~~js
                <Button
                  label={'Enroll'}
                  disabled={false}
                  onClick={() => alert('hello there')}
                />
                ~~~
            `
        }
    }
);
