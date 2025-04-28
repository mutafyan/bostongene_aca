import { useEffect } from "react";
import { Modal, Form, Input, Select, DatePicker, Button } from "antd";
import { DeleteOutlined, SaveOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { statuses, priorities, mockUsers as users } from "../constants";

const TaskModal = ({ task, onSave, onDelete, onClose }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      ...task,
      dueDate: dayjs(task.dueDate),
    });
  }, [task, form]);

  const handleOk = () => {
    form.validateFields().then((values) => {
      onSave({
        ...task,
        ...values,
        dueDate: values.dueDate.format("YYYY-MM-DD"),
      });
      form.resetFields();
    });
  };

  return (
    <Modal
      open
      title="Edit Task"
      onCancel={onClose}
      footer={[
        <Button
          key="delete"
          danger
          icon={<DeleteOutlined />}
          onClick={() => onDelete(task.id)}
        >
          Delete
        </Button>,
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button
          key="save"
          type="primary"
          icon={<SaveOutlined />}
          onClick={handleOk}
        >
          Save
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="status" label="Status">
          <Select options={statuses} />
        </Form.Item>
        <Form.Item name="priority" label="Priority">
          <Select options={priorities} />
        </Form.Item>
        <Form.Item name="dueDate" label="Due Date">
          <DatePicker />
        </Form.Item>
        <Form.Item name="assignees" label="Assignees">
          <Select
            mode="multiple"
            placeholder="Select users"
            options={users.map((user) => ({
              value: user.id,
              label: (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    style={{ width: 24, height: 24, borderRadius: "50%" }}
                  />
                  {user.name}
                </div>
              ),
            }))}
            optionLabelProp="label"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default TaskModal;
