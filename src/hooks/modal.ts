import { reactive, toRefs } from 'vue';

export default function useModal() {
  const state = reactive({
    visible: true,
  });

  function setVisible(visibleBool: boolean) {
    state.visible = visibleBool;
  }

  return { setVisible, ...toRefs(state) };
}
