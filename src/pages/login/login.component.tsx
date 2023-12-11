import { Button, Card, Form, Input } from "antd";
import { useLoginStyles } from "../login/login.style";
import { useCallback, useMemo } from "react";
import useLocalization from "../../assets/lang";
import { FormRule } from "antd";
import { useLogin } from "./actions/login.mutation";
import { ILoginFormValues } from "./login";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Routes } from "router/routes";
const LoginComponent = () => {
  const translate = useLocalization();
  const navigate = useNavigate();
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
    signInButton,
    signInButtonMobile,
    eyeIcon,
    subtitleSite,
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
    navigate(Routes.signup);
  }, [navigate]);

  return (
    <div className={`${page} d-flex justify-center align-center`}>
      <div className={panel}>
        <Card className={panelCard}>
          <div className="">
            <div className="text-center">
              <p className={subtitle}>
                {translate("login_subtitle")}
                <span className={subtitleSite}> {translate("login_site")}</span>
              </p>
              <h1 className={title}>{translate("login_title")}</h1>
            </div>
          </div>
          <Form
            name="login"
            initialValues={initialValues}
            onFinish={onSubmit}
            layout="vertical"
          >
            <Button
              className={`${signButon} ${signUpButtonColor} ${signInButtonMobile} w-100`}
              type="link"
              htmlType="button"
              onClick={handleSignUp}
            >
              {translate("sign_up_button")}
            </Button>
            <Form.Item
              rules={rules.email}
              name="email"
              label={
                <span className={inputLabel}>{translate("userEmail")}</span>
              }
            >
              <Input
                className={inputClass}
                placeholder={translate("enterEmail")}
              />
            </Form.Item>
            <Form.Item
              className={marginNone}
              rules={rules.password}
              name="password"
              label={
                <span className={inputLabel}>{translate("password")}</span>
              }
            >
              <Input
                type="password"
                className={inputClass}
                placeholder="Your Password"
              />
            </Form.Item>
            <span className={eyeIcon}>
              <MdOutlineRemoveRedEye />
            </span>
            <div className="text-right">
              <Link to={Routes.default} className={forgotClass}>
                {translate("forgotPass")}
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
              <span className={orClass}> {translate("or")} </span>
              <Button
                className={`${signButon} ${signUpButtonColor} ${signInButton} w-100`}
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


