import { reactive, toRefs } from 'vue';

const state = reactive({
  visible: false,
});

function setVisible(visibleBool: boolean) {
  state.visible = visibleBool;
}

export default { setVisible, ...toRefs(state) };
