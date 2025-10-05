<?php
// อนุญาตทุก origin (ทดสอบ)
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// ถ้าเป็น preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
       exit(0);
}

// โค้ดอัปโหลดไฟล์ตามปกติ
if (isset($_FILES['myfile'])) {
       $file = $_FILES['myfile'];
       $uploadDir = "uploads/";
       if (!is_dir($uploadDir)) mkdir($uploadDir, 0777, true);
       $targetPath = $uploadDir . basename($file['name']);

       if (move_uploaded_file($file['tmp_name'], $targetPath)) {
              echo "อัปโหลดสำเร็จ: " . $file['name'];
       } else {
              echo "อัปโหลดไม่สำเร็จ!";
       }
} else {
       echo "ไม่มีไฟล์ถูกส่งมา!";
}
?>
