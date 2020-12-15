import { reactive, toRefs } from 'vue';

export default function useLoading() {
  const state = reactive({
    loading: true,
  });

  function setLoading(visibleBool: boolean) {
    state.loading = visibleBool;
  }

  return { setLoading, ...toRefs(state) };
}
