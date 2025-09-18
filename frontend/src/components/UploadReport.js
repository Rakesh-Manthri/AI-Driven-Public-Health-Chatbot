import React, { useState } from 'react';
import { api } from '../api';

function UploadReport() {
  const [file, setFile] = useState(null);

  const upload = async () => {
    if(!file) return;
    const formData = new FormData();
    formData.append('report', file);
    formData.append('userId','USER_ID'); 
    try {
      await api.post('/reports', formData, { headers: {'Content-Type':'multipart/form-data'} });
      alert('Uploaded!');
    } catch(err) { console.log(err); }
  }

  return (
    <div className="card">
      <h2>📎 Upload Medical Report</h2>
      <input type="file" onChange={e=>setFile(e.target.files[0])} />
      <button onClick={upload}>Upload</button>
    </div>
  );
}

export default UploadReport;

