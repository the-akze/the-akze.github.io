import { LuGithub, LuInstagram, LuLinkedin, LuYoutube } from "react-icons/lu";

// https://react-icons.github.io/react-icons/icons/lu/
const socialIcons = {
  Instagram: LuInstagram,
  LinkedIn: LuLinkedin,
  YouTube: LuYoutube,
  GitHub: LuGithub,
};

function SocialContainer(props) {
  if (!props.data) {
    return <p>?</p>
  }
  return (
    <div className="social-container">
      {Object.keys(props.data).map((value, index) => {
        let IconElement = socialIcons[value];
        return (
            <a className="social-item" id={"social-" + value} href={props.data[value]} target="_blank" key={index}>
                {IconElement ? <IconElement className="social-icon"></IconElement> : null}
                <p className="social-label">{value}</p>
            </a>
        )
      })}
    </div>
  );
}

export default SocialContainer;
