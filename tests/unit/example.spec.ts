import { shallowMount } from "@vue/test-utils";
import Navbar from "@/components/Navigation.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Navbar, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
