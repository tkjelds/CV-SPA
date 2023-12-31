import i18n from '../i18n';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


const ContactList = () => {
  const contacts = [
    {
      name: 'GitHub',
      link: 'https://github.com/tkjelds',
      icon: <FaGithub />,
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/tore-kjelds-46240b282/',
      icon: <FaLinkedin />,
    },
    {
      name: 'Email',
      link: 'mailto:tkjelds385@gmail.com',
      icon: <FaEnvelope />,
    },
  ];

  return (
    <div className='contact_list'>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <a href={contact.link} className="contact_reference" target="_blank" rel="noopener noreferrer">
              {contact.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};


export function Contact() {
  return (
    <div className="contact_container">
      <div className="contact_section right_section">
        <h1 className="floating get_in_touch">{i18n.t("section.contact.contact_me")}</h1>
        <p className='contact_me_description'>{i18n.t("section.contact.description")} </p>
      </div>
      <ContactList />
    </div>
  );
}
