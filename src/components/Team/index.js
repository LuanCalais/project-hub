import Card from "../Card";
import "./Team.css";

const Team = ({
  label,
  primaryColor,
  secondaryColor,
  collaborators,
  deleteCollaborator,
  favoriteChange,
}) => {
  const cssLabel = { borderBottom: `3px solid ${primaryColor}` };
  const cssBackgrond = { background: secondaryColor };
  return (
    <>
      {collaborators.length > 0 && (
        <div style={cssBackgrond} className="team">
          <h1 style={cssLabel}>{label}</h1>
          <div className="cards-box">
            {collaborators.map((col) => (
              <Card
                key={Math.random()}
                name={col.collaboratorName}
                picture={col.pictureImageLink}
                position={col.positionName}
                id={col.id}
                legend={col.legend}
                primaryColor={primaryColor}
                deleteCollaborator={deleteCollaborator}
                favorite={col.favorite}
                favoriteChange={favoriteChange}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Team;
