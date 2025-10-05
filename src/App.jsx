import { useState } from "react";

function App() {
  const [file, setFile] = useState(null);

  const file_upload = () => {
    if (!file) {
      alert("กรุณาเลือกไฟล์");
      return;
    }

    const formData = new FormData();
    formData.append("myfile", file);

    fetch("http://localhost/FAD/fad/PHP/upload.php", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.text())
      .then((data) => {
        console.log("ผลลัพธ์จาก PHP:", data);
        alert(data);
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])} 
      />
      <button onClick={file_upload}>อัปโหลด</button> 

    </div>
  );
}

export default App;
