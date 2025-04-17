import "./profileCard.module.css";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img
        src="https://i.pravatar.cc/150?img=8"
        alt="Profile"
        className="profile-image"
      />
      <h2 className="profile-name">Luis Miguel</h2>
      <p className="profile-role">Full-Stack Developer</p>
      <p className="profile-description">
        Apaixonado por tecnologia, desenvolvimento web e inteligência
        artificial. Sempre em busca de novos desafios!
      </p>
      <button className="profile-button">Conectar</button>
    </div>
  );
};

export default ProfileCard;
