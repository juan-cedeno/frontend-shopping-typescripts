import { confirmAlert  } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

      //@ts-ignore
      const options = {
          title: 'Title',
          message: 'Message',
          buttons: [
            {
              label: 'Yes',
              onClick: () => alert('Click Yes')
            },
            {
              label: 'No',
              onClick: () => alert('Click No')
            }
          ],
        };
        
        confirmAlert(options);
