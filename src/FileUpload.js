// FileUpload.js
import React, { useState } from 'react';
import { Storage } from 'aws-amplify';

function FileUpload() {
    const [selectedFile, setSelectedFile] = useState();

    const handleUploadChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            return;
        }

        const fileName = `${Date.now()}-${selectedFile.name}`;

        try {
            await Storage.put(fileName, selectedFile, {
                contentType: selectedFile.type,
            });

            alert('File uploaded successfully');
        } catch (error) {
            console.error('Error uploading file: ', error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleUploadChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default FileUpload;