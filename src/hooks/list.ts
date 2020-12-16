import { reactive, toRefs } from 'vue';
import api from '../services/api';

interface Response {
  data: any[];
}
interface Reactive {
  users: any[];
}

const state = reactive<Reactive>({
  users: [],
});

async function loadData(query: string) {
  await api
    .get('/search/users', { params: { query } })
    .then((res: Response) => {
      state.users = res.data;
      console.log(res.data);
    })
    .catch(err => console.error(err));
}

export default { loadData, ...toRefs(state) };
