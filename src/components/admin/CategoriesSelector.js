import axios from "axios";
import { useEffect, useState } from "react";

export function CategoriesSelector({ value, onChange }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4321/categories`).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setCategories(data);
      } else {
        alert(`Aldaa garlaa: ${status}`);
      }
    });
  }, []);
  console.log(categories);
  return (
    <>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Ангилалгүй</option>

        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </>
  );
}
