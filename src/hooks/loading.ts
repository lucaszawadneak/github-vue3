import { reactive, toRefs } from 'vue';

const state = reactive({
  loading: true,
});

function setLoading(loadingBool: boolean) {
  state.loading = loadingBool;
}

export default { setLoading, ...toRefs(state) };
