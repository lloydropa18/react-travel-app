import Card from "../components/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Dashboard = () => {
  const fetchData = async () => {
    const response = await axios.get("http://localhost:8000/posts");
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="app">
      <div className="dashboard">
        <div className="dashboard-info-container">
          <div>
            <h1>Adventure anywhere</h1>
            <p>Keep calm & travel on</p>
          </div>
          <button>Add your adventure</button>
        </div>
        <div className="posts-container">
          {/* {posts?.map((post) => {
            return (
              <Link to={`/posts/${post.id}`} id="link" key={post.id}>
                <Card post={post} />
              </Link>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
