import Axios from "~/utils/axios";
const user = ref(null);
const token = ref(null);
const useAuth = () => {
  const loading = ref(true);
  const error = ref(false);

  const setToken = (t) => {
    token.value = t;
  };

  const setUser = (u) => {
    user.value = u;
  };

  const getUser = async () => {
    const tokenCookie = useCookie("token");
    token.value = tokenCookie.value;
    try {
      if (token.value) {
        error.value = false;
        const res = await Axios.post("/api/auth/user", {
          body: { token: token.value },
        });
        loading.value = false;
      }

      loading.value = false;
    } catch (e) {
      error.value = e.response?.data?.message || e.message;
      loading.value = false;
    }
  };

  return { loading, error, user, token, setToken, setUser, getUser };
};

export default useAuth;
