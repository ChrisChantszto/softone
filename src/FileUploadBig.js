import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { StorageManager } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);

function FileUploadBig() {
    return (
        <StorageManager
            acceptedFileTypes={['.jpeg', '.jpg', 'image/png', '.pdf',]}
            accessLevel="public"
            maxFileCount={1}
            isResumable
        />
    );
};

export default FileUploadBig;