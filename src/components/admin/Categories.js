import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
export function Categories() {
  const [text, setText] = useState();

  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        data={text}
        onChange={(event, editor) => {
          const data = editor.getData();
          setText(data);
          // console.log({ event, editor, data });
        }}
      />

      <div>{text}</div>

      <div dangerouslySetInnerHTML={{ __html: text }}></div>
    </>
  );
}
