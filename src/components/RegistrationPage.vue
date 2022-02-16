<template>
  <div class="registration">
    <div class="wrap">
      <form>
        <h2>Sign Up</h2>
        <div class="form-wrap">
          <div class="form-inner">
            <div class="form__item">
              <input
                id="user-name"
                type="text"
                class="form-name"
                required
                name="uname"
                placeholder="Name"
              />
            </div>
            <div class="form__item">
              <input
                id="user-email"
                type="email"
                class="form-email"
                required
                name="mail"
                placeholder="Email"
              />
            </div>
            <div class="form__item">
              <input
                id="user-birthday"
                type="data"
                class="form-birthday"
                required
                name="birth"
                placeholder="Birthday"
              />
            </div>
            <div class="form__item">
              <input
                id="user-login"
                type="text"
                class="form-login"
                required
                name="log"
                placeholder="Login"
              />
            </div>
          </div>
          <div class="form-inner">
            <div class="form__item">
              <input
                id="user-surname"
                type="text"
                class="form-surname"
                required
                name="sur"
                placeholder="Surname"
              />
            </div>
            <div class="form__item">
              <input
                id="user-phone"
                type="tel"
                class="form-phone"
                required
                name="phon"
                placeholder="Phone"
              />
            </div>
            <div class="form__item">
              <input
                id="user-gender"
                type="text"
                class="form-gender"
                required
                name="gend"
                placeholder="Gender"
              />
            </div>
            <div class="form__item">
              <input
                id="user-password"
                type="password"
                class="form-password"
                required
                name="pas"
                placeholder="Password"
              />
            </div>
          </div>
        </div>
        <button type="submit" class="form__btn" id="button-sign-up">
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistrationPage",
};
</script>

<style lang="scss">
.registration {
  #button-sign-up {
    width: 100%;
    margin-top: 20px;
    padding: 10px;
    background-color: #fff;
    color: #397db4;
    border: 1px solid #397db4;
  }
  .wrap {
    margin-top: 15%;
    justify-content: center;

    form {
      display: flex;
      flex-direction: column;
      padding: 20px;
      font-size: 20px;
      box-shadow: 0 0 5px rgb(0 0 0 / 50%);
      border-radius: 10px;

      h2 {
        text-align: center;
				margin-bottom: 10px;
      }

      .form-wrap {
        display: flex;
        justify-content: space-between;

        .form-inner {
          margin-right: 20px;
        }

        .form-inner:last-child {
          margin-right: 0;
        }

        .form__item {
          padding: 10px 2px 5px 2px;
          border-bottom: 1px solid #cbcbcb;
        }
      }
    }
  }
}
</style>