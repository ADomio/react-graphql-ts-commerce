import React from 'react';
import { Spinner } from 'reactstrap';

import { concatClasses } from '../../../utils/helpers';
import styles from '../Auth.module.css';
import { IAuthSignupForm } from '../../../types';

const SignupForm = ({
  isLogin,
  hideForm,
  errors,
  email,
  password,
  firstname,
  lastname,
  error,
  changeHandler,
  blurHandler,
  signupSubmitHanlder,
  loading,
}: IAuthSignupForm) => {
  const submbitValue = loading ? <Spinner size="sm" /> : 'Register';

  return (
    <form onSubmit={signupSubmitHanlder} style={isLogin ? hideForm : {}}>
      <h2
        className={concatClasses(
          styles.fadeIn,
          styles.first,
          styles.formTitle
        )}>
        Signup
      </h2>
      <input
        type="text"
        className={concatClasses(styles.fadeIn, styles.second)}
        name="firstname"
        placeholder="First name"
        value={firstname}
        onChange={changeHandler}
        onBlur={blurHandler}
        required
      />
      {errors.firstname && (
        <p className="alert firstname-error alert-danger">{errors.firstname}</p>
      )}
      <input
        type="text"
        className={concatClasses(styles.fadeIn, styles.second)}
        name="lastname"
        value={lastname}
        placeholder="Last name"
        onChange={changeHandler}
        onBlur={blurHandler}
        required
      />
      {errors.lastname && (
        <p className="alert lastname-error alert-danger">{errors.lastname}</p>
      )}
      <input
        type="text"
        className={concatClasses(styles.fadeIn, styles.third)}
        name="email"
        placeholder="Email address"
        onChange={changeHandler}
        onBlur={blurHandler}
        value={email}
        required
      />
      {errors.email && (
        <p className="alert email-error alert-danger">{errors.email}</p>
      )}
      <input
        type="password"
        className={concatClasses(styles.fadeIn, styles.third)}
        name="password"
        placeholder="Password"
        onChange={changeHandler}
        onBlur={blurHandler}
        value={password}
      />
      {errors.password && (
        <p className="alert password-error alert-danger">{errors.password}</p>
      )}
      <button
        type="submit"
        className={concatClasses(styles.fadeIn, styles.fourth)}
        disabled={loading}>
        {submbitValue}
      </button>
      {error && <p className="alert alert-danger">{error}</p>}
    </form>
  );
};

export default SignupForm;
