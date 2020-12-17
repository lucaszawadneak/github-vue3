import { reactive, toRefs } from 'vue';
import api from '../services/api';

interface Response {
  data: {
    items: any[];
  };
}
interface Reactive {
  users: any[];
}

const state = reactive<Reactive>({
  users: [],
});

async function search(query: string) {
  await api
    .get('/search/users', { params: { q: query } })
    .then((res: Response) => {
      console.log(res.data.items);
      state.users = res.data.items;
    })
    .catch(err => console.error(err));
}

function handleSearch(query: string) {
  search(query);
}

export const data = { ...toRefs(state) };
export default handleSearch;
