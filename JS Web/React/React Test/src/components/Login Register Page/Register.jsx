import styles from "./Register.module.css";

export default function Register() {
  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img src="https://i.ibb.co/gwhH2xn/test.png" alt="Background" />
      </div>
      <div className={styles.loginSection}>
        <form className={styles.loginForm}>
          <h2>Account Register</h2>
                <div className="input-group">
                    <input type="email" name="floating_email" id="floating_email" className="input-field" placeholder=" " required />
                    <label htmlFor="floating_email" className="input-label">Email address</label>
                </div>
                <div className="input-group">
                    <input type="password" name="floating_password" id="floating_password" className="input-field" placeholder=" " required />
                    <label htmlFor="floating_password" className="input-label">Password</label>
                </div>
                <div className="input-group">
                    <input type="password" name="repeat_password" id="floating_repeat_password" className="input-field" placeholder=" " required />
                    <label htmlFor="floating_repeat_password" className="input-label">Confirm password</label>
                </div>
                <div className="input-group-container">
                    <div className="input-group">
                        <input type="text" name="floating_first_name" id="floating_first_name" className="input-field" placeholder=" " required />
                        <label htmlFor="floating_first_name" className="input-label">First name</label>
                    </div>
                    <div className="input-group">
                        <input type="text" name="floating_last_name" id="floating_last_name" className="input-field" placeholder=" " required />
                        <label htmlFor="floating_last_name" className="input-label">Last name</label>
                    </div>
                </div>
                <div className="input-group-container">
                    <div className="input-group">
                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="input-field" placeholder=" " required />
                        <label htmlFor="floating_phone" className="input-label">Phone number (123-456-7890)</label>
                    </div>
                    <div className="input-group">
                        <input type="text" name="floating_company" id="floating_company" className="input-field" placeholder=" " required />
                        <label htmlFor="floating_company" className="input-label">Company (Ex. Google)</label>
                    </div>
                </div>
          <button type="submit" className={styles.button}>
            Sign Up
          </button>
          <a href="#" className={styles.forgotLink}>
            Forgot User name / password?
          </a>
          <a href="/login" className={styles.signupLink}>
            Sign In
          </a>
        </form>
      </div>
    </div>
    </div>
  );
}

// https://i.ibb.co/gwhH2xn/test.png