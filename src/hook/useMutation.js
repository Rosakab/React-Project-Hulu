import {useState} from "react";

const useMutation = (func, onSuccess) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const mutate = async (body) => {
    try {
      let data = await func(body);
      setData(data);
      onSuccess(data);
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

 

  return { data, loading, error,mutate };
};

export default useMutation;
