import './style.scss';

const TorresSubtitle: React.FC<{text:string}> = ({text}) => {
  return <h3 className="torres-subtitle">{text}</h3>;
};

export default TorresSubtitle;