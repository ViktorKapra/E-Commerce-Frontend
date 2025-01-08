import WUPNotifyElement, { NotifyOpenCases } from "web-ui-pack/notifyElement";
import BaseWUP from "@/elements/baseWUP";
import { BaseControlProps } from "@/elements/controls/baseControl";

WUPNotifyElement.$use();

interface Props extends BaseControlProps<WUP.Notify.Options> {
  openElement: boolean;
  title: string;
}

type NotifyElementType = WUPNotifyElement<WUP.Notify.Options, WUP.Notify.EventMap>;

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
        <p> {this.props.title}</p>
      </wup-notify>
    );
  }

  render(): JSX.Element {
    return this.goRender({
      class: this.props.className,
      ref: (el: NotifyElementType) => {
        this.domEl = el || (this.domEl as WUPNotifyElement) || ({} as WUP.Notify.Options);
      },
      title: this.props.title,
    });
  }
}
