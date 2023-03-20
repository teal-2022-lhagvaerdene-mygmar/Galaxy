import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Highlighter from "react-highlight-words";
import { useSearchParams } from "react-router-dom";

export function CategoriesList({ list, onChange, searchedQuery, onComplete }) {
  if (list.length === 0) {
    return <h3>Ийм үр дүн олдсонгүй</h3>;
  }

  return (
    <>
      {list.map((item) => (
        <ListItem
          searchedQuery={searchedQuery}
          key={item.id}
          category={item}
          onChange={onChange}
          onComplete={onComplete}
        />
      ))}
    </>
  );
}

function ListItem({ category, onChange, searchedQuery, onComplete }) {
  const [searchParams, setSearchParams] = useSearchParams({});

  function handleDelete() {
    if (window.confirm("Delete?")) {
      axios
        .delete(`http://localhost:4321/categories/${category._id}`)
        .then((res) => {
          const { status } = res;
          if (status === 200) {
            onComplete();
            onChange();
          }
        });
    }
  }

  return (
    <Card key={category._id} className="mb-2">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <Highlighter
            highlightClassName="p-0 bg-warning"
            searchWords={[searchedQuery]}
            autoEscape={true}
            textToHighlight={category.name}
          />

          <div>
            <Button
              variant="outline-primary"
              onClick={() => setSearchParams({ editing: category._id })}>
              Засах
            </Button>{" "}
            <Button variant="outline-danger" onClick={handleDelete}>
              Устгах
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
