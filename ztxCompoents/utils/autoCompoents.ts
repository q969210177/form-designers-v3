import type { App } from "vue";
import {
  Button,
  Cell,
  CellGroup,
  ConfigProvider,
  DatetimePicker,
  Field,
  Form,
  NavBar,
  Popup,
} from "vant";
import "vant/lib/index.css";
import "lib-flexible";
const compoentsArr = [
  Button,
  NavBar,
  ConfigProvider,
  CellGroup,
  Cell,
  Field,
  Form,
  Popup,
  DatetimePicker,
];
export function autoCompoents(app: App) {
  compoentsArr.forEach((v) => {
    app.use(v);
  });
}
