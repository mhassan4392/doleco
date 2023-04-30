import Axios from "~/utils/axios";
import useAuth from "./useAuth";

const useLogout = () => {
  const loading = ref(false);
  const error = ref(null);
  const { setUser, setToken } = useAuth();
  const token = useCookie("token");

  const logout = async (beforeClose = null) => {
    try {
      loading.value = true;
      error.value = null;
      const res = await Axios.post("/api/auth/logout", {
        body: { token: token.value },
      });

      loading.value = false;
      setUser(null);
      setToken(null);
      token.value = null;
      showSuccessToast("logout successfull");
      if (beforeClose) {
        beforeClose();
      }
    } catch (e) {
      loading.value = false;
      error.value = e.message || e;
      setUser(null);
      setToken(null);
      token.value = null;
      if (beforeClose) {
        beforeClose();
      }
    }
  };

  return { loading, error, logout };
};

export default useLogout;
