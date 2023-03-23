import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

export function Blog() {
  const [blog, setBlog] = useState();
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/articles`).then((res) => {
      const { data, status } = res;
      console.log("hh");
      if (status === 200) {
        setBlog(data);
      } else {
        alert(`Aldaa garlaa: ${status}`);
      }
    });
  }, []);

  if (!blog) {
    return <div>Loading ...</div>;
  }
  return (
    <Container style={{ maxWidth: 1100 }}>
      {blog.map((blogList) => {
        return (
          <div key={blogList.id}>
            <h1>{blogList.title}</h1>
          </div>
        );
      })}
    </Container>
  );
}
