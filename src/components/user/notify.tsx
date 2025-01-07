import WUPNotifyElement, { NotifyOpenCases } from "web-ui-pack/notifyElement";
import BaseWUP from "@/elements/baseWUP";
import { BaseControlProps } from "@/elements/controls/baseControl";

WUPNotifyElement.$use();

interface Props extends BaseControlProps<WUP.Notify.Options> {
  openElement: boolean;
}

export default class NotifyElement extends BaseWUP<WUPNotifyElement, Props> {
  updateOptions(nextProps: Props, _isInit: boolean) {
    super.updateOptions(nextProps, _isInit);
    if (nextProps.openElement) {
      this.domEl.$open().then(() => {});
    }
  }

  goRender(props: Record<string, unknown>): JSX.Element {
    return (
      <wup-notify
        {...props}
        w-openCase={NotifyOpenCases.onManualCall}
        w-placement="top-right"
        w-selfRemove={false}
        w-autoclose="3000"
        w-pauseonhover="true"
        w-closeonclick="true"
        w-pauseonwinblur="true"
        content="Profile updated"
        class={`${props.className}`.trim()}
      >
        <p> Update succeeded</p>
      </wup-notify>
    );
  }
}
