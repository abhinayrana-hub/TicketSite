import React from 'react';
import Popup from '../components/Popup';
import { useStateContext } from '../contexts/ContextProvider';
import TicketFields from '../components/TicketFields';

const CreateTicket = () => {
    const{openPopup, setOpenPopup} = useStateContext();

  return (
    <div>
          <Popup
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}>
              <TicketFields />
          </Popup>
    </div>
  )
}

export default CreateTicket