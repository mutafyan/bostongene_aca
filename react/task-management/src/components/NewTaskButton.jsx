import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const NewTaskButton = ({ onAdd }) => {
  return (
    <Button type="primary" icon={<PlusOutlined />} onClick={onAdd}>
      New Task
    </Button>
  );
};
export default NewTaskButton;
