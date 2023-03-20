import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import { useArticleMutations } from "./articleMutations";
import { CategoriesSelector } from "./CategoriesSelector";

export function ArticlesNew() {
  const [text, setText] = useState();
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const { createArticle } = useArticleMutations();
  const [image, setImage] = useState("");

  async function handleFileUpload(event) {
    const imageFile = event.target.files[0];

    const formData = new FormData();
    formData.append("image", imageFile);

    await fetch("http://localhost:4321/upload-image", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setImage(data.file);
      });
  }

  return (
    <>
      <h1 className="mb-4">Шинэ мэдээ</h1>

      <CategoriesSelector
        value={categoryId}
        onChange={(val) => setCategoryId(val)}
      />

      <input
        className="form-control mt-4 mb-4"
        placeholder="Мэдээний гарчиг"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <CKEditor
        editor={ClassicEditor}
        data={text}
        onChange={(event, editor) => {
          const data = editor.getData();
          setText(data);
          // console.log({ event, editor, data });
        }}
      />
      <div>
        <input type="file" name="image" onChange={handleFileUpload} />
      </div>
      <button onClick={() => createArticle({ title, categoryId, text, image })}>
        Хадгалах
      </button>

      {/* <div>{text}</div>
            <div dangerouslySetInnerHTML={{ __html: text }}></div> */}
    </>
  );
}
