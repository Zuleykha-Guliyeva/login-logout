import { Button, Card, Form, Input } from "antd";
import { useLoginStyles } from "../login/login.style";
import { useCallback, useMemo } from "react";
import useLocalization from "../../assets/lang";
import { FormRule } from "antd";
import { useLogin } from "./actions/login.mutation";
import { ILoginFormValues } from "./login";
import { Link, useNavigate } from "react-router-dom";
const LoginComponent = () => {
  const translate = useLocalization();
  const navigate =useNavigate();
  const { mutate, isLoading } = useLogin();

  const {
    title,
    page,
    panel,
    panelCard,
    subtitle,
    inputLabel,
    inputClass,
    signButon,
    forgotClass,
    orClass,
    marginNone,
    signUpButtonColor,
  } = useLoginStyles();
  const initialValues: ILoginFormValues = {
    email: "",
    password: "",
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
    (values: ILoginFormValues) => {
      mutate(values);
    },
    [mutate]
  );

  const handleSignUp = useCallback(() => {
    navigate('/auth/signup');
    console.log('jewhwehjwehwhhwf');
    
  }, [navigate]);

  return (
    <div className={`${page} d-flex justify-center align-center`}>
      <div className={panel}>
        <Card className={panelCard}>
          <div className="">
            <div className="text-center">
              <p className={subtitle}>{translate("login_subtitle")}</p>
              <h1 className={title}>{translate("login_title")}</h1>
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
            <div style={{ textAlign: "right" }}>
              <Link to="/" className={forgotClass}>
                Forgot Password
              </Link>
            </div>
            <div>
              <Button
                loading={isLoading}
                className={`${signButon} w-100`}
                htmlType="submit"
              >
                {translate("login_sign_in_button")}
              </Button>
              <span className={orClass}> OR </span>
              <Button
                className={`${signButon} ${signUpButtonColor} w-100`}
                type="link"
                htmlType="button"
                onClick={handleSignUp}
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
