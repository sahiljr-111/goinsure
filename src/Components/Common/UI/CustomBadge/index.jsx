import { Tag } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const CustomBadges = ({ tagClassName, children, ...props }) => {
  return (
    <div className={tagClassName}>
      <Tag {...props}>{children}</Tag>
    </div>
  );
};

export default CustomBadges;
