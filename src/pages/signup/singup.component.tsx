import { Button, Card, Form, Input } from "antd";
import { useLoginStyles } from "../login/login.style";
import { useCallback, useMemo } from "react";
import useLocalization from "../../assets/lang";
import { FormRule } from "antd";
import { useSignupStyles } from "./signup.style";
import { ISignupFormValues } from "./signup";
import { Link } from "react-router-dom";
import { useSignup } from "./actions/signup.mutation";
const LoginComponent = () => {
  const translate = useLocalization();
  //   const navigate = useNavigate();
  const { mutate, isLoading } = useSignup();
  const {
    title,
    subtitle,
    sigupMarginTop,
    accountSign,
    accountSpan,
    inputLabel,
  } = useSignupStyles();
  const {
    page,
    panel,
    panelCard,
    inputClass,
    signButon,
    marginNone,
    inputClass50,
  } = useLoginStyles();

  const initialValues: ISignupFormValues = {
    email: "",
    password: "",
    username: "",
    phone: ""
  };

  const rules: { [key: string]: FormRule[] } = useMemo(
    () => ({
      email: [
        {
          required: true,
          message: translate("input_required"),
        },
        {
          // add a pattern for email regex
          pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          message: translate("email_invalid"),
        },
      ],
      username: [
        {
          required: true,
          message: translate("input_required"),
        },
      ],
      phone: [
        {
          required: true,
          message: translate("input_required"),
        },
      ],
      password: [
        {
          required: true,
          message: translate("input_required"),
        },
      ],
    }),
    [translate]
  );

  const onSubmit = useCallback(
    (values: ISignupFormValues) => {
      mutate(values);
    },
    [mutate]
  );

  return (
    <div className={`${page} d-flex justify-center align-center`}>
      <div className={panel}>
        <Card className={panelCard}>
          <div className="d-flex justify-between">
            <div className="text-left">
              <p className={subtitle}>{translate("login_subtitle")}</p>
              <h1 className={title}>{translate("sign_title")}</h1>
            </div>
            <div className="text-left">
              <span className={accountSpan}>Have an Account ?</span>
              <Link to="/auth/login" className={accountSign}>
                Sign in
              </Link>
            </div>
          </div>
          <Form
            name="login"
            initialValues={initialValues}
            onFinish={onSubmit}
            layout="vertical"
          >
            <Form.Item
              rules={rules.email}
              name="email"
              label={
                <span className={inputLabel}>
                  Enter your username or email address
                </span>
              }
            >
              <Input
                className={inputClass}
                placeholder="Enter your username or email address"
              />
            </Form.Item>
            <Form.Item style={{}}>
              <Form.Item
                rules={rules.username}
                name="username"
                label={<span className={inputLabel}>User name</span>}
                style={{
                  display: "inline-block",
                  width: "calc(50% - 10px)",
                  marginRight: "19px",
                }}
              >
                <Input className={inputClass50} placeholder="User name"></Input>
              </Form.Item>
              <Form.Item
                rules={rules.phone}
                name="phone"
                label={<span className={inputLabel}>Contact Number</span>}
                style={{ display: "inline-block", width: "calc(50% - 10px)" }}
              >
                <Input
                  className={inputClass50}
                  placeholder="Contact Number"
                ></Input>
              </Form.Item>
            </Form.Item>
            <Form.Item
              className={marginNone}
              rules={rules.password}
              name="password"
              label={<span className={inputLabel}>Enter your Password</span>}
            >
              <Input
                type="password"
                className={inputClass}
                placeholder="Your Password"
              />
            </Form.Item>
            <div>
              <Button
                loading={isLoading}
                className={`${signButon} ${sigupMarginTop} w-100`}
                htmlType="submit"
              >
                {translate("sign_up_button")}
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default LoginComponent;



