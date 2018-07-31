import * as React from "react";

import { storiesOf } from "@storybook/react";
import { Button } from "./Button";
import { text, boolean } from "@storybook/addon-knobs/react";

(storiesOf("Components/Button", module) as any)
    .add(
        "basic Button",
        () => (
            <Button
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
    )
    .add(
        "disabled Button",
        () => (
            <Button
                label={text("label", "Enroll")}
                disabled={boolean("disabled", true)}
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
                      disabled={true}
                      onClick={() => alert('hello there')}
                    />
                    ~~~
                `
            }
        }
    );
