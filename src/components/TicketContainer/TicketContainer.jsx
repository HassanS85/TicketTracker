import SubTicket from "../SubTicket/SubTicket";
import "./TicketContainer.scss"


const TicketContainer = ({team}) => {   
// function to make a tile for each of the 10 employees from the dataset.

    const personEach = team.map((person) => {
        return <SubTicket name={person.name} role={person.role} />

    });

        return <div className="ticket-container">{personEach}</div>
    
    }


export default TicketContainer