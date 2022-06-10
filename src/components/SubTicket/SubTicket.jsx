import "../SubTicket/SubTicket.scss";
import  Button from "../Button/Button.jsx";

const SubTicket = ({name, role}) => {
    return (
        <div className="subTicket-tile">
            <p>{name}</p>
            <p>{role}</p>
            <div className="subTicket-button">
                <Button />

            </div>

        </div>

    )
}

export default SubTicket;