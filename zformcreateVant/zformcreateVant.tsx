import { defineComponent, h } from "vue";

const zformcreateVant = defineComponent({
  name: "zformcreateVant",
  setup() {
    const dom = (
      <div class={["zformcreateVant"]}>
        <van-form>
          <van-cell-group></van-cell-group>
        </van-form>
      </div>
    );
    return () => dom;
  },
});
export default zformcreateVant;
