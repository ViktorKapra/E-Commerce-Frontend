import { WUPTextareaControl } from "web-ui-pack";
import BaseControl, { BaseControlProps } from "./baseControl";
import * as styles from "./textArea.m.scss";

WUPTextareaControl.$use(); // register control in the browser
// WUPTextControl.$defaults.clearButton = false;

interface Props extends BaseControlProps<string, WUPTextareaControl, WUP.Text.Options> {}

export default class TextArea extends BaseControl<WUPTextareaControl, Props> {
  goRender(props: Record<string, unknown>): JSX.Element {
    return <wup-textarea {...props} class={` ${styles.ctrl} ${props.className}`.trim()} />;
  }
}
