import { useCallback, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Title } from "../components/Title";
import { StoreContext } from "../context/StoreContext";
import "../css/user.css";
import { notificationMessage } from "../helpers/notificationMessage";
import userService from "../services/user";

interface IUser {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const [value, setValue] = useState<IUser>({
    email: "test@test.com",
    password: "123456",
  });

  const [loading, setLoading] = useState(false)
  const {t} = useTranslation()

  const {loginUser} = useContext(StoreContext)

  const { email, password } = value;

  const handlenChangeLogin = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue({
        ...value,
        [e.target.name]: e.target.value,
      });
    },
    [value]
  );

  const handlenSubmitLogin = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true)
      const user = await userService.loginUser(email, password);

      setLoading(false)
      if (user?.message) {
        return notificationMessage("Error", user.message, "danger");
      }
      if (user) {
          localStorage.setItem('TOKEN' ,  user.token!  )
          loginUser({
            name : user.name,
            id : user.id
          })
          
        }
        setLoading(false)
      setValue({
        email: "",
        password: "",
      });
    },

    [email, password , loginUser ]
  );

  return (
    <>
      <Title
        title={t("signIn")}
        subTitle={t("withEmailAndPassword")}
      />

      <div className="cont-form-user">
        <form className="form-user" onSubmit={handlenSubmitLogin}>
          <input
            className="input"
            type="text"
            name="email"
            value={email}
            placeholder={t('email')}
            autoComplete="off"
            autoFocus
            onChange={handlenChangeLogin}
          />

          <input
            className="input"
            type="password"
            name="password"
            value={password}
            placeholder={t('password')}
            autoComplete="off"
            onChange={handlenChangeLogin}
          />

          <button 
          className={`${loading ? 'btn disable' : 'btn'}`}
          disabled = {loading}
          >{loading ? t('wait') : 'login'}</button>
        </form>
      </div>
    </>
  );
};
