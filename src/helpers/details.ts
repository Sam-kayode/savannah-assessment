import { computed, ref } from "vue";
import { User, GitHubRepositoryInfo } from "./types";
import axios from "axios";
import { useToast } from "vue-toastification";

const BASE_URL = "https://api.github.com";

const selectedUser = ref<User>();
const repositories = ref<GitHubRepositoryInfo>();
const loading = ref<boolean>(false);

export const useDetailsModule = () => {
  const toast = useToast();

  const handleGetUserDetails = async (url: string) => {
    try {
      const response = await axios.get(url);
      repositories.value = response.data.data;
    } catch (error) {
      toast.error(error.message);
    }
  };

  return {
    handleGetUserDetails,
    selectedUser,
    repositories
  };
};
