
<template>
  <div class="start-page">
		
    <div class="wrap">
      <form>
        <h2>Sign In</h2>
        <div class="form__item">
          <input
            id="user-login"
            type="text"
            class="form-input"
            required
            name="uname"
            placeholder="Login"
          />
        </div>
        <div class="form__item">
          <input
            id="user-password"
            type="password"
            class="form-input"
            required
            name="psw"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          class="form__btn btn btn-white"
          id="button-sign-in"
        >
          Sign In
        </button>
      </form>
      <div class="register-now">
        <p>
          Not registeret yet?<router-link
            class="register-link"
            to="/registration"
            >Register now</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "StartPage",

	computed: mapState({
		
	}),
};
</script>

<style  lang="scss">
.start-page {
  .wrap {
    flex-direction: column;
    margin-top: 10%;

    form {
      padding: 20px;
      font-size: 20px;
      box-shadow: 0 0 5px rgb(0 0 0 / 50%);
      border-radius: 10px;

      h2 {
        text-align: center;
      }

      .form__item {
        padding: 10px 2px 5px 2px;
        border-bottom: 1px solid #cbcbcb;
      }

      #button-sign-in {
        width: 100%;
        margin-top: 20px;
        padding: 10px;
        background-color: #fff;
        color: #397db4;
        border: 1px solid #397db4;
      }
    }
    .register-now {
      p {
        display: flex;
        margin-top: 20px;

        .register-link {
          margin-left: 5px;
          color: #397db4;
        }
      }
    }
  }
}
</style>