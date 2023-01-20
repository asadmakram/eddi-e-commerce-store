import { Alert } from "react-bootstrap";

const Message = ({variant, content}) => {

  return <Alert variant={variant}>{content}</Alert>;
};
Message.defaultProps = {
  variant: "info",
};

export default Message;
