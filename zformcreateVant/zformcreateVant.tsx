/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineComponent, h, PropType } from "vue";
import { componentsDataObj } from "./globalData/index";
import { IruleItem } from "./type/globalZformcreateVant";
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
    //渲染form类型的组件
    function returnFormCompoents(ruleItem: IruleItem) {
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
                  modelValue: ruleItem.value,
                  ...{
                    "onUpdate:modelValue": (v: any) => {
                      ruleItem.value = v;
                    },
                  },
                }),
            }}
          </van-field>
        );
      }
      return "";
    }
    //渲染其他类型的组件 --- 不需要放在van-field里面的

    //通过一个函数来分发渲染
    function returnCompoents(ruleItem: IruleItem) {
      // console.log(ruleItem?.isComponents);
      // if (ruleItem.isComponents) {
      //   return returnFormCompoents();
      // }
      return returnFormCompoents(ruleItem);
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
