import profile_picture from "./img/Profile_picture_pixelart.png"
import i18n from '../i18n';

export function AboutMe() {
  return (
    <div className="about_me_section right_section" >
      <div className="about_me_description">
        <h1 className="floating">{i18n.t("section.about_me.hello")}</h1>
        <p>
          {i18n.t("section.about_me.description")}
        </p>
      </div>
      <img className="profile_picture" src={profile_picture} alt="profile_picture" />
    </div>
  );
}