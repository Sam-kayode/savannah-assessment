import { computed, ref } from "vue";
import { User } from "./types";
import axios from "axios";

const BASE_URL = "https://api.github.com";

const searchTerm = ref<string>("");

const users = ref<User[]>([]);


const sortBy = ref<string>("Login");

const allUsers = computed(() => {
  return sortUsers(users.value)
});

const centralise = ref<boolean>(true);

const loading = ref<boolean>(false);

const currentPage = ref<number>(1);

const totalPage = computed(() => {
  return Math.ceil(totalUsers.value / 9) as number;
});

const totalUsers = ref<number>(0);

function sortUsers(users) {
  return users.sort((a, b) => {
    if (sortBy.value === "Login") {
      return a.login.localeCompare(b.login);
    } else if (sortBy.value === "Type") {
      return a.type.localeCompare(b.type);
    }
  });
}

export const useUserModule = () => {
  const handleGetUsers = async () => {
    try {
      loading.value = true;
      const { data } = await axios.get(
        `${BASE_URL}/search/users?q=${searchTerm.value}&per_page=9`
      );
      currentPage.value = 1;
      totalUsers.value = data.total_count;
      const completeUsers = data.items;
      loading.value = false;
      centralise.value = false;
      users.value = [...completeUsers];
    } catch (error) {
      console.log(error);
    }
  };

  const handlePagination = async (direction: string) => {
    let index = currentPage.value;

    // handle direction based on arguments passed to the function
    if (direction == "next") {
      index++;
    } else {
      index--;
    }

    try {
      loading.value = true;
      const response = await axios.get(
        `${BASE_URL}/search/users?q=${searchTerm.value}&per_page=9&page=${index}`
      );
      const users = response.data.items;
      currentPage.value = index;
      loading.value = false;
      users.value = [...users];
    } catch (error) {
      console.log(error);
    }
  };

  return {
    searchTerm,
    handleGetUsers,
    users,
    loading,
    centralise,
    handlePagination,
    totalPage,
    currentPage,
    totalUsers,
    sortBy,
    allUsers
  };
};
