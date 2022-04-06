import React from "react"
import { useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';

const PrimeFileUpload=()=>{
    const toast = useRef(null);



    const onUpload = () => {
        //toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }

    return(
        <div>
            <Toast ref={toast}></Toast>

            <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
            <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
            <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />
            <div className="card">
            <h5>Advanced</h5>
                <FileUpload name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" onUpload={onUpload} multiple accept="image/*" maxFileSize={1000000}
                 emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
            </div>
        </div>
    )
}

export default PrimeFileUpload