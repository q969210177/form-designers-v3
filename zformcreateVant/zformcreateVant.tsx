/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineComponent, h, PropType } from "vue";
import { componentsDataObj } from "./globalData/index";
import { IruleItem } from "./type/globalZformcreateVant";
// interface IformData {
//   []
// }
const zformcreateVant = defineComponent({
  name: "zformcreateVant",
  props: {
    rule: {
      type: Array as PropType<IruleItem[]>,
      default: () => {
        return [];
      },
    },
  },
  setup(props, { emit }) {
    //设置一下组件的事件
    function setCompoentsEvent(
      eventObj: undefined | { [x: string]: (v: any) => void }
    ) {
      if (eventObj && typeof eventObj === "object") {
        const newObj: { [x: string]: any } = {};
        for (const key in eventObj) {
          if (Object.prototype.hasOwnProperty.call(eventObj, key)) {
            const element = eventObj[key];
            const newKey =
              key.slice(0, 1).toUpperCase() + key.slice(1).toLowerCase();
            newObj[`on${newKey}`] = element;
          }
        }
        console.log(newObj, "evventObj");
      }
      return "";
    }
    //渲染form类型的组件
    function returnFormCompoents(
      ruleItem: IruleItem,
      propAndEvent: { [x: string]: any }
    ) {
      if (componentsDataObj[ruleItem.type]) {
        const returnDom = componentsDataObj[ruleItem.type];
        return (
          <van-field
            modelValue={ruleItem.value}
            name={ruleItem.fileId}
            label={ruleItem.label}
            rules={ruleItem.rule}
          >
            {{
              input: () =>
                h(returnDom, {
                  ...propAndEvent,
                }),
            }}
          </van-field>
        );
      }
      return "";
    }
    //渲染其他类型的组件 --- 不需要放在van-field里面的
    function returnOtherCompoents(ruleItem: IruleItem, propAndEvent: any) {
      if (componentsDataObj[ruleItem.type]) {
        const returnDom = componentsDataObj[ruleItem.type];
        return h(returnDom, {
          ...propAndEvent,
        });
      }
    }
    //通过一个函数来分发渲染
    function returnCompoents(ruleItem: IruleItem) {
      setCompoentsEvent(ruleItem.on);
      const propAndEvent: { [x: string]: any } = {
        ...ruleItem.props,
        ...ruleItem.on,
        modelValue: ruleItem.value,
        "onUpdate:modelValue": (v: any) => (ruleItem.value = v),
      };
      if (ruleItem.options) {
        propAndEvent.options = ruleItem.options;
      }
      if (ruleItem.isComponents) {
        return returnOtherCompoents(ruleItem, propAndEvent);
      }
      return returnFormCompoents(ruleItem, propAndEvent);
    }
    const dom = (
      <div class={["zformcreateVant"]}>
        <van-form
          onSubmit={(formData: any) => {
            emit("submit", formData);
          }}
        >
          <van-cell-group>
            {props.rule.map((ruleItem) => {
              return returnCompoents(ruleItem);
            })}
          </van-cell-group>
          <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
              提交
            </van-button>
          </div>
        </van-form>
      </div>
    );
    return () => dom;
  },
});
export default zformcreateVant;
