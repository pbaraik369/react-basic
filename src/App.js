import Navbar from "./component/Navbar";
import Filter from "./component/Filter";
import Cards from "./component/Cards";
import Spinner from "./component/Spinner";
import { filterData, apiUrl } from "./data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cotegory, setCotegory] = useState(filterData[0].title);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      console.log(data);
      setCourses(data.data);
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-indigo-400">
      <Navbar />
      <Filter
        filterData={filterData}
        cotegory={cotegory}
        setCotegory={setCotegory}
      />
      <div className="w-11/12 flex flex-wrap justify-center items-center max-w-[1200px] min-h-[50vh] mx-auto">
        {loading ? (
          <Spinner />
        ) : (
          <Cards courses={courses} cotegory={cotegory} />
        )}
      </div>
    </div>
  );
}

export default App;
