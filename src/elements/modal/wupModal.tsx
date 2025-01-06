import { WUPModalElement } from "web-ui-pack";
import BaseWUP from "@/elements/baseWUP";
import * as styles from "./wupModal.m.scss";

WUPModalElement.$use();

interface Props extends React.PropsWithChildren<Partial<WUP.Modal.Options>> {
  className?: string;
}
export default class ModalWUP extends BaseWUP<WUPModalElement, Props> {
  updateOptions(nextProps: Props, isInit: boolean): void {
    super.updateOptions(nextProps, isInit);
    if (this.domEl.$refClose) {
      this.domEl.$refClose.id = "closeModal";
    }
  }

  goRender(props: Record<string, unknown>): JSX.Element {
    return (
      <wup-modal {...props} w-target="prev" class={` ${styles.ctrl} ${props.className}`.trim()}>
        {this.props.children}
      </wup-modal>
    );
  }
}
