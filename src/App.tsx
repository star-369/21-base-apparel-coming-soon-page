import { useForm } from "react-hook-form";
import Logo from "./assets/images/logo.svg";
import ArrowIcon from "./assets/images/icon-arrow.svg";
import DangerIcon from "./assets/images/icon-error.svg";
type Input = {
  email: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <main className="form-page">
        <header className="form-page__header">
          <img src={Logo} alt="Base Apparel Logo" />
        </header>
        <section className="form-page__illustration"></section>
        <section className="form-page__content">
          <h1>
            <p>WE'RE</p> COMING SOON
          </h1>
          <p className="form-page__content__description">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="se@gmail.com"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <button type="submit">
              <img src={ArrowIcon} alt="arrow icon" />
            </button>
            {errors.email && (
              <label htmlFor="email">{errors.email.message}</label>
            )}
            {errors.email && <img src={DangerIcon} className="danger-icon" />}
          </form>
        </section>
      </main>
    </>
  );
}
