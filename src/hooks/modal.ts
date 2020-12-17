import { reactive, toRefs } from 'vue';

interface ItemProps {
  avatar_url: string;
  login: string;
  html_url: string;
}
interface VisibleProps {
  visibleBool: boolean;
  item?: ItemProps;
}

interface Reactive {
  visible: boolean;
  userInfo: ItemProps | {};
}

const state = reactive<Reactive>({
  visible: false,
  userInfo: {},
});

function setVisible({ visibleBool, item }: VisibleProps) {
  state.visible = visibleBool;
  if (!visibleBool) {
    state.userInfo = false;
  }
  if (item) {
    state.userInfo = item;
  }
}

export const useModal = { ...toRefs(state) };

export default setVisible;
